"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useProducts } from "@/app/state/ProductsContext";
import { useOrders } from "@/app/state/OrdersContext";
import { useRepair } from "@/app/state/RepairContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const {
    addPhone,
    addAccessory,
    addService,
    services,
    phones,
    accessories,
    removePhone,
    removeAccessory,
    removeService,
    updatePhone,
    updateAccessory,
    updateService,
  } = useProducts();
  const { orders, updateOrderStatus } = useOrders();
  const { bookings, updateStatus } = useRepair();
  const [type, setType] = useState("phone");
  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
    issues: "",
  });
  const [activeTab, setActiveTab] = useState("products");
  const router = useRouter();

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        console.log("Admin page useEffect hit, verifying admin token");
        const res = await fetch("http://localhost:5000/api/admin/verify", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok && data.role === "admin") {
          console.log("Admin  verified");
        } else {
          console.log("Not an admin, redirecting to /login", data);
          router.push("/login");
        }
      } catch (err) {
        console.log("failed to load", err);
        router.push("/login");
      }
    };
    verifyAdmin();
    // const role = localStorage.getItem("role");
    // if(role!== "admin"){
    //   router.push("/login");
    // }
  }, []);

  const onAdd = (e) => {
    e.preventDefault();
    const price = Number(form.price || 0);
    if (type === "phone") {
      addPhone({
        name: form.name,
        brand: form.brand,
        price,
        image: form.image,
      });
    } else {
      if (type === "accessory") {
        addAccessory({
          name: form.name,
          category: form.category,
          price,
          image: form.image,
        });
      } else {
        const issues = form.issues
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        addService({ name: form.name, basePrice: price, issues });
      }
    }
    setForm({
      name: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      issues: "",
    });
  };

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="flex gap-2 mb-6">
          {["products", "bookings", "reports"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "contained" : "outlined"}
              className=""
              onClick={() => setActiveTab(tab)}
            >
              {tab[0].toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        {activeTab === "products" && (
          <>
            <form
              onSubmit={onAdd}
              className="bg-white border rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
            >
              <TextField
                select
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="phone">Phone</MenuItem>
                <MenuItem value="accessory">Accessory</MenuItem>
                <MenuItem value="service">Service</MenuItem>
              </TextField>
              <TextField
                label="Name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
              {type === "phone" ? (
                <TextField
                  label="Brand"
                  value={form.brand}
                  onChange={(e) => update("brand", e.target.value)}
                  required
                />
              ) : type === "accessory" ? (
                <TextField
                  label="Category"
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                  required
                />
              ) : (
                <TextField
                  label="Issues (comma-separated)"
                  value={form.issues}
                  onChange={(e) => update("issues", e.target.value)}
                  placeholder="Cracked Screen, Touch Not Working"
                />
              )}
              <TextField
                label="Price (₹)"
                type="number"
                value={form.price}
                onChange={(e) => update("price", e.target.value)}
                required={type !== "service" ? true : false}
              />
              {type !== "service" && (
                <TextField
                  label="Image URL"
                  value={form.image}
                  onChange={(e) => update("image", e.target.value)}
                />
              )}
              <div className="md:col-span-2">
                <Button type="submit" variant="contained">
                  Add
                </Button>
              </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Typography variant="h6" className="mb-2">
                  Phones
                </Typography>
                <div className="bg-white border rounded-xl divide-y">
                  {phones.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold">{p.name}</div>
                        <div className="text-xs text-gray-500">{p.brand}</div>
                      </div>
                      <div className="space-x-2">
                        <Button
                          size="small"
                          onClick={() =>
                            updatePhone({ ...p, price: (p.price || 0) + 100 })
                          }
                        >
                          +₹100
                        </Button>
                        <Button
                          size="small"
                          color="error"
                          onClick={() => removePhone(p.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Typography variant="h6" className="mb-2">
                  Accessories
                </Typography>
                <div className="bg-white border rounded-xl divide-y">
                  {accessories.map((a) => (
                    <div
                      key={a.id}
                      className="p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold">{a.name}</div>
                        <div className="text-xs text-gray-500">
                          {a.category}
                        </div>
                      </div>
                      <div className="space-x-2">
                        <Button
                          size="small"
                          onClick={() =>
                            updateAccessory({
                              ...a,
                              price: (a.price || 0) + 50,
                            })
                          }
                        >
                          +₹50
                        </Button>
                        <Button
                          size="small"
                          color="error"
                          onClick={() => removeAccessory(a.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Typography variant="h6" className="mb-2">
                  Services
                </Typography>
                <div className="bg-white border rounded-xl divide-y">
                  {services.map((s) => (
                    <div
                      key={s.id}
                      className="p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold">{s.name}</div>
                        <div className="text-xs text-gray-500">
                          Issues: {(s.issues || []).join(", ")}
                        </div>
                      </div>
                      <div className="space-x-2">
                        <Button
                          size="small"
                          onClick={() =>
                            updateService({
                              ...s,
                              basePrice: (s.basePrice || 0) + 100,
                            })
                          }
                        >
                          +₹100
                        </Button>
                        <Button
                          size="small"
                          color="error"
                          onClick={() => removeService(s.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "bookings" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-4">
              <Typography variant="h6" className="mb-3">
                Sales Orders
              </Typography>
              <div className="divide-y">
                {orders.map((o) => (
                  <div
                    key={o.id}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold">{o.id}</div>
                      <div className="text-xs text-gray-500">
                        {o.items.length} items • ₹{o.totals.total}
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => updateOrderStatus(o.id, "processing")}
                      >
                        Processing
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => updateOrderStatus(o.id, "completed")}
                      >
                        Completed
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border rounded-xl p-4">
              <Typography variant="h6" className="mb-3">
                Repair Appointments
              </Typography>
              <div className="divide-y">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold">
                        {b.name} • {b.brand} {b.model}
                      </div>
                      <div className="text-xs text-gray-500">
                        {b.issue} • {b.preferredDate} {b.preferredTime}
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => updateStatus(b.id, "in-progress")}
                      >
                        In Progress
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => updateStatus(b.id, "done")}
                      >
                        Done
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
