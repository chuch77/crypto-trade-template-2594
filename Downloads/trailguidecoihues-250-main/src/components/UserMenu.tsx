import React from 'react';
import { User, Eye, Heart, Bell, Settings, HelpCircle, LogOut, Building } from 'lucide-react';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: User, label: 'Mi cuenta', onClick: () => {} },
    { icon: Eye, label: 'Vistos recientem...', onClick: () => {} },
    { icon: Heart, label: 'Favoritos', onClick: () => {} },
    { icon: Bell, label: 'Notificaciones', onClick: () => {} },
    { icon: Settings, label: 'Preferencias de b...', onClick: () => {} },
    { icon: HelpCircle, label: 'Ayuda y soporte', onClick: () => {} },
    { icon: LogOut, label: 'Cerrar sesión', onClick: onLogout },
  ];

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
        <div className="py-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <item.icon className="h-4 w-4 mr-3 text-gray-500" />
              {item.label}
            </button>
          ))}
          
          <div className="border-t border-gray-200 mt-2 pt-2">
            <button className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Building className="h-4 w-4 mr-3 text-gray-500" />
              <div className="text-left">
                <div className="font-medium">trivago para</div>
                <div className="text-xs text-gray-500">hoteleros</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;