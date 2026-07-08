import { Box, Typography, Button } from "@mui/material";

export default function Banner() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#2E7D32,#66BB6A)",
        color: "#fff",
        p: 3,
        borderRadius: 4,
        mt: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Mega Sale
      </Typography>

      <Typography sx={{ mt: 1 }}>
        Up to 50% OFF this week.
      </Typography>

      <Button
        variant="contained"
        color="warning"
        sx={{ mt: 2 }}
      >
        Shop Now
      </Button>
    </Box>
  );
}