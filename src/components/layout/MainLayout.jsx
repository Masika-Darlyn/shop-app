import { Box } from "@mui/material";

function MainLayout({ children }) {
  return (
    <Box
      sx={{
        maxWidth: 430,
        minHeight: "100vh",
        margin: "auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      {children}
    </Box>
  );
}

export default MainLayout;