import { TextField } from "@mui/material";

function SearchBar() {
  return (
    <TextField
      fullWidth
      placeholder="Search products..."
      variant="outlined"
      sx={{ mt: 2 }}
    />
  );
}

export default SearchBar;