const CACHE_NAME = 'daraz-affiliate-guide-v2';
const STATIC_CACHE = 'daraz-affiliate-guide-static-v2';
const DYNAMIC_CACHE = 'daraz-affiliate-guide-dynamic-v2';
const IMAGE_CACHE = 'daraz-affiliate-guide-images-v2';

// Critical assets that should be cached immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/logo.svg',
  '/header_image.webp',
  '/offline.html',
  // Critical JS and CSS files will be added dynamically
];

// External resources that should be cached
const EXTERNAL_RESOURCES = [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2',
  'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2',
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Caching external resources');
        return caches.open(IMAGE_CACHE).then(cache => cache.addAll(EXTERNAL_RESOURCES));
      })
      .then(() => {
        // Cache all JS/CSS assets dynamically
        return caches.open(STATIC_CACHE).then(cache => {
          return self.clients.matchAll().then(clients => {
            if (clients.length > 0) {
              const client = clients[0];
              return client.url;
            }
            return null;
          }).then(clientUrl => {
            if (clientUrl) {
              const baseUrl = new URL(clientUrl).origin;
              const assetUrls = [
                `${baseUrl}/src/main.tsx`,
                `${baseUrl}/src/App.tsx`,
                `${baseUrl}/src/pages/Home.tsx`,
                `${baseUrl}/src/index.css`,
                `${baseUrl}/src/components/OfflineIndicator.tsx`,
                `${baseUrl}/src/components/PWAInstallButton.tsx`,
                `${baseUrl}/src/hooks/usePWA.ts`
              ];
              
              // Try to cache each asset, but don't fail if some are missing
              const cachePromises = assetUrls.map(url => 
                fetch(url).then(response => {
                  if (response.ok) {
                    return cache.put(url, response);
                  }
                  return Promise.resolve();
                }).catch(() => Promise.resolve())
              );
              
              return Promise.all(cachePromises);
            }
          });
        });
      })
      .then(() => self.skipWaiting())
      .catch(error => {
        console.error('Service Worker: Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE &&
              cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement comprehensive caching strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (url.origin === self.location.origin) {
    // Same origin requests
    if (url.pathname === '/') {
      // Always serve root from cache first
      event.respondWith(cacheFirst(request, STATIC_CACHE));
    } else if (url.pathname.includes('/header_image.webp') || 
               url.pathname.includes('/logo.svg') || 
               url.pathname.includes('/favicon.svg')) {
      // Images - cache first strategy
      event.respondWith(cacheFirst(request, IMAGE_CACHE));
    } else if (url.pathname.endsWith('.js') || 
               url.pathname.endsWith('.css') || 
               url.pathname.endsWith('.woff2') ||
               url.pathname.endsWith('.woff')) {
      // Static assets - cache first strategy
      event.respondWith(cacheFirst(request, STATIC_CACHE));
    } else {
      // Dynamic content - network first with cache fallback
      event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    }
  } else if (url.origin.includes('fonts.googleapis.com') || 
             url.origin.includes('fonts.gstatic.com')) {
    // Google Fonts - cache first strategy
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
  } else if (url.origin.includes('cloudfront.net') || 
             url.hostname.includes('daraz')) {
    // External images - stale while revalidate
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
  } else {
    // Other external requests - network only
    event.respondWith(fetch(request));
  }
});

// Cache first strategy
function cacheFirst(request, cacheName) {
  return caches.match(cacheName).then(cache => {
    return cache.match(request).then(response => {
      if (response) {
        return response;
      }
      
      // Not in cache, fetch from network
      return fetch(request).then(response => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Clone the response and cache it
        const responseToCache = response.clone();
        caches.open(cacheName).then(cache => {
          cache.put(request, responseToCache);
        });
        
        return response;
      }).catch(() => {
        // Network failed, try to serve offline fallback
        return getOfflineFallback(request);
      });
    });
  });
}

// Network first strategy
function networkFirst(request, cacheName) {
  return fetch(request).then(response => {
    // Don't cache non-successful responses
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }
    
    // Clone the response and cache it
    const responseToCache = response.clone();
    caches.open(cacheName).then(cache => {
      cache.put(request, responseToCache);
    });
    
    return response;
  }).catch(() => {
    // Network failed, try cache
    return caches.match(request).then(response => {
      if (response) {
        return response;
      }
      return getOfflineFallback(request);
    });
  });
}

// Stale while revalidate strategy
function staleWhileRevalidate(request, cacheName) {
  const cachedResponsePromise = caches.match(request);
  
  const networkPromise = fetch(request).then(response => {
    if (response && response.status === 200) {
      const responseToCache = response.clone();
      caches.open(cacheName).then(cache => {
        cache.put(request, responseToCache);
      });
    }
    return response;
  });
  
  return cachedResponsePromise.then(cachedResponse => {
    if (cachedResponse) {
      // Return cached version immediately, but also fetch in background
      networkPromise.catch(() => {}); // Prevent unhandled promise rejection
      return cachedResponse;
    }
    return networkPromise;
  });
}

// Offline fallback
function getOfflineFallback(request) {
  const url = new URL(request.url);
  
  // Return offline page for navigation requests
  if (request.mode === 'navigate') {
    return caches.match('/offline.html').then(response => {
      if (response) {
        return response;
      }
      // Fallback to index.html if offline.html is not cached
      return caches.match('/index.html').then(response => {
        if (response) {
          return response;
        }
        // Return a basic offline response as last resort
        return new Response(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Offline - Daraz Affiliate Guide</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f5f5f5; }
                .offline-icon { font-size: 64px; margin-bottom: 20px; }
                h1 { color: #333; margin-bottom: 20px; }
                p { color: #666; margin-bottom: 30px; }
                .btn { background: #FF6B35; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; }
              </style>
            </head>
            <body>
              <div class="offline-icon">📱</div>
              <h1>You're Offline</h1>
              <p>The Daraz Affiliate Guide is not available without an internet connection.</p>
              <button class="btn" onclick="window.location.reload()">Try Again</button>
            </body>
          </html>
        `, {
          status: 200,
          statusText: 'OK',
          headers: new Headers({
            'Content-Type': 'text/html'
          })
        });
      });
    });
  }
  
  // For image requests, return a placeholder
  if (request.destination === 'image') {
    return new Response(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#f0f0f0"/>
        <text x="200" y="150" text-anchor="middle" font-family="Arial" font-size="16" fill="#666">
          Image unavailable offline
        </text>
      </svg>
    `, {
      status: 200,
      statusText: 'OK',
      headers: new Headers({
        'Content-Type': 'image/svg+xml'
      })
    });
  }
  
  // For other requests, return appropriate error
  return new Response('Offline - Resource not available', {
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// Background sync for offline actions
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync triggered', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle any pending offline actions here
      console.log('Service Worker: Processing background sync')
    );
  }
});

// Push notification handler
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update available for Daraz Affiliate Guide',
    icon: '/logo.svg',
    badge: '/favicon.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/logo.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/logo.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Daraz Affiliate Guide', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification click received');
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handler for communication with app
self.addEventListener('message', event => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
