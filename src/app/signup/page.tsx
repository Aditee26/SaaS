'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signup } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      await signup(formData.email, formData.password, formData.fullName);
      // router.push is called inside signup function
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider: 'google' | 'twitter') => {
    setLoading(true);
    // Mock social signup
    setTimeout(() => {
      signup('user@example.com', 'password', 'User Name');
    }, 1000);
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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl flex items-center gap-12">
        {/* Left side - Brand Message */}
        <div className="hidden lg:flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-xl flex items-center justify-center">
              <Image 
                src="/assets/squid_logo.png" 
                alt="Squid Logo" 
                width={28} 
                height={28}
                className="object-contain"
              />
            </div>
            <span className="text-3xl font-bold text-white">Squid</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Create Your Account
          </h1>
          
          <p className="text-xl text-gray-400 max-w-md">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>

          {/* Decorative Elements */}
          <div className="mt-12 flex gap-4">
            <div className="w-20 h-20 bg-[#2A2A35] rounded-2xl border border-[#3D3D49] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FF9898]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="w-20 h-20 bg-[#2A2A35] rounded-2xl border border-[#3D3D49] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#8054FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side - Signup Form */}
        <Card className="flex-1 bg-[#2A2A35] border border-[#3D3D49] p-8 rounded-2xl max-w-md mx-auto lg:mx-0 w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Register</h2>
            <p className="text-gray-400 text-sm">
              A good design is not only aesthetically pleasing, but also functional.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full bg-[#1A1A22] border-[#3D3D49] text-white placeholder:text-gray-500 focus:border-[#FF9898] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-[#1A1A22] border-[#3D3D49] text-white placeholder:text-gray-500 focus:border-[#FF9898] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full bg-[#1A1A22] border-[#3D3D49] text-white placeholder:text-gray-500 focus:border-[#FF9898] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Repeat Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="w-full bg-[#1A1A22] border-[#3D3D49] text-white placeholder:text-gray-500 focus:border-[#FF9898] transition-colors"
              />
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={loading}
              className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 text-white border-0 mt-6"
            >
              {loading ? 'Creating Account...' : 'Signup Now'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#3D3D49]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#2A2A35] text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Signup Options */}
          <div className="space-y-3">
            <button
              onClick={() => handleSocialSignup('google')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1A1A22] border border-[#3D3D49] rounded-xl text-gray-300 hover:bg-[#3D3D49] hover:text-white transition-all duration-200 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Register with Google</span>
            </button>

            <button
              onClick={() => handleSocialSignup('twitter')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1A1A22] border border-[#3D3D49] rounded-xl text-gray-300 hover:bg-[#3D3D49] hover:text-white transition-all duration-200 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.05-4.55 4.55 0 .36.03.7.1 1.04-3.8-.2-7.17-2-9.42-4.76-.4.7-.6 1.5-.6 2.36 0 1.6.8 3 2.03 3.8-.74-.02-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.45-.67.18-1.37.2-2.06.08.58 1.8 2.26 3.1 4.25 3.14-1.56 1.22-3.52 1.95-5.66 1.95-.37 0-.73-.02-1.1-.06 2.03 1.3 4.44 2.06 7.04 2.06 8.45 0 13.07-7 13.07-13.07v-.6c.9-.6 1.68-1.36 2.3-2.22z"/>
              </svg>
              <span>Register with Twitter</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-400 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#FF9898] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}