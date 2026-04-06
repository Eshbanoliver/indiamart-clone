"use client";

import Link from "next/link";
import { Mail, Lock, User, Phone, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SignupPage() {
  const [businessType, setBusinessType] = useState<"buyer" | "seller">("buyer");

  return (
    <div className="min-h-screen bg-white flex flex-col">
       <Navbar />
       
       <main className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-lg bg-white p-8 border border-slate-200 rounded-lg shadow-sm">
             <div className="space-y-2 mb-8">
                <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">Create Account</h1>
                <p className="text-sm text-slate-500 font-medium">Please provide your details below.</p>
             </div>

             <div className="flex p-1 bg-slate-100 rounded-md mb-8 border border-slate-200">
                <button 
                  onClick={() => setBusinessType("buyer")}
                  className={cn("flex-1 px-4 py-2 rounded-sm text-xs font-semibold tracking-widest transition-all", businessType === "buyer" ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-600")}
                >
                  I am a Buyer
                </button>
                <button 
                  onClick={() => setBusinessType("seller")}
                  className={cn("flex-1 px-4 py-2 rounded-sm text-xs font-semibold tracking-widest transition-all", businessType === "seller" ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-600")}
                >
                  I am a Seller
                </button>
             </div>

             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2 group">
                      <label className="text-xs font-medium text-slate-600 uppercase">Full Name</label>
                      <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                         <input 
                           className="w-full h-11 bg-slate-50 border border-slate-200 rounded-md pl-11 pr-4 text-sm font-medium outline-none focus:border-slate-400 transition-colors shadow-sm" 
                           placeholder="John Doe" 
                         />
                      </div>
                   </div>
                   <div className="space-y-2 group">
                      <label className="text-xs font-medium text-slate-600 uppercase">Mobile No.</label>
                      <div className="relative">
                         <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                         <input 
                           type="tel"
                           className="w-full h-11 bg-slate-50 border border-slate-200 rounded-md pl-11 pr-4 text-sm font-medium outline-none focus:border-slate-400 transition-colors shadow-sm" 
                           placeholder="+91 98765 43210" 
                         />
                      </div>
                   </div>
                   <div className="col-span-1 md:col-span-2 space-y-2 group">
                      <label className="text-xs font-medium text-slate-600 uppercase">Email Address</label>
                      <div className="relative">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                         <input 
                           type="email" 
                           className="w-full h-11 bg-slate-50 border border-slate-200 rounded-md pl-11 pr-4 text-sm font-medium outline-none focus:border-slate-400 transition-colors shadow-sm" 
                           placeholder="john.doe@company.com" 
                         />
                      </div>
                   </div>
                   <div className="col-span-1 md:col-span-2 space-y-3 group">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">Set Password</label>
                      <div className="relative">
                         <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted transition-colors group-focus-within:text-primary" />
                         <input 
                           type="password" 
                           className="w-full h-15 bg-slate-50 border border-secondary pl-14 pr-6 text-sm font-bold outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-sm" 
                           placeholder="••••••••" 
                         />
                      </div>
                   </div>
                </div>

                <Button size="lg" className="h-14 w-full text-lg font-black rounded-2xl shadow-xl shadow-primary/20 bg-primary group gap-4 mt-6">
                   Register My Business
                   <PlusCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </Button>
             </form>

             <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                <p className="text-xs text-slate-500">
                   Already have a member? <Link href="/login" className="text-primary font-semibold hover:underline">Log In</Link>
                </p>
             </div>
          </div>
       </main>
       
       <footer className="py-8 text-center text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          © 2026 B2BMarket.com. Build with Precision.
       </footer>
    </div>
  );
}
