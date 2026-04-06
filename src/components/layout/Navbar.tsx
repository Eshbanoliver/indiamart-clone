"use client";

import Link from "next/link";
import { Search, User, Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold tracking-tight hidden md:block">
              <span className="text-primary">B2B</span>Market
            </span>
          </Link>

          {/* Search Bar - Center */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-10 relative">
             <div className="flex w-full overflow-hidden rounded-lg border border-primary group">
                <div className="flex items-center px-4 bg-secondary border-r border-border min-w-[140px] text-sm text-foreground/70 font-medium">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  India
                </div>
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="Search Products, Services, Cities..." 
                    className="w-full px-4 py-2.5 outline-none text-sm placeholder:text-muted"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 text-sm font-semibold transition-colors">
                   Get Best Price
                </button>
             </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/help" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>Help</span>
            </Link>
            
            <div className="h-6 w-px bg-border hidden sm:block"></div>

            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Button>
            </Link>

            <Button variant="outline" size="sm" className="hidden md:flex">
              Sell on Market
            </Button>

            <Button variant="primary" size="sm" className="sm:hidden">
               Post Requirement
            </Button>
            
            <button className="lg:hidden p-2 text-foreground">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
