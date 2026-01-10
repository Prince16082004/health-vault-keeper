import { 
  Shield, 
  FileKey, 
  Share2, 
  AlertTriangle, 
  BarChart3, 
  Link as LinkIcon,
  Users,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Patient-Owned Data",
    description: "You own your medical records. No one can access them without your explicit consent.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FileKey,
    title: "Consent Management",
    description: "Grant time-limited, purpose-specific access. Revoke anytime with full transparency.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Share2,
    title: "Secure Sharing",
    description: "Share records via QR code or secure link. Perfect for referrals and second opinions.",
    color: "bg-success/10 text-success",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Access",
    description: "Break-glass protocol for emergencies. Critical info accessible when it matters most.",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: BarChart3,
    title: "Health Analytics",
    description: "Visualize your health trends. Track vitals, medications, and wellness over time.",
    color: "bg-info/10 text-info",
  },
  {
    icon: LinkIcon,
    title: "Blockchain Audit",
    description: "Every access is immutably logged. Complete transparency without storing data on-chain.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Multi-Provider",
    description: "Connect with hospitals, labs, and pharmacies seamlessly using FHIR standards.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Get instant notifications when records are added or accessed by providers.",
    color: "bg-success/10 text-success",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Control Over Your Health Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with privacy-first principles and blockchain transparency to give you 
            unprecedented control over your medical information.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
