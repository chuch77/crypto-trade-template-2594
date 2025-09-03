import { useState, useEffect } from 'react';

interface UseImageLoaderProps {
  src: string;
  priority?: boolean;
}

export const useImageLoader = ({ src, priority = false }: UseImageLoaderProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setError(true);
      setLoading(false);
      return;
    }

    const img = new Image();
    
    const handleLoad = () => {
      setLoaded(true);
      setLoading(false);
      setError(false);
    };

    const handleError = () => {
      setError(true);
      setLoading(false);
      setLoaded(false);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    // Start loading the image
    img.src = src;

    // Cleanup
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  return { loaded, error, loading };
};