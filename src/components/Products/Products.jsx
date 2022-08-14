import { CircularProgress, Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import CategoriBar from "../Categori/CategoriBar";

import Product from "./Product/ProductItem";

const Products = ({ products, handleAddToCart, loading, getProducts }) => {
  return (
    <Container>
      <Toolbar />
      <CategoriBar getProducts={getProducts} />
      {!loading ? (
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default Products;
