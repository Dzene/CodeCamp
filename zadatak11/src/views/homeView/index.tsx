import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Container, Paper, Stack } from "@mui/material";

const HomeView: FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Our App!
        </Typography>
        <Typography variant="body1" paragraph>
          This is a simple home page. You can log in or register to get started.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
          <Button variant="outlined" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default HomeView;
