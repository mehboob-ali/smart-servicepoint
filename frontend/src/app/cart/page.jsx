'use client';

import React from 'react';
import { useCart } from '@/app/state/CartContext';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { BsTrash } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, removeItem, updateQty, totals } = useCart();
  const router = useRouter();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white border rounded-xl p-10 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
            <div className="flex gap-3 justify-center">
              <Button variant="outlined" onClick={() => router.push('/phones')}>Browse Phones</Button>
              <Button variant="contained" onClick={() => router.push('/accessories')}>Browse Accessories</Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {items.map((i) => (
                <div key={`${i.type}_${i.id}`} className="bg-white border rounded-xl p-4 flex gap-4 items-center">
                  {i.image && (
                    <img src={i.image} alt={i.name} className="w-20 h-20 object-cover rounded" />
                  )}
                  <div className="flex-1">
                    <div className="font-semibold">{i.name}</div>
                    <div className="text-xs text-gray-500 uppercase">{i.type}</div>
                  </div>
                  <TextField
                    type="number"
                    size="small"
                    inputProps={{ min: 1 }}
                    value={i.qty}
                    onChange={(e) => updateQty(i.id, i.type, Number(e.target.value))}
                    className="w-24"
                  />
                  <div className="w-24 text-right font-semibold">₹{i.price * i.qty}</div>
                  <IconButton color="error" onClick={() => removeItem(i.id, i.type)}>
                    <BsTrash />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className="bg-white border rounded-xl p-6 h-fit">
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Subtotal</span>
                <span>₹{totals.subtotal}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Delivery</span>
                <span>₹{totals.delivery}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-3">
                <span>Total</span>
                <span>₹{totals.total}</span>
              </div>
              <Button className="w-full mt-4" variant="contained" onClick={() => router.push('/checkout')}>Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


