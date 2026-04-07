import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  id: string;
  title: string;
  price?: string;
  unit?: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  supplierName: string;
  isVerified?: boolean;
}

export const ProductCard = ({
  id,
  title,
  price,
  unit,
  location,
  rating,
  reviews,
  image,
  supplierName,
  isVerified,
}: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden card-shadow flex flex-col h-full bg-white">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isVerified && (
          <div className="absolute top-3 left-3">
             <Badge variant="accent" className="gap-1.5 px-2.5 py-1">
                <CheckCircle className="w-3.5 h-3.5 fill-white text-accent" />
                Verified
             </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/product/${id}`} className="hover:text-primary transition-colors">
          <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
           <div className="flex text-amber-500">
             {[...Array(5)].map((_, i) => (
               <Star 
                 key={i} 
                 className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-current' : ''}`} 
               />
             ))}
           </div>
           <span className="text-xs text-muted font-semibold ml-1">({reviews})</span>
        </div>

        {price && (
          <div className="mb-4">
             <span className="text-xl font-extrabold text-primary">₹{price}</span>
             <span className="text-sm text-muted ml-1">/ {unit}</span>
          </div>
        )}

        <div className="mt-auto space-y-4">
           <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="truncate">{location}</span>
           </div>
           
           <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
              <span className="text-xs font-bold text-foreground/60 uppercase tracking-wider">{supplierName}</span>
              <Button size="sm" className="w-full font-bold">
                 Get Best Price
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
};
