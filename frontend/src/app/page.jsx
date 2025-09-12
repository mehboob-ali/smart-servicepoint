'use client';
import React from "react";
import './globals.css'
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import MobileSales from "./components/Home/MobileSales";
import MobileAccessories from "./components/Home/MobileAccessories";
import Reveal from "./components/Reveal";

// Simplified Static Background Component
const SharedBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-indigo-500/15 rounded-full mix-blend-multiply filter blur-xl" />
    </div>
);

export default function HomePage() {
    return (
        <>
            <div className="min-h-screen">
                <main>
                    <Hero />
                    <Reveal>
                        <Categories />
                    </Reveal>
                    <Reveal>
                        <MobileSales />
                    </Reveal>
                    <Reveal>
                        <MobileAccessories />
                    </Reveal>
                </main>
            </div>
        </>
    );
}
