import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Shield className="h-4 w-4" />
            <span>Start Free Today</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Take Control of Your Health Data
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of patients who have taken ownership of their medical records. 
            Secure, transparent, and always accessible when you need it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/login">
                Create Your Vault
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • HIPAA-aligned security • Your data stays yours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
