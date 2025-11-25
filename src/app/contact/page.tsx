import ContactForm from "@/components/forms/contact-form";
import { Mail, Send } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 xl:p-16 py-20">
        <div className="w-full max-w-3xl flex flex-col items-center space-y-12">
          {/* Header Section */}
          <div className="w-full flex flex-col items-center space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/20">
              <Send size={40} className="text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Contact Us
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Have a question or want to work together? Send us a message and we'll get back to you as soon as possible.
            </p>

            <div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50">
              <Mail size={20} className="text-primary" />
              <span className="text-slate-200 text-lg font-medium">
                admin@mediaweb.app
              </span>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-black/20 p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
