import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Errorpge from "./Errorpge";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import OmniDetaill from "./components/omnidetaill/OmniDetaill";
import Acount from "./pages/acount/Acount";
import Profile from "./pages/acount/pages/Profile";
import Cart from "./pages/acount/pages/Cart";
import Settings from "./pages/acount/pages/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpge />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, {
        path: 'contact',
        element: <Contact></Contact>
      }, {
        path: 'about',
        element: <About></About>
      }, {
        path: 'detaill/:id',
        element: <OmniDetaill></OmniDetaill>
      }, {
        path: 'login',
        element: <Login></Login>
      }, {
        path: 'register',
        element: <Register></Register>
      }
    ],
  }, {
    path: "acount",
    element: <Acount></Acount>,
    errorElement: <Errorpge />,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>
      }, {
        path: "carts",
        element: <Cart></Cart>
      },
      {
        path: "settings",
        element: <Settings></Settings>
      }
    ]
  }
]);
export default router;
