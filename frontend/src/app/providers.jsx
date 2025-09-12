'use client';

import React from 'react';
import { CartProvider } from './state/CartContext';
import { ProductsProvider } from './state/ProductsContext';
import { RepairProvider } from './state/RepairContext';
import { OrdersProvider } from './state/OrdersContext';

export default function Providers({ children }) {
  return (
    <ProductsProvider>
      <CartProvider>
        <OrdersProvider>
          <RepairProvider>
            {children}
          </RepairProvider>
        </OrdersProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

// app/providers.jsx

