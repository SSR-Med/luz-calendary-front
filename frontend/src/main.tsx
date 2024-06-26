// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Routes
import Login from './routes/login/Login'
import Register from './routes/login/Register'
import ForgotPassword from './routes/login/ForgotPassword';
import ChangePassword from './routes/login/ChangePassword';
import Patient from './routes/configuration/Patient';
import User from './routes/configuration/User';
import Calendar from './routes/Calendar';
import Settings from './routes/configuration/Settings';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/modify-forgotten-password/:id/:token",
    element: <ChangePassword/>
  },
  {
    path: "/patient",
    element: <Patient/>
  },
  {
    path: "/user",
    element: <User/>
  },
  {
    path: "/calendar",
    element: <Calendar/>
  },
  {
    path: "/configuration",
    element: <Settings/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
