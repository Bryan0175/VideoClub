import React, { useEffect } from "react"
//function that provides information about the current location of the user
import { useLocation }  from "react-router-dom"


// Scroll restoration
function ScrollToTop() {
    const { pathname } = useLocation()
    
    //Render component when path value changes
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
    return(null)
}

export {ScrollToTop}