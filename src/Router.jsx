import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import Login from "./pages/Login";
import PrivateRouteAlt from "./PrivateRouteAlt";
import Register from "./pages/Register";
import About from "./pages/About";
import Career from "./pages/Career";
import NewsCardContainer from "./components/NewsCardContainer";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/:id',
        element: <NewsCardContainer />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/career',
    element: <Career />
  },
  {
    path: '/details/:id',
    element: <NewsDetails />
  },
  {
    path: '/login',
    element: <PrivateRouteAlt>
      <Login />
    </PrivateRouteAlt>
  },
  {
    path: '/register',
    element: <PrivateRouteAlt>
      <Register />
    </PrivateRouteAlt>
  }
])