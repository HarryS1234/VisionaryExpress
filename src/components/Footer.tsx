import { Phone, Mail, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left: Logo & Location */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center flex-shrink-0">
            <Truck className="w-7 h-7 text-brand-navy" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-lg tracking-tight leading-tight">
              VISIONARY EXPRESS MOVERS
            </span>
            <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mt-0.5">
              Ontario, Canada
            </span>
          </div>
        </div>
        
        {/* Middle: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-400 font-medium text-sm md:text-base">
          <a href="tel:5199927703" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            519-992-7703
          </a>
          <span className="hidden sm:inline text-gray-600">•</span>
          <a href="mailto:visionaryexpressmovers@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            visionaryexpressmovers@gmail.com
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Visionary Express Movers
        </div>

      </div>
    </footer>
  );
}
