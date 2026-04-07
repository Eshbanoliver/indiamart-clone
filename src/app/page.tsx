"use client";
import { useState, useEffect } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// import { ProductCard } from "@/components/shared/ProductCard";
// import { InquiryForm } from "@/components/shared/InquiryForm";
import { Button } from "@/components/ui/Button";
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Globe, 
  ArrowRight,
  Zap,
  Truck
} from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";




export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />
         <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/10 rounded-3xl rotate-12 -z-10 blur-xl" />
         
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-10">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
               >
                 <Badge variant="secondary" className="px-5 py-2 text-sm font-extrabold tracking-widest uppercase mb-8 border-primary/20 text-primary bg-primary/5">
                   The World&apos;s Largest B2B Network
                 </Badge>
                 <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#1c2b3e] leading-[1.1]">
                   Connecting Buyers & <br />
                   <span className="text-primary italic">Global Suppliers</span>
                 </h1>
                 <p className="mt-8 text-xl text-muted leading-relaxed font-medium max-w-2xl mx-auto">
                   Source from millions of verified products, manufacturers, and industries for your business growth. 
                 </p>
               </motion.div>

               {/* Search Interface */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="relative z-10"
               >
                 <div className="flex flex-col md:flex-row gap-0 rounded-2xl shadow-2xl shadow-primary/20 border-2 border-primary bg-white overflow-hidden p-1.5 md:p-2.5">
                    <div className="flex items-center gap-3 px-6 bg-secondary/30 rounded-xl min-w-[200px] border-r border-border md:border-none mb-2 md:mb-0">
                       <MapPin className="w-5 h-5 text-primary" />
                       <span className="font-bold text-foreground/80">All India</span>
                    </div>
                    <div className="flex-1 relative border-l border-border md:mx-4">
                       <input 
                         type="text" 
                         className="w-full h-14 md:h-16 px-6 outline-none text-lg font-semibold placeholder:text-muted/60 bg-transparent"
                         placeholder="Try 'Solar Panels' or 'Industrial Motors'..."
                       />
                       <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted" />
                    </div>
                    <Button size="lg" className="h-14 md:h-16 px-12 text-xl font-extrabold rounded-xl shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                       Search
                       <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                    </Button>
                 </div>
                 
                 <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm font-bold text-muted uppercase tracking-widest">
                    <span>Popular:</span>
                    <Link href="#" className="text-primary hover:underline underline-offset-4 decoration-2">Face Masks</Link>
                    <Link href="#" className="text-primary hover:underline underline-offset-4 decoration-2">Textile Machinery</Link>
                    <Link href="#" className="text-primary hover:underline underline-offset-4 decoration-2">Steel Fabrication</Link>
                    <Link href="#" className="text-primary hover:underline underline-offset-4 decoration-2">Agriculture Tools</Link>
                 </div>
               </motion.div>

               {/* Trust Stats */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16 border-t border-secondary/50">
                  {[
                    { val: "10M+", label: "Verified Suppliers", icon: ShieldCheck },
                    { val: "200M+", label: "Monthly Search", icon: TrendingUp },
                    { val: "150+", label: "Global Presence", icon: Globe },
                    { val: "50k+", label: "Daily Requirements", icon: Users },
                  ].map((stat, i) => (
                    <div key={i} className="text-center space-y-2 group">
                       <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <stat.icon className="w-7 h-7" />
                       </div>
                       <div className="text-3xl font-extrabold text-[#1c2b3e]">{stat.val}</div>
                       <div className="text-xs font-bold text-muted uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>




      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-secondary/20 rounded-full -z-10 blur-[150px]" />
         <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
               <h2 className="text-4xl md:text-6xl font-extrabold text-[#1c2b3e] tracking-tight">Grow Your Business with B2BMarket</h2>
               <p className="text-xl text-muted font-medium leading-relaxed">The most trusted destination for manufacturers and traders to discover new opportunities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 {
                   title: "Verified Supplier Community",
                   desc: "Access a curated database of 10M+ manufacturers with verified business credentials and certifications.",
                   icon: ShieldCheck,
                   color: "bg-emerald-500 shadow-emerald-500/30"
                 },
                 {
                   title: "Direct Logistics Support",
                   desc: "Streamlined shipping solutions and freight forwarding services for domestic and international orders.",
                   icon: Truck,
                   color: "bg-blue-600 shadow-blue-600/30"
                 },
                 {
                   title: "Payment Protection",
                   desc: "Secure transaction portal and escrow services to ensure safe trade between unknown parties.",
                   icon: Zap,
                   color: "bg-amber-500 shadow-amber-500/30"
                 }
               ].map((item, i) => (
                 <div key={i} className="group p-10 bg-white rounded-[3rem] border border-secondary shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/20 scale-100 hover:scale-[1.02]">
                    <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-8 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110", item.color)}>
                       <item.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1c2b3e] mb-5">{item.title}</h3>
                    <p className="text-muted leading-relaxed font-semibold text-lg">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
