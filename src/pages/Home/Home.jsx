import { Box, Typography } from "@mui/material";

import Header from "../../components/layout/Header";
import BottomNav from "../../components/layout/BottomNav";

import SearchBar from "../../components/ui/SearchBar";
import Banner from "../../components/ui/Banner";
import CategoryGrid from "../../components/ui/CategoryGrid";
import ProductCard from "../../components/ui/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89,
    image: "https://picsum.photos/400/300?1",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 120,
    image: "https://picsum.photos/400/300?2",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 65,
    image: "https://picsum.photos/400/300?3",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <Box
        sx={{
          maxWidth: 430,
          mx: "auto",
          p: 2,
          pb: 10,
        }}
      >
        <SearchBar />

        <Banner />

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={3}
        >
          Categories
        </Typography>

        <CategoryGrid />

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
        >
          Featured Products
        </Typography>

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Box>

      <BottomNav />
    </>
  );
}