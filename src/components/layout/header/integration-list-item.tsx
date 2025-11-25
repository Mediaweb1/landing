import Image from "next/image";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/shadcn/navigation-menu";

interface IntegrationListItemProps {
  title: string;
  description: string;
  href: string;
  imageURL: string;
  index: number;
  isComingSoon?: boolean;
}

export function IntegrationListItem({ 
  title, 
  description, 
  href, 
  imageURL, 
  index,
  isComingSoon = false
}: IntegrationListItemProps) {
  
  const gradients = [
    "from-blue-500/20 to-blue-600/20",
    "from-pink-500/20 to-purple-500/20",
    "from-gray-800/20 to-black/20",
    "from-red-500/20 to-red-600/20",
    "from-yellow-400/20 to-yellow-500/20",
    "from-gray-700/20 to-gray-800/20",
  ];
  
  const borderColors = [
    "border-blue-500/30",
    "border-pink-500/30", 
    "border-gray-700/30",
    "border-red-500/30",
    "border-yellow-400/30",
    "border-gray-600/30",
  ];

  return (
    <li className="!flex">
      <NavigationMenuLink asChild>
        <a
          href={isComingSoon ? '#' : href}
          className={cn(
            `group flex flex-col items-center select-none rounded-xl border bg-gradient-to-br ${gradients[index % gradients.length]} ${borderColors[index % borderColors.length]} backdrop-blur-xs p-4 leading-none no-underline outline-hidden transition-all duration-300 hover:shadow-lg hover:border-opacity-70 text-center relative overflow-hidden w-full`,
            isComingSoon && 'cursor-not-allowed opacity-75'
          )}
          onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
        >
          <div className="absolute -inset-px bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          {isComingSoon && (
            <div className="absolute top-1 right-1 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse whitespace-nowrap">
                Coming Soon
              </div>
            </div>
          )}
          
          <div className="relative mb-3">
            <Image
              src={imageURL}
              width={48}
              height={48}
              className={cn(
                "aspect-square h-12 w-12 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg",
                isComingSoon && "grayscale group-hover:grayscale-0"
              )}
              alt={title}
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <span className="font-semibold leading-none text-white group-hover:text-opacity-90 transition-colors text-sm">
              {title}
            </span>
            <p className="text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors text-center line-clamp-2">
              {isComingSoon ? 'Integration coming soon!' : description}
            </p>
          </div>
          
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
          
          <div className={cn(
            "absolute bottom-2 left-2 w-2 h-2 rounded-full animate-ping opacity-60",
            isComingSoon ? "bg-orange-400" : "bg-green-400"
          )}></div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
