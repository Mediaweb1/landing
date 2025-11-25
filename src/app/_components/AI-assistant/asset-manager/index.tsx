import { Upload } from "lucide-react";
import { AssetBrowser } from "./asset-browser";

import { Button } from "@mediaweb1/sdk/shadcn";

interface AssetManagerProps {
  isOpen: boolean;
  images: Array<{
    id: number;
    name: string;
  }>;
  selectedImages: number[];
  showCursor: boolean;
  onImageSelect?: (id: number) => void;
  onClose?: () => void;
}

export const AssetManager = ({ 
  isOpen, 
  images, 
  selectedImages, 
  showCursor, 
  onImageSelect, 
  onClose 
}: AssetManagerProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-start justify-center bg-black/50 pt-24 max-w-[600px] lg:max-w-[1000px]">
      <div className="w-full mx-4 bg-slate-800 border border-slate-600 rounded-lg shadow-lg animate-fade-in" 
           style={{ 
             maxWidth: 'calc(100% - 64px)', 
             height: 'calc(100% - 180px)',
             maxHeight: '300px' 
           }}>
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Asset Manager</h3>
            <p className="text-xs text-gray-400">Select files for your project</p>
          </div>
          <Button className="h-8 px-3 text-xs bg-primary-600 hover:bg-primary-500">
            <Upload className="w-3 h-3 mr-1" />
            Upload
          </Button>
        </div>
        
        <AssetBrowser
          images={images}
          selectedImages={selectedImages}
          showCursor={showCursor}
          onImageSelect={onImageSelect}
        />
      </div>
    </div>
  );
};
