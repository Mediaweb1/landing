import { CheckCircle, Plus, Link } from "lucide-react";

import { Button } from "@mediaweb1/sdk/shadcn";
import { Badge } from "@mediaweb1/sdk/shadcn";

interface AssetCardProps {
  image: {
    id: number;
    name: string;
  };
  isSelected: boolean;
  showCursor: boolean;
  onSelect?: (id: number) => void;
}

const getImageUrl = (id: number) => {
  const imageMap = {
    1: "/images/landing-page-ai-assistant-demo/thailand.webp",
    2: "/images/landing-page-ai-assistant-demo/japan.webp",
    3: "/images/landing-page-ai-assistant-demo/mexico.webp",
    4: "/images/landing-page-ai-assistant-demo/russia.webp",
  };
  return imageMap[id as keyof typeof imageMap];
};

export const AssetCard = ({
  image,
  isSelected,
  showCursor,
  onSelect,
}: AssetCardProps) => {
  return (
    <div
      className={`group cursor-pointer transition-all duration-200 hover:shadow-md overflow-hidden rounded-lg border-2 ${
        isSelected
          ? "border-primary-500 shadow-md"
          : "border-slate-600 hover:border-slate-500"
      }`}
      onClick={() => onSelect?.(image.id)}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={getImageUrl(image.id)}
          alt={image.name}
          className="w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 bg-primary-500/20 flex items-center justify-center transition-opacity ${
            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              isSelected
                ? "bg-primary-500 text-white"
                : "bg-white/90 text-gray-600"
            }`}
          >
            {isSelected ? (
              <CheckCircle className="w-3 h-3" />
            ) : (
              <Plus className="w-3 h-3" />
            )}
          </div>
        </div>

        {showCursor && !isSelected && (
          <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-black animate-pulse"></div>
        )}
      </div>

      <div className="p-2 space-y-1 bg-slate-750">
        <p
          className="text-xs font-medium text-white truncate"
          title={image.name}
        >
          {image.name}
        </p>
        <div className="flex justify-between items-center">
          <Badge
            variant="secondary"
            className="text-xs h-4 px-1 bg-slate-600 text-gray-300"
          >
            JPG
          </Badge>
          <Button
            size="sm"
            variant="ghost"
            className="h-5 w-5 p-0 text-primary-400 hover:text-primary-300"
            title="Insert reference"
          >
            <Link className="w-2 h-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
