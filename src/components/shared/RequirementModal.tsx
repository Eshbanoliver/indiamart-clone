"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, SendHorizontal, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface RequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequirementModal = ({ isOpen, onClose }: RequirementModalProps) => {
  const [step, setStep] = useState<"form" | "success">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    setTimeout(() => {
      onClose();
      // Reset after closing
      setTimeout(() => setStep("form"), 500);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row min-h-[500px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-muted hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side - Info */}
            <div className="w-full md:w-[40%] bg-[#f1f5f9] p-8 md:p-10 flex flex-col justify-between border-r border-border/50">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Tell us your requirement and <span className="text-primary">get free quotes</span> from multiple sellers
                </h3>
                
                <div className="relative w-full aspect-square max-w-[200px] mx-auto opacity-90">
                  <Image 
                    src="/b2b_inquiry_illustration.png" 
                    alt="Inquiry Illustration" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <p className="text-sm font-bold text-foreground uppercase tracking-widest">How it Works</p>
                <div className="space-y-3">
                  {[
                    "Tell us what you need by filling the form",
                    "Receive Verified supplier details",
                    "Compare Quotations and seal the deal"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs font-semibold text-muted leading-snug">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 p-8 md:p-12 flex items-center">
              <AnimatePresence mode="wait">
                {step === "form" ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="w-full space-y-8"
                  >
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/80">
                          Enter Product/Service name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          required 
                          placeholder="Enter Product / Service name" 
                          className="h-12 bg-white border-secondary focus:border-primary px-4 font-medium"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/80">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          <div className="bg-[#f1f5f9] border border-border rounded-xl px-4 flex items-center font-bold text-sm text-foreground/60">
                            +91
                          </div>
                          <Input 
                            required 
                            type="tel"
                            placeholder="Enter your mobile" 
                            className="h-12 bg-white border-secondary focus:border-primary px-4 font-medium flex-1 outline-primary"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#007b7b] hover:bg-[#006666] text-white px-8 h-12 rounded-full font-bold flex items-center justify-between min-w-[140px] shadow-lg shadow-[#007b7b]/20 group transition-all"
                    >
                      <span>Go</span>
                      <div className="bg-white/20 p-1.5 rounded-full ml-3 group-hover:translate-x-1 transition-transform">
                        <SendHorizontal className="w-4 h-4" />
                      </div>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Requirement Posted!</h3>
                    <p className="text-muted font-medium">We've shared your requirement with top suppliers. They'll contact you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
