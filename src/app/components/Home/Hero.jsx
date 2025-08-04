import React from 'react';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { BsPhone, BsTools, BsBag, BsArrowRight, BsStarFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative overflow-hidden">
            <Swiper
                speed={800}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}
                modules={[Autoplay]}
                className='hero-swiper'
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
                        <div className="relative z-10 w-full px-4 py-20">
                            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                                <div className="text-white space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                                            <BsStarFill className="text-yellow-400 mr-2" />
                                            <span className="text-sm font-medium">Premium Mobile Store</span>
                                        </div>

                                        <motion.h1
                                            className="text-5xl lg:text-7xl font-bold leading-tight"
                                            variants={textVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                Latest
                                            </span>
                                            <br />
                                            <span className="text-white">Mobile Phones</span>
                                        </motion.h1>

                                        <motion.p
                                            className="text-xl text-gray-300 leading-relaxed max-w-lg"
                                            variants={textVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            Discover premium smartphones from top brands with exclusive deals,
                                            warranty, and expert support in Manvi.
                                        </motion.p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Explore Phones
                                            <BsArrowRight className="ml-2" />
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="large"
                                            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
                                        >
                                            View Deals
                                        </Button>
                                    </div>

                                    {/* Stats section with simple CSS transitions */}
                                    <div className="flex gap-8 pt-8">
                                        {[
                                            { number: "500+", label: "Happy Customers" },
                                            { number: "50+", label: "Phone Models" },
                                            { number: "24/7", label: "Support" }
                                        ].map((stat, index) => (
                                            <div
                                                key={index}
                                                className="text-center transition-transform hover:-translate-y-1 hover:scale-105"
                                            >
                                                <div className="text-3xl font-bold text-white">
                                                    {stat.number}
                                                </div>
                                                <div className="text-gray-400 text-sm">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Element - Simplified without motion */}
                                <div className="relative hidden lg:block">
                                    <div className="relative bg-white/10 rounded-3xl p-8 border border-white/20">
                                        <BsPhone className="text-8xl text-white/80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 - Mobile Repair */}
                <SwiperSlide>
                    <div className="relative min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center">
                        {/* Content */}
                        <div className="relative z-10 w-full px-4 py-20">
                            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                                {/* Text Content */}
                                <div className="text-white space-y-6">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                                            <BsTools className="text-green-400 mr-2" />
                                            <span className="text-sm font-medium">Expert Repair Services</span>
                                        </div>

                                        <motion.h1
                                            className="text-5xl lg:text-7xl font-bold leading-tight"
                                            variants={textVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                                Expert
                                            </span>
                                            <br />
                                            <span className="text-white">Mobile Repair</span>
                                        </motion.h1>

                                        <motion.p
                                            className="text-xl text-gray-300 leading-relaxed max-w-lg"
                                            variants={textVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            Professional mobile repair services with genuine parts,
                                            warranty, and doorstep service in Manvi.
                                        </motion.p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Book Repair
                                            <BsArrowRight className="ml-2" />
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="large"
                                            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
                                        >
                                            Service Areas
                                        </Button>
                                    </div>

                                    {/* Features - Reduced to 2 columns for better fit */}
                                    <div className="grid grid-cols-2 gap-3 pt-4">
                                        {[

                                            { icon: "✓", text: "Genuine Parts", color: "text-green-400" },
                                            { icon: "✓", text: "Warranty", color: "text-green-400" },
                                            { icon: "✓", text: "Doorstep Service", color: "text-green-400" },
                                            { icon: "✓", text: "Same Day Repair", color: "text-green-400" }
                                        ].map((feature, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/10 rounded-xl p-3 border border-white/20 transition-transform hover:scale-105"
                                            >
                                                <div className={`${feature.color} text-xl mb-1`}>{feature.icon}</div>
                                                <div className="text-white font-semibold text-sm">{feature.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Element - Simplified without motion */}
                                <div className="relative hidden lg:block">
                                    <div className="relative bg-white/10 rounded-3xl p-8 border border-white/20">
                                        <BsTools className="text-8xl text-white/80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 - Mobile Accessories */}
                <SwiperSlide>
                    <div className="relative min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 flex items-center justify-center">
                        {/* Content */}
                        <div className="relative z-10 w-full px-4 py-20">
                            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                                {/* Text Content */}
                                <div className="text-white space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                                            <BsBag className="text-orange-400 mr-2" />
                                            <span className="text-sm font-medium">Premium Accessories</span>
                                        </div>

                                        <motion.h1
                                            className="text-5xl lg:text-7xl font-bold leading-tight"
                                            variants={textVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                                Premium
                                            </span>
                                            <br />
                                            <span className="text-white">Accessories</span>
                                        </motion.h1>

                                        <motion.p
                                            className="text-xl text-gray-300 leading-relaxed max-w-lg"
                                            variants={textVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            High-quality mobile accessories with massive discounts.
                                            Cases, chargers, earphones and more for all brands.
                                        </motion.p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Shop Now
                                            <BsArrowRight className="ml-2" />
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="large"
                                            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
                                        >
                                            View Categories
                                        </Button>
                                    </div>

                                    {/* Categories */}
                                    <div className="grid grid-cols-3 gap-4 pt-6">
                                        {[
                                            { icon: "📱", text: "Cases" },
                                            { icon: "🔌", text: "Chargers" },
                                            { icon: "🎧", text: "Audio" }
                                        ].map((category, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/10 rounded-xl p-3 border border-white/20 text-center transition-transform hover:scale-105"
                                            >
                                                <div className="text-orange-400 text-xl mb-1">{category.icon}</div>
                                                <div className="text-white font-semibold text-sm">{category.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Element - Simplified without motion */}
                                <div className="relative hidden lg:block">
                                    <div className="relative bg-white/10 rounded-3xl p-8 border border-white/20">
                                        <BsBag className="text-8xl text-white/80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;