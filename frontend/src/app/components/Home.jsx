'use client'
import { Button, Card, CardHeader, CardBody, Image, CardFooter, Select, SelectItem, user } from '@nextui-org/react'
import React from 'react'
import Categories from './Home/Categories';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Hero from './Home/Hero';

function Home() {
    const router = useRouter();
    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedModel, setSelectedModel] = useState();
    const [selectedProblem, setSelectedProblem] = useState();
    const handleSubmit = () =>{
        router.push({pathName: '/DeviceDetails',
        query: {
            brand: selectedBrand,
            model: selectedModel,
            problem: selectedProblem,
        }})
    }


    
    return (
        <>
            <Hero />
            <Categories />            
        </>
    )
}

export default Home;