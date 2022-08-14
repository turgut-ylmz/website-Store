import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../assets/ty.jpg";

const Navbar = ({ totalItems, setShowCard }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
      color="inherit"
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            alignItems: "center",
            display: "flex",
          }}
          color="inherit"
        >
          <IconButton
            aria-label="Show product items"
            color="inherit"
            onClick={() => setShowCard(false)}
          >
            <img src={logo} alt="logo" height="30px" />
          </IconButton>
          T Y Store
        </Typography>

        <IconButton
          aria-label="Show cart items"
          color="inherit"
          onClick={() => setShowCard(true)}
        >
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
