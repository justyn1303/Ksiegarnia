import NavBar from "./NavBar";
import Footer from "./Footer";
import BookPage from "./BookPage";
import PopUp from "./PopUp";
import HomePage from "./HomePage";
import { useState } from "react";

const Layout = () => {
  const [showCategory, setShowCategory] = useState("");

  const takeClass = (value) => {
    console.log(value);
    setShowCategory(value);
  };

  return (
    <div className="website">
      <NavBar class={takeClass} />
      <HomePage class={showCategory} />
      <Footer />
      <PopUp />
    </div>
  );
};

export default Layout;
