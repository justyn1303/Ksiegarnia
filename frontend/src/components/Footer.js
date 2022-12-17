import React from "react";
import "./Footer.css";
const Footer = () => <footer id="foot" className="page-footer pt-4">
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-5 col-xs-12 about-company">
        <h2>BookStore</h2>
        <p class="pr-5">Prawdopodobnie najlepsza księgarnia w internecie</p>
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <div class="col-lg-3 col-xs-12 links">
        <ul class="m-0 p-0">
          <li><a href="#" >O nas</a></li>
          <li><a href="#" >Regulamin</a></li>
          <li><a href="#">Polityka prywatności</a></li>
          <li><a href="#" >Kontakt</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-xs-12 location">
        <h4 class="mt-lg-0 mt-sm-4">Dane firmowe</h4>
        <div>
          <p>
            ul. Przykładowa Ulica 1,
            00-000 Miasto
          </p>
        </div>
        <p class="mb-0"><i class="fa fa-phone mr-3"></i> 11 111 11 11</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col copyright">
        <p class="text-center"><small>© 2022. BookStore</small></p>
      </div>
    </div>
  </div>
</footer>

export default Footer