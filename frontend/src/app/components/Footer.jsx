"use client";
import React from 'react';
import { BsPhone, BsEnvelope, BsGeoAlt, BsFacebook, BsInstagram, BsTwitter, BsWhatsapp, BsStarFill, BsHeartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialVariants = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.3 }
        }
    };

    const linkVariants = {
        hover: {
            x: 5,
            color: "#ffffff",
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.footer 
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <motion.div 
                        className="space-y-4"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BsStarFill className="text-yellow-400 text-2xl" />
                            <span className="text-xl font-bold">Patel Mobiles</span>
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed">
                            Your trusted partner for mobile sales, repair, and accessories in Manvi. 
                            Quality service, genuine parts, and expert support.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: BsFacebook, href: "#", label: "Facebook" },
                                { icon: BsInstagram, href: "#", label: "Instagram" },
                                { icon: BsTwitter, href: "#", label: "Twitter" },
                                { icon: BsWhatsapp, href: "#", label: "WhatsApp" }
                            ].map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                        variants={socialVariants}
                                        whileHover="hover"
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <IconComponent className="text-xl" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div 
                        className="space-y-4"
                        variants={itemVariants}
                    >
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {[
                                'Mobile Sales',
                                'Mobile Repair',
                                'Accessories',
                                'Screen Replacement',
                                'Battery Replacement',
                                'Software Issues'
                            ].map((service, index) => (
                                <motion.li 
                                    key={index}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: index * 0.1 }}
                                    variants={linkVariants}
                                >
                                    <motion.a 
                                        href="#" 
                                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                                        whileHover="hover"
                                    >
                                     
                                        {service}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="space-y-4"
                        variants={itemVariants}
                    >
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                'About Us',
                                'Contact',
                                'Privacy Policy',
                                'Terms of Service',
                                'FAQ',
                                'Support'
                            ].map((link, index) => (
                                <motion.li 
                                    key={index}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: index * 0.1 }}
                                    variants={linkVariants}
                                >
                                    <motion.a 
                                        href="#" 
                                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                                        whileHover="hover"
                                    >

                                        {link}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        className="space-y-4"
                        variants={itemVariants}
                    >
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <motion.div 
                                className="flex items-center space-x-3"
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.1 }}
                                variants={linkVariants}
                                whileHover="hover"
                            >
                                <BsGeoAlt className="text-yellow-400" />
                                <span className="text-gray-300">Manvi, Karnataka, India</span>
                            </motion.div>
                            <motion.div 
                                className="flex items-center space-x-3"
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.2 }}
                                variants={linkVariants}
                                whileHover="hover"
                            >
                                <BsEnvelope className="text-yellow-400" />
                                <span className="text-gray-300">info@smartservicepoint.com</span>
                            </motion.div>
                            <motion.div 
                                className="flex items-center space-x-3"
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.3 }}
                                variants={linkVariants}
                                whileHover="hover"
                            >
                                <BsPhone className="text-yellow-400" />
                                <span className="text-gray-300">+91 98765 43210</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div 
                className="border-t border-gray-700 py-6"
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
                variants={itemVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.p 
                            className="text-gray-400 text-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            © 2024 Patel Mobiles. All rights reserved.
                        </motion.p>
                        <motion.div 
                            className="flex items-center space-x-2 mt-4 md:mt-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-gray-400 text-sm">Made with</span>
  
                                <BsHeartFill className="text-red-400" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;