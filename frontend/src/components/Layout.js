import NavBar from "./website-items/NavBar"
import HomePage from "./website-items/HomePage"
import Footer from "./website-items/Footer"
import BookPage from "./website-items/BookPage"
import PopUp from "./website-items/PopUp"
import { useState } from "react"

const Layout = () => {

    const [showCategory, setShowCategory] = useState('');
    
    
    const takeClass = (value) => {

        console.log(value);
        setShowCategory(value);
    }

   

    return ( 
        <div className="website">
        <NavBar class={takeClass} />
        <HomePage class={showCategory} />
        <Footer />
        <PopUp />
       
       </div>

    )
}

export default Layout