import "./App.css";
import Layout from "./components/odMaruszaIVladki/Layout";
import Onas from "./components/odMaruszaIVladki/Onas";
import Kontakt from "./components/odMaruszaIVladki/Kontakt";
import SigninScreen from "./screens/SignupScreen";
import BestsellersOtherPage from "./components/odMaruszaIVladki/BestsellersOtherPage";
import Rejestracja from "./screens/SignupScreen";
import Zapowiedzi from "./components/odMaruszaIVladki/Zapowiedzi";
import Promocje from "./components/odMaruszaIVladki/Promocje";
import Nowosci from "./components/odMaruszaIVladki/Nowosci";
import BookPage from "./components/odMaruszaIVladki/BookPage";
import BooksPage from "./components/odMaruszaIVladki/BooksPage";
import ScrollToTop from "./components/odMaruszaIVladki/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import Profile from "./components/odMaruszaIVladki/Profile";
import ProfileAdmin from "./components/odMaruszaIVladki/ProfileAdmin";
import Koszyk from "./components/odMaruszaIVladki/Koszyk";
import AfterBuy from "./components/odMaruszaIVladki/AfterBuy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
        <Route exact path="/onas" element={<Onas />}></Route>
        <Route exact path="/kontakt" element={<Kontakt />}></Route>
        <Route exact path="/ksiazki" element={<Layout />}></Route>
        <Route exact path="/signin" element={<SigninScreen />}></Route>
        <Route
          exact
          path="/bestsellers"
          element={<BestsellersOtherPage />}
        ></Route>
        <Route exact path="/singup" element={<Rejestracja />}></Route>
        <Route exact path="/zapowiedzi" element={<Zapowiedzi />}></Route>
        <Route exact path="/promocje" element={<Promocje />}></Route>
        <Route exact path="/nowosci" element={<Nowosci />}></Route>
        <Route exact path="/book" element={<BookPage />}></Route>
        <Route exact path="/books" element={<BooksPage />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/profileAdmin" element={<ProfileAdmin />}></Route>
        <Route exact path="/koszyk" element={<Koszyk />}></Route>
        <Route exact path="/transakcja" element={<AfterBuy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
