import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginDropdown = () => {
  return (
    <div>
      {/* Botón para redirigir a la página de inicio de sesión */}
      <Link 
        to="/login"
        className="flex flex-col items-center text-xs hover:text-primary"
      >
        <LogIn className="h-5 w-5 mb-1" />
        <span>Iniciar sesión</span>
      </Link>
    </div>
  );
};

export default LoginDropdown;