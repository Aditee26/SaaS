import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#222228] overflow-hidden">
      {/* Gradient Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF9898] to-[#8054FF] opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#FF9898] to-[#8054FF] opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Navigation - Merged inside Hero */}
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image 
                src="/assets/squid_logo.png" 
                alt="Squid Logo" 
                width={80} 
                height={80}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Center Navigation - Home Link */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              Home
            </Link>
          </div>

          {/* Right Side - Auth Buttons + Download Template */}
          <div className="flex items-center gap-4">
            {/* Download Template Button */}
            <Link href="/signup">
              <Button 
                variant="outline" 
                className="hidden md:inline-flex border-[#3D3D49] text-white hover:bg-[#3D3D49]"
              >
                Download Template
              </Button>
            </Link>
            
            {/* Login Button */}
            <Link href="/login">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Login
              </Button>
            </Link>
            
            {/* Register Button */}
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white border-0">
                Register
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Beautiful Landing Page
            <span className="block bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent mt-2">
              Design for You
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A powerful landing page template with a modern and professional design. 
            It's perfect for showcasing your products or services.
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 text-white border-0 min-w-[200px]"
          >
            Download Template
          </Button>
        </div>
      </div>
    </section>
  );
};