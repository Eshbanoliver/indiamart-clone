"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mock validation
    // Email: example@user.com
    // Password: password123
    setTimeout(() => {
      if (email === "example@user.com" && password === "password123") {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password. Use example@user.com / password123");
        setLoading(false);
      }
    }, 1000); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
       <Navbar />
       
       <main className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md bg-white p-8 border border-slate-200 rounded-lg shadow-sm">
             <div className="space-y-2 mb-8">
                <h1 className="text-2xl font-semibold text-slate-800">Sign In</h1>
                <p className="text-sm text-slate-500">Enter your details to access your account.</p>
             </div>

             {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-600 text-sm">
                   <AlertCircle className="w-4 h-4 shrink-0" />
                   <p>{error}</p>
                </div>
             )}

             <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                   <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-600 uppercase">Email Address</label>
                      <div className="relative">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                         <input 
                           type="email" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full h-11 bg-slate-50 border border-slate-200 rounded-md pl-11 pr-4 text-sm outline-none focus:border-slate-400 transition-colors" 
                           placeholder="example@user.com" 
                           required
                         />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <div className="flex justify-between items-center">
                         <label className="text-xs font-medium text-slate-600 uppercase">Password</label>
                         <Link href="#" className="text-[10px] text-primary hover:underline">Forgot Password?</Link>
                      </div>
                      <div className="relative">
                         <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                         <input 
                           type="password" 
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="w-full h-11 bg-slate-50 border border-slate-200 rounded-md pl-11 pr-4 text-sm outline-none focus:border-slate-400 transition-colors" 
                           placeholder="••••••••" 
                           required
                         />
                      </div>
                   </div>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  disabled={loading}
                  className="h-11 w-full text-sm font-medium rounded-md bg-primary hover:bg-primary/90 flex items-center justify-center"
                >
                   {loading ? "Signing in..." : "Log In"}
                   <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="relative flex items-center justify-center py-2">
                   <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                   <span className="relative bg-white px-4 text-[10px] text-slate-400 uppercase tracking-widest font-medium">or</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <button 
                     type="button"
                     className="h-10 rounded-md border border-slate-200 text-xs font-medium flex items-center justify-center hover:bg-slate-50 transition-colors"
                   >
                      GOOGLE
                   </button>
                   <button 
                     type="button"
                     className="h-10 rounded-md border border-slate-200 text-xs font-medium flex items-center justify-center hover:bg-slate-50 transition-colors"
                   >
                      OTP LOGIN
                   </button>
                </div>
             </form>

             <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                <p className="text-xs text-slate-500">
                   New to B2BMarket? <Link href="/signup" className="text-primary font-semibold hover:underline">Create Account</Link>
                </p>
             </div>
          </div>
       </main>
       
       <footer className="py-8 text-center text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          © 2026 B2BMarket.com. All rights reserved.
       </footer>
    </div>
  );
}
