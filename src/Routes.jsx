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
import Admin from "./private/admin/admin/Admin";
import AddData from "./private/admin/adddata/AddData";
import Updatedata from "./private/admin/updatedata/Updatedata";
import DeleteData from "./private/admin/deletedata/DeleteData";
import ShowData from "./private/admin/showData/ShowData";

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
        element: <OmniDetaill></OmniDetaill>,
        loader: (query) => fetch(`https://ecomerce-backend-one.vercel.app/phone/${query.params.id}`)
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
  }, {
    path: 'admin',
    element: <Admin></Admin>,
    errorElement: <Errorpge></Errorpge>,
    children: [
      {
        path: 'adddata',
        element: <AddData></AddData>
      },
      {
        path: 'updatedata',
        element: <Updatedata></Updatedata>
      },
      {
        path: 'deletedata',
        element: <DeleteData></DeleteData>
      }, {
        path: 'showdata',
        element: <ShowData></ShowData>
      }
    ]
  }
]);
export default router;
