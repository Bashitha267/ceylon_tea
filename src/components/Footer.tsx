import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-green-300" />
              <h3 className="text-2xl font-bold font-serif">Ceylon Tea</h3>
            </div>
            <p className="text-green-200 leading-relaxed">
              Bringing you the finest Ceylon tea from the misty highlands of Sri Lanka since 1985.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-100">+94 </p>
                  <p className="text-green-100">+94 761486871</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-green-100">info@ceylontea.lk</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Address</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-green-100 leading-relaxed">
              
                Nuwara Eliya,<br />
                Sri Lanka 
              </p>
            </div>
          </div>

    
        </div>

        <div className="border-t border-green-700 pt-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Copyright Notice */}
    <p className="text-green-300 text-sm text-center md:text-left">
      © 2025 Ceylon Tea Collection. All rights reserved.
    </p>
    
    {/* Social Links or Policy Links */}
    <div className="flex space-x-6 text-sm text-green-300">
      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
    </div>

  </div>
</div>
      </div>
    </footer>
  );
}
