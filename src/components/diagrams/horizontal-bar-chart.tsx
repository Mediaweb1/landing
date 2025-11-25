import { cn } from "@/lib/utils";

interface DataItem {
  label: string;
  value: number;
}

const HorizontalBarChart = ({ 
  data, 
  id,
  title = "Data Distribution",
  colorScheme = "primary"
}: { 
  data: DataItem[];
  id?: string;
  title?: string;
  colorScheme?: "primary" | "secondary";
}) => {
  // Calculate total for percentage
  const total = data.reduce((acc, item) => acc + item.value, 0);
  
  const getColorClass = (index: number) => {
    if (colorScheme === "secondary") {
      // Use secondary color palette
      switch (index % 6) {
        case 0:
          return "bg-secondary-300";
        case 1:
          return "bg-secondary-400";
        case 2:
          return "bg-secondary-500";
        case 3:
          return "bg-secondary-600";
        case 4:
          return "bg-secondary-700";
        case 5:
          return "bg-secondary-800";
        default:
          return "bg-secondary-900";
      }
    } else {
      // Use primary color palette
      switch (index % 6) {
        case 0:
          return "bg-primary-primary";
        case 1:
          return "bg-primary-secondary";
        case 2:
          return "bg-primary-tertiary";
        case 3:
          return "bg-primary-quaternary";
        case 4:
          return "bg-primary-quinary";
        case 5:
          return "bg-primary-senary";
        default:
          return "bg-primary-primary";
      }
    }
  };
  
  return (
    <div id={id} className="w-full flex flex-col space-y-6">
      {title && (
        <span className="text-card-foreground text-xl font-medium">
          {title}
        </span>
      )}
      
      <div className="w-full flex flex-col space-y-6">
        <div className="flex flex-col space-y-3 w-full">
          {data.map((item, index) => {
            // Calculate percentage
            const percentage = Math.round((item.value / total) * 100);
            
            // Get color class
            const color = getColorClass(index);
                
            return (
              <div key={item.label} className="flex items-center justify-between space-x-6">
                <div className={`w-full h-1.5 rounded-full overflow-hidden flex`}>
                  <div
                    className={cn("h-1.5 opacity-100! animate-grow-horizontal", color)}
                    style={{ width: `${percentage}%`, maxWidth: `${percentage}%` }}
                  ></div>
                  <div
                    className={cn("h-1.5 opacity-15", color)}
                    style={{ width: `${100 - percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm w-6 text-muted-foreground">{percentage}%</span>
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-3 gap-y-2 md:gap-y-4 gap-x-4">
          {data.map((item, index) => {
            // Get color class
            const colorClass = getColorClass(index);
                
            return (
              <div
                className="w-full flex space-x-2 items-center"
                key={item.label}
              >
                <span className={`${colorClass} h-2.5 w-2.5 rounded-[50%]`} />
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBarChart;
