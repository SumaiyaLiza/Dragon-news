import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider, { AuthContext } from './Components/Provider/AuthProvider';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import PrivateRout from './Components/PrivateRoute/PrivateRout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>, 
    children: [
      {
        path:'/', 
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      }, 
      {
        path: '/login', 
        element: <Login></Login>
      }, 
      {
        path: '/register', 
        element: <Register></Register>
      }, 
      {
        path: '/news/:id', 
        element: <PrivateRout><NewsDetails></NewsDetails></PrivateRout>,
        loader: () => fetch('news.json')
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
