"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Briefcase, 
  Calendar,
  Edit3,
  ShieldCheck,
  Award,
  Package,
  MessageSquare,
  Settings,
  Camera,
  Save,
  X,
  CheckCircle2,
  AlertCircle,
  LayoutDashboard,
  Search,
  Banknote,
  Truck,
  BarChart3,
  HelpCircle,
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
  Smartphone,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: User, label: "My Profile", href: "/profile", active: true },
  { icon: MessageSquare, label: "Messages" },
  { icon: Search, label: "Know Your Seller", badge: "NEW" },
  { icon: ShieldCheck, label: "Payment Protection" },
  { icon: BadgeCheck, label: "TrustSEAL Buyer" },
  { icon: Banknote, label: "Loans" },
  { icon: Truck, label: "Ship With IM" },
  { icon: BarChart3, label: "Credit Score" },
];

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");

  // Mock user data
  const [userData, setUserData] = useState({
    personal: {
      name: "Rahul Sharma",
      email: "rahul.sharma@business.com",
      phone: "+91 98765 43210",
      company: "Sharma Enterprises",
      designation: "Procurement Manager",
      address: {
        street: "123, Industrial Area",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        country: "India"
      },
      joinDate: "15 Jan 2024",
      verified: true,
      membershipType: "Premium"
    },
    business: {
      gstNumber: "27AAAPL1234C1ZV",
      panNumber: "AAAPL1234C",
      businessType: "Manufacturer",
      industry: "Industrial Machinery",
      annualRevenue: "5-10 Crore",
      employeeCount: "50-100",
      website: "www.sharmaenterprises.com"
    },
    preferences: {
      language: "English",
      currency: "INR",
      timezone: "IST (UTC+5:30)",
      emailNotifications: true,
      smsNotifications: false,
      newsletterSubscription: true
    }
  });

  const handleSave = () => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setIsEditing(false);
      setTimeout(() => setSaveStatus("idle"), 2000);
    }, 1500);
  };

  const handleInputChange = (category: string, field: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
  };

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
                     <Link href="#" className="flex items-center px-4 py-2 hover:bg-slate-50 mt-1 text-slate-700">
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
          {/* Profile Header and Verification Progress */}
          <div className="bg-white rounded-2xl shadow-sm border border-border/40 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#3b235d] rounded-full flex items-center justify-center text-white text-2xl font-bold">S</div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Shresth Solution</h1>
                  <p className="text-sm text-muted flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Udaipur, Rajasthan
                  </p>
                  <p className="text-xs text-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> 1 Year
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted">PROFILE STRENGTH</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="w-[26%] h-full bg-primary rounded-full"></div>
                </div>
                <span className="text-sm font-bold text-primary">26%</span>
              </div>
            </div>

            <div className="border-t border-border/40 pt-4 mt-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" /> Verified Buyer Progress
                </h2>
                <span className="text-sm text-muted">1/5 milestones</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full mb-4">
                <div className="w-[20%] h-full bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Name</span>
                  </div>
                  <div className="flex items-center gap-3 ml-8">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-muted">Add Company</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 text-sm font-medium">
                  Complete Verification
                </Button>
              </div>
            </div>
          </div>

          {/* Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Primary Details Card */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Primary Details</h3>
                <AlertCircle className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Mobile</span>
                  <span className="text-sm font-medium">+91 98765 43210</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Email</span>
                  <span className="text-sm font-medium">shresth@example.com</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/20">
                <p className="text-xs text-amber-600 font-medium">Missing alternative mobile</p>
              </div>
            </div>

            {/* Address Details Card */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Address Details</h3>
                <AlertCircle className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">City</span>
                  <span className="text-sm font-medium">Udaipur</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">State</span>
                  <span className="text-sm font-medium">Rajasthan</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Pincode</span>
                  <span className="text-sm font-medium">313001</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/20">
                <p className="text-xs text-amber-600 font-medium">Missing house no./block</p>
              </div>
            </div>

            {/* Business Details Card */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Business Details</h3>
                <AlertCircle className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Business Type</span>
                  <span className="text-sm font-medium">Individual</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Industry</span>
                  <span className="text-sm font-medium">Manufacturing</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/20">
                <p className="text-xs text-amber-600 font-medium">Missing company name</p>
              </div>
            </div>

            {/* Communication Settings Card */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Communication Settings</h3>
                <Settings className="w-5 h-5 text-muted" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Email Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">SMS Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/20">
                <p className="text-xs text-primary font-medium">Manage notifications</p>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Help</h3>
                <HelpCircle className="w-5 h-5 text-muted" />
              </div>
              <p className="text-sm text-muted mb-4">Get support & assistance</p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>

            {/* Raise a Ticket Card */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Raise a ticket</h3>
                <MessageSquare className="w-5 h-5 text-muted" />
              </div>
              <p className="text-sm text-muted mb-4">Initiate a support request</p>
              <Button variant="outline" className="w-full">
                Create Ticket
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
