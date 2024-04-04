import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
            
        ]
    },
]);
export default router;