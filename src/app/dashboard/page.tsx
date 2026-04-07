"use client";

import { 
  LayoutDashboard, 
  User, 
  MessageSquare, 
  Search, 
  ShieldCheck, 
  BadgeCheck, 
  Banknote, 
  Truck, 
  BarChart3, 
  HelpCircle,
  MapPin,
  ChevronDown,
  MessageCircle,
  LifeBuoy,
  Globe,
  PackageSearch,
  Pencil,
  Home,
  FileUp,
  UserCheck,
  Folder,
  Settings,
  Smartphone
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: User, label: "My Profile", href: "/profile" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Search, label: "Know Your Seller", badge: "NEW" },
  { icon: ShieldCheck, label: "Payment Protection" },
  { icon: BadgeCheck, label: "TrustSEAL Buyer" },
  { icon: Banknote, label: "Loans" },
  { icon: Truck, label: "Ship With IM" },
  { icon: BarChart3, label: "Credit Score" },
];

const CATEGORIES = [
  { title: "Generic Medicines", img: "/medicines.png" },
  { title: "Surgical Gloves", img: "/gloves.png" },
  { title: "Basmati Rice", img: "/rice.png" },
  { title: "Flex Printing Machine", img: "/printing.png" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f1f3f6] flex flex-col font-sans">
      {/* Header */}
      <header className="h-[60px] bg-[#3b235d] text-white flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1.5">
             <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-[#3b235d] font-black text-xl">M</span>
             </div>
             <span className="text-xl font-bold tracking-tight">indiamart</span>
          </Link>
        </div>

        <div className="flex items-center gap-8 h-full">
           <Link href="#" className="flex flex-col items-center gap-0.5 group h-full justify-center px-2 hover:bg-white/10 transition-colors">
              <PackageSearch className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Sell</span>
           </Link>
           <Link href="#" className="flex flex-col items-center gap-0.5 group h-full justify-center px-2 hover:bg-white/10 transition-colors">
              <MessageCircle className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Messages</span>
           </Link>
           <Link href="#" className="flex flex-col items-center gap-0.5 group h-full justify-center px-2 hover:bg-white/10 transition-colors">
              <LifeBuoy className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Help</span>
           </Link>
           <Link href="#" className="flex flex-col items-center gap-0.5 group h-full justify-center px-2 hover:bg-white/10 transition-colors">
              <Globe className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Exporters</span>
           </Link>
           <div className="relative flex items-center gap-2 group h-full cursor-pointer px-4 hover:bg-white/10 transition-colors ml-4 border-l border-white/10">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">B</div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-bold opacity-60 uppercase">Hi</span>
                   <div className="flex items-center">
                     <span className="text-xs font-bold">Buyer</span>
                     <ChevronDown className="w-3 h-3 ml-1" />
                   </div>
                 </div>
              </div>

              {/* Profile Dropdown */}
              <div className="absolute right-0 top-full mt-0 w-64 bg-white text-slate-800 shadow-2xl border border-slate-200 hidden group-hover:flex flex-col z-[100] text-[13px] overflow-hidden rounded-b-md">
                  <div className="p-3 border-b border-slate-200">
                     <Link href="#" className="flex items-center text-[#2e3192] text-xs font-medium hover:underline">
                        <Pencil className="w-3 h-3 mr-1.5" />
                        View Profile
                     </Link>
                  </div>

                  <div className="py-2 border-b border-slate-200 flex flex-col">
                     <Link href="/" className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        <Home className="w-4 h-4 mr-3 text-slate-500" />
                        Home
                     </Link>
                     <Link href="#" className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        <FileUp className="w-4 h-4 mr-3 text-slate-500" />
                        Post Your Requirement
                     </Link>
                     <Link href="#" className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        <UserCheck className="w-4 h-4 mr-3 text-slate-500" />
                        Verified Business Buyer
                     </Link>
                     <Link href="#" className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        <Folder className="w-4 h-4 mr-3 text-slate-500" />
                        Products/Services Directory
                     </Link>
                     <Link href="#" className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        <MessageSquare className="w-4 h-4 mr-3 text-slate-500" />
                        My Orders
                     </Link>
                     <Link href="#" className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700">
                        <Settings className="w-4 h-4 mr-3 text-slate-500" />
                        Settings <span className="ml-2 text-[8px] font-black text-[#ff9900] bg-[#fff5e6] px-1.5 py-0.5 rounded leading-none italic">NEW</span>
                     </Link>
                  </div>

                  <div className="py-2 border-b border-slate-200 flex flex-col">
                     <Link href="#" className="px-4 py-2 hover:bg-slate-50 transition-colors block text-slate-700">
                        <div className="flex items-center">
                           <span>Business Loans</span>
                           <span className="ml-2 text-[8px] font-black text-[#ff9900] bg-[#fff5e6] px-1.5 py-0.5 rounded leading-none italic">NEW</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Loans made simple</span>
                     </Link>
                     <Link href="#" className="px-4 py-2 hover:bg-slate-50 transition-colors block text-slate-700">
                        <div className="flex items-center">
                           <span>Ship With IndiaMART</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Easy booking of transport</span>
                     </Link>
                     <Link href="#" className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors mt-1 text-slate-700">
                        <Smartphone className="w-4 h-4 mr-3 text-slate-500" />
                        Download App
                     </Link>
                  </div>

                  <div className="py-1 flex flex-col bg-slate-50 hover:bg-slate-100 transition-colors">
                     <Link href="/login" className="flex items-center justify-center px-4 py-3 text-slate-600 font-medium w-full text-center">
                        Sign In as Different User
                     </Link>
                  </div>
              </div>
           </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[240px] bg-white border-r border-border/50 flex flex-col sticky top-[60px] h-[calc(100vh-60px)]">
          <div className="p-6 border-b border-border/30 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#3b235d] rounded-full flex items-center justify-center text-white text-xl font-black">B</div>
             <div>
               <h3 className="font-bold text-foreground">Buyer</h3>
               <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">Premium Plan</span>
             </div>
          </div>
          
          <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar">
            {SIDEBAR_ITEMS.map((item, i) => (
              <Link 
                key={i} 
                href={item.href || "#"}
                className={cn(
                  "flex items-center justify-between px-6 py-3 transition-colors group",
                  item.active ? "bg-[#f1f3f6] text-[#3b235d]" : "text-foreground/70 hover:bg-secondary/50"
                )}
              >
                <div className="flex items-center gap-4">
                   <item.icon className={cn("w-5 h-5", item.active ? "text-[#3b235d]" : "text-muted group-hover:text-primary")} />
                   <span className={cn("text-xs font-bold", item.active ? "font-extrabold" : "font-medium")}>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[8px] font-black text-[#ff9900] bg-[#fff5e6] px-1.5 py-0.5 rounded leading-none italic">{item.badge}</span>
                )}
              </Link>
            ))}
          </nav>

          <Link href="#" className="p-6 border-t border-border/30 flex items-center gap-3 text-muted hover:text-foreground transition-colors group">
            <HelpCircle className="w-5 h-5 group-hover:text-primary" />
            <span className="text-xs font-bold">Help and support</span>
          </Link>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Top Search Bar */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-border/40 flex gap-4">
             <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/30 rounded-lg min-w-[160px] border border-border/50 group cursor-pointer hover:border-primary/30 transition-colors">
                <MapPin className="w-4 h-4 text-muted group-hover:text-primary" />
                <span className="text-sm font-bold text-foreground/80">Udaipur</span>
                <ChevronDown className="w-4 h-4 ml-auto text-muted" />
             </div>
             <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Enter product / service"
                  className="w-full h-full px-4 rounded-lg border border-border focus:border-primary outline-none text-sm font-medium placeholder:text-muted/60"
                />
             </div>
             <Button className="bg-[#00a699] hover:bg-[#008f84] px-10 font-extrabold shadow-md">Search</Button>
             <Button className="bg-[#3b235d] hover:bg-[#2d1a47] px-8 font-extrabold shadow-md">Post RFQ</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Recommendations Section */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-border/40 overflow-hidden">
               <div className="p-6 border-b border-border/20 flex items-center justify-between">
                  <h2 className="text-lg font-extrabold text-[#1c2b3e]">Categories You May Like</h2>
                  <Link href="#" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">View All</Link>
               </div>
               <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {CATEGORIES.map((cat, i) => (
                      <div key={i} className="group border border-border/40 rounded-xl p-3 flex flex-col gap-4 hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary/20">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h3 className="text-xs font-extrabold text-foreground leading-tight min-h-[32px]">{cat.title}</h3>
                        <Button variant="outline" size="sm" className="w-full text-[10px] font-black uppercase text-[#00a699] border-[#00a699]/30 hover:bg-[#00a699] hover:text-white group-hover:border-[#00a699]">
                          Get Quotes
                        </Button>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* Complete Sign-In Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-8 flex flex-col items-center text-center justify-center space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
               <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-inner">
                  <BadgeCheck className="w-8 h-8" />
               </div>
               <div className="space-y-2 z-10">
                  <h3 className="text-xl font-black text-foreground">Complete Sign-In</h3>
                  <p className="text-xs font-medium text-muted px-4 leading-relaxed">
                    Access your profile, messages, past orders and more
                  </p>
               </div>
               <Button className="w-full bg-[#00a699] hover:bg-[#008f84] h-12 font-extrabold rounded-xl shadow-lg z-10">
                 Continue with OTP
               </Button>
               <button className="text-[10px] font-bold text-muted hover:text-primary transition-colors uppercase tracking-widest pt-2">
                 Sign in as different user
               </button>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Track Order Button */}
      <div className="fixed bottom-10 right-10 z-40">
         <Button className="h-14 px-8 rounded-full bg-[#3b235d] shadow-2xl shadow-[#3b235d]/40 gap-3 border-2 border-white/20 hover:scale-105 transition-transform group">
            <Truck className="w-6 h-6 animate-bounce" />
            <span className="text-lg font-black tracking-tight">Track Order</span>
         </Button>
      </div>
    </div>
  );
}
