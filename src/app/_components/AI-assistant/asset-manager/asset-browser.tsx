import { AssetCard } from "./asset-card";

interface AssetBrowserProps {
  images: Array<{
    id: number;
    name: string;
  }>;
  selectedImages: number[];
  showCursor: boolean;
  onImageSelect?: (id: number) => void;
}

export const AssetBrowser = ({
  images,
  selectedImages,
  showCursor,
  onImageSelect,
}: AssetBrowserProps) => {
  return (
    <div className="p-4 max-h-64 overflow-y-auto">
      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <AssetCard
            key={image.id}
            image={image}
            isSelected={selectedImages.includes(image.id)}
            showCursor={
              showCursor &&
              !selectedImages.includes(image.id) &&
              selectedImages.length < 4
            }
            onSelect={onImageSelect}
          />
        ))}
      </div>
    </div>
  );
};
