import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BsStarFill, BsStar, BsArrowRight, BsHeart, BsCart } from 'react-icons/bs';
import { motion } from 'framer-motion';

// Memoized Star Rating Component
const StarRating = memo(({ rating, reviews }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <span key={i}>
                {i < Math.floor(rating) ? 
                    <BsStarFill className="text-yellow-400 text-sm" /> : 
                    <BsStar className="text-gray-300 text-sm" />
                }
            </span>
        ))}
        <span className="text-xs text-gray-500 ml-1">({reviews})</span>
    </div>
));
StarRating.displayName = 'StarRating';

const ProductCard = memo(({ item, index }) => (
    <motion.div
        variants={{
            hover: {
                y: -5,
                transition: { duration: 0.2 }
            }
        }}
        whileHover="hover"
        className="h-full"
    >
        <Card className="h-full flex flex-col bg-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full pb-[75%]"> {/* 4:3 Aspect ratio */}
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-full">
                        {item.badge}
                    </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                        {item.discount}
                    </span>
                </div>

                {/* Image Container */}
                <div className="absolute inset-0">
                    <div className="relative w-full h-full group">
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex gap-2">
                                <Button 
                                    variant="contained" 
                                    size="small"
                                    className="bg-white text-gray-900 hover:bg-gray-100"
                                >
                                    <BsCart className="mr-1" />
                                    Add to Cart
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

            <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                    <Typography variant="body2" className="font-semibold text-gray-600">
                        {item.category}
                    </Typography>
                    <StarRating rating={item.rating} reviews={item.reviews} />
                </div>

                <Typography variant="h6" className="font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                    {item.name}
                </Typography>

                <div className="mb-4 flex-grow">
                    {item.features.map((feature, idx) => (
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
                        <Typography variant="h6" className="text-orange-600 font-bold">
                            {item.price}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500 line-through">
                            {item.originalPrice}
                        </Typography>
                    </div>
                    <Button 
                        variant="contained" 
                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full"
                    >
                        Add to Cart
                        <BsArrowRight className="ml-2" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    </motion.div>
));

ProductCard.displayName = 'ProductCard';

const MobileAccessories = () => {
    const accessories = [
        {
            id: 1,
            name: 'Premium Phone Case',
            category: 'Protection',
            price: '₹599',
            originalPrice: '₹999',
            image: '/images/assets/case.jpg',
            rating: 4.5,
            reviews: 234,
            discount: '40% OFF',
            badge: 'Best Seller',
            features: ['Shock Proof', 'Anti-Slip', 'All Models']
        },
        {
            id: 2,
            name: 'Fast Charger 25W',
            category: 'Charging',
            price: '₹1,299',
            originalPrice: '₹1,599',
            image: '/images/assets/charger.avif',
            rating: 4.7,
            reviews: 189,
            discount: '19% OFF',
            badge: 'Fast Charging',
            features: ['25W Output', 'Universal', 'Safe Charging']
        },
        {
            id: 3,
            name: 'Wireless Earbuds',
            category: 'Audio',
            price: '₹2,499',
            originalPrice: '₹3,999',
            image: '/images/assets/earbuds.avif',
            rating: 4.6,
            reviews: 156,
            discount: '38% OFF',
            badge: 'Premium Audio',
            features: ['Bluetooth 5.0', 'Noise Cancel', '24H Battery']
        },
        {
            id: 4,
            name: 'Power Bank 10000mAh',
            category: 'Power',
            price: '₹1,199',
            originalPrice: '₹1,799',
            image: '/images/assets/powerbank.jpeg',
            rating: 4.4,
            reviews: 312,
            discount: '33% OFF',
            badge: 'High Capacity',
            features: ['10000mAh', 'Fast Charge', 'Compact']
        },
        {
            id: 5,
            name: 'Screen Protector',
            category: 'Protection',
            price: '₹299',
            originalPrice: '₹499',
            image: '/images/assets/screen-protector.webp',
            rating: 4.3,
            reviews: 445,
            discount: '40% OFF',
            badge: 'Crystal Clear',
            features: ['9H Hardness', 'Anti-Fingerprint', 'Easy Install']
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 border border-orange-200 text-orange-700 rounded-full text-sm font-medium mb-6">
                        <BsStarFill className="mr-2" />
                        Premium Accessories
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Mobile Accessories
                        <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            Premium Collection
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        High-quality mobile accessories with massive discounts. 
                        Cases, chargers, earphones and more for all brands at unbeatable prices.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {accessories.map((item, index) => (
                        <ProductCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300">
                        View All Accessories
                        <BsArrowRight className="ml-2" />
                    </button>
                    <p className="text-gray-600 mt-4">
                        Free shipping • 30-day return • Quality guarantee
                    </p>
                </div>
            </div>
        </section>
    );
};

export default memo(MobileAccessories);