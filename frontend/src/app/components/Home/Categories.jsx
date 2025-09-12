"use client";
import React, { useState, useMemo } from 'react';
import { BsPhone, BsTools, BsBag, BsArrowRight, BsStarFill } from "react-icons/bs";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';


const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = useMemo(() => [
        {
            id: 1,
            name: 'Mobile Sales',
            icon: BsPhone,
            description: 'Latest smartphones from top brands',
            gradient: 'from-blue-500 to-purple-600',
            bgGradient: 'from-blue-50 to-purple-50',
            features: ['Premium Brands', 'Best Prices', 'Warranty Included'],
            stats: '50+ Models',
            color: 'blue'
        },
        {
            id: 2,
            name: 'Mobile Repair',
            icon: BsTools,
            description: 'Expert repair services',
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-50 to-emerald-50',
            features: ['Genuine Parts', 'Same Day Repair', 'Doorstep Service'],
            stats: '24/7 Support',
            color: 'green'
        },
        {
            id: 3,
            name: 'Accessories',
            icon: BsBag,
            description: 'Cases, chargers & more',
            gradient: 'from-orange-500 to-red-600',
            bgGradient: 'from-orange-50 to-red-50',
            features: ['Premium Quality', 'Massive Discounts', 'All Brands'],
            stats: '100+ Items',
            color: 'orange'
        }
    ], []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Add React.memo to prevent unnecessary re-renders
    const CategoryCard = React.memo(({ category, isSelected, onSelect }) => {
        const cardVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.3 }
            }
        };

        CategoryCard.displayName = 'CategoryCard'; 

        const IconComponent = category.icon;

        return (
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                layout
            >
                <Card
                    onClick={onSelect}
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 ${
                        isSelected
                            ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-2xl'
                            : 'hover:shadow-xl'
                    }`}
                    elevation={0}
                >
                    <div className={`relative bg-gradient-to-br ${category.bgGradient} p-8 h-full overflow-hidden`}>
                        {/* Static Background Bubbles */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-400 to-transparent rounded-full opacity-5"></div>
                        <div className="absolute bottom-0 left-0 w-14 h-14 bg-gradient-to-tr from-gray-400 to-transparent rounded-full opacity-5"></div>

                        <CardContent className="relative z-10 p-0">
                            {/* Icon */}
                            <div
                                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                            >
                                <IconComponent className="text-3xl text-white" />
                            </div>

                            {/* Content */}
                            <Typography variant="h4" className="font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                {category.name}
                            </Typography>
                            
                            <Typography variant="body1" className="text-gray-600 mb-6 leading-relaxed">
                                {category.description}
                            </Typography>

                            {/* Features */}
                            <div className="space-y-2 mb-6">
                                {category.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                                        <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3`}></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-semibold text-gray-500">
                                    {category.stats}
                                </div>
                                <Button
                                    variant="text"
                                    className={`text-transparent bg-clip-text bg-gradient-to-r ${category.gradient} hover:scale-105 transition-transform duration-200`}
                                >
                                    Learn More
                                    <BsArrowRight className="ml-1" />
                                </Button>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </motion.div>
        );
    });

    return (
        <section className="relative py-20 w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 border border-blue-200 text-blue-700 rounded-full text-sm font-medium mb-6">
                        <BsStarFill className="mr-2" />
                        Our Services
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Everything You Need for Your
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Mobile
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From premium smartphones to expert repair services and quality accessories - 
                        we&apos;ve got everything covered for your mobile needs in Manvi.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            <Card
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full cursor-pointer transition-all duration-300 hover:shadow-xl bg-white/90 border-0 ${
                                    selectedCategory === category.id
                                        ? 'ring-2 ring-blue-500 ring-opacity-50'
                                        : ''
                                }`}
                            >
                                <div className={`relative bg-gradient-to-br ${category.bgGradient} p-6 md:p-8`}>
                                    <CardContent className="p-0">
                                        <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${category.gradient} rounded-xl md:rounded-2xl mb-4 md:mb-6 transition-transform duration-300 hover:scale-105`}>
                                            {React.createElement(category.icon, { className: "text-2xl md:text-3xl text-white" })}
                                        </div>

                                        <Typography variant="h5" className="font-bold text-gray-900 mb-2 md:mb-3">
                                            {category.name}
                                        </Typography>
                                        
                                        <Typography variant="body2" className="text-gray-600 mb-4 md:mb-6">
                                            {category.description}
                                        </Typography>

                                        <div className="space-y-2 mb-4 md:mb-6">
                                            {category.features.map((feature, index) => (
                                                <div key={index} className="flex items-center text-sm text-gray-600">
                                                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${category.gradient} rounded-full mr-2`} />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-500">
                                                {category.stats}
                                            </span>
                                            <Button
                                                variant="text"
                                                size="small"
                                                className={`text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}
                                            >
                                                Learn More
                                                <BsArrowRight className="ml-1" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;