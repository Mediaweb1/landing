"use client";

import { useState, useEffect } from "react";
import { Chat } from "./chat";
import { AssetManager } from "./asset-manager";
import { WebsitePreview } from "./website-preview";

import { Card } from "@mediaweb1/sdk/shadcn";

const AIAssistant = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [inputTypedText, setInputTypedText] = useState("");
  const [showAssetManager, setShowAssetManager] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [showCursor, setShowCursor] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState<
    Array<{
      id: string;
      filename: string;
      url: string;
      type: string;
      fileSize: number;
    }>
  >([]);
  const [assetsSelected, setAssetsSelected] = useState(false);
  const [showWebsitePreview, setShowWebsitePreview] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const chatSteps = [
    {
      type: "user" as const,
      message:
        "I am a travel vlogger and photographer, can you create a warm, colorful website using the images I selected.",
      delay: 1500,
      hasAssetManager: true,
      needsTyping: true,
    },
    {
      type: "ai" as const,
      message:
        "Perfect! I'll create a beautiful warm and colorful travel website using your selected images. The layout will showcase your photography beautifully.",
      delay: 1000,
    },
    {
      type: "user" as const,
      message:
        "It looks fantastic, now I want you to make a footer with links to these pages: about me, contact, mediakit and linktree. And links to my instagram, facebook, youtube and tiktok profiles at the bottom.",
      delay: 1500,
      needsTyping: true,
    },
    {
      type: "ai" as const,
      message:
        "Excellent! I've added a comprehensive footer with all your requested page links and social media profiles. Your website now has a complete navigation structure.",
      delay: 1000,
    },
    {
      type: "complete" as const,
      message: "Website generated successfully",
      delay: 1500,
    },
  ];

  const mockImages = [
    { id: 1, name: "ancient-temple-thailand.jpg", selected: false },
    { id: 2, name: "cherry-blossoms-japan.jpg", selected: false },
    { id: 3, name: "mexico-cathedral.jpg", selected: false },
    { id: 4, name: "moscow-red-square.jpg", selected: false },
  ];

  const typeMessageInInput = (message: string, callback: () => void) => {
    let index = -1;
    setInputTypedText("");
    setTypedText("");

    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setInputTypedText((prev) => {
          if (message[index]) {
            return prev + message[index];
          }
          return prev;
        });
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          callback();
        }, 500);
      }
    }, 35);
  };

  const handleAssetManagerClick = () => {
    setShowImageModal(true);
    setShowCursor(true);

    setTimeout(() => {
      const imagesToSelect = [1, 2, 3, 4];
      const assetData = [
        {
          id: "1",
          filename: "cherry-blossoms-japan.jpg",
          url: "",
          type: "image/jpeg",
          fileSize: 1024000,
        },
        {
          id: "2",
          filename: "mexico-cathedral.jpg",
          url: "",
          type: "image/jpeg",
          fileSize: 2048000,
        },
        {
          id: "3",
          filename: "ancient-temple-asia.jpg",
          url: "",
          type: "image/jpeg",
          fileSize: 1536000,
        },
        {
          id: "4",
          filename: "moscow-red-square.jpg",
          url: "",
          type: "image/jpeg",
          fileSize: 1792000,
        },
      ];

      imagesToSelect.forEach((imageId, index) => {
        setTimeout(() => {
          setSelectedImages((prev) => [...prev, imageId]);
          const asset = assetData.find((a) => a.id === imageId.toString());
          if (asset) {
            setSelectedAssets((prev) => [...prev, asset]);
          }
        }, (index + 1) * 600);
      });

      setTimeout(() => {
        setShowImageModal(false);
        setShowCursor(false);
        setAssetsSelected(true);

        setTimeout(() => {
          setInputTypedText("");
          setTypedText("");
          setCurrentStep((prev) => prev + 1);
          setSelectedAssets([]);
        }, 500);
      }, 3000);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < chatSteps.length) {
        const step = chatSteps[currentStep];

        if (step.needsTyping && step.type === "user") {
          setIsTyping(true);
          if (step.hasAssetManager) {
            setShowAssetManager(true);
          }
          typeMessageInInput(step.message, () => {
            setIsTyping(false);
            if (step.hasAssetManager) {
              handleAssetManagerClick();
              return;
            }

            setInputTypedText("");
            setTypedText("");
            setCurrentStep((prev) => prev + 1);
          });
        } else {
          setIsTyping(true);
          setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
            setIsTyping(false);

            if (currentStep === 1) {
              setTimeout(() => {
                setShowWebsitePreview(true);
              }, 500);
            }

            if (currentStep === 3) {
              setTimeout(() => {
                setShowFooter(true);
              }, 500);
            }
          }, 800);
        }
      }
    }, chatSteps[currentStep]?.delay || 0);

    return () => clearTimeout(timer);
  }, [currentStep]);

  useEffect(() => {
    if (currentStep >= chatSteps.length) {
      const resetTimer = setTimeout(() => {
        setCurrentStep(0);
        setTypedText("");
        setInputTypedText("");
        setShowAssetManager(false);
        setSelectedImages([]);
        setSelectedAssets([]);
        setAssetsSelected(false);
        setShowWebsitePreview(false);
        setShowFooter(false);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentStep]);

  return (
    <section id="ease-of-use" className="relative px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tell our AI what you want.{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Watch it build.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No tech experience needed. Describe your idea in simple terms, and
            instantly see your website come to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-full mx-auto">
          <div className="w-full lg:w-2/5 relative max-w-[600px] lg:max-w-[1000px]">
            <Card className="border-slate-600">
              <AssetManager
                isOpen={showImageModal}
                images={mockImages}
                selectedImages={selectedImages}
                showCursor={showCursor}
              />

              <Chat
                chatSteps={chatSteps}
                currentStep={currentStep}
                isTyping={isTyping}
                typedText={typedText}
                inputTypedText={inputTypedText}
                showAssetManager={showAssetManager}
                mockSelectedAssets={selectedAssets}
              />
            </Card>
          </div>

          <div className="w-full lg:w-3/5 max-w-[600px] lg:max-w-[1000px]">
            <WebsitePreview
              isVisible={showWebsitePreview}
              showFooter={showFooter}
              images={[
                "/images/landing-page-ai-assistant-demo/thailand.webp",
                "/images/landing-page-ai-assistant-demo/japan.webp",
                "/images/landing-page-ai-assistant-demo/mexico.webp",
                "/images/landing-page-ai-assistant-demo/russia.webp",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
