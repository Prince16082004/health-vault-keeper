import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import { FileText, Users, Clock, CheckCircle, Search, MoreVertical, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 45,
    lastVisit: "Jan 8, 2026",
    condition: "Hypertension",
    accessStatus: "active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    age: 32,
    lastVisit: "Jan 5, 2026",
    condition: "Diabetes Type 2",
    accessStatus: "active",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 58,
    lastVisit: "Jan 3, 2026",
    condition: "Cardiac Follow-up",
    accessStatus: "expired",
  },
  {
    id: 4,
    name: "Emily Brown",
    age: 28,
    lastVisit: "Dec 28, 2025",
    condition: "General Checkup",
    accessStatus: "pending",
  },
];

const accessRequests = [
  {
    id: 1,
    patient: "Robert Wilson",
    purpose: "New Consultation",
    status: "pending",
    requestedAt: "1 hour ago",
  },
  {
    id: 2,
    patient: "Lisa Anderson",
    purpose: "Follow-up Care",
    status: "pending",
    requestedAt: "3 hours ago",
  },
];

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role="doctor" />
      
      <div className="pl-64">
        <DashboardHeader title="Doctor Dashboard" userName="Dr. Sarah Miller" />
        
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <StatCard
              title="Active Patients"
              value={48}
              icon={Users}
              variant="primary"
            />
            <StatCard
              title="Records Accessed"
              value={156}
              icon={FileText}
              variant="info"
              description="This month"
            />
            <StatCard
              title="Pending Requests"
              value={2}
              icon={Clock}
              variant="warning"
            />
            <StatCard
              title="Consents Approved"
              value={42}
              icon={CheckCircle}
              variant="success"
              description="This month"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Patient List */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border/50 shadow-card overflow-hidden">
              <div className="p-5 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Recent Patients</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search patients..." className="pl-9" />
                </div>
              </div>
              <div className="divide-y divide-border">
                {patients.map((patient) => (
                  <div key={patient.id} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-primary">
                        {patient.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{patient.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {patient.age} years • {patient.condition}
                      </p>
                    </div>
                    <Badge
                      variant={
                        patient.accessStatus === "active" ? "default" :
                        patient.accessStatus === "pending" ? "secondary" : "outline"
                      }
                      className="capitalize"
                    >
                      {patient.accessStatus}
                    </Badge>
                    <div className="text-xs text-muted-foreground hidden sm:block">
                      {patient.lastVisit}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Requests */}
            <div className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Access Requests</h3>
                  <Badge variant="secondary" className="rounded-full">
                    {accessRequests.length}
                  </Badge>
                </div>
              </div>
              <div className="divide-y divide-border">
                {accessRequests.map((request) => (
                  <div key={request.id} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{request.patient}</h4>
                      <span className="text-xs text-muted-foreground">{request.requestedAt}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{request.purpose}</p>
                    <Badge variant="secondary" className="capitalize">
                      {request.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="outline" className="w-full">Request New Access</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;
