'use client';

import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const RepairContext = createContext(null);
const STORAGE_KEY = 'ssp_repairs_v1';

export function RepairProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setBookings(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch {}
  }, [bookings]);

  const createBooking = useCallback((payload) => {
    const id = `rep_${Date.now()}`;
    const record = { id, status: 'scheduled', createdAt: new Date().toISOString(), ...payload };
    setBookings((prev) => [record, ...prev]);
    return record;
  }, []);

  const updateStatus = useCallback((id, status) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  }, []);

  const value = useMemo(() => ({ bookings, createBooking, updateStatus }), [bookings, createBooking, updateStatus]);

  return <RepairContext.Provider value={value}>{children}</RepairContext.Provider>;
}

export function useRepair() {
  const ctx = useContext(RepairContext);
  if (!ctx) throw new Error('useRepair must be used within RepairProvider');
  return ctx;
}


