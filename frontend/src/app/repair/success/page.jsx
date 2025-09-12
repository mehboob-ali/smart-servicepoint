'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Button from '@mui/material/Button';

export default function RepairSuccessPage() {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.get('id');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-2">Repair Booking Confirmed</h1>
        <p className="text-gray-600 mb-6">Your request has been received. We`&apos`ll contact you shortly.</p>
        <div className="bg-gray-50 border rounded-xl p-6 mb-8">
          <p className="text-gray-700">Booking ID</p>
          <p className="text-xl font-semibold">{id}</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="outlined" onClick={() => router.push('/repair')}>New Booking</Button>
          <Button variant="contained" onClick={() => router.push('/')}>Go Home</Button>
        </div>
      </div>
    </section>
  );
}