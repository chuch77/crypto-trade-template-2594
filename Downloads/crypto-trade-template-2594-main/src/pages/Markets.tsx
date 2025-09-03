import { motion } from "framer-motion";
import { ArrowLeft, Search, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const mockCryptos = [
  { symbol: "BTC", name: "Bitcoin", price: 43250.50, change: 2.45, volume: "28.5B", marketCap: "847B" },
  { symbol: "ETH", name: "Ethereum", price: 2580.75, change: -1.23, volume: "15.2B", marketCap: "310B" },
  { symbol: "BNB", name: "BNB", price: 315.20, change: 0.85, volume: "1.8B", marketCap: "48.5B" },
  { symbol: "SOL", name: "Solana", price: 98.45, change: 5.67, volume: "2.1B", marketCap: "42.8B" },
  { symbol: "ADA", name: "Cardano", price: 0.485, change: -2.15, volume: "890M", marketCap: "17.2B" },
  { symbol: "AVAX", name: "Avalanche", price: 36.80, change: 3.22, volume: "650M", marketCap: "13.5B" },
  { symbol: "DOT", name: "Polkadot", price: 7.25, change: -0.95, volume: "420M", marketCap: "9.8B" },
  { symbol: "MATIC", name: "Polygon", price: 0.825, change: 1.75, volume: "380M", marketCap: "7.6B" }
];

const Markets = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCryptos = mockCryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="container px-4 py-6 sm:py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('markets.backToHome')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-3 sm:mb-4 leading-tight">
            {t('markets.title')} <span className="text-gradient font-medium">{t('markets.titleHighlight')}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6">{t('markets.subtitle')}</p>
          
          <div className="relative w-full max-w-sm sm:max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('markets.searchPlaceholder')}
              className="pl-10 glass border-white/10 text-sm sm:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-2 sm:p-4 text-muted-foreground font-medium text-xs sm:text-sm">{t('markets.coin')}</th>
                    <th className="text-right p-2 sm:p-4 text-muted-foreground font-medium text-xs sm:text-sm">{t('markets.price')}</th>
                    <th className="text-right p-2 sm:p-4 text-muted-foreground font-medium text-xs sm:text-sm">{t('markets.change24h')}</th>
                    <th className="text-right p-2 sm:p-4 text-muted-foreground font-medium text-xs sm:text-sm hidden md:table-cell">{t('markets.volume')}</th>
                    <th className="text-right p-2 sm:p-4 text-muted-foreground font-medium text-xs sm:text-sm hidden lg:table-cell">{t('markets.marketCap')}</th>
                    <th className="text-center p-2 sm:p-4 text-muted-foreground font-medium text-xs sm:text-sm">{t('markets.action')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCryptos.map((crypto, index) => (
                    <motion.tr
                      key={crypto.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-2 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary to-green-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {crypto.symbol.slice(0, 2)}
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-sm sm:text-base truncate">{crypto.symbol}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block truncate">{crypto.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 sm:p-4 text-right font-mono text-xs sm:text-sm md:text-base">
                        ${crypto.price.toLocaleString()}
                      </td>
                      <td className="p-2 sm:p-4 text-right">
                        <div className={`flex items-center justify-end gap-1 text-xs sm:text-sm ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {crypto.change >= 0 ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
                          <span className="whitespace-nowrap">{crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%</span>
                        </div>
                      </td>
                      <td className="p-2 sm:p-4 text-right text-muted-foreground hidden md:table-cell text-xs sm:text-sm">
                        ${crypto.volume}
                      </td>
                      <td className="p-2 sm:p-4 text-right text-muted-foreground hidden lg:table-cell text-xs sm:text-sm">
                        ${crypto.marketCap}
                      </td>
                      <td className="p-2 sm:p-4 text-center">
                        <Button 
                          size="sm" 
                          className="button-gradient text-xs px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap"
                          onClick={() => navigate('/signup')}
                        >
                          {t('markets.trade')}
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Card className="glass border-white/10 p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{t('markets.ctaTitle')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{t('markets.ctaDescription')}</p>
            <Button 
              size="lg" 
              className="button-gradient px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              onClick={() => navigate('/signup')}
            >
              {t('markets.startTrading')}
            </Button>
          </Card>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Markets;