'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { useTheme } from '@/hooks/useTheme';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    company: '',
  });

  useEffect(() => {
    // Load saved profile from localStorage
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      {/* Profile Settings */}
      <Card className="bg-[#2A2A35] border border-[#3D3D49] p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-white mb-4">Profile Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <Input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              placeholder="Enter your full name"
              className="w-full bg-[#1A1A22] border-[#3D3D49]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full bg-[#1A1A22] border-[#3D3D49]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company Name
            </label>
            <Input
              type="text"
              value={profile.company}
              onChange={(e) => setProfile({ ...profile, company: e.target.value })}
              placeholder="Enter your company name"
              className="w-full bg-[#1A1A22] border-[#3D3D49]"
            />
          </div>

          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#FF9898] to-[#8054FF]"
          >
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Theme Settings */}
      <Card className="bg-[#2A2A35] border border-[#3D3D49] p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-white mb-4">Theme Preferences</h2>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white">Dark Mode</p>
            <p className="text-sm text-gray-400">Toggle between light and dark theme</p>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-[#8054FF]' : 'bg-gray-600'
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                theme === 'dark' ? 'translate-x-6' : ''
              }`}
            />
          </button>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-[#2A2A35] border border-red-500/20 p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-red-500 mb-4">Danger Zone</h2>
        
        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}