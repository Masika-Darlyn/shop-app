import { TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <TextField
      fullWidth
      placeholder="Search products..."
      variant="outlined"
      sx={{
        mt: 2,
        mb: 2,
        background: "#fff",
        borderRadius: 2,
      }}
    />
  );
}