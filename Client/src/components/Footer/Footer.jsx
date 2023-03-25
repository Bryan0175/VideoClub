import React from "react";
//import the css
import './Footer.css'

const Footer = () => {
    //footer and icons from https://fontawesome.com/
    return (
        <>
            <footer>
                <div className="text">©VIDEOCLUB</div> <hr/>
                <div className="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-youtube"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                </div>
            </footer>
        
        </>
    );

};

export default Footer;