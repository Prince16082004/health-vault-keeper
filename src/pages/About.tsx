import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CTASection from "@/components/landing/CTASection";
import { Shield, Users, Globe, Award } from "lucide-react";

const stats = [
  { label: "Records Secured", value: "1M+" },
  { label: "Healthcare Providers", value: "500+" },
  { label: "Countries Supported", value: "25+" },
  { label: "Uptime", value: "99.9%" },
];

const values = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your health data is yours. We never sell, share, or access it without your explicit consent.",
  },
  {
    icon: Users,
    title: "Patient Empowerment",
    description: "We believe patients should control their health journey. Our platform puts you in the driver's seat.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Built on FHIR and HL7 standards, ensuring interoperability with healthcare systems worldwide.",
  },
  {
    icon: Award,
    title: "Trust & Transparency",
    description: "Blockchain verification ensures every access is logged immutably, building trust through transparency.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionizing Healthcare <span className="gradient-text">Data Ownership</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10">
                HealthVault is on a mission to give patients complete control over their medical records. 
                We're building a future where your health data follows you, not your healthcare provider.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border/50 shadow-card">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  HealthVault was born from a simple frustration: why do patients have to chase their 
                  own medical records across multiple hospitals, clinics, and labs?
                </p>
                <p>
                  We envisioned a world where your complete health history is available at your fingertips, 
                  secure yet accessible, and entirely under your control. A world where changing doctors 
                  doesn't mean starting from scratch, and where emergency responders can access critical 
                  information when seconds matter.
                </p>
                <p>
                  Using cutting-edge encryption and blockchain technology, we've built a platform that 
                  prioritizes both security and usability. Your data is encrypted with military-grade 
                  standards, yet sharing it with a new doctor is as simple as scanning a QR code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-xl bg-card border border-border/50 shadow-card text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
