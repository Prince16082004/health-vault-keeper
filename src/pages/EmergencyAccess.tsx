import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  Clock, 
  RefreshCw, 
  Copy, 
  Download,
  Droplet,
  Pill,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emergencyData = {
  bloodGroup: "O+",
  allergies: ["Penicillin", "Sulfa drugs"],
  chronicConditions: ["Hypertension", "Type 2 Diabetes"],
  emergencyContact: "+91 98765 43210",
  medications: ["Metformin 500mg", "Lisinopril 10mg"],
};

const EmergencyAccess = () => {
  const [qrExpiry, setQrExpiry] = useState(new Date(Date.now() + 15 * 60 * 1000));
  const { toast } = useToast();
  const emergencyUrl = `https://healthvault.app/emergency/view/abc123`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(emergencyUrl);
    toast({
      title: "Link Copied",
      description: "Emergency access link copied to clipboard",
    });
  };

  const handleRegenerateQR = () => {
    setQrExpiry(new Date(Date.now() + 15 * 60 * 1000));
    toast({
      title: "QR Regenerated",
      description: "New emergency QR code generated",
    });
  };

  const getTimeRemaining = () => {
    const diff = qrExpiry.getTime() - Date.now();
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role="patient" />
      
      <div className="pl-64">
        <DashboardHeader title="Emergency Access" userName="John Doe" />
        
        <main className="p-6">
          {/* Warning Banner */}
          <div className="mb-6 p-4 rounded-xl bg-warning/10 border border-warning/20 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-warning">Emergency Access Only</h3>
              <p className="text-sm text-muted-foreground">
                This QR code provides limited access to critical health information for emergency responders. 
                All access is logged and audited.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* QR Code Section */}
            <div className="bg-card rounded-xl border border-border/50 shadow-card p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Emergency QR Code</h2>
                <p className="text-sm text-muted-foreground">
                  Show this code to emergency responders
                </p>
              </div>

              <div className="flex justify-center mb-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <QRCode
                    value={emergencyUrl}
                    size={200}
                    level="H"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Expires in: <strong className="text-foreground">{getTimeRemaining()}</strong>
                </span>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 gap-2" onClick={handleCopyLink}>
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button className="flex-1 gap-2" onClick={handleRegenerateQR}>
                  <RefreshCw className="h-4 w-4" />
                  Regenerate
                </Button>
              </div>
            </div>

            {/* Emergency Info Preview */}
            <div className="bg-card rounded-xl border border-border/50 shadow-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Information Shared</h2>
              </div>

              <div className="space-y-5">
                {/* Blood Group */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Droplet className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Blood Group</p>
                    <p className="text-2xl font-bold">{emergencyData.bloodGroup}</p>
                  </div>
                </div>

                {/* Allergies */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-warning/5 border border-warning/10">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Allergies</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {emergencyData.allergies.map((allergy) => (
                        <Badge key={allergy} variant="secondary">
                          {allergy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chronic Conditions */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-info/5 border border-info/10">
                  <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Chronic Conditions</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {emergencyData.chronicConditions.map((condition) => (
                        <Badge key={condition} variant="secondary">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Medications */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5 border border-success/10">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Pill className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Medications</p>
                    <ul className="mt-1 space-y-1">
                      {emergencyData.medications.map((med) => (
                        <li key={med} className="text-sm">{med}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmergencyAccess;
