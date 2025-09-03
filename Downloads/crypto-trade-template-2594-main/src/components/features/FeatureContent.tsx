import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface FeatureContentProps {
  image: string;
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center"
    >
      <div className="glass rounded-xl overflow-hidden w-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <OptimizedImage
          src={image}
          alt={`${title} - Trading platform feature demonstration`}
          className="w-full h-full object-contain relative z-10"
          loadingText="Loading feature preview..."
          errorText="Feature preview unavailable"
        />
      </div>
    </motion.div>
  );
};