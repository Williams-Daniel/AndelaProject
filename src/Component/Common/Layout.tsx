import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Header1 from "./Header1"


const Layout = ()=>{
    return(
        <div>
            <Header1/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout