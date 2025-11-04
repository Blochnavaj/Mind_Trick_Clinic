import {  Routes, Route } from "react-router-dom"
import UserLayout from "./Components/Layout/UserLayout"
import AboutUsPage from "./Pages/AboutUsPage"
import HomePage from "./Pages/HomePage"
  
 function App() {
   return (
     <> 
        <Routes>
            {/* */}
            <Route path='/' element={<UserLayout/>} >
            <Route index element={<HomePage/>} />
            <Route path="about-us" element={<AboutUsPage />} />

            {/*  User Layout */}
            </Route>
        </Routes>

     </>
   )
 }
 
 export default App