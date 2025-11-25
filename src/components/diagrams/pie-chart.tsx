import { cn } from "@/lib/utils";
import React from "react";

interface Accumulator {
  sum: number;
  paths: React.JSX.Element[];
}

const PieChart = ({
  data,
  radius,
  id,
  colorScheme = "primary",
}: {
  data: { label: string; value: number }[];
  radius: number;
  id?: string;
  colorScheme?: "primary" | "secondary";
}) => {
  const diameter = radius * 2;
  const total = data.reduce((acc, { value }) => acc + value, 0);
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 5;
  const innerRadius = radius * 0.7;

  const calculateArc = (value: number, startAngle: number) => {
    const angle = (value / total) * 360;
    const endAngle = startAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;

    const startRadians = (startAngle * Math.PI) / 180;
    const endRadians = (endAngle * Math.PI) / 180;

    const x1 = radius + radius * Math.cos(startRadians);
    const y1 = radius + radius * Math.sin(startRadians);
    const x2 = radius + radius * Math.cos(endRadians);
    const y2 = radius + radius * Math.sin(endRadians);

    const ix1 = radius + innerRadius * Math.cos(endRadians);
    const iy1 = radius + innerRadius * Math.sin(endRadians);
    const ix2 = radius + innerRadius * Math.cos(startRadians);
    const iy2 = radius + innerRadius * Math.sin(startRadians);

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${ix2} ${iy2} z`;
  };

  const getFillColorClass = (index: number) => {
    if (colorScheme === "secondary") {
      // Use secondary color palette
      switch (index % 6) {
        case 0:
          return "fill-secondary-300";
        case 1:
          return "fill-secondary-500";
        case 2:
          return "fill-secondary-700";
        case 3:
          return "fill-secondary-600";
        case 4:
          return "fill-secondary-700";
        case 5:
          return "fill-secondary-800";
        default:
          return "fill-secondary-900";
      }
    } else {
      // Use primary color palette
      switch (index % 6) {
        case 0:
          return "fill-primary-300";
        case 1:
          return "fill-primary-500";
        case 2:
          return "fill-primary-700";
        case 3:
          return "fill-primary-quaternary";
        case 4:
          return "fill-primary-quinary";
        case 5:
          return "fill-primary-senary";
        default:
          return "fill-primary-primary";
      }
    }
  };

  const getBgColorClass = (index: number) => {
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
    <div className="flex items-center justify-between" id={id}>
      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        className="-rotate-90"
      >
        {
          data.reduce<Accumulator>(
            (acc, { value, label }, index) => {
              const startAngle = acc.sum;
              const pathDescription = calculateArc(value, startAngle);
              acc.paths.push(
                <path
                  d={pathDescription}
                  className={cn(getFillColorClass(index))}
                  strokeDasharray={0}
                  strokeDashoffset={0}
                  key={index}
                />
              );
              acc.sum += (value / total) * 360;
              return acc;
            },
            { sum: 0, paths: [] }
          ).paths
        }
      </svg>

      <div className="ml-4 flex space-x-6">
        <div className="flex flex-col space-y-1">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span
                className={cn(
                  "w-3 h-3 mr-2 inline-block rounded-[50%]",
                  getBgColorClass(index)
                )}
              ></span>
              <span className="text-sm text-card-foreground">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-1">
          {data.map((item, index) => (
            <span
              className="text-sm text-muted-foreground text-end whitespace-nowrap"
              key={index}
            >
              {Math.round((item.value / total) * 100)} %
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
