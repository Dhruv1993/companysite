import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { config } from "../config/env";

const navItems = [
  { text: "Home", path: "/" },
  { text: "Services", path: "/services" },
  { text: "Contact", path: "/contact" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  // Close drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          {config.company.name}
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "text.primary" }}
          aria-label="close menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1, py: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            sx={{
              py: 2,
              px: 3,
              color: "text.primary",
              "&:hover": {
                backgroundColor: "action.hover",
              },
              ...(location.pathname === item.path && {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selected",
                },
              }),
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: "1.1rem",
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="default"
          elevation={1}
          sx={{
            backgroundColor: "background.paper",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)", // iOS support
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              {config.company.name}
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    sx={{
                      px: 2,
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      borderBottom: location.pathname === item.path ? 2 : 0,
                      borderColor: "primary.main",
                      borderRadius: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        borderBottom: 2,
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* Spacer for fixed AppBar */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "320px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
