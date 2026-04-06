import Link from "next/link";
import { MessageCircle, Camera, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1c2b3e] text-white/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                B2BMarket
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-white/70">
              India&apos;s leading B2B marketplace, connecting buyers with suppliers. Find authentic manufacturers, suppliers, and exporters.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-white/50">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-white/50">
                <Camera className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-white/50">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-white/50">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-primary transition-colors hover:translate-x-1 block">About Us</Link></li>
              <li><Link href="/join" className="hover:text-primary transition-colors hover:translate-x-1 block">Join Us</Link></li>
              <li><Link href="/press" className="hover:text-primary transition-colors hover:translate-x-1 block">Press Section</Link></li>
              <li><Link href="/advertise" className="hover:text-primary transition-colors hover:translate-x-1 block">Advertise With Us</Link></li>
              <li><Link href="/investors" className="hover:text-primary transition-colors hover:translate-x-1 block">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Help Center */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-6">Help & Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/help" className="hover:text-primary transition-colors hover:translate-x-1 block">Help Center</Link></li>
              <li><Link href="/return" className="hover:text-primary transition-colors hover:translate-x-1 block">Return Policy</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors hover:translate-x-1 block">Shipping Info</Link></li>
              <li><Link href="/billing" className="hover:text-primary transition-colors hover:translate-x-1 block">Billing Info</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors hover:translate-x-1 block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-6 text-sm font-medium">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70">123 Business Tower, Sec-44, Gurgaon, India - 122003</span>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70">+91 1800-419-6666</span>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70">support@b2bmarket.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© 2026 B2BMarket.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
