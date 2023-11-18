import Counter from "@pages/counter";
import Home from "@pages/index";
import Test from "@pages/test";
import Hub from "@pages/product/hub";
import Login from "@pages/login";
import Signup from "@pages/signup";


const AppRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/hub',
    element: <Hub />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
];

export default AppRoutes;