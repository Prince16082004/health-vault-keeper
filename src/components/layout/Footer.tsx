import { Link } from "react-router-dom";
import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">HealthVault</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your health records, your control. Secure, transparent, and patient-owned healthcare data management.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">How It Works</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">HIPAA Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Documentation</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 HealthVault. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 text-destructive" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
