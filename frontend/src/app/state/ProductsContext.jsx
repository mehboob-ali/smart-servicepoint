'use client';

import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const ProductsContext = createContext(null);

const STORAGE_KEY = 'ssp_products_v1';

const defaultPhones = [
  { id: 'phone_iphone15pro', name: 'iPhone 15 Pro', brand: 'Apple', price: 89999, image: '/images/assets/ip15.jpg', rating: 4.8 },
  { id: 'phone_s24', name: 'Samsung Galaxy S24', brand: 'Samsung', price: 79999, image: '/images/assets/s24.jpg', rating: 4.7 },
  { id: 'phone_op12', name: 'OnePlus 12', brand: 'OnePlus', price: 64999, image: '/images/assets/op12.jpg', rating: 4.6 },
];

const defaultAccessories = [
  { id: 'acc_case', name: 'Premium Phone Case', category: 'Protection', price: 599, image: '/images/assets/case.jpg', rating: 4.5 },
  { id: 'acc_charger25w', name: 'Fast Charger 25W', category: 'Charging', price: 1299, image: '/images/assets/charger.avif', rating: 4.7 },
  { id: 'acc_earbuds', name: 'Wireless Earbuds', category: 'Audio', price: 2499, image: '/images/assets/earbuds.avif', rating: 4.6 },
];

const defaultServices = [
  { id: 'svc_screen', name: 'Screen Replacement', basePrice: 1499, issues: ['Cracked Screen', 'Touch Not Working'] },
  { id: 'svc_battery', name: 'Battery Replacement', basePrice: 999, issues: ['Fast Draining', 'Not Charging'] },
  { id: 'svc_ports', name: 'Charging Port', basePrice: 799, issues: ['Loose Port', 'No Charging'] },
];

export function ProductsProvider({ children }) {
  const [phones, setPhones] = useState(defaultPhones);
  const [accessories, setAccessories] = useState(defaultAccessories);
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.phones) setPhones(parsed.phones);
        if (parsed.accessories) setAccessories(parsed.accessories);
        if (parsed.services) setServices(parsed.services);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ phones, accessories, services }));
    } catch {}
  }, [phones, accessories, services]);

  const addPhone = useCallback((phone) => setPhones((prev) => [...prev, { ...phone, id: phone.id || `phone_${Date.now()}` }]), []);
  const addAccessory = useCallback((acc) => setAccessories((prev) => [...prev, { ...acc, id: acc.id || `acc_${Date.now()}` }]), []);
  const addService = useCallback((svc) => setServices((prev) => [...prev, { ...svc, id: svc.id || `svc_${Date.now()}` }]), []);
  const removePhone = useCallback((id) => setPhones((prev) => prev.filter((p) => p.id !== id)), []);
  const removeAccessory = useCallback((id) => setAccessories((prev) => prev.filter((p) => p.id !== id)), []);
  const removeService = useCallback((id) => setServices((prev) => prev.filter((s) => s.id !== id)), []);
  const updatePhone = useCallback((updated) => setPhones((prev) => prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))), []);
  const updateAccessory = useCallback((updated) => setAccessories((prev) => prev.map((a) => (a.id === updated.id ? { ...a, ...updated } : a))), []);
  const updateService = useCallback((updated) => setServices((prev) => prev.map((s) => (s.id === updated.id ? { ...s, ...updated } : s))), []);

  const value = useMemo(
    () => ({ phones, accessories, services, addPhone, addAccessory, addService, removePhone, removeAccessory, removeService, updatePhone, updateAccessory, updateService }),
    [phones, accessories, services, addPhone, addAccessory, addService, removePhone, removeAccessory, removeService, updatePhone, updateAccessory, updateService]
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts must be used within ProductsProvider');
  return ctx;
}


