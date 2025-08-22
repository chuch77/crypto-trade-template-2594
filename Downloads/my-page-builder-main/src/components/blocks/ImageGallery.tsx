import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import iphoneProduct from "@/assets/iphone-product.jpg";
import macbookProduct from "@/assets/macbook-product.jpg";
import headphonesProduct from "@/assets/headphones-product.jpg";
import iphoneHero from "@/assets/iphone-hero.jpg";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ImageGalleryProps {
  variant?: "grid" | "masonry" | "carousel";
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
  columns?: 2 | 3 | 4;
  gap?: "small" | "medium" | "large";
}

const ImageGallery = ({ 
  variant = "grid", 
  title = "Galería de imágenes", 
  subtitle = "Explora nuestra colección de imágenes",
  images,
  columns = 3,
  gap = "medium"
}: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const defaultImages: GalleryImage[] = [
    { id: 1, src: iphoneProduct, alt: "Imagen 1" },
    { id: 2, src: macbookProduct, alt: "Imagen 2" },
    { id: 3, src: headphonesProduct, alt: "Imagen 3" },
    { id: 4, src: iphoneHero, alt: "Imagen 4" },
    { id: 5, src: iphoneProduct, alt: "Imagen 5" },
    { id: 6, src: macbookProduct, alt: "Imagen 6" },
    { id: 7, src: headphonesProduct, alt: "Imagen 7" },
    { id: 8, src: iphoneHero, alt: "Imagen 8" },
    { id: 9, src: iphoneProduct, alt: "Imagen 9" }
  ];
  
  const galleryImages = images || defaultImages;
  
  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentSlide(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const nextImage = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentSlide + 1) % galleryImages.length]);
  };
  
  const prevImage = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentSlide - 1 + galleryImages.length) % galleryImages.length]);
  };
  
  const getGapClass = () => {
    switch (gap) {
      case "small": return "gap-2";
      case "large": return "gap-8";
      default: return "gap-4";
    }
  };
  
  const getColumnsClass = () => {
    switch (columns) {
      case 2: return "md:grid-cols-2";
      case 4: return "md:grid-cols-2 lg:grid-cols-4";
      default: return "md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
        )}
        
        {variant === "grid" && (
          <div className={`grid grid-cols-1 ${getColumnsClass()} ${getGapClass()}`}>
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(image, index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}
        
        {variant === "masonry" && (
          <div className={`columns-1 ${
            columns === 2 ? 'md:columns-2' : 
            columns === 4 ? 'md:columns-2 lg:columns-4' : 
            'md:columns-2 lg:columns-3'
          } ${getGapClass()}`}>
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`break-inside-avoid mb-4 ${gap === "small" ? "mb-2" : gap === "large" ? "mb-8" : "mb-4"} overflow-hidden rounded-lg cursor-pointer group`}
                onClick={() => openLightbox(image, index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}
        
        {variant === "carousel" && (
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className="w-full flex-shrink-0 px-2"
                    onClick={() => openLightbox(image, index)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-96 object-cover rounded-lg cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-4' : 'bg-gray-300'}`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-6xl bg-black/90 border-none p-0">
            <div className="relative w-full h-full flex items-center justify-center">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full z-20 hover:bg-black/70"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-20 hover:bg-black/70"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-20 hover:bg-black/70"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
              
              {selectedImage && (
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-sm">{currentSlide + 1} / {galleryImages.length}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ImageGallery;