import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ShieldCheck, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";

interface SupplierCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  isVerified?: boolean;
  trustScore?: number;
  featuredProducts: string[];
}

export const SupplierCard = ({
  id,
  name,
  location,
  rating,
  reviews,
  image,
  isVerified,
  trustScore,
  featuredProducts,
}: SupplierCardProps) => {
  return (
    <div className="group bg-white rounded-2xl border border-border overflow-hidden card-shadow flex flex-col md:flex-row gap-6 p-4 md:p-8">
      {/* Supplier Profile Image */}
      <div className="w-full md:w-48 lg:w-56 shrink-0 aspect-square md:aspect-auto rounded-xl overflow-hidden relative border border-secondary shadow-sm">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isVerified && (
          <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 bg-green-500 rounded-lg text-[10px] text-white font-bold backdrop-blur-md">
             <ShieldCheck className="w-3.5 h-3.5" />
             VERIFIED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-1">
             <Link href={`/supplier/${id}`} className="hover:text-primary transition-colors">
               <h3 className="font-extrabold text-2xl tracking-tight text-[#1c2b3e]">
                 {name}
               </h3>
             </Link>
             <div className="flex items-center gap-3">
               <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 rounded-lg text-xs font-bold text-amber-600">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {rating}
               </div>
               <span className="text-sm font-medium text-muted">{reviews} Verified Reviews</span>
               <div className="h-4 w-px bg-border"></div>
               <div className="flex items-center gap-1 text-sm font-medium text-muted">
                  <MapPin className="w-4 h-4 text-primary" />
                  {location}
               </div>
             </div>
          </div>
          
          <div className="flex items-center gap-2">
            {trustScore && (
              <div className="hidden lg:flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold text-primary text-sm shadow-sm ring-inset ring-offset-2 ring-primary/20">
                    {trustScore}%
                 </div>
                 <span className="text-[10px] font-bold text-primary/70 mt-1">TRUST SEAL</span>
              </div>
            )}
            <div className="flex flex-col gap-2">
               <Button size="sm" variant="outline" className="gap-2 h-9">
                  <Phone className="w-3.5 h-3.5" />
                  Contact
               </Button>
               <Button size="sm" className="bg-primary text-white font-bold h-10 px-8">
                  Get Quotes
               </Button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="pt-4 border-t border-border/60">
           <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest block mb-4">Leading Products</span>
           <div className="flex flex-wrap gap-2.5">
             {featuredProducts.map((p, i) => (
                <div key={i} className="px-4 py-2 bg-[#f0f4f9] rounded-xl text-sm font-semibold text-[#1c2b3e] hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer shadow-sm border border-transparent hover:border-primary/20">
                   {p}
                </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};
