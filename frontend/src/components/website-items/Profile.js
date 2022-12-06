import Footer from "./Footer";
//import NavBar from "./NavBar";
import Recommends from "./Recommends";
import NavBarProfile from "./NavBarProfile";

const Profile = () => {
    return (

        <>
        <NavBarProfile/>
        <div className="profile">
            This is user page
            <Recommends/>
        </div>
        <Footer/>
        </>

        
    )
}

export default Profile