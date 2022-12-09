import { useState } from "react";
import "../../css/Popup.css";

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState("popup");
  const closePopUp = () => {
    setShowPopUp("popup-none");
  };
  return (
    <div className={showPopUp}>
      <p>
        Korzystamy z plików cookies lub podobnych technologii w celu zapewnienia
        Ci najlepszych doświadczeń z korzystania z naszej strony internetowej.
        Zgadzając się na wszystkie pliki cookies pozwolisz nam na zadbanie o
        Twój komfort podczas dokonywania zakupów na podstawie Twoich własnych
        preferencji, nawyków oraz dopasowania wyświetlania naszej oferty
        indywidualnie do Twoich potrzeb.
      </p>
      <button className="x" onClick={closePopUp}>
        X
      </button>
      <button onClick={closePopUp}>Akceptuj</button>
    </div>
  );
};

export default PopUp;
