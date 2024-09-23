import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Login from "./Login.jsx";
import AppRouter from "./routes/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App/> */}
    {/* <Login /> */}
    <AppRouter />
    <ToastContainer />
  </>
);


