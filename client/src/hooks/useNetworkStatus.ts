import { useState, useEffect } from 'react';

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState('unknown');
  const [offlineSince, setOfflineSince] = useState<Date | null>(null);

  useEffect(() => {
    const updateConnectionStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);
      
      if (!online && !offlineSince) {
        setOfflineSince(new Date());
      } else if (online && offlineSince) {
        setOfflineSince(null);
      }

      // Get connection type if available
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          setConnectionType(connection.effectiveType || 'unknown');
        }
      }
    };

    const handleOnline = () => {
      console.log('Network: Connection restored');
      updateConnectionStatus();
    };

    const handleOffline = () => {
      console.log('Network: Connection lost');
      updateConnectionStatus();
    };

    // Listen for network changes
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Listen for connection changes (if available)
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        connection.addEventListener('change', updateConnectionStatus);
      }
    }

    // Initial check
    updateConnectionStatus();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          connection.removeEventListener('change', updateConnectionStatus);
        }
      }
    };
  }, [offlineSince]);

  const getOfflineDuration = () => {
    if (!offlineSince) return null;
    const now = new Date();
    const diff = now.getTime() - offlineSince.getTime();
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  return {
    isOnline,
    connectionType,
    offlineSince,
    offlineDuration: getOfflineDuration(),
    isSlowConnection: connectionType === 'slow-2g' || connectionType === '2g',
    isFastConnection: connectionType === '4g' || connectionType === '5g'
  };
};
