import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-8 sm:py-12 mt-12 sm:mt-16 lg:mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-lg sm:rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-medium text-base sm:text-lg">CryptoTrade</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Empowering traders with advanced crypto trading solutions.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-medium text-sm sm:text-base">Trading</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 py-0.5">
                    Markets
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 py-0.5">
                    Trading Fees
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-medium text-sm sm:text-base">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 py-0.5">
                    Trading Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 py-0.5">
                    Market Analysis
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-medium text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 py-0.5">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-sm px-1 py-0.5">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Rezaul Arif. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;