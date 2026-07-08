import {useState} from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { registerUser } from "../../features/auth/authService";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await registerUser(email, password);

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#FF9800,#FFC107)",
        p: 2
      }}
    >
      <Paper
        sx={{
          p: 4,
          maxWidth: 420,
          width: "100%",
          borderRadius: 4
        }}
        elevation={10}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          Create Account
        </Typography>

        {error && (
          <Alert severity="error" sx={{mt: 2}}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleRegister}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            sx={{mt: 3}}
            disabled={loading}
          >
            {loading ? "Creating..." : "REGISTER"}
          </Button>
        </form>

        <Button
          fullWidth
          onClick={() => navigate("/login")}
          sx={{mt: 2}}
        >
          Already have account? Login
        </Button>
      </Paper>
    </Box>
  );
}