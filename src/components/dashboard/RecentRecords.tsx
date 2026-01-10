import { FileText, Download, Eye, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const records = [
  {
    id: 1,
    name: "Blood Test Report",
    type: "Lab Report",
    date: "Jan 8, 2026",
    provider: "City Hospital Lab",
    status: "verified",
  },
  {
    id: 2,
    name: "Chest X-Ray",
    type: "Radiology",
    date: "Jan 5, 2026",
    provider: "Metro Diagnostics",
    status: "verified",
  },
  {
    id: 3,
    name: "Prescription - Cardiology",
    type: "Prescription",
    date: "Jan 3, 2026",
    provider: "Dr. Sarah Miller",
    status: "verified",
  },
  {
    id: 4,
    name: "Annual Checkup Summary",
    type: "Medical Report",
    date: "Dec 28, 2025",
    provider: "General Hospital",
    status: "verified",
  },
];

const RecentRecords = () => {
  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden">
      <div className="p-5 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold">Recent Records</h3>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      <div className="divide-y divide-border">
        {records.map((record) => (
          <div key={record.id} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{record.name}</h4>
              <p className="text-xs text-muted-foreground">
                {record.type} • {record.provider}
              </p>
            </div>
            <div className="text-xs text-muted-foreground hidden sm:block">
              {record.date}
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Verify on Blockchain</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentRecords;
