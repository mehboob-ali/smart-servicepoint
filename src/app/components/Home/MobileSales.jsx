import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BsStarFill, BsArrowRight, BsHeart, BsEye } from 'react-icons/bs';
import { motion } from 'framer-motion';


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
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hover: {
            scale: 1.05,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            className="py-20 bg-white relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 rounded-full text-sm font-medium mb-6 shadow-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <BsStarFill className="mr-2" />
                        Premium Collection
                    </motion.div>
                    <motion.h2 
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        variants={itemVariants}
                    >
                        Latest Mobile Phones
                        <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Premium Collection
                        </span>
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Discover the latest smartphones from top brands with exclusive deals, 
                        warranty, and expert support. Get the best prices in Manvi.
                    </motion.p>
                </motion.div>
                
                {/* Phones Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                >
                    {popularPhones.map((phone, index) => (
                        <motion.div
                            key={phone.id}
                            variants={cardVariants}
                            whileHover="hover"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card 
                                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg"
                                elevation={0}
                            >
                                <div className="relative">
                                    {/* Badge */}
                                    <motion.div 
                                        className="absolute top-4 left-4 z-10"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.2 + 0.5 }}
                                    >
                                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                                            {phone.badge}
                                        </span>
                                    </motion.div>

                                    {/* Discount Badge */}
                                    <motion.div 
                                        className="absolute top-4 right-4 z-10"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.2 + 0.7 }}
                                    >
                                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                            {phone.discount}
                                        </span>
                                    </motion.div>

                                    {/* Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="280"
                                            image={phone.image}
                                            alt={phone.name}
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </motion.div>

                                    {/* Overlay Actions */}
                                    <motion.div 
                                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <div className="flex space-x-4">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button 
                                                    variant="contained" 
                                                    size="small"
                                                    className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                                                >
                                                    <BsEye className="mr-1" />
                                                    Quick View
                                                </Button>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button 
                                                    variant="outlined" 
                                                    size="small"
                                                    className="border-white text-white hover:bg-white hover:text-gray-900"
                                                >
                                                    <BsHeart />
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                <CardContent className="p-6">
                                    {/* Brand & Rating */}
                                    <div className="flex items-center justify-between mb-3">
                                        <Typography variant="body2" color="text.secondary" className="font-semibold">
                                            {phone.brand}
                                        </Typography>
                                        <motion.div 
                                            className="flex items-center"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 + 0.9 }}
                                        >
                                            <BsStarFill className="text-yellow-400 mr-1" />
                                            <span className="text-sm font-semibold">{phone.rating}</span>
                                            <span className="text-xs text-gray-500 ml-1">({phone.reviews})</span>
                                        </motion.div>
                                    </div>

                                    {/* Name */}
                                    <Typography variant="h5" className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {phone.name}
                                    </Typography>

                                    {/* Features */}
                                    <div className="mb-4">
                                        {phone.features.map((feature, featureIndex) => (
                                            <motion.span 
                                                key={featureIndex} 
                                                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-2 mb-2"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.2 + 1.1 + featureIndex * 0.1 }}
                                            >
                                                {feature}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Typography variant="h5" className="text-green-600 font-bold">
                                                {phone.price}
                                            </Typography>
                                            <Typography variant="body2" className="text-gray-500 line-through">
                                                {phone.originalPrice}
                                            </Typography>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button 
                                                variant="contained" 
                                                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                            >
                                                View Details
                                                <motion.div
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <BsArrowRight className="ml-2" />
                                                </motion.div>
                                            </Button>
                                        </motion.div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* CTA Section */}
                <motion.div 
                    className="text-center"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 cursor-pointer group shadow-lg"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Phones
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.div>
                    </motion.div>
                    <motion.p 
                        className="text-gray-600 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Free delivery • 7-day return • 1-year warranty
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MobileSales; 