
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Download, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const LanguageSwitcher = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    navigate(`/${newLanguage}`, { replace: true });
  };

  return (
    <div className="fixed top-4 w-full flex justify-between px-4 z-50">
      <div></div>
      
      <div></div>
    </div>
  );
};

export default LanguageSwitcher;
