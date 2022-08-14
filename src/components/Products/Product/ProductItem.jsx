import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";

const ProductItem = ({
  product,
  handleAddToCart,
  cart,
  handleUpdateCartQty,
  handleRemove,
}) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height={300}
        image={product.image}
        title={product.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ p: 1, mb: 1 }}>
        <Box display="flex" justifyContent="space-between" height={70}>
          <Typography variant="body1" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6" pl={1} color="initial">
            {product.price + "$"}
          </Typography>
        </Box>
      </CardContent>
      {!cart ? (
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            {product.category}
          </Typography>
          <IconButton
            aria-label="Add to Cart"
            onClick={() =>
              handleAddToCart(
                {
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                },
                1
              )
            }
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      ) : (
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center">
            <Button
              type="button"
              size="small"
              onClick={() =>
                handleUpdateCartQty(product.id, product.quantity - 1)
              }
            >
              -
            </Button>
            <Typography>{product?.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() =>
                handleUpdateCartQty(product.id, product.quantity + 1)
              }
            >
              +
            </Button>
          </Box>
          <Button
            variant="contained"
            type="button"
            color="error"
            onClick={() => handleRemove(product.id)}
          >
            Remove
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ProductItem;
