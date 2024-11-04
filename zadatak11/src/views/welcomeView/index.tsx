import { FC, useState } from "react";
import { getUser, logout, User } from "../../utils/auth";
import { Typography, Button, Container, Paper } from "@mui/material";

const capitalize = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

const WelcomeView: FC = () => {
  const [user] = useState<User | null>(getUser);

  const handleLogout = (): void => {
    logout();
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user ? capitalize(user.username) : ""}!
        </Typography>
        <Typography variant="body1">This is your welcome page.</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          style={{ marginTop: "1rem" }}
        >
          Log out
        </Button>
      </Paper>
    </Container>
  );
};

export default WelcomeView;
