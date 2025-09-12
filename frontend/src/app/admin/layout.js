"use client";

import React from 'react';

export default function AdminLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="sticky top-0 z-40 bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-bold">Smart ServicePoint Admin</div>
          <nav className="space-x-4 text-sm">
            <a href="/admin" className="hover:underline">Dashboard</a>
            <a href="/" className="hover:underline">View Site</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-gray-900 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">© Admin Console</div>
      </footer>
    </div>
  );
}


