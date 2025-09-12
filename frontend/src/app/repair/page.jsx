'use client';

import React, { useMemo, useState } from 'react';
import { useRepair } from '@/app/state/RepairContext';
import { useProducts } from '@/app/state/ProductsContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

const brands = ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Realme', 'Vivo', 'Oppo'];

export default function RepairPage() {
  const router = useRouter();
  const { createBooking } = useRepair();
  const { services } = useProducts();
  const allIssues = useMemo(() => Array.from(new Set(services.flatMap(s => s.issues || []))), [services]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    brand: '',
    model: '',
    issue: '',
    preferredDate: '',
    preferredTime: '',
    doorstep: true,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const booking = createBooking(form);
    router.push(`/repair/success?id=${booking.id}`);
  };

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Book Repair Appointment</h1>
          <p className="text-gray-600">Doorstep pickup and delivery available</p>
        </div>

        <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-xl border p-6 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField label="Full Name" value={form.name} onChange={(e) => update('name', e.target.value)} required />
            <TextField label="Phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} required />
          </div>
          <TextField label="Pickup Address" value={form.address} onChange={(e) => update('address', e.target.value)} required />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField select label="Brand" value={form.brand} onChange={(e) => update('brand', e.target.value)} required>
              {brands.map((b) => (
                <MenuItem key={b} value={b}>{b}</MenuItem>
              ))}
            </TextField>
            <TextField label="Model" value={form.model} onChange={(e) => update('model', e.target.value)} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField select label="Issue" value={form.issue} onChange={(e) => update('issue', e.target.value)} required>
              {allIssues.map((i) => (
                <MenuItem key={i} value={i}>{i}</MenuItem>
              ))}
            </TextField>
            <TextField label="Preferred Date" type="date" InputLabelProps={{ shrink: true }} value={form.preferredDate} onChange={(e) => update('preferredDate', e.target.value)} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField label="Preferred Time" type="time" InputLabelProps={{ shrink: true }} value={form.preferredTime} onChange={(e) => update('preferredTime', e.target.value)} required />
            <TextField select label="Service Type" value={form.doorstep ? 'Doorstep' : 'In-Store'} onChange={(e) => update('doorstep', e.target.value === 'Doorstep')}>
              <MenuItem value="Doorstep">Doorstep</MenuItem>
              <MenuItem value="In-Store">In-Store</MenuItem>
            </TextField>
          </div>

          <div className="flex items-center justify-between mt-2">
            <Typography className="text-gray-600">We`&apos`ll confirm your booking via WhatsApp/SMS.</Typography>
            <Button type="submit" variant="contained">Book Appointment</Button>
          </div>
        </form>
      </div>
    </section>
  );
}


