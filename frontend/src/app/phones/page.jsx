'use client';

import React from 'react';
import { useProducts } from '@/app/state/ProductsContext';
import { useCart } from '@/app/state/CartContext';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Reveal from '@/app/components/Reveal';
import Typography from '@mui/material/Typography';

export default function PhonesPage() {
  const { phones } = useProducts();
  const { addItem } = useCart();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Mobile Phones</h1>
          <p className="text-gray-600">Browse and add to cart</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {phones.map((p, idx) => (
            <Reveal key={p.id}>
            <Card className="bg-white shadow">
              <div className="relative w-full pb-[75%]">
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="absolute inset-0 object-cover" />
              </div>
              <CardContent>
                <Typography variant="h6" className="font-bold">{p.name}</Typography>
                <Typography variant="body2" className="text-gray-600">{p.brand}</Typography>
                <div className="mt-4 flex items-center justify-between">
                  <Typography variant="h6" className="text-green-600 font-bold">₹{p.price}</Typography>
                  <Button variant="contained" onClick={() => addItem({ id: p.id, type: 'phone', name: p.name, price: p.price, image: p.image })}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


