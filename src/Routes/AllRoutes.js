import { Route, Routes } from "react-router-dom";
import { createBrowserHistory } from 'history';
import CartRoutes from "./CartRoutes";
import NavBar from "../Components/Navbar";
import Home from "../Pages/home";
import Category from "../Pages/catagorypage"
import { SignUp } from "../Pages/SignUp";
import { Productadd } from "../Pages/Productadd";
import { Otp } from "../Pages/Otp";
import AddProductPage from "../Pages/Seller Portal/AddProductPage";
import React from "react";
const newHistory = createBrowserHistory();
const AllRoutes = ()=>{
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/navbar" element={<NavBar />}>
                   
                    </Route>
                    <Route path="/cat" element={<Home />}/>
                    <Route path="/navbar" element={<NavBar />}>
                        
                    </Route>
                    <Route path="/signup" element={<SignUp/>}>
                        
                    </Route>
                    <Route path="/otp" element={<Otp />}>
                        
                    </Route>
                    <Route path="/product/:id" element = {<Productadd/>}/>
                    <Route path="/navbar" element={<NavBar />}>
                        
                    </Route>
                    <Route path="/sellar" element={<AddProductPage />}/>
                    <Route path="/navbar" element={<NavBar />}>
                     
                    </Route>
                    <Route path="/cart" element={<CartRoutes />}>
                        
                    </Route>
                </Routes>
        </>
    )
}
export default AllRoutes