"use client";

import { use } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Star, 
  MapPin, 
  CheckCircle,
  ShieldCheck, 
  Phone, 
  Building2, 
  Globe, 
  Mail, 
  Award, 
  Users,
  Search,
  ExternalLink,
  Info
} from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

const supplierProducts = [
  {
    id: "p1",
    title: "Precision CNC Lathe Machine - Multi Axis",
    price: "8,40,000",
    unit: "Unit",
    location: "Ahemdabad, India",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    supplierName: "Apex Technocut India",
    isVerified: true
  },
  {
    id: "p2",
    title: "Fiber Laser Welding System - 1000W",
    price: "3,20,000",
    unit: "Piece",
    location: "Ahemdabad, India",
    rating: 4.9,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    supplierName: "Apex Technocut India",
    isVerified: true
  },
  {
    id: "p3",
    title: "Industrial Grade Water Chiller - 5TR",
    price: "1,25,000",
    unit: "Unit",
    location: "Ahemdabad, India",
    rating: 4.7,
    reviews: 44,
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
    supplierName: "Apex Technocut India",
    isVerified: true
  },
  {
     id: "p4",
     title: "Automatic Feeding Gantry - Laser Support",
     price: "4,50,000",
     unit: "System",
     location: "Ahemdabad, India",
     rating: 4.8,
     reviews: 20,
     image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
     supplierName: "Apex Technocut India",
     isVerified: true
  }
];

export default function SupplierProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const _resolvedParams = use(params);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* Hero: Supplier Header */}
      <section className="relative py-20 bg-white overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[60%] bg-[#1c2b3e] -z-10" />
         <div className="container mx-auto px-4">
            <div className="bg-white rounded-[3rem] border border-secondary shadow-2xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left transition-all hover:border-primary/20">
               <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-[2.5rem] border-8 border-secondary shadow-lg overflow-hidden shrink-0 relative hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1541888941257-2e1d74ba0140?w=400&q=80" 
                    alt="Apex Logo" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 animate-in fade-in zoom-in duration-700">
                     <Badge variant="accent" className="w-full justify-center gap-1.5 h-8 font-extrabold shadow-lg">
                        <ShieldCheck className="w-4 h-4" />
                        VERIFIED
                     </Badge>
                  </div>
               </div>
               
               <div className="flex-1 space-y-6 flex flex-col justify-center max-w-2xl">
                  <div className="space-y-4">
                     <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <Badge className="bg-primary/5 text-primary border-primary/20 px-4 py-1.5 h-auto text-[10px] tracking-widest font-black uppercase">Established 2008</Badge>
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-600 rounded-full text-xs font-bold ring-1 ring-inset ring-green-500/20 shadow-sm">
                           <Award className="w-3.5 h-3.5" />
                           ISO 9001:2015 Certified
                        </div>
                     </div>
                     <h1 className="text-4xl md:text-6xl font-black text-[#1c2b3e] tracking-tight leading-tight">Apex Technocut India <span className="text-primary italic">Pvt. Ltd.</span></h1>
                     <p className="text-xl text-muted-foreground font-medium leading-relaxed italic">Leading manufacturer & exporter of high-precision CNC laser cutting systems and engineering solutions.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-secondary/50">
                     <div className="space-y-1">
                        <div className="flex items-center justify-center md:justify-start gap-1.5 text-amber-500 font-black text-2xl">
                           <Star className="w-6 h-6 fill-current" />
                           4.9
                        </div>
                        <p className="text-[10px] font-bold text-muted uppercase tracking-widest">840+ Reviews</p>
                     </div>
                     <div className="space-y-1">
                        <div className="text-[#1c2b3e] font-black text-2xl">100+</div>
                        <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Active Patents</p>
                     </div>
                     <div className="space-y-1">
                        <div className="text-[#1c2b3e] font-black text-2xl">250+</div>
                        <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Global Clients</p>
                     </div>
                     <div className="space-y-1">
                        <div className="text-primary font-black text-2xl">15 Yrs</div>
                        <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Experience</p>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                     <Button size="lg" className="h-14 px-10 text-xl font-extrabold rounded-2xl shadow-xl shadow-primary/20 bg-primary group gap-2">
                        <Phone className="w-5 h-5" />
                        Call Now
                     </Button>
                     <Button size="lg" variant="outline" className="h-14 px-10 text-xl font-extrabold border-2 border-secondary rounded-2xl gap-2 hover:border-primary hover:text-primary transition-all">
                        <Mail className="w-5 h-5" />
                        Send Inquiry
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: About & Stats */}
            <div className="lg:col-span-8 space-y-12">
               {/* About Section */}
               <div className="bg-white rounded-[3rem] border border-secondary shadow-sm p-10 md:p-14 space-y-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-700 blur-xl opacity-30" />
                  
                  <div className="space-y-6">
                     <h2 className="text-3xl font-black text-[#1c2b3e] tracking-tight">Company Overview</h2>
                     <p className="text-lg leading-relaxed text-[#1c2b3e]/70 font-medium">
                        Apex Technocut India Pvt. Ltd. was established in 2008 in Ahemdabad, Gujarat, with the vision of providing world-class industrial cutting solutions to the global market. Over the last 15 years, we have emerged as a premier manufacturer of Fiber Laser Machines, CNC Waterjet Systems, and automated production lines. Our state-of-the-art manufacturing facility spans over 50,000 sq.ft., equipped with advanced R&D and testing labs.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-secondary">
                     <div className="flex items-start gap-5 p-6 bg-secondary/30 rounded-3xl border border-secondary hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                           <Globe className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                           <h4 className="font-extrabold text-[#1c2b3e] text-lg uppercase tracking-tight">Export Market</h4>
                           <p className="text-sm font-semibold text-muted leading-snug">Presence in Middle East, Africa, and South East Asia.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-5 p-6 bg-secondary/30 rounded-3xl border border-secondary hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                           <Users className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                           <h4 className="font-extrabold text-[#1c2b3e] text-lg uppercase tracking-tight">Skilled Workforce</h4>
                           <p className="text-sm font-semibold text-muted leading-snug">Over 150+ engineers and technicians on-site.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Products Grid */}
               <div className="space-y-10">
                  <div className="flex items-end justify-between px-2">
                     <h2 className="text-3xl font-black text-[#1c2b3e] tracking-tight">Our Product Catalog</h2>
                     <div className="hidden md:flex relative w-64 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
                        <input className="w-full h-11 bg-white border border-secondary rounded-xl pl-10 text-sm font-bold outline-none focus:border-primary transition-all shadow-sm" placeholder="Search catalog..." />
                     </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                     {supplierProducts.map((p) => (
                        <ProductCard key={p.id} {...p} />
                     ))}
                  </div>
                  <div className="flex justify-center pt-8">
                     <Button variant="outline" size="lg" className="h-16 px-16 text-xl font-extrabold border-2 border-secondary hover:border-primary hover:text-primary rounded-2xl shadow-sm transition-all hover:shadow-xl">View All 15+ Machines</Button>
                  </div>
               </div>
            </div>

            {/* Right: Contact & Trust */}
            <div className="lg:col-span-4 space-y-10">
               <div className="sticky top-28 space-y-10">
                  {/* Contact Detailed Info */}
                  <div className="bg-[#1c2b3e] rounded-[3rem] shadow-2xl p-10 overflow-hidden relative text-white space-y-10 border-4 border-white">
                      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-50" />
                      
                      <div className="space-y-2">
                         <h3 className="text-2xl font-black tracking-tight">Company Contact</h3>
                         <p className="text-sm font-semibold text-white/50 uppercase tracking-widest">Connect with our head office</p>
                      </div>

                      <div className="space-y-8">
                         <div className="flex gap-5 items-start bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <MapPin className="w-6 h-6 text-primary shrink-0" />
                            <div className="space-y-1">
                               <p className="font-bold text-sm tracking-tight">Headquarters Address</p>
                               <p className="text-sm text-white/60 leading-relaxed font-medium">Plot 45-B, GIDC Area, Vatva, Ahemdabad - 382445, Gujarat, India</p>
                            </div>
                         </div>
                         <div className="flex gap-5 items-center bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Phone className="w-6 h-6 text-primary shrink-0" />
                            <div className="space-y-1">
                               <p className="font-bold text-sm tracking-tight">Sales Inquiry Line</p>
                               <p className="text-sm text-white/60 leading-relaxed font-medium">+91 99887 76655</p>
                            </div>
                         </div>
                         <div className="flex gap-5 items-center bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Mail className="w-6 h-6 text-primary shrink-0" />
                            <div className="space-y-1">
                               <p className="font-bold text-sm tracking-tight">Business email</p>
                               <p className="text-sm text-white/60 leading-relaxed font-medium">inquiry@apextechnocut.com</p>
                            </div>
                         </div>
                      </div>

                      <Button className="w-full h-16 rounded-2xl text-xl font-extrabold bg-primary hover:bg-white hover:text-primary shadow-xl shadow-black/20 group gap-3">
                         Get Detailed Quotes <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                  </div>

                  {/* Trust Factors Card */}
                  <div className="bg-white rounded-[2.5rem] border border-secondary shadow-lg p-10 space-y-8 relative overflow-hidden group">
                     {/* Decorative background grid pattern mimic */}
                     <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
                     
                     <div className="relative z-10 space-y-8">
                        <h3 className="text-xl font-black text-[#1c2b3e] tracking-tight uppercase flex items-center gap-3">
                           <ShieldCheck className="w-6 h-6 text-green-500" />
                           Verified Details
                        </h3>
                        <div className="space-y-6">
                           {[
                              { label: "GST Verified", val: "24AAAAA0000A1Z5", icon: CheckCircle },
                              { label: "Importer Exporter Code (IEC)", val: "031405XXXX", icon: CheckCircle },
                              { label: "Business Type", val: "Manufacturer & Exporter", icon: Building2 },
                              { label: "Legal Status", val: "Private Limited Company", icon: Info },
                           ].map((item, i) => (
                              <div key={i} className="flex justify-between items-start gap-4 p-4 bg-secondary/30 rounded-2xl border border-secondary shadow-sm transition-transform hover:scale-[1.03]">
                                 <div>
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</p>
                                    <p className="font-extrabold text-[#1c2b3e] text-sm mt-1">{item.val}</p>
                                 </div>
                                 <item.icon className="w-5 h-5 text-green-500 shrink-0" />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <Footer />
    </div>
  );
}
