import { UserCheck, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const requests = [
  {
    id: 1,
    doctor: "Dr. James Wilson",
    hospital: "Metro General Hospital",
    purpose: "Cardiology Consultation",
    requestedAccess: ["Blood Reports", "ECG Results"],
    duration: "7 days",
    requestedAt: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    doctor: "Dr. Emily Chen",
    hospital: "City Medical Center",
    purpose: "Follow-up Checkup",
    requestedAccess: ["All Records"],
    duration: "1 day",
    requestedAt: "5 hours ago",
    status: "pending",
  },
];

const ConsentRequests = () => {
  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden">
      <div className="p-5 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Pending Consent Requests</h3>
          <Badge variant="secondary" className="rounded-full">
            {requests.length}
          </Badge>
        </div>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      <div className="divide-y divide-border">
        {requests.map((request) => (
          <div key={request.id} className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">{request.doctor}</h4>
                  <p className="text-sm text-muted-foreground">{request.hospital}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {request.requestedAt}
              </div>
            </div>
            
            <div className="ml-13 space-y-3">
              <div>
                <p className="text-sm"><strong>Purpose:</strong> {request.purpose}</p>
                <p className="text-sm">
                  <strong>Access:</strong> {request.requestedAccess.join(", ")}
                </p>
                <p className="text-sm"><strong>Duration:</strong> {request.duration}</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="default" size="sm" className="gap-1.5">
                  <CheckCircle className="h-4 w-4" />
                  Approve
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <XCircle className="h-4 w-4" />
                  Deny
                </Button>
                <Button variant="ghost" size="sm">
                  Customize
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsentRequests;
