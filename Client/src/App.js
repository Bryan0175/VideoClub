import React from "react";
import {BrowserRouter} from 'react-router-dom';

//Components
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/NavBar";

import AllRoutes from "./routes/Routes"

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter> 
      <AllRoutes/>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;