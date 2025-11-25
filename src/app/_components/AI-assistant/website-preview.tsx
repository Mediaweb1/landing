import { Instagram, Facebook, Youtube, Music, Menu } from "lucide-react";

interface WebsitePreviewProps {
  isVisible: boolean;
  images: string[];
  showFooter: boolean;
}

export const WebsitePreview = ({
  isVisible,
  images,
  showFooter,
}: WebsitePreviewProps) => {
  if (!isVisible) {
    return (
      <div className="w-full min-h-[700px] bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center">
        <div className="text-gray-400 text-lg">
          Website preview will appear here...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[520px] bg-white rounded-lg overflow-hidden shadow-2xl animate-fade-in flex flex-col">
      {/* Header */}
      <div className="bg-white flex-shrink-0">
        <nav className="flex items-center justify-between px-8 py-4">
          <h1 className="text-2xl font-bold text-slate-900">The next stop</h1>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-slate-700 font-medium hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-700 font-medium hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-slate-700 font-medium hover:text-slate-900 transition-colors"
            >
              Linktree
            </a>
            <a
              href="#"
              className="text-slate-700 font-medium hover:text-slate-900 transition-colors"
            >
              Mediakit
            </a>
          </div>
          <div className="flex md:hidden">
            <Menu className="text-slate-900"/>
          </div>
        </nav>
      </div>

      <div className="w-full h-[300px] md:h-[480px] grid grid-cols-2 grid-rows-2 gap-2 flex-shrink-0 p-2">
        {images.map((image, index) => {
          const locations = [
            "Ancient temple, Thailand",
            "Cherry blossoms, Japan",
            "Cathedral, Mexico",
            "Red square, Russia",
          ];
          return (
            <div
              key={index}
              className="relative w-full h-full group cursor-pointer"
            >
              <img
                src={image}
                alt={`Travel photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:brightness-75"
              />
              <div className="absolute inset-0 hover:bg-black/2 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {locations[index]}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex-1 flex flex-col justify-end">
        {showFooter && (
          <div className="bg-slate-100 border-t border-slate-200 p-8 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end justify-between">
                {/* Navigation Links - 2x2 Grid on Left */}
                <div className="grid grid-cols-2 gap-4 w-64">
                  <a
                    href="#"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    About Me
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Mediakit
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Linktree
                  </a>
                </div>

                {/* Social Media Icons on Right */}
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <Music size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
