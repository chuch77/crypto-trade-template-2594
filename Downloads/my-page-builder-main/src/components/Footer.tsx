import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-bg text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">ElectroZone</h3>
            <p className="text-gray-300">
              Your trusted destination for the latest and greatest in technology. 
              Quality products, fast shipping, secure payments.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Phones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Audio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Smart Home</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>1234 Tech Street</p>
              <p>Silicon Valley, CA 94000</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@electrozone.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 ElectroZone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;