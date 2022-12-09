import NavBar from "./NavBar";
import Footer from "./Footer";
import "../../css/Onas.css"
const Onas = () => {
    return (
        <>
        <NavBar />
        <div className="onas">
            <h1>O nas</h1>
            <p>Działamy z myślą o tych, którzy chcą robić zakupy łatwo, szybko i wygodnie. Każdy, znajdzie to, co lubi w przystępnej cenie. Tym, co nas wyróżnia, jest ekspresowa wysyłka nawet w ciągu 15 minut od złożenia zamówienia.</p>
        </div>
        <Footer />
        </>
    )
}

export default Onas