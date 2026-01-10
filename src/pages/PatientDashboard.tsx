import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import RecentRecords from "@/components/dashboard/RecentRecords";
import ConsentRequests from "@/components/dashboard/ConsentRequests";
import HealthChart from "@/components/dashboard/HealthChart";
import { FileText, UserCheck, Activity, Shield } from "lucide-react";

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role="patient" />
      
      <div className="pl-64">
        <DashboardHeader title="Dashboard" userName="John Doe" />
        
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <StatCard
              title="Total Records"
              value={24}
              icon={FileText}
              variant="primary"
              description="Last updated today"
            />
            <StatCard
              title="Active Consents"
              value={3}
              icon={UserCheck}
              variant="success"
              description="2 expiring this week"
            />
            <StatCard
              title="Access Requests"
              value={2}
              icon={Shield}
              variant="warning"
              description="Pending your approval"
            />
            <StatCard
              title="Health Score"
              value="85"
              icon={Activity}
              variant="info"
              trend={{ value: 5, isPositive: true }}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            <ConsentRequests />
            <RecentRecords />
          </div>

          {/* Health Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <HealthChart metric="bp" />
            <HealthChart metric="glucose" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
