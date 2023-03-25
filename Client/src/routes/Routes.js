import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import AllMovies from "../pages/allMovies/AllMovies";
import AddMovie from "../pages/formMovies/AddMovie";
import EditMovie from "../pages/formMovies/EditMovie";

import {ScrollToTop} from '../components/Scroll/ScrollToTop'

const AllRoutes = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<AllMovies />} />
                <Route path="/all" element={<Navigate to="/"/>} />
                <Route path='/add' element={<AddMovie />} />
                <Route path='/edit/:id' element={<EditMovie />} />
            </Routes>
        </>
    );
};

export default AllRoutes;