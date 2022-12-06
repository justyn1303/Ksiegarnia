import NavBar from "./NavBar"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"

const AfterBuy = () => {

    const navigate = useNavigate();

    const linkToHome = () => {
        navigate('/');
    }

    return(
        <>
            <NavBar />
            <div className="afterbuy">
                <span>Prosimy dokonać przelewu na konto bankowe: 0000 0000 0000 0000. Po wpłacie książka zostanie wysłana</span>
                <button onClick={linkToHome} className="btn btn-success">Dziękujemy</button>
            </div>
            <Footer />
        </>
    )
}

export default AfterBuy