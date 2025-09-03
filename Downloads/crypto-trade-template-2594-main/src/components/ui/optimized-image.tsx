import { cn } from "@/lib/utils";
import { useImageLoader } from "@/hooks/use-image-loader";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  loadingText?: string;
  errorText?: string;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  fallbackClassName = "bg-gradient-to-r from-gray-800 to-gray-700",
  loadingText = "Loading...",
  errorText = "Image unavailable",
  priority = false,
}: OptimizedImageProps) => {
  const { loaded: imageLoaded, error: imageError, loading } = useImageLoader({ src, priority });

  return (
    <div className="relative">
      {loading && (
        <div className={cn(
          "absolute inset-0 shimmer rounded-xl flex items-center justify-center",
          fallbackClassName
        )}>
          <div className="text-gray-400 text-sm animate-pulse">{loadingText}</div>
        </div>
      )}
      
      {imageError && (
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r from-red-900/20 to-gray-800 rounded-xl flex items-center justify-center",
          fallbackClassName
        )}>
          <div className="text-gray-400 text-sm">{errorText}</div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          imageLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
};