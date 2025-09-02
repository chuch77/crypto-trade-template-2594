
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
              <div className="flex justify-center">
                <a href="mailto:chuchdios7@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  chuchdios7@gmail.com
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
