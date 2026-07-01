import { Box } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import Header from "../../components/layout/Header";
import SearchBar from "../../components/ui/SearchBar";

function Home() {
  return (
    <MainLayout>
      <Header />

      <Box p={2}>
        <SearchBar />
      </Box>
    </MainLayout>
  );
}

export default Home;