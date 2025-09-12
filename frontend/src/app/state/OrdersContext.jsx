'use client';

import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const OrdersContext = createContext(null);
const STORAGE_KEY = 'ssp_orders_v1';

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setOrders(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    } catch {}
  }, [orders]);

  const createOrder = useCallback((payload) => {
    const id = `ord_${Date.now()}`;
    const record = { id, status: 'pending', createdAt: new Date().toISOString(), ...payload };
    setOrders((prev) => [record, ...prev]);
    return record;
  }, []);

  const updateOrderStatus = useCallback((id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }, []);

  const value = useMemo(() => ({ orders, createOrder, updateOrderStatus }), [orders, createOrder, updateOrderStatus]);

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error('useOrders must be used within OrdersProvider');
  return ctx;
}


