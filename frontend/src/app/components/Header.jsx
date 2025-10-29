"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import { MdMenu, MdAccountCircle } from "react-icons/md";
import { BsPhone, BsStarFill, BsCart } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/app/state/CartContext";

const drawerWidth = 300;
const navItems = [
  { name: "Home", href: "/" },
  { name: "Phones", href: "/phones" },
  { name: "Repair", href: "/repair" },
  { name: "Accessories", href: "/accessories" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { items } = useCart();
  const clickCountRef = React.useRef(0);
  const clickTimerRef = React.useRef(null);

  const selectedIndex = React.useMemo(() => {
    const idx = navItems.findIndex((n) => n.href === pathname);
    return idx === -1 ? 0 : idx;
  }, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        background:
          "linear-gradient(to bottom right, #1e3a8a, #6b21a8, #4f46e5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 3,
      }}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={() => router.push(item.href)}
              sx={{
                borderRadius: 2,
                transition: "all 0.3s",
                backdropFilter: selectedIndex === index ? "blur(4px)" : "none",
                backgroundColor:
                  selectedIndex === index
                    ? "rgba(255,255,255,0.2)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  sx: {
                    textAlign: "center",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: selectedIndex === index ? "#fff" : "#d1d5db",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(229, 231, 235, 0.5)",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: { xs: "100%", md: "1280px" },
            mx: "auto",
            width: "100%",
            justifyContent: "space-between",
            px: { xs: 2, sm: 3 },
            py: { xs: 1, md: 1.5 },
          }}
        >
          {/* Logo (Hidden admin access: triple-click within 1.5s) */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => {
              clickCountRef.current += 1;
              if (!clickTimerRef.current) {
                clickTimerRef.current = setTimeout(() => {
                  clickCountRef.current = 0;
                  clickTimerRef.current && clearTimeout(clickTimerRef.current);
                  clickTimerRef.current = null;
                }, 1500);
              }
              if (clickCountRef.current >= 3) {
                clickCountRef.current = 0;
                clickTimerRef.current && clearTimeout(clickTimerRef.current);
                clickTimerRef.current = null;
                router.push("/admin");
              }
            }}
          >
            <motion.div
              style={{
                width: 40,
                height: 40,
                background: "linear-gradient(to right, #2563eb, #9333ea)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <BsPhone style={{ color: "#fff", fontSize: "1.25rem" }} />
            </motion.div>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.125rem", sm: "1.25rem" },
                color: "#1f2937",
              }}
            >
              Patel Mobiles
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href} legacyBehavior>
                <Button
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "9999px",
                    textTransform: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: selectedIndex === index ? "#fff" : "#374151",
                    background:
                      selectedIndex === index
                        ? "linear-gradient(to right, #2563eb, #9333ea) !important"
                        : "transparent",
                    boxShadow: selectedIndex === index ? 2 : "none",
                    "&:hover": {
                      backgroundColor:
                        selectedIndex === index ? undefined : "#f3f4f6",
                      color: "#111827",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <IconButton
              onClick={() => router.push("/cart")}
              aria-label="cart"
              sx={{ color: "#1f2937" }}
            >
              <Badge
                color="primary"
                badgeContent={items.reduce((s, i) => s + i.qty, 0)}
              >
                <BsCart />
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => router.push("/my-account")}
              aria-label="cart"
              sx={{ color: "#1f2937" }}
            >
              <Badge
                color="primary"
                badgeContent={items.reduce((s, i) => s + i.qty, 0)}
              >
                <MdAccountCircle className=" text-3xl" />
              </Badge>
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            aria-label="open drawer"
            sx={{
              display: { xs: "block", md: "none" },
              color: "#1f2937",
              ml: 1,
            }}
          >
            <MdMenu size={24} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Offset */}
      {/* <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} /> */}

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "transparent",
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
