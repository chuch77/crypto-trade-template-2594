
import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactInfo = () => {
  const { t } = useLanguage();
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">
            {t('contact.title')}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="flex justify-center">
          {/* Jesus Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-700 max-w-sm sm:max-w-md mx-auto">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/yo.png"
                alt="Jesús Eliud Soto Méndez"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-3 sm:mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t('contact.name')}</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{t('contact.role')}</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:chuchdios7@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  chuchdios7@gmail.com
                </a>
                <a href="https://github.com/chuch77" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub: chuch77
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
