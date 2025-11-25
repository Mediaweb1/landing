import { Send, Files, Link, X, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { Button } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";

interface ChatStep {
  type: "user" | "ai" | "complete";
  message: string;
  delay: number;
  hasAssetManager?: boolean;
  needsTyping?: boolean;
}

interface ChatProps {
  chatSteps: ChatStep[];
  currentStep: number;
  isTyping: boolean;
  typedText: string;
  inputTypedText: string;
  showAssetManager: boolean;
  mockSelectedAssets: Array<{
    id: string;
    filename: string;
    url: string;
    type: string;
    fileSize: number;
  }>;
}

export const Chat = ({
  chatSteps,
  currentStep,
  isTyping,
  typedText,
  inputTypedText,
  showAssetManager,
  mockSelectedAssets,
}: ChatProps) => {
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputTypedText]);

  useEffect(() => {
    if (inputTypedText === "") {
      resetTextareaHeight();
    }
  }, [inputTypedText]);

  useEffect(() => {
    scrollToBottom();
  }, [currentStep, isTyping]);

  useEffect(() => {
    if (currentStep >= chatSteps.length) {
      setShowCompletionPopup(true);
      const timer = setTimeout(() => {
        setShowCompletionPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, chatSteps.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 backdrop-blur-sm shadow-2xl rounded-lg h-[700px] flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-8 pb-4 border-b border-slate-700 flex-shrink-0">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm ml-4">AI Site Builder</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-8 pt-4 pb-0 flex flex-col justify-end overflow-hidden">
        <div
          ref={messagesContainerRef}
          className="space-y-4 flex-1 overflow-y-auto pb-4"
        >
          {chatSteps.slice(0, currentStep).map((step, index) => (
            <div
              key={index}
              className={`flex ${
                step.type === "user" ? "justify-end" : "justify-start"
              } animate-fade-in`}
            >
              <div
                className={`max-w-[280px] px-4 py-3 rounded-2xl break-words ${
                  step.type === "user"
                    ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white"
                    : step.type === "ai"
                    ? "bg-slate-700 text-gray-200"
                    : "bg-gradient-to-r from-secondary-600 to-secondary-500 text-white"
                }`}
              >
                <p className="text-sm">{step.message}</p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && chatSteps[currentStep]?.type === "ai" && (
            <div className="flex justify-start">
              <div className="bg-slate-700 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Asset Manager */}
      {showAssetManager && (
        <div className="px-8 flex-shrink-0">
          <div className="space-y-2">
            {mockSelectedAssets.length > 0 && (
              <div className="flex flex-wrap gap-1 max-h-24">
                {mockSelectedAssets
                  .filter((asset) => asset && asset.filename)
                  .map((asset) => (
                    <div
                      key={asset.id}
                      className="flex items-center gap-1 border-2 border-slate-600 bg-slate-700 rounded px-2 py-2 w-auto"
                    >
                      <span
                        className="text-xs text-primary-400 hover:text-primary-300 truncate max-w-24"
                        title={asset.filename}
                      >
                        {asset.filename}
                      </span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-4 w-4 p-0 text-primary-400 hover:text-primary-300"
                        title="Insert reference"
                      >
                        <Link className="w-3 h-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-4 w-4 p-0 text-primary-400 hover:text-primary-300"
                        title="Remove asset"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
              </div>
            )}

            <Button
              variant="outline"
              size="sm"
              className="w-full h-10 px-6 border-dashed border-2 border-slate-600 bg-slate-700 hover:bg-slate-600 hover:border-slate-500 text-gray-300"
            >
              <Files className="w-3 h-3 mr-1" />
              <span className="text-xs">Assets</span>
              {mockSelectedAssets.length > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-1 text-xs h-4 px-1 bg-primary-600 text-white"
                >
                  {mockSelectedAssets.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Input Field */}
      <div className="p-8 pt-4 pb-6 flex-shrink-0">
        <div className="flex items-end gap-2 bg-slate-700 rounded-lg px-4 py-3">
          <textarea
            ref={textareaRef}
            placeholder="Describe your website..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm resize-none min-h-[20px] max-h-32 overflow-y-auto"
            value={inputTypedText}
            readOnly
          />
          <Button
            size="sm"
            className="bg-primary-600 hover:bg-primary-500 flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-8 pb-8 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Building your site...</span>
          <span className="text-sm text-gray-400">
            {currentStep >= chatSteps.length
              ? "Complete"
              : `Step ${currentStep + 1}`}
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000"
            style={{
              width:
                currentStep >= chatSteps.length
                  ? "100%"
                  : `${(currentStep / chatSteps.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
