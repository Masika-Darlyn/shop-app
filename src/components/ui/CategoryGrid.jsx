import { Grid, Paper, Typography } from "@mui/material";
import {
  Checkroom,
  Smartphone,
  Fastfood,
  SportsEsports,
  Home,
  Watch,
} from "@mui/icons-material";

const categories = [
  { name: "Fashion", icon: <Checkroom fontSize="large" /> },
  { name: "Phones", icon: <Smartphone fontSize="large" /> },
  { name: "Food", icon: <Fastfood fontSize="large" /> },
  { name: "Gaming", icon: <SportsEsports fontSize="large" /> },
  { name: "Home", icon: <Home fontSize="large" /> },
  { name: "Watches", icon: <Watch fontSize="large" /> },
];

export default function CategoryGrid() {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {categories.map((item) => (
        <Grid item xs={4} key={item.name}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              textAlign: "center",
              borderRadius: 3,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {item.icon}
            <Typography variant="body2" mt={1}>
              {item.name}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}