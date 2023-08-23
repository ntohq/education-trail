import { Counter } from "./pages/Counter";
import { Home } from "./pages/Home";
import { Hub } from "./pages/Hub";
import { Login } from "./pages/Login";

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
  }
];

export default AppRoutes;
