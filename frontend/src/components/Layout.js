import NavBar from "./website-items//odMaruszaIVladki/NavBar"
import HomePage from "./website-items//odMaruszaIVladki/HomePage"
import Footer from "./website-items//odMaruszaIVladki/Footer"
import BookPage from "./website-items//odMaruszaIVladki/BookPage"
import PopUp from "./website-items//odMaruszaIVladki/PopUp"
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