import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan 1", systolic: 120, diastolic: 80, glucose: 95 },
  { date: "Jan 3", systolic: 118, diastolic: 78, glucose: 92 },
  { date: "Jan 5", systolic: 122, diastolic: 82, glucose: 98 },
  { date: "Jan 7", systolic: 119, diastolic: 79, glucose: 90 },
  { date: "Jan 9", systolic: 121, diastolic: 81, glucose: 94 },
  { date: "Jan 10", systolic: 117, diastolic: 77, glucose: 91 },
];

interface HealthChartProps {
  metric: "bp" | "glucose";
}

const HealthChart = ({ metric }: HealthChartProps) => {
  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-card p-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">
            {metric === "bp" ? "Blood Pressure Trend" : "Glucose Level Trend"}
          </h3>
          <p className="text-sm text-muted-foreground">Last 10 days</p>
        </div>
        <div className="flex gap-4 text-sm">
          {metric === "bp" ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span>Systolic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span>Diastolic</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span>Glucose (mg/dL)</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              className="text-muted-foreground"
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              className="text-muted-foreground"
              domain={metric === "bp" ? [60, 140] : [70, 120]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            {metric === "bp" ? (
              <>
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 0 }}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 0 }}
                />
              </>
            ) : (
              <Line
                type="monotone"
                dataKey="glucose"
                stroke="hsl(var(--warning))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--warning))", strokeWidth: 0 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HealthChart;
