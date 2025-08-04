import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdMenu, MdClose } from 'react-icons/md';
import { BsPhone, BsStarFill } from 'react-icons/bs';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const drawerWidth = 'screen';
const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sales', href: '#sales' },
    { name: 'Repair', href: '#repair' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Contact', href: '#contact' }
];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleItemClick = (index) => {
        setSelectedIndex(index);
        setMobileOpen(false);
    };

    const logoVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        },
        tap: {
            scale: 0.95
        }
    };

    const drawerVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0, 
            x: '100%',
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const drawer = (
        <motion.div 
            className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 h-screen items-center justify-center flex'
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <List>
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ListItem disablePadding>
                                <ListItemButton 
                                    sx={{ textAlign: 'center' }} 
                                    className='gap-2 py-8 hover:bg-white/10 transition-all duration-300'
                                    onClick={() => handleItemClick(index)}
                                >
                                    <ListItemText 
                                        primary={item.name} 
                                        className='text-4xl' 
                                        primaryTypographyProps={{ 
                                            style: { 
                                                fontSize: '1.5rem',
                                                color: selectedIndex === index ? '#ffffff' : '#e5e7eb',
                                                fontWeight: selectedIndex === index ? 'bold' : 'normal'
                                            } 
                                        }}
                                    />
                                    <Divider className='text-white'/>
                                </ListItemButton>
                            </ListItem>
                        </motion.div>
                    ))}
                </List>
            </Box>
        </motion.div>
    );
    

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
            >
                <AppBar 
                    component="nav" 
                    className="bg-white/80 backdrop-blur-md border-b border-gray-200/50"
                    elevation={0}
                >
                    <Toolbar className='py-4 px-6'>
                        {/* Logo */}
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className="flex items-center"
                        >
                            <motion.div 
                                className="flex items-center"
                                variants={logoVariants}
                                whileHover="hover"
                            >
                                <motion.div 
                                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3"
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: 5
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <BsPhone className="text-white text-xl" />
                                </motion.div>
                                <div>
                                    <div className="font-bold text-xl text-gray-900">Patel Mobiles</div>
                                </div>
                            </motion.div>
                        </Typography>

                        {/* Mobile Menu Button */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 0, display: { sm: 'none' } }}
                                className="text-gray-900"
                            >
                                <MdMenu />
                            </IconButton>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Button 
                                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                            selectedIndex === index 
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                        onClick={() => handleItemClick(index)}
                                    >
                                        {item.name}
                                    </Button>
                                </motion.div>
                            ))}
                            
                            {/* CTA Button */}
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Button 
                                    variant="contained" 
                                    className="ml-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <BsStarFill className="mr-2" />
                                    </motion.div>
                                    Get Quote
                                </Button>
                            </motion.div>
                        </Box>
                    </Toolbar>
                </AppBar>
            </motion.div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <Drawer
                        className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative flex-grow sm:flex md:hidden flex'
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        anchor='right'
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <motion.div 
                            className='hidden sm:flex flex-grow'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div 
                            className='flex justify-end'
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <MdClose 
                                    className='text-4xl font-extrabold mr-8 mt-16 my-8 text-white cursor-pointer hover:text-gray-300 transition-colors' 
                                    onClick={handleDrawerToggle} 
                                />
                            </motion.div>
                        </motion.div>
                        <List className='w-screen'>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <ListItem disablePadding onClick={() => handleItemClick(index)}>
                                        <ListItemButton
                                            className={`sm:flex sm:items-center rounded-lg gap-2 py-4 my-3 mx-6 text-center transition-all duration-300 ${
                                                selectedIndex === index 
                                                    ? 'bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg' 
                                                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                                            }`}
                                            sx={{
                                                '&.Mui-focusVisible': {
                                                    outline: '2px solid rgba(255, 255, 255, 0.5)',
                                                    outlineOffset: '2px',
                                                },
                                            }}
                                        >
                                            <ListItemText 
                                                primary={item.name} 
                                                className='text-3xl font-bold text-white' 
                                                primaryTypographyProps={{
                                                    style: {
                                                        color: selectedIndex === index ? '#ffffff' : '#e5e7eb',
                                                        fontWeight: selectedIndex === index ? 'bold' : 'normal'
                                                    }
                                                }}
                                            />
                                            <Divider className='text-white' />
                                        </ListItemButton>
                                    </ListItem>
                                </motion.div>
                            ))}
                            
                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton className="sm:flex sm:items-center rounded-lg gap-2 py-4 my-3 mx-6 text-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                                        <ListItemText 
                                            primary="Get Quote" 
                                            className='text-3xl font-bold text-white'
                                        />
                                        <motion.div
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <BsStarFill className="text-white text-2xl" />
                                        </motion.div>
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>
                        </List>
                    </Drawer>
                )}
            </AnimatePresence>
        </Box>
    );
}

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;