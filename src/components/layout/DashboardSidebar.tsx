'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Users', href: '/dashboard/users', icon: '👥' },
  { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="p-6">
        <Link href="/dashboard" className="text-xl font-bold text-primary dark:text-white">
          Dashboard
        </Link>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors',
              pathname === item.href
                ? 'bg-secondary/10 text-secondary border-r-2 border-secondary'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            )}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};