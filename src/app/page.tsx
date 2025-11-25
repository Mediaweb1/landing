import Hero from "./_components/hero";
import VideoSection from "./_components/video-section";
import Features from "./_components/features";
import CustomDomains from "./_components/custom-domains";
import MediaKit from "./_components/mediakit";
import FileStorage from "./_components/file-storage";
import Theme from "./_components/theme";
import DesignerTemplates from "./_components/templates";
import Sandbox from "./_components/sandbox";
import AIAssistant from "./_components/AI-assistant";
import PricingPlans from "./pricing/pricing-plans";

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10">
        <Hero />
        <VideoSection />
        <Features />
        <AIAssistant />
        <Sandbox />
        <MediaKit />
        <CustomDomains />
        <DesignerTemplates />
        <Theme />
        <FileStorage />
        <PricingPlans />
      </div>
    </div>
  );
};

export default Landing;
