import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home"
import Listings from "../Pages/Listings/Listings"

const Routes = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "listing",
                element: <Listings/>
            },
        ]
    }
])

export default Routes