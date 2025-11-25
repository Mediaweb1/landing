"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Instagram,
  User,
  Eye,
  Heart,
  Users,
  Check,
} from "lucide-react";

const SocialConnectionAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % 3);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const LoginStep = () => (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 bg-linear-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
        <Instagram className="w-8 h-8 text-white" />
      </div>
      <div className="text-center space-y-2">
        <h4 className="text-lg font-semibold text-white">Connect Instagram</h4>
        <p className="text-sm text-gray-400">Log in to your account</p>
      </div>
      <div className="w-full max-w-xs space-y-3">
        <div className="h-10 bg-slate-700/50 rounded-md border border-slate-600/50 flex items-center px-3">
          <span className="text-xs text-gray-500">username@email.com</span>
        </div>
        <div className="h-10 bg-slate-700/50 rounded-md border border-slate-600/50 flex items-center px-3">
          <span className="text-xs text-gray-500">••••••••</span>
        </div>
        <div className="h-9 bg-linear-to-r from-pink-500 to-purple-600 rounded-md flex items-center justify-center">
          <span className="text-xs font-medium text-white">Log In</span>
        </div>
      </div>
    </div>
  );

  const PermissionsStep = () => (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100"
            height="100"
            className="flex items-center justify-center"
          >
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#581c87" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="url(#logoGradient)"
              stroke="url(#logoGradient)"
              strokeWidth="4"
            />
            <path
              transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
              className="fill-transparent"
              d="M56.545,11.262l-0.204-0.356H43.659l-38.8,67.202l6.342,10.987h77.729h0.407l5.803-10.987L56.545,11.262z"
            />
            <path
              transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
              stroke="url(#logoGradient)"
              fill="white"
              d="M93.081,77.395H28.517l4.196-6.993h17.282H78.83L45.302,12.332h10.213L93.081,77.395z"
            />
            <path
              transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
              stroke="transparent"
              fill="url(#logoGradient)"
              d="M33.557,68.729L50,40.249l16.443,28.481H33.557z"
            />
            <path
              transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
              stroke="transparent"
              fill="white"
              d="M68.179,68.729L45.443,28.881L11.764,87.217l-5.258-9.109L44.07,13.049l32.277,55.681H68.179"
            />
            <path
              transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
              stroke="url(#logoGradient)"
              fill="white"
              d="M88.508,87.643H13.166l32.266-55.887l3.875,6.843L36.479,60.814l0,0L26.042,78.821h67.039L88.508,87.643z"
            />
          </svg>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
        <div className="w-12 h-12 bg-linear-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Instagram className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h4 className="text-lg font-semibold text-white">Grant Permissions</h4>
        <p className="text-sm text-gray-400">Allow access to collect data</p>
      </div>
      <div className="w-full max-w-xs space-y-2">
        <div className="flex items-center space-x-2 text-xs text-gray-300">
          <User className="w-4 h-4 text-primary-400" />
          <span>Profile information</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-300">
          <Eye className="w-4 h-4 text-primary-400" />
          <span>Engagement metrics</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-300">
          <Users className="w-4 h-4 text-primary-400" />
          <span>Audience demographics</span>
        </div>
        <div className="h-9 bg-linear-to-r from-primary-500 to-secondary-500 rounded-md flex items-center justify-center mt-4">
          <span className="text-xs font-medium text-white">Authorize</span>
        </div>
      </div>
    </div>
  );

  const SuccessStep = () => (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 bg-linear-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center animate-pulse">
        <Check className="w-8 h-8 text-white" />
      </div>
      <div className="text-center space-y-2">
        <h4 className="text-lg font-semibold text-white">Connected!</h4>
        <p className="text-sm text-gray-400">Data syncing in progress</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <LoginStep />;
      case 1:
        return <PermissionsStep />;
      case 2:
        return <SuccessStep />;
      default:
        return <LoginStep />;
    }
  };

  return (
    <div className="w-full animate-opacity-in opacity-0 duration-1000 delay-300">
      {renderCurrentStep()}

      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map((step) => (
          <div
            key={step}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              step === currentStep ? "bg-primary-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-12 left-4 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default SocialConnectionAnimation;
