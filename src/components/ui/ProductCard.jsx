import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        mt: 2,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
      />

      <CardContent>
        <Typography fontWeight="bold">
          {product.name}
        </Typography>

        <Typography color="primary" fontWeight="bold">
          ${product.price}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}