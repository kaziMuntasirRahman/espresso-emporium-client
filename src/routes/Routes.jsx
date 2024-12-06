import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Coffees from "../pages/Coffees";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AddCoffee from "../pages/AddCoffee";
import SingleCoffee from "../pages/SingleCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CommentsPage from "../pages/CommentsPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import UserList from "../pages/UserList";
import UserList2 from "../pages/UserList2";


const serverURL = 'https://espresso-emporium-server-kappa.vercel.app';
// const serverURL = 'http://localhost:3000';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch(`${serverURL}/coffees`)
      },
      {
        path: 'coffees',
        element: <Coffees />,
        loader: () => fetch(`${serverURL}/coffees`)
      },
      {
        path: 'coffee/:id',
        element: <SingleCoffee />,
        loader: ({ params }) => fetch(`${serverURL}/coffee/${params.id}`)
      },
      {
        path: '/add',
        element: <AddCoffee />,
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: 'update/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`${serverURL}/coffee/${params.id}`)

      },
      {
        path: 'comments',
        element: <CommentsPage />,
        loader: () => fetch(`${serverURL}/comments`)
      },
      {
        path: 'users',
        element: <UserList />,
        loader: () => fetch(`${serverURL}/users`)
      },
      {
        path: 'users2',
        element: <UserList2 />
      }
    ]
  },
])

export default router;