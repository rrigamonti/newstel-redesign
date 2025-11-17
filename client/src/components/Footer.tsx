import { Phone, Mail } from 'lucide-react';
import { APP_LOGO } from '@/const';

export default function Footer() {
  const footerLinks = {
    company: [
      { label: 'Why Choose Us?', href: '#why-choose' },
      { label: 'Our Services', href: '#services' },
      { label: 'Technology', href: '#technology' },
      { label: 'About Us', href: '#about' },
    ],
    resources: [
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
      { label: 'Become an Introducer', href: '#introducer' },
    ],
    legal: [
      { label: 'Terms & Conditions', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Imprint', href: '#imprint' },
      { label: 'Ethical Standards', href: '#ethics' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <img src={APP_LOGO} alt="Newstel" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/70 text-sm mb-6">
              Digitally-led multilingual customer service available 24/7/365.
            </p>
            <div className="space-y-3">
              <a href="tel:+442045197469" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +44 (20) 4519 7469
              </a>
              <a href="mailto:info@newstel.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                info@newstel.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Newstel Worldwide. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="tel:+442045197469" className="text-sm text-white/70 hover:text-white transition-colors">
                UK: +44 (20) 4519 7469
              </a>
              <a href="tel:+494080813915" className="text-sm text-white/70 hover:text-white transition-colors">
                DE: +49 (40) 80813915
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
