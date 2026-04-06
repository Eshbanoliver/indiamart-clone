"use client";

import { use } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/shared/ProductCard";
import { SupplierCard } from "@/components/shared/SupplierCard";
import { Button } from "@/components/ui/Button";
import { 
  LayoutGrid, 
  StretchHorizontal, 
  CheckCircle,
  Search,
  SlidersHorizontal
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";



const sidebarFilters = [
  {
    title: "City",
    options: ["Mumbai", "Delhi", "Ahmedabad", "Surat", "Pune", "Bangalore"]
  },
  {
    title: "Material",
    options: ["Mild Steel", "Stainless Steel", "Cast Iron", "Aluminum", "Copper"]
  },
  {
    title: "Business Type",
    options: ["Manufacturer", "Wholesale Supplier", "Exporter", "Retailer"]
  },
  {
    title: "Price Range",
    options: ["Under ₹10k", "₹10k - ₹50k", "₹50k - ₹1L", "Above ₹1L"]
  },
  {
    title: "Trust Certificate",
    options: ["Verified Plus", "Trust Seal", "GST Verified"]
  }
];

const categoryProducts = [
  {
    id: "1",
    title: "Industrial Grade Stainless Steel Sheet - Grade 304",
    price: "250",
    unit: "Kilogram",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    supplierName: "Metals & Alloys India",
    isVerified: true
  },
  {
    id: "2",
    title: "High Performance Laser Cutting Machine - 3000W",
    price: "15,50,000",
    unit: "Unit",
    location: "Pune, Maharashtra",
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    supplierName: "Apex Technocut",
    isVerified: true
  },
  {
    id: "3",
    title: "Aluminium Extrusion Profile - Custom Dimensions",
    price: "185",
    unit: "Kilogram",
    location: "Ahmedabad, Gujarat",
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7c446d3ea?w=800&q=80",
    supplierName: "Golden Alumex",
    isVerified: false
  },
  {
    id: "4",
    title: "CNC Machined Precision Parts - Brass & Mild Steel",
    price: "45",
    unit: "Piece",
    location: "Rajkot, Gujarat",
    rating: 4.7,
    reviews: 230,
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
    supplierName: "Rajkot Industrial Hub",
    isVerified: true
  },
];

const suppliers = [
  {
    id: "s1",
    name: "Mahalaxmi Metals & Steel Co.",
    location: "Navi Mumbai, India",
    rating: 4.9,
    reviews: 840,
    image: "https://images.unsplash.com/photo-1541888941257-2e1d74ba0140?w=800&q=80",
    isVerified: true,
    trustScore: 98,
    featuredProducts: ["Stainless Steel Pipes", "MS Beams", "Angle Bars", "Steel Channels"]
  },
  {
    id: "s2",
    name: "TechnoBuild Industries Pvt. Ltd.",
    location: "Gurgaon, India",
    rating: 4.7,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    isVerified: true,
    trustScore: 92,
    featuredProducts: ["Roofing Sheets", "Sandwich Panels", "Purlins", "Cold Formed Sections"]
  }
];

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
         {/* Breadcrumbs */}
         <div className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-widest mb-6 px-1">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-secondary-foreground/20">/</span>
            <span className="text-primary truncate">Building & Construction</span>
         </div>

         {/* Title Section */}
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 bg-white rounded-[2rem] p-8 border border-secondary shadow-sm">
            <div className="space-y-3">
               <h1 className="text-3xl md:text-5xl font-extrabold text-[#1c2b3e] tracking-tight capitalize">
                  {resolvedParams.id.replace("-", " ")} <span className="text-primary">& Supplies</span>
               </h1>
               <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-600 rounded-full text-xs font-bold ring-1 ring-inset ring-green-500/20">
                     <CheckCircle className="w-3.5 h-3.5" />
                     1,240 Verified Suppliers
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-xs font-bold ring-1 ring-inset ring-blue-500/20">
                     <LayoutGrid className="w-3.5 h-3.5" />
                     45,000 Products Ready to Ship
                  </div>
               </div>
            </div>
            
            <div className="flex items-center gap-2 p-1.5 bg-secondary/50 rounded-2xl border border-secondary/80">
               <button 
                 onClick={() => setViewMode("grid")}
                 className={cn("p-2.5 rounded-xl transition-all shadow-sm", viewMode === "grid" ? "bg-white text-primary" : "text-muted hover:text-foreground")}
               >
                 <LayoutGrid className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => setViewMode("list")}
                 className={cn("p-2.5 rounded-xl transition-all shadow-sm", viewMode === "list" ? "bg-white text-primary" : "text-muted hover:text-foreground")}
               >
                 <StretchHorizontal className="w-5 h-5" />
               </button>
            </div>
         </div>

         <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-80 shrink-0 space-y-8">
               <div className="bg-white rounded-[2rem] border border-secondary p-8 space-y-10 shadow-sm sticky top-28">
                  <div className="flex items-center justify-between pb-6 border-b border-secondary">
                     <h2 className="text-xl font-bold text-[#1c2b3e] tracking-tight flex items-center gap-3">
                        <SlidersHorizontal className="w-5 h-5 text-primary" />
                        Filters
                     </h2>
                     <button className="text-xs font-extrabold text-primary hover:underline uppercase tracking-widest">Reset</button>
                  </div>

                  {sidebarFilters.map((filter, i) => (
                    <div key={i} className="space-y-6">
                       <h3 className="text-sm font-extrabold text-foreground/40 uppercase tracking-widest">{filter.title}</h3>
                       <div className="space-y-4">
                          {filter.options.map((opt, j) => (
                             <label key={j} className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 border-2 border-secondary rounded-lg flex items-center justify-center transition-all group-hover:border-primary peer-checked:bg-primary peer-checked:border-primary bg-[#f8fafc]">
                                   <div className="w-2.5 h-2.5 bg-white rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <input type="checkbox" className="peer hidden" />
                                <span className="text-sm font-semibold text-[#1c2b3e]/80 group-hover:text-primary transition-colors">{opt}</span>
                             </label>
                          ))}
                       </div>
                    </div>
                  ))}

                  <Button className="w-full h-14 rounded-2xl font-extrabold text-lg shadow-xl shadow-primary/10">Apply 4 Filters</Button>
               </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-12">
               {/* Search in results */}
               <div className="relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted transition-colors group-focus-within:text-primary" />
                  <input 
                    type="text" 
                    placeholder="Search within result..." 
                    className="w-full h-16 bg-white border border-secondary rounded-3xl pl-16 pr-6 font-bold text-lg outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-sm"
                  />
               </div>

               {/* Section: Top Suppliers */}
               <div className="space-y-8">
                  <div className="flex items-center justify-between px-2">
                     <h2 className="text-2xl font-extrabold text-[#1c2b3e] tracking-tight">Premium Featured Suppliers</h2>
                     <Badge variant="accent" className="font-bold">SPONSORED</Badge>
                  </div>
                  <div className="grid gap-8">
                    {suppliers.map((s) => (
                       <SupplierCard key={s.id} {...s} />
                    ))}
                  </div>
               </div>

               {/* Section: Products */}
               <div className="space-y-8">
                  <h2 className="text-2xl font-extrabold text-[#1c2b3e] tracking-tight px-2">Best Results for You</h2>
                  <div className={cn(
                    "grid gap-8 pb-12",
                    viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                  )}>
                    {categoryProducts.map((p) => (
                       <ProductCard key={p.id} {...p} />
                    ))}
                  </div>
                  
                  {/* Pagination or Load more */}
                  <div className="flex justify-center pt-8 border-t border-secondary/50">
                     <Button variant="outline" size="lg" className="h-16 px-14 text-xl font-extrabold border-2 border-secondary hover:border-primary hover:text-primary rounded-2xl shadow-sm transition-all hover:shadow-xl hover:shadow-primary/10">
                        View More Products
                     </Button>
                  </div>
               </div>
            </main>
         </div>
      </div>

      <Footer />
    </div>
  );
}
