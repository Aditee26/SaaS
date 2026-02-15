'use client';

import React from 'react';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function Table<T extends Record<string, any>>({ 
  data, 
  columns, 
  className = '' 
}: TableProps<T>) {
  if (!data.length) return null;

  const renderCell = (item: T, column: Column<T>) => {
    if (typeof column.accessor === 'function') {
      return column.accessor(item);
    }
    
    // Handle string accessor - safely access nested properties
    const keys = String(column.accessor).split('.');
    let value: any = item;
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        value = undefined;
        break;
      }
    }
    return value !== undefined && value !== null ? String(value) : '';
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#3D3D49]">
            {columns.map((column, index) => (
              <th
                key={index}
                className="text-left py-4 px-4 text-sm font-medium text-gray-400"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-[#3D3D49] hover:bg-[#2A2A35]/50 transition-colors"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-4 px-4 text-sm text-gray-300">
                  {renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}