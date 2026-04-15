import { NavigationMenuLink } from "@/components/shadcn/navigation-menu";
import {
  BarChart3,
  Globe,
  Palette,
  Link2,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

type JumpIconKey = "chart" | "globe" | "palette" | "link" | "template";
export type JumpAccent = "primary" | "secondary" | "tertiary";

const ICONS: Record<JumpIconKey, LucideIcon> = {
  chart: BarChart3,
  globe: Globe,
  palette: Palette,
  link: Link2,
  template: LayoutTemplate,
};

// Static class strings so Tailwind's JIT picks them up.
const ACCENT_STYLES: Record<
  JumpAccent,
  { chip: string; icon: string; hoverBorder: string; glow: string }
> = {
  primary: {
    chip: "bg-primary-500/15 border-primary-500/30",
    icon: "text-primary-300",
    hoverBorder: "group-hover:border-primary-500/40",
    glow: "group-hover:shadow-primary-500/10",
  },
  secondary: {
    chip: "bg-secondary-500/15 border-secondary-500/30",
    icon: "text-secondary-300",
    hoverBorder: "group-hover:border-secondary-500/40",
    glow: "group-hover:shadow-secondary-500/10",
  },
  tertiary: {
    chip: "bg-tertiary-500/15 border-tertiary-500/30",
    icon: "text-tertiary-300",
    hoverBorder: "group-hover:border-tertiary-500/40",
    glow: "group-hover:shadow-tertiary-500/10",
  },
};

interface JumpListItemProps {
  title: string;
  description: string;
  selector: string;
  onClick: (selector: string) => void;
  icon: JumpIconKey;
  accent: JumpAccent;
}

export function JumpListItem({
  title,
  description,
  selector,
  onClick,
  icon,
  accent,
}: JumpListItemProps) {
  const Icon = ICONS[icon];
  const styles = ACCENT_STYLES[accent];

  return (
    <li className="!flex">
      <NavigationMenuLink asChild>
        <button
          className={`group flex h-full w-full select-none flex-col justify-between rounded-xl border bg-white/5 border-white/10 ${styles.hoverBorder} ${styles.glow} hover:bg-white/[0.07] hover:shadow-lg p-4 no-underline outline-hidden transition-all text-left`}
          onClick={() => onClick(selector)}
        >
          <div
            className={`w-9 h-9 rounded-lg border ${styles.chip} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}
          >
            <Icon className={`w-4 h-4 ${styles.icon}`} />
          </div>
          <div className="flex-1">
            <span className="font-semibold text-white text-sm mb-1 block">
              {title}
            </span>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </button>
      </NavigationMenuLink>
    </li>
  );
}
