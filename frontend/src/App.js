import './App.css';
import Layout from './components/Layout';
import Onas from './components/website-items/odMaruszaIVladki/Onas';
import Kontakt from './components/website-items/odMaruszaIVladki/Kontakt';
import Zaloguj from './components/website-items/SigninScreen';
import BestsellersOtherPage from './components/website-items/odMaruszaIVladki/BestsellersOtherPage';
import Rejestracja from './components/website-items/SignupScreen';
import Zapowiedzi from './components/website-items/odMaruszaIVladki/Zapowiedzi';
import Promocje from './components/website-items/odMaruszaIVladki/Promocje';
import Nowosci from './components/website-items/odMaruszaIVladki/Nowosci';
import BookPage from './components/website-items/odMaruszaIVladki/BookPage';
import BooksPage from './components/website-items/odMaruszaIVladki/BooksPage';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import Profile from './components/website-items/odMaruszaIVladki/Profile';
import ProfileAdmin from './components/website-items/odMaruszaIVladki/ProfileAdmin';
import Koszyk from './components/website-items/odMaruszaIVladki/Koszyk';
import AfterBuy from './components/website-items/odMaruszaIVladki/AfterBuy';

function App() {
    return ( 
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
              <Route exact path="/" element={<Layout />}></Route>
              <Route exact path="/onas" element={<Onas />}></Route>
              <Route exact path="/kontakt" element={<Kontakt />}></Route>
              <Route exact path="/ksiazki" element={<Layout />}></Route>
              <Route exact path="/signin" element={<Zaloguj />}></Route>
              <Route exact path="/bestsellers" element={<BestsellersOtherPage />}></Route>
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