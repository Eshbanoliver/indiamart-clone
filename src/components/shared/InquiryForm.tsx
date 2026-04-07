"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, User, Building2, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";


interface InquiryFormProps {
  productName?: string;
  onClose?: () => void;
}

export const InquiryForm = ({ productName, onClose }: InquiryFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onClose) onClose();
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl shadow-xl border border-primary/20 space-y-6 max-w-md mx-auto animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Your Inquiry Sent!</h3>
        <p className="text-muted leading-relaxed font-medium">
          We have successfully shared your requirement with <span className="text-primary font-bold">{productName || "the supplier"}</span>. They will get back to you shortly.
        </p>
        <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
           <div className="h-full bg-primary animate-[progress_3s_linear_infinite]" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-primary/10 overflow-hidden max-w-xl mx-auto ring-1 ring-black/5">
      <div className="bg-primary/5 p-6 md:p-8 border-b border-primary/5 relative">
        <h3 className="text-2xl font-extrabold text-primary tracking-tight">Post Your Requirement</h3>
        <p className="text-sm font-semibold text-muted mt-2 uppercase tracking-widest">Connect with verified suppliers</p>
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-white rounded-full transition-colors text-muted hover:text-primary shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 group">
            <label className="text-sm font-bold text-foreground/70 uppercase tracking-wider group-focus-within:text-primary transition-colors">Requirement Name</label>
            <div className="relative">
              <PackageSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted transition-colors group-focus-within:text-primary" />
              <Input 
                required 
                defaultValue={productName} 
                className="pl-11 h-12 font-medium bg-secondary/30 border-secondary focus:bg-white" 
                placeholder="Product/Service needed..." 
              />
            </div>
          </div>
          
          <div className="space-y-2 group">
            <label className="text-sm font-bold text-foreground/70 uppercase tracking-wider group-focus-within:text-primary transition-colors">Your Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted transition-colors group-focus-within:text-primary" />
              <Input 
                required 
                className="pl-11 h-12 font-medium bg-secondary/30 border-secondary focus:bg-white" 
                placeholder="Full Name" 
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-sm font-bold text-foreground/70 uppercase tracking-wider group-focus-within:text-primary transition-colors">Mobile Number</label>
            <div className="relative flex gap-2">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3 border-r border-border text-xs font-extrabold text-foreground/50 transition-colors group-focus-within:text-primary/70 group-focus-within:border-primary/30">
                 IN (+91)
              </div>
              <Input 
                required 
                type="tel" 
                className="pl-24 h-12 font-medium bg-secondary/30 border-secondary focus:bg-white" 
                placeholder="98765 43210" 
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-sm font-bold text-foreground/70 uppercase tracking-wider group-focus-within:text-primary transition-colors">Business Name</label>
            <div className="relative">
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted transition-colors group-focus-within:text-primary" />
              <Input 
                className="pl-11 h-12 font-medium bg-secondary/30 border-secondary focus:bg-white" 
                placeholder="Company/Business" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 group">
          <label className="text-sm font-bold text-foreground/70 uppercase tracking-wider group-focus-within:text-primary transition-colors">Message/Requirements Details</label>
          <textarea 
            required
            className="w-full min-h-[140px] rounded-2xl border border-secondary bg-secondary/30 p-5 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted"
            placeholder="Please provide specific details about your requirement (quantity, specifications, purpose, etc...)"
          ></textarea>
        </div>

        <Button type="submit" size="lg" className="w-full text-lg font-extrabold h-14 rounded-2xl shadow-lg hover:shadow-primary/20 bg-primary hover:bg-primary/90 gap-3 group">
          Post My Requirement
          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
        <p className="text-[10px] text-center text-muted font-bold uppercase tracking-widest px-8">
           We prioritize your data security. Your information will only be shared with verified suppliers matching your needs.
        </p>
      </form>
    </div>
  );
};
