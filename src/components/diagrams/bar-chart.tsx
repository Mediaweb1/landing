import { cn } from "@/lib/utils";

const generateYAxisLabels = (topScale: any) => {
  let increment;
  if (topScale <= 15) {
    increment = 2.5;
  } else if (topScale <= 30) {
    increment = 5;
  } else {
    increment = 10;
  }

  const labels = [];
  for (let i = 0; i <= topScale; i += increment) {
    labels.push(i);
  }

  if (labels[labels.length - 1] !== topScale) {
    labels.push(topScale);
  }

  return labels;
};

const BarChart = ({
  data,
  viewport,
  id,
}: {
  data: { age: string; number: number }[];
  viewport?: { width: number; height: number };
  id?: string;
}) => {
  const isMobileView = viewport ? viewport.width < 768 : false;

  const totalValue = data.reduce((acc, curr) => acc + Number(curr.number), 0);
  const maxValue = Math.max(...data.map((item) => Number(item.number)));
  const maxPercentage = (maxValue / totalValue) * 100;

  const topScale = Math.ceil(maxPercentage / 10) * 10;
  const yAxisLabels = generateYAxisLabels(topScale);

  const valueFormatter = (value: any) => {
    const percentage = (Number(value.number) / totalValue) * 100;
    return (percentage / topScale) * 100;
  };

  return (
    <div className="flex h-full items-start mb-5" id={id}>
      <div
        className={`${
          viewport ? (isMobileView ? "h-52 " : "h-44") : "h-52 md:h-44"
        }  flex flex-col-reverse mr-3`}
      >
        {yAxisLabels.map((label, index) => (
          <div
            key={index}
            className={`text-right h-1/5 ${
              viewport
                ? isMobileView
                  ? "text-xs"
                  : "text-sm"
                : "text-xs md:text-sm"
            } flex flex-col justify-center text-muted-foreground`}
          >
            {label}%
          </div>
        ))}
      </div>

      <div
        className={`w-full ${
          viewport ? (isMobileView ? "h-52 " : "h-44") : "h-52 md:h-44"
        }`}
      >
        <div
          className="grid gap-x-1.5 h-full w-full"
          style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
        >
          {data.map((item, index) => {
            const height = valueFormatter(item);
            return (
              <div
                key={index}
                className="flex flex-col justify-end items-center w-full h-full"
              >
                <div
                  className={`w-full animate-grow rounded-t ${
                    index % 6 === 0
                      ? "bg-primary-primary"
                      : index % 6 === 1
                      ? "bg-primary-secondary"
                      : index % 6 === 2
                      ? "bg-primary-tertiary"
                      : index % 6 === 3
                      ? "bg-primary-quaternary"
                      : index % 6 === 4
                      ? "bg-primary-quinary"
                      : index % 6 === 5
                      ? "bg-primary-senary"
                      : "bg-primary-primary" // Loop back to primary for the 7th and beyond
                  }`}
                  style={{ height: `${height}%`, maxHeight: `${height}%` }}
                ></div>
              </div>
            );
          })}
        </div>

        <div
          className="grid w-full h-fit min-h-fit gap-x-1.5"
          style={{
            gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))`,
          }}
        >
          {data.map((item, index) => (
            <div
              className="w-full flex items-center justify-center"
              key={index}
            >
              <span
                className={cn(
                  "mt-2 text-xs whitespace-nowrap w-full text-center text-card-foreground",
                  viewport
                    ? isMobileView
                      ? "text-[10px]"
                      : "text-xs"
                    : " text-[10px] md:text-xs"
                )}
              >
                {item.age}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
