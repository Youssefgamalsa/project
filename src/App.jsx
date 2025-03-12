import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import Reserv from "./components/Reservations/Reserv";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/dashboard",
      element: <MasterLayout />,
      children: [{ path: "reservations", element: <Reserv /> }],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
