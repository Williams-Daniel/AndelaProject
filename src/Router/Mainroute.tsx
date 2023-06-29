import {createBrowserRouter} from "react-router-dom"
import Layout from "../Component/Common/Layout"
import HomePage from "../Pages/HomePage"

export const Mainroute = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<HomePage/>
                }
            ]
        }
    ]
)