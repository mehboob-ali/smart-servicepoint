'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/state/CartContext';
import { useOrders } from '@/app/state/OrdersContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, totals, clearCart } = useCart();
  const { createOrder } = useOrders();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pincode: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const order = createOrder({ items, totals, customer: form });
    clearCart();
    router.push(`/checkout/success?id=${order.id}`);
  };

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form onSubmit={onSubmit} className="bg-gray-50 border rounded-xl p-6 space-y-4 lg:col-span-2">
            <Typography variant="h6">Shipping Details</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField label="Full Name" value={form.name} onChange={(e) => update('name', e.target.value)} required />
              <TextField label="Phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} required />
            </div>
            <TextField label="Address" value={form.address} onChange={(e) => update('address', e.target.value)} required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField label="City" value={form.city} onChange={(e) => update('city', e.target.value)} required />
              <TextField label="Pincode" value={form.pincode} onChange={(e) => update('pincode', e.target.value)} required />
            </div>
            <Button type="submit" variant="contained">Place Order</Button>
          </form>

          <div className="bg-white border rounded-xl p-6 h-fit">
            <Typography variant="h6" className="mb-4">Order Summary</Typography>
            <div className="space-y-2 max-h-72 overflow-auto">
              {items.map((i) => (
                <div key={`${i.type}_${i.id}`} className="flex items-center justify-between text-sm">
                  <span>{i.name} × {i.qty}</span>
                  <span>₹{i.qty * i.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-gray-700">
              <span>Subtotal</span>
              <span>₹{totals.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{totals.delivery}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-3">
              <span>Total</span>
              <span>₹{totals.total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


