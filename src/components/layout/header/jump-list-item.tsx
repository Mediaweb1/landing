import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/shadcn/navigation-menu";

interface JumpListItemProps {
  title: string;
  description: string;
  selector: string;
  onClick: (selector: string) => void;
  className?: string;
  gradient?: string;
  borderColor?: string;
  iconColor?: string;
  icon?: string;
}

export function JumpListItem({ 
  title, 
  description, 
  selector, 
  onClick, 
  className,
  gradient = "from-slate-500/20 to-slate-600/20",
  borderColor = "border-slate-500/30",
  iconColor = "from-slate-500 to-slate-600",
  icon = "default"
}: JumpListItemProps) {
  
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'chart':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'globe':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'template':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        );
      case 'palette':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <li className="!flex">
      <NavigationMenuLink asChild>
        <button
          className={cn(
            `group flex h-full w-full select-none flex-col justify-between rounded-xl border bg-gradient-to-br ${gradient} ${borderColor} backdrop-blur-xs p-4 no-underline outline-hidden transition-all duration-300 hover:shadow-lg hover:border-opacity-70 text-left relative overflow-hidden`,
            className
          )}
          onClick={() => onClick(selector)}
        >
          <div className="absolute -inset-px bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          <div className={`w-8 h-8 bg-gradient-to-r ${iconColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
            {getIcon(icon)}
          </div>
          
          <div className="flex-1">
            <span className="font-semibold leading-none text-white group-hover:text-opacity-90 transition-colors text-sm mb-2 block">
              {title}
            </span>
            <p className="text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors line-clamp-2">
              {description}
            </p>
          </div>
          
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
        </button>
      </NavigationMenuLink>
    </li>
  );
}
