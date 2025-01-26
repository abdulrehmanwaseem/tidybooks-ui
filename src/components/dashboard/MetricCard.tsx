import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const MetricCard = ({
  title,
  value,
  icon,
  trend,
  className,
}: MetricCardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden text-white",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-4">
        <div className="rounded-full bg-white/20 p-2">
          {icon}
        </div>
      </div>
      <div className="p-6 space-y-2">
        <p className="text-sm font-medium text-white/80">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        {trend && (
          <p className="text-sm flex items-center gap-1 text-white/90">
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            <span className="text-white/60">vs last month</span>
          </p>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;