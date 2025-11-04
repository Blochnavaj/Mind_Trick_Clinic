import Header from "../Common/Header"
import Footer  from '../Common/Footer'
import { Outlet } from "react-router-dom"
 
function UserLayout() {
    return (
        <>
            <div>
                {/* Header */}
                <div>
                   <Header/>
                </div>

                {/* Main content */}
                <div>
                  <Outlet/>
                </div>

                {/* Footer */}
                <div>
                  <Footer/>
                </div>
            </div>
        </>
    )
}

export default UserLayout