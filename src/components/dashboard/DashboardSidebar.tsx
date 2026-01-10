import { Link, useLocation } from "react-router-dom";
import { 
  Shield, 
  LayoutDashboard, 
  FileText, 
  UserCheck, 
  Activity, 
  QrCode, 
  Settings, 
  LogOut,
  Bell,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  role: "patient" | "doctor";
}

const patientLinks = [
  { href: "/patient/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/patient/records", label: "My Records", icon: FileText },
  { href: "/patient/consents", label: "Consent Manager", icon: UserCheck },
  { href: "/patient/analytics", label: "Health Analytics", icon: Activity },
  { href: "/patient/emergency", label: "Emergency QR", icon: QrCode },
];

const doctorLinks = [
  { href: "/doctor/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/doctor/patients", label: "Patients", icon: User },
  { href: "/doctor/requests", label: "Access Requests", icon: UserCheck },
  { href: "/doctor/upload", label: "Upload Records", icon: FileText },
];

const DashboardSidebar = ({ role }: SidebarProps) => {
  const location = useLocation();
  const links = role === "patient" ? patientLinks : doctorLinks;

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2.5 px-6 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Shield className="h-4 w-4" />
        </div>
        <span className="font-bold">HealthVault</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border space-y-1">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground" asChild>
          <Link to="/login">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
