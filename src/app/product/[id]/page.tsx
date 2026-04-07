"use client";

import { use } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Phone, 
  ArrowLeft,
  Share2,
  Heart,
  ChevronRight,
  Info,
  Truck,
  LayoutGrid
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";


const productImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5f64977a?w=800&q=80",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
];

const specifications = [
  { key: "Power Output", value: "3000W / 4.0 HP" },
  { key: "Material Capability", value: "SS, MS, Aluminium, Copper" },
  { key: "Operating Voltage", value: "440V AC, 3 Phase" },
  { key: "Cooling System", value: "Water Cooled" },
  { key: "Warranty", value: "2 Years Comprehensive" },
  { key: "Application", value: "Industrial Manufacturing" },
];

const similarProducts = [
  {
    id: "p2",
    title: "Plasma Cutting Machine - Heavy Duty",
    price: "8,50,000",
    unit: "Unit",
    location: "Ahmedabad, Gujarat",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    supplierName: "Apex Technocut",
    isVerified: true
  },
  {
    id: "p3",
    title: "CNC Handheld Laser Welder - 1500W",
    price: "4,20,000",
    unit: "Unit",
    location: "Pune, India",
    rating: 4.9,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    supplierName: "Pune Industrial Hub",
    isVerified: true
  }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const _resolvedParams = use(params);
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
         {/* Top Action Bar */}
         <div className="flex items-center justify-between mb-8 px-2">
            <Link href="/" className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-widest hover:text-primary transition-all group">
               <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
               Back to Search
            </Link>
            <div className="flex gap-4">
               <button className="flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                  SHARE
               </button>
               <button className="flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" />
                  WHISHLIST
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Product Images & Basic Info */}
            <div className="lg:col-span-8 space-y-12">
               <div className="bg-white rounded-[3rem] border border-secondary shadow-sm p-8 md:p-14">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                     {/* Gallery */}
                     <div className="md:col-span-6 space-y-6">
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-secondary/20 ring-1 ring-black/5 shadow-inner border-2 border-white">
                           <Image 
                             src={productImages[activeImg]} 
                             alt="Active Product" 
                             fill 
                             className="object-cover transition-transform duration-700 hover:scale-110"
                           />
                           <div className="absolute top-6 left-6">
                              <Badge variant="accent" className="font-bold tracking-widest shadow-xl shadow-accent/20 border-white/20 px-4 py-1.5 h-auto">BEST SELLER</Badge>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           {productImages.map((img, i) => (
                             <button 
                               key={i}
                               onClick={() => setActiveImg(i)}
                               className={cn(
                                 "relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all p-1",
                                 activeImg === i ? "border-primary shadow-lg scale-105" : "border-secondary/50 grayscale-[0.5] hover:grayscale-0 hover:border-primary/40"
                               )}
                             >
                                <Image src={img} alt="Thumb" fill className="object-cover rounded-xl" />
                             </button>
                           ))}
                        </div>
                     </div>

                     {/* Main Headings */}
                     <div className="md:col-span-6 space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                           <div className="flex items-center gap-2">
                              <Badge className="bg-primary/5 text-primary border-primary/20 font-bold px-3 py-1 uppercase text-[10px] tracking-widest">IND-MACH-994</Badge>
                              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-xs font-bold">
                                 <Star className="w-3 h-3 fill-current" />
                                 4.9 (42 Reviews)
                              </div>
                           </div>
                           <h1 className="text-4xl md:text-5xl font-extrabold text-[#1c2b3e] tracking-tight leading-tight">
                              Industrial Laser <br /><span className="text-primary italic">Cutting Machine</span>
                           </h1>
                           <div className="flex items-baseline gap-2 pt-4">
                              <span className="text-sm font-bold text-muted uppercase tracking-widest">Starts from</span>
                              <span className="text-4xl font-black text-primary">₹15.5 Lakh</span>
                              <span className="text-lg font-bold text-muted">/ Unit</span>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-6">
                           <div className="flex items-center gap-4 p-5 bg-secondary/30 rounded-2xl border border-secondary shadow-sm">
                              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                 <Truck className="w-6 h-6" />
                              </div>
                              <div className="leading-snug">
                                 <p className="font-extrabold text-[#1c2b3e] text-sm">Pan India Delivery</p>
                                 <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Est. 15-20 Working Days</p>
                              </div>
                           </div>
                           <div className="flex items-center gap-4 p-5 bg-secondary/30 rounded-2xl border border-secondary shadow-sm">
                              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                                 <ShieldCheck className="w-6 h-6" />
                              </div>
                              <div className="leading-snug">
                                 <p className="font-extrabold text-[#1c2b3e] text-sm">Verified Product Integrity</p>
                                 <p className="text-[10px] font-bold text-muted uppercase tracking-widest">100% Quality Assurance</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Specifications & Details */}
               <div className="bg-white rounded-[3rem] border border-secondary shadow-sm p-8 md:p-14 space-y-12 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[150px] -z-10 blur-3xl opacity-50" />
                  
                  <div className="space-y-6">
                     <h3 className="text-2xl font-black text-[#1c2b3e] tracking-tight flex items-center gap-4">
                        <LayoutGrid className="w-7 h-7 text-primary" />
                        Technological Specifications
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 pt-6 border-t border-secondary/50">
                        {specifications.map((spec, i) => (
                           <div key={i} className="flex justify-between items-center py-5 border-b border-dashed border-border group">
                              <span className="text-sm font-bold text-muted uppercase tracking-widest group-hover:text-primary transition-colors">{spec.key}</span>
                              <span className="text-base font-extrabold text-[#1c2b3e] text-right">{spec.value}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-6 pt-10">
                     <h3 className="text-2xl font-black text-[#1c2b3e] tracking-tight">Product Description</h3>
                     <p className="text-lg leading-relaxed text-[#1c2b3e]/70 font-medium">
                        Our Industrial Laser Cutting Machine is engineered for precision and durability. Specifically designed for high-volume manufacturing environments, this 3000W fiber laser source ensures rapid through-put while maintaining edge quality across various materials including stainless steel sheets up to 20mm and mild steel up to 25mm. Featuring a dual-drive gantry system and intelligent height monitoring for unstable workpiece surfaces.
                     </p>
                     <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex items-start gap-6 mt-10">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-white">
                           <Info className="w-7 h-7" />
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-xl font-extrabold text-primary">Pre-Sales Consultation Available</h4>
                           <p className="text-sm font-semibold text-primary/70 leading-relaxed">Our engineers can help you configure the perfect setup based on your material thickness and volume requirements. Contact us for a live demo via video call.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Sidebar: Inquiry & Supplier Info */}
            <div className="lg:col-span-4 space-y-10">
               {/* Sticky Inquiry Section */}
               <div className="sticky top-28 space-y-10">
                  <InquiryForm productName="Industrial Laser Cutting Machine" />

                  {/* Supplier Snapshot Card */}
                  <div className="bg-white rounded-[2.5rem] border border-secondary shadow-xl p-8 space-y-6 relative overflow-hidden group">
                     {/* Decorative background circle */}
                     <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/30 rounded-full -z-10 transition-transform duration-700 group-hover:scale-150" />
                     
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl border-4 border-secondary shadow-lg overflow-hidden shrink-0">
                           <Image src="https://images.unsplash.com/photo-1541888941257-2e1d74ba0140?w=200&q=80" alt="Logo" width={100} height={100} className="object-cover" />
                        </div>
                        <div className="leading-tight">
                           <Link href="/supplier/apex" className="text-xl font-black text-[#1c2b3e] hover:text-primary transition-colors">Apex Technocut India</Link>
                           <div className="flex items-center gap-2 mt-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="text-sm font-bold text-muted">Ahemdabad, Gujarat</span>
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4 pt-6 border-t border-secondary">
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Experience</p>
                           <p className="font-extrabold text-[#1c2b3e]">15+ Years</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Business Type</p>
                           <p className="font-extrabold text-[#1c2b3e]">OEM Mfg.</p>
                        </div>
                     </div>
                     
                     <div className="flex flex-col gap-3 pt-4">
                        <Button variant="outline" className="w-full h-14 rounded-2xl font-extrabold border-2 border-secondary shadow-sm gap-3 group-hover:border-primary group-hover:text-primary transition-all">
                           <Phone className="w-5 h-5" />
                           View Contact Details
                        </Button>
                        <Link href="/supplier/apex" className="text-center py-4 text-xs font-black text-primary uppercase tracking-[0.2em] hover:opacity-80 transition-opacity flex items-center justify-center gap-2">
                           VISIT COMPANY PROFILE <ChevronRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         {/* Recommended Products */}
         <div className="mt-24 space-y-10">
            <div className="flex items-end justify-between px-2">
               <div className="space-y-2">
                  <Badge className="bg-primary/5 text-primary border-primary/20 font-bold px-4 py-1.5 uppercase text-[10px] tracking-widest">Similiar Tech</Badge>
                  <h2 className="text-3xl md:text-4xl font-black text-[#1c2b3e] tracking-tight">You may also like these</h2>
               </div>
               <Button variant="ghost" className="font-extrabold text-primary gap-2">View All Similar <ChevronRight className="w-5 h-5" /></Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {similarProducts.map((p) => (
                  <ProductCard key={p.id} {...p} />
               ))}
            </div>
         </div>
      </div>

      <Footer />
    </div>
  );
}
