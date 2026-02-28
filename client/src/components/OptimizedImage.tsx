import { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazy?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
}

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  lazy = true,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  placeholder = 'blur'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  // Generate responsive image URLs (assuming CDN support)
  const generateSrcSet = (originalSrc: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(w => `${originalSrc}?w=${w} ${w}w`)
      .join(', ');
  };

  // Generate low-quality placeholder
  const generatePlaceholderSrc = (originalSrc: string) => {
    return `${originalSrc}?w=20&blur=20&format=webp`;
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Placeholder skeleton */}
      {!isLoaded && placeholder === 'blur' && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}

      {/* Low quality image placeholder */}
      {placeholder === 'blur' && !isLoaded && isInView && !error && (
        <img
          src={generatePlaceholderSrc(src)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-xl scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {isInView && (
        <img
          src={src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <div className="text-center p-4">
            <div className="text-2xl mb-2">🖼️</div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};
