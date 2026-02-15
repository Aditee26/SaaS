'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { useEffect } from 'react';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  // Add this to debug
  useEffect(() => {
    console.log('Header - isAuthenticated:', isAuthenticated);
    console.log('Header - token:', localStorage.getItem('token'));
  }, [isAuthenticated]);

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A22]/80 backdrop-blur-sm border-b border-[#3D3D49]">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          {/* Center Navigation - Home Link */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              Home
            </Link>
          </div>

          {/* Right Side - Auth Buttons + Download Template */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              // Authenticated user menu
              <>
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button onClick={logout} variant="outline">
                  Logout
                </Button>
              </>
            ) : (
              // Non-authenticated user menu - with Login & Register
              <>
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
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};