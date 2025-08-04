import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import { motion, AnimatePresence } from 'framer-motion';

const drawerWidth = 300;
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
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"
        >
            <List className="w-full px-4">
                {navItems.map((item, index) => (
                    <ListItem key={item.name} disablePadding className="my-2">
                        <ListItemButton
                            onClick={() => setSelectedIndex(index)}
                            className={`rounded-xl transition-all duration-300 ${
                                selectedIndex === index 
                                    ? 'bg-white/20 backdrop-blur-sm' 
                                    : 'hover:bg-white/10'
                            }`}
                        >
                            <ListItemText
                                primary={item.name}
                                className="text-center"
                                primaryTypographyProps={{
                                    className: `text-xl font-medium ${
                                        selectedIndex === index ? 'text-white' : 'text-gray-300'
                                    }`
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className="min-h-[72px]">
            <CssBaseline />
            <AppBar 
                component="nav" 
                className="!bg-white/80 backdrop-blur-md border-b border-gray-200/50"
                elevation={0}
                sx={{ height: 'auto' }}
            >
                <Toolbar className="container mx-auto justify-between py-2 px-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <motion.div 
                            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <BsPhone className="text-white text-xl" />
                        </motion.div>
                        <Typography variant="h6" className="font-bold text-gray-900">
                            Patel Mobiles
                        </Typography>
                    </div>

                    {/* Mobile Menu Button */}
                    <IconButton
                        onClick={handleDrawerToggle}
                        className="block md:hidden text-gray-900"
                        edge="start"
                    >
                        <MdMenu />
                    </IconButton>

                    {/* Desktop Navigation */}
                    <Box className="hidden md:flex items-center space-x-2">
                        {navItems.map((item, index) => (
                            <Button
                                key={item.name}
                                onClick={() => setSelectedIndex(index)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    selectedIndex === index 
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                            >
                                {item.name}
                            </Button>
                        ))}
                        
                        {/* CTA Button */}
                        <Button 
                            variant="contained" 
                            className="ml-4 !rounded-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <BsStarFill className="mr-2" />
                            Get Quote
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Menu */}
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { 
                            boxSizing: 'border-box', 
                            width: drawerWidth,
                            backgroundColor: 'transparent'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;