import { Counter } from "./pages/Counter";
import { Home } from "./pages/Home";
import { Hub } from "./pages/product/Hub";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: 'hub',
    element: <Hub />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <Signup />
  }
];

export default AppRoutes;
