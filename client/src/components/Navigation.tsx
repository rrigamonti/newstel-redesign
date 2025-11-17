import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { APP_LOGO } from '@/const';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Choose Us?', href: '#why-choose' },
    { label: 'Our Services', href: '#services' },
    { label: 'Technology', href: '#technology' },
    { label: 'About Us', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img src={APP_LOGO} alt="Newstel" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="h-4 w-4" />
              DE
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              +44 (20) 4519 7469
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  +44 (20) 4519 7469
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
