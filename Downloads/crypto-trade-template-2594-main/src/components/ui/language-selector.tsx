import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setLanguage(lang.code as any);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="glass-hover px-3 py-2 h-auto"
          aria-label={`Current language: ${selectedLanguage.name}. Click to change language`}
        >
          <span className="text-lg mr-1" aria-hidden="true">{selectedLanguage.flag}</span>
          <ChevronDown className="w-3 h-3 ml-1" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="glass border-white/10 bg-[#1B1B1B]/90 backdrop-blur-xl"
        role="menu"
        aria-label="Language selection menu"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="cursor-pointer hover:bg-white/10 focus:bg-white/10"
            role="menuitem"
          >
            <span className="text-lg mr-2" aria-hidden="true">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};