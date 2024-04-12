import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Career from "../Career/Career";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/about', 
                element: <About></About>
            }, 
            {
                path: '/career', 
                element: <Career></Career>
            }
           
        ]
    }
])

export default routes; 