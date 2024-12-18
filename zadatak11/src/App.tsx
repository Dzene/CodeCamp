import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
