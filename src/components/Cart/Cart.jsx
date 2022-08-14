import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import ProductItem from "../Products/Product/ProductItem";

const Cart = ({ cart, handleUpdateCartQty, handleRemove, handleEmptyCart }) => {
  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].quantity * cart[i].price;
  }

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart,
        <Link
          href="/"
          sx={{
            textDecoration: "none",
          }}
        >
          start adding some!
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container justifyContent="center" spacing={4}>
          {cart?.map((item) => (
            <Grid item key={item.id}>
              <ProductItem
                product={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemove={handleRemove}
                cart
              />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="space-between" my={5}>
          <Typography variant="h4">
            Subtotal: {subTotal.toFixed(2) + "$"}
          </Typography>
          <div>
            <Button
              size="large"
              type="button"
              variant="contained"
              color="error"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
          </div>
        </Box>
      </>
    );
  };

  return (
    <Container>
      <Toolbar />
      <Typography mt={2} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart?.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
