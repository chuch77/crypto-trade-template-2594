import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FavoritesDropdown = () => {
  return (
    <div>
      {/* Botón para redirigir a la página de inicio de sesión */}
      <Link 
        to="/login"
        className="flex flex-col items-center text-xs hover:text-primary"
      >
        <Heart className="h-5 w-5 mb-1" />
        <span>Favoritos</span>
      </Link>
    </div>
  );
};

export default FavoritesDropdown;