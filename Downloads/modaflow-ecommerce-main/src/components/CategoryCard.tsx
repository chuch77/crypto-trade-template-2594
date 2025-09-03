import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const CategoryCard = ({ id, name, description, image }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={`Categoría ${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-poppins font-semibold mb-2">{name}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <Button 
          asChild 
          variant="secondary" 
          className="bg-white/90 text-gray-900 hover:bg-white group-hover:translate-y-0 translate-y-2 transition-transform duration-300"
        >
          <Link to={`/${id}`}>Ver categoría</Link>
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;