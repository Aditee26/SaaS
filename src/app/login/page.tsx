'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      // router.push is called inside login function
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#222228] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF9898] to-[#8054FF] opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#FF9898] to-[#8054FF] opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Home Button - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <Link href="/">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Button>
        </Link>
      </div>

      <Card className="relative z-10 w-full max-w-md bg-[#2A2A35] border border-[#3D3D49] p-8 rounded-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
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
        </div>

        <h1 className="text-2xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Sign in to your account
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="aditeesingh001@gmail.com"
              required
              className="w-full bg-[#1A1A22] border-[#3D3D49] text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••••••"
              required
              className="w-full bg-[#1A1A22] border-[#3D3D49] text-white placeholder:text-gray-500"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            size="lg"
            disabled={loading}
            className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 text-white border-0"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#FF9898] hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}