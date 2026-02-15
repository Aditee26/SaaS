'use client';

import { useUsers } from '@/hooks/useUsers';
import { Spinner } from '@/components/ui/Spinner';
import { ErrorState } from '@/components/ui/ErrorState';

export default function DashboardPage() {
  const { allUsers, loading, error, refetch } = useUsers();

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  const stats = [
    {
      title: 'Total Users',
      value: allUsers.length,
      icon: '👥',
      change: '+12%',
      color: 'bg-blue-500',
    },
    {
      title: 'Active Companies',
      value: new Set(allUsers.map((u) => u.company.name)).size,
      icon: '🏢',
      change: '+5%',
      color: 'bg-green-500',
    },
    {
      title: 'Cities',
      value: new Set(allUsers.map((u) => u.address.city)).size,
      icon: '🌆',
      change: '+8%',
      color: 'bg-purple-500',
    },
    {
      title: 'Avg. Response',
      value: '2.4s',
      icon: '⚡',
      change: '-10%',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-green-600 dark:text-green-400">{stat.change}</span>
              <span className="text-sm text-gray-500 dark:text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {allUsers.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center justify-between py-2 border-b last:border-0 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{user.company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}