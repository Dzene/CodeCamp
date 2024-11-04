import { FC, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginView from "../views/loginView";
import RegisterView from "../views/registerView";
import WelcomeView from "../views/welcomeView";
import HomeView from "../views/homeView";
import { isLoggedIn } from "../utils/auth";

const PublicRoutes: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const result = isLoggedIn();
    setLoggedIn(result);
  }, []); // Only run on initial render

  // Optional: If logged in, navigate to welcome
  useEffect(() => {
    if (loggedIn) {
      navigate("/welcome");
    }
  }, [loggedIn, navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/login" element={<LoginView />} />
      {loggedIn && <Route path="/welcome" element={<WelcomeView />} />}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;
