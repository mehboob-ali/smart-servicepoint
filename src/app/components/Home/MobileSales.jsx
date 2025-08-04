import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BsStarFill, BsArrowRight, BsHeart, BsEye } from 'react-icons/bs';
import { motion } from 'framer-motion';

const PhoneCard = ({ phone, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
    >
        <Card className="h-full flex flex-col bg-white shadow-md hover:shadow-xl transition-all duration-300">
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="relative w-full pt-[100%]">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                        {phone.badge}
                    </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                        {phone.discount}
                    </span>
                </div>

                {/* Image */}
                <div className="absolute inset-0 p-4">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        <CardMedia
                            component="img"
                            image={phone.image}
                            alt={phone.name}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                            <div className="flex gap-2">
                                <Button 
                                    variant="contained" 
                                    size="small"
                                    className="bg-white text-gray-900 hover:bg-gray-100"
                                >
                                    <BsEye className="mr-1" />
                                    Quick View
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    size="small"
                                    className="border-white text-white hover:bg-white hover:text-gray-900"
                                >
                                    <BsHeart />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <Typography variant="body2" className="font-semibold text-gray-600">
                        {phone.brand}
                    </Typography>
                    <div className="flex items-center">
                        <BsStarFill className="text-yellow-400 mr-1" />
                        <span className="text-sm font-semibold">{phone.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({phone.reviews})</span>
                    </div>
                </div>

                <Typography variant="h6" className="font-bold text-gray-900 mb-3">
                    {phone.name}
                </Typography>

                <div className="mb-4 flex-grow">
                    {phone.features.map((feature, idx) => (
                        <span 
                            key={idx} 
                            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-2 mb-2"
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <Typography variant="h6" className="text-green-600 font-bold">
                            {phone.price}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500 line-through">
                            {phone.originalPrice}
                        </Typography>
                    </div>
                    <Button 
                        variant="contained" 
                        className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-full"
                    >
                        View Details
                        <BsArrowRight className="ml-2" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

const MobileSales = () => {
    const popularPhones = [
        {
            id: 1,
            name: 'iPhone 15 Pro',
            brand: 'Apple',
            price: '₹89,999',
            originalPrice: '₹99,999',
            image: '/images/assets/ip15.jpg',
            rating: 4.8,
            reviews: 124,
            features: ['A17 Pro Chip', '48MP Camera', 'Titanium Design'],
            badge: 'Best Seller',
            discount: '10% OFF'
        },
        {
            id: 2,
            name: 'Samsung Galaxy S24',
            brand: 'Samsung',
            price: '₹79,999',
            originalPrice: '₹89,999',
            image: '/images/assets/s24.jpg',
            rating: 4.7,
            reviews: 89,
            features: ['Snapdragon 8 Gen 3', '200MP Camera', 'AI Features'],
            badge: 'New Launch',
            discount: '11% OFF'
        },
        {
            id: 3,
            name: 'OnePlus 12',
            brand: 'OnePlus',
            price: '₹64,999',
            originalPrice: '₹74,999',
            image: '/images/assets/op12.jpg',
            rating: 4.6,
            reviews: 156,
            features: ['Snapdragon 8 Gen 3', '50MP Camera', '100W Charging'],
            badge: 'Value Pick',
            discount: '13% OFF'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 border border-green-200 text-green-700 rounded-full text-sm font-medium mb-6">
                        <BsStarFill className="mr-2" />
                        Premium Collection
                    </div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Latest Mobile Phones
                        <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Premium Collection
                        </span>
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the latest smartphones from top brands with exclusive deals, 
                        warranty, and expert support. Get the best prices in Manvi.
                    </p>
                </div>

                {/* Phones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {popularPhones.map((phone, index) => (
                        <PhoneCard key={phone.id} phone={phone} index={index} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <Button 
                        variant="contained"
                        className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                        View All Phones
                        <BsArrowRight className="ml-2" />
                    </Button>
                    <p className="text-gray-600 mt-4">
                        Free delivery • 7-day return • 1-year warranty
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MobileSales;