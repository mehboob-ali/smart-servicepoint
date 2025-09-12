'use client';

import React, { createContext, useContext, useMemo, useEffect, useState, useCallback } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'ssp_cart_v1';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = useCallback((item) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((p) => p.id === item.id && p.type === item.type);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], qty: updated[existingIndex].qty + (item.qty || 1) };
        return updated;
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  }, []);

  const removeItem = useCallback((id, type) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.type === type)));
  }, []);

  const updateQty = useCallback((id, type, qty) => {
    setItems((prev) => prev.map((i) => (i.id === id && i.type === type ? { ...i, qty: Math.max(1, qty) } : i)));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const delivery = subtotal > 0 ? 99 : 0;
    const total = subtotal + delivery;
    return { subtotal, delivery, total };
  }, [items]);

  const value = useMemo(() => ({ items, addItem, removeItem, updateQty, clearCart, totals }), [items, addItem, removeItem, updateQty, clearCart, totals]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}


