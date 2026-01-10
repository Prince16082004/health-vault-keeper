import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturesSection from "@/components/landing/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Database, Link as LinkIcon, Activity, AlertTriangle } from "lucide-react";

const detailedFeatures = [
  {
    icon: Shield,
    title: "Patient-Owned Data",
    description: "Your medical records belong to you. Our platform ensures you maintain complete ownership and control over all your health information. No institution can access your data without your explicit consent.",
    benefits: [
      "Complete ownership of all medical records",
      "Data portability across healthcare providers",
      "Right to delete or export anytime",
      "No vendor lock-in",
    ],
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description: "All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. Your health information is protected with the same security standards used by governments and financial institutions.",
    benefits: [
      "AES-256 encryption for stored data",
      "TLS 1.3 for data transmission",
      "End-to-end encryption for sharing",
      "Zero-knowledge architecture",
    ],
  },
  {
    icon: Database,
    title: "Blockchain Verification",
    description: "Every access to your medical records is immutably logged on a permissioned blockchain. This provides complete transparency and an audit trail that cannot be tampered with.",
    benefits: [
      "Immutable access logs",
      "Tamper-proof audit trail",
      "Transparent access history",
      "Cryptographic verification",
    ],
  },
  {
    icon: LinkIcon,
    title: "FHIR Interoperability",
    description: "Built on HL7 FHIR standards, HealthVault seamlessly connects with hospitals, labs, pharmacies, and insurance providers. Your data flows where you need it.",
    benefits: [
      "HL7 FHIR R4 compliant",
      "Connect to any FHIR-enabled system",
      "Automatic format conversion",
      "Real-time data sync",
    ],
  },
  {
    icon: Activity,
    title: "Health Analytics",
    description: "Visualize your health trends with intuitive charts and insights. Track vital signs, medication history, and wellness indicators over time. Empowering you to make informed decisions.",
    benefits: [
      "Blood pressure trends",
      "Glucose level tracking",
      "Medication timeline",
      "Wellness score calculation",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Access",
    description: "In critical situations, emergency responders can access vital information through a secure QR code. Only essential data is shared, with complete audit logging.",
    benefits: [
      "QR-based quick access",
      "Limited critical data only",
      "Automatic time expiration",
      "Full audit trail",
    ],
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for <span className="gradient-text">Complete Control</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to manage your health records securely, share them with consent, 
              and maintain complete transparency over who accesses your data.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/login">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="space-y-20">
              {detailedFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`grid gap-10 lg:grid-cols-2 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-success" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
