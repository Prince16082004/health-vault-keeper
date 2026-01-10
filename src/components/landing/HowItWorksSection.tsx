import { Check, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register & Verify",
    description: "Create your account with mobile OTP verification. Your unique digital health identity is established securely.",
    highlights: ["OTP Authentication", "Unique Health ID", "Encrypted Profile"],
  },
  {
    number: "02",
    title: "Upload & Store",
    description: "Doctors upload your records with your consent. Files are encrypted and stored securely in the cloud.",
    highlights: ["AES-256 Encryption", "Cloud Storage", "Hash Verification"],
  },
  {
    number: "03",
    title: "Control & Share",
    description: "Approve or deny access requests. Set time limits and share specific records via secure links or QR codes.",
    highlights: ["Granular Permissions", "Time-Limited Access", "QR Sharing"],
  },
  {
    number: "04",
    title: "Audit & Trust",
    description: "Every access is logged on blockchain. View complete history of who accessed your data and when.",
    highlights: ["Immutable Logs", "Full Transparency", "Blockchain Verified"],
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How HealthVault Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, secure process that keeps you in control at every step.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0">
                  <ArrowRight className="absolute right-0 -top-2 h-5 w-5 text-primary/30" />
                </div>
              )}
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm justify-center lg:justify-start">
                      <Check className="h-4 w-4 text-success" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
