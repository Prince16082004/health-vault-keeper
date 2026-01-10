import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning" | "info";
}

const variantStyles = {
  default: "bg-card",
  primary: "bg-primary/5 border-primary/20",
  success: "bg-success/5 border-success/20",
  warning: "bg-warning/5 border-warning/20",
  info: "bg-info/5 border-info/20",
};

const iconVariantStyles = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
};

const StatCard = ({ title, value, description, icon: Icon, trend, variant = "default" }: StatCardProps) => {
  return (
    <div className={`stat-card ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg ${iconVariantStyles[variant]} flex items-center justify-center`}>
          <Icon className="h-5 w-5" />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${trend.isPositive ? "text-success" : "text-destructive"}`}>
            {trend.isPositive ? "+" : ""}{trend.value}%
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
      {description && (
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
