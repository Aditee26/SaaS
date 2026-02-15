import Link from 'next/link';
import Image from 'next/image';
import { SocialLinks } from '@/components/landing/SocialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="bg-[#1A1A22] border-t border-[#3D3D49]">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column - 4 cols */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-xl flex items-center justify-center">
                <Image 
                  src="/assets/squid_logo.png" 
                  alt="Squid Logo" 
                  width={24} 
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">Squid</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A powerful landing page template with a modern and professional design. 
              Perfect for showcasing your products or services. Built with Next.js and Tailwind CSS.
            </p>
            
            <div className="flex gap-3">
              <SocialLinks />
            </div>
          </div>

          {/* Product Links - 2 cols */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links - 2 cols */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - 2 cols */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#3D3D49]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Squid. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Made with</span>
              <span className="text-[#FF9898] animate-pulse">❤️</span>
              <span className="text-gray-400 text-sm">by Squid Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Compact Footer for Dashboard Pages
export const CompactFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A22] border-t border-[#3D3D49] py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-lg flex items-center justify-center">
              <Image 
                src="/assets/squid_logo.png" 
                alt="Squid Logo" 
                width={14} 
                height={14}
                className="object-contain"
              />
            </div>
            <span className="text-white font-semibold">Squid</span>
            <span className="text-gray-400 text-sm ml-2">© {currentYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-xs transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-xs transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-xs transition-colors">
              Cookies
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Newsletter Footer Variant
export const NewsletterFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A22] border-t border-[#3D3D49]">
      {/* Newsletter Section */}
      <div className="border-b border-[#3D3D49]">
        <div className="container-custom py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates and offers delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#2A2A35] border border-[#3D3D49] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF9898] transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-lg flex items-center justify-center">
                <Image 
                  src="/assets/squid_logo.png" 
                  alt="Squid Logo" 
                  width={18} 
                  height={18}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Squid</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern landing page template for your next project.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-400 hover:text-white text-sm">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-white text-sm">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3D3D49] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Squid. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;