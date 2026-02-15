'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table, Column } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import { Loading } from '@/components/ui/Loading';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Failed to load users. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Sort users
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [filteredUsers, sortOrder]);

  // Paginate users
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedUsers.slice(startIndex, endIndex);
  }, [sortedUsers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Update the columns definition in users/page.tsx
const columns: Column<User>[] = [
  { 
    header: 'Name', 
    accessor: (user: User) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-lg flex items-center justify-center text-white font-semibold text-sm">
          {user.name.charAt(0)}
        </div>
        <span className="text-white">{user.name}</span>
      </div>
    )
  },
  { header: 'Email', accessor: 'email' },
  { 
    header: 'Company', 
    accessor: (user: User) => user.company.name 
  },
  { 
    header: 'City', 
    accessor: (user: User) => user.address.city 
  },
  {
    header: 'Actions',
    accessor: (user: User) => (
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleViewDetails(user)}
        className="border-[#3D3D49] text-gray-300 hover:bg-[#3D3D49] hover:text-white"
      >
        View Details
      </Button>
    ),
  },
];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState 
        message={error} 
        onRetry={fetchUsers} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Users Management</h1>
        <div className="flex items-center gap-2 bg-[#2A2A35] px-4 py-2 rounded-xl border border-[#3D3D49]">
          <span className="text-gray-400 text-sm">Total Users:</span>
          <span className="text-white font-semibold">{users.length}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#2A2A35] border border-[#3D3D49] p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Users</p>
              <p className="text-white text-2xl font-bold">{users.length}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#2A2A35] border border-[#3D3D49] p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Companies</p>
              <p className="text-white text-2xl font-bold">
                {new Set(users.map(u => u.company.name)).size}
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#2A2A35] border border-[#3D3D49] p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Cities</p>
              <p className="text-white text-2xl font-bold">
                {new Set(users.map(u => u.address.city)).size}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Input
            type="text"
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-[#2A2A35] border-[#3D3D49] text-white placeholder:text-gray-500 pl-10"
          />
          <svg 
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <Button
          variant="outline"
          onClick={toggleSortOrder}
          className="border-[#3D3D49] text-white hover:bg-[#3D3D49] min-w-[120px]"
        >
          Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          <svg 
            className={`w-4 h-4 ml-2 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </Button>
      </div>

      {/* Users Table */}
      {paginatedUsers.length === 0 ? (
        <EmptyState 
          message="No users found matching your search criteria."
          action={
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm('')}
              className="border-[#3D3D49] text-white hover:bg-[#3D3D49]"
            >
              Clear Search
            </Button>
          }
        />
      ) : (
        <>
          <Table 
            data={paginatedUsers} 
            columns={columns} 
            className="bg-[#2A2A35] border border-[#3D3D49] rounded-xl overflow-hidden"
          />

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, sortedUsers.length)} of {sortedUsers.length} users
            </p>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-[#3D3D49] text-white hover:bg-[#3D3D49] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white'
                          : 'bg-[#2A2A35] text-gray-400 hover:bg-[#3D3D49] hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-[#3D3D49] text-white hover:bg-[#3D3D49] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}

      {/* User Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        title="User Details"
      >
        {selectedUser && (
          <div className="space-y-6">
            {/* User Header */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                {selectedUser.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedUser.name}</h3>
                <p className="text-gray-400">@{selectedUser.username}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#1A1A22] rounded-xl p-4 space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FF9898]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Information
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">{selectedUser.phone}</p>
                </div>
                <div>
                  <p className="text-gray-400">Website</p>
                  <p className="text-[#FF9898]">{selectedUser.website}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#1A1A22] rounded-xl p-4 space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FF9898]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </h4>
              <p className="text-white">
                {selectedUser.address.street}, {selectedUser.address.suite}
              </p>
              <p className="text-white">
                {selectedUser.address.city}, {selectedUser.address.zipcode}
              </p>
            </div>

            {/* Company */}
            <div className="bg-[#1A1A22] rounded-xl p-4 space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FF9898]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Company
              </h4>
              <p className="text-white font-medium">{selectedUser.company.name}</p>
              <p className="text-gray-400 text-sm italic">"{selectedUser.company.catchPhrase}"</p>
              <p className="text-gray-400 text-sm">{selectedUser.company.bs}</p>
            </div>

            {/* Close Button */}
            <div className="flex justify-end">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}