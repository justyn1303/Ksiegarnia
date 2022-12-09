import logoImg2 from "../../../images/logo2.png";
import searchImg from "../../../images/search.png";
import profileImg from "../../../images/profile.png";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "../../../css/profileAdmin.css";

const ProfileAdmin = () => {


    return (
        <div className="adminConteiner">
            <div className="adminNavigation">
                <ul>
                    <li>
                        <a href="#">
                            <span className="adminIcon"><img src={logoImg2}></img></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="adminIcon"><CiHome/></span>
                            <span className="adminTitle">Panel administratora</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="adminIcon"><CiUser/></span>
                            <span className="adminTitle">Klienci</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="adminIcon"><CiChat1/></span>
                            <span className="adminTitle">Wiadomość</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="adminIcon"><CiSettings/></span>
                            <span className="adminTitle">Ustawienia</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="adminIcon"><CiLogout/></span>
                            <span className="adminTitle">Wyloguj się</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="adminMain">
                <div className="adminTopBar">
                    <div className="adminToggle">
                        <CiCircleList/>
                    </div>

                    <div className="adminSearch">
                        <label>
                            <input type="text" placeholder="Czego szukasz?"/>
                            <img src={searchImg}></img>
                        </label>
                    </div>

                    <div className="adminUser">
                        <img src={profileImg}></img>
                    </div>
                </div>

                <div className="cardbox">
                    <div className="card">
                        <div>
                            <div className="numbers">1,342</div>
                            <div className="cardName">Dzienne widoki</div>
                        </div>
                        <div className="iconBx"><CiRead/></div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">12</div>
                            <div className="cardName">Komentarzy</div>
                        </div>
                        <div className="iconBx"><CiChat2/></div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">90</div>
                            <div className="cardName">Obroty</div>
                        </div>
                        <div className="iconBx"><CiShoppingCart/></div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">5,960 PL</div>
                            <div className="cardName">Zarobki</div>
                        </div>
                        <div className="iconBx"><CiMoneyBill/></div>
                    </div>
                </div>
                
                <div className="details">
                    <div className="orders">
                        <div className="cardHeader">
                            <h2>Zamówienia</h2>
                            <a href ="#" className="btn">Pokaż wszystkie</a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Nazwa</td>
                                    <td>Cena</td>
                                    <td>Płatność</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>Opłacony</td>
                                    <td><span className="statusdelivered">Dostarczony</span></td>
                                </tr>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>Opłacony</td>
                                    <td><span className="statusreturn">Zwrot</span></td>
                                </tr>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>W trakcie</td>
                                    <td><span className="statuspending">W oczekiwaniu</span></td>
                                </tr>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>W trakcie</td>
                                    <td><span className="statuspending">W oczekiwaniu</span></td>
                                </tr>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>Opłacony</td>
                                    <td><span className="statusdelivered">Dostarczony</span></td>
                                </tr>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>W trakcie</td>
                                    <td><span className="statuspending">W oczekiwaniu</span></td>
                                </tr>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>Opłacony</td>
                                    <td><span className="statusdelivered">Dostarczony</span></td>
                                </tr>
                                <tr>
                                    <td>Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</td>
                                    <td>29.49</td>
                                    <td>Opłacony</td>
                                    <td><span className="statusreturn">Zwrot</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Klienty</h2>
                        </div>
                        <table>
                            <tr>
                                <td width='60px'><div className="imgBx"><img src={profileImg}></img></div></td>
                                <td><h4>Sebastian<br/><span>seb@gmail.com</span></h4></td>
                                <td><span className="statusonline">Online</span></td>
                            </tr>
                            <tr>
                                <td width='60px'><div className="imgBx"><img src={profileImg}></img></div></td>
                                <td><h4>Sebastian<br/><span>seb@gmail.com</span></h4></td>
                                <td><span className="statusonline">Online</span></td>
                            </tr>
                            <tr>
                                <td width='60px'><div className="imgBx"><img src={profileImg}></img></div></td>
                                <td><h4>Sebastian<br/><span>seb@gmail.com</span></h4></td>
                                <td><span className="statusoffline">Offline</span></td>
                            </tr>
                            <tr>
                                <td width='60px'><div className="imgBx"><img src={profileImg}></img></div></td>
                                <td><h4>Sebastian<br/><span>seb@gmail.com</span></h4></td>
                                <td><span className="statusonline">Online</span></td>
                            </tr>
                            <tr>
                                <td width='60px'><div className="imgBx"><img src={profileImg}></img></div></td>
                                <td><h4>Sebastian<br/><span>seb@gmail.com</span></h4></td>
                                <td><span className="statusoffline">Offline</span></td>
                            </tr>
                            <tr>
                                <td width='60px'><div className="imgBx"><img src={profileImg}></img></div></td>
                                <td><h4>Sebastian<br/><span>seb@gmail.com</span></h4></td>
                                <td><span className="statusoffline">Offline</span></td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default ProfileAdmin