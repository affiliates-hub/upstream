import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Errorpge from "./Errorpge";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";

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
      }
    ],
  },
]);
export default router;
