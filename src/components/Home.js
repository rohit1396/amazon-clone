import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_img"
        src="\Images\GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_product">
        <Product
          id="12321341"
          title="boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0(Buoyant Black)"
          price={1799}
          rating={4}
          image="\Images\61kWB+uzR2L._SY450_.jpg"
        />
        <Product
          id="12321342"
          title="Harry Potter and the Chamber Of Secrets(Harry Potter 2)"
          price={399}
          rating={4}
          image="\Images\harry_potter.jpg"
        />
      </div>
      <div className="home_product">
        <Product
          id="12321345"
          title="Oppo A54 (Starry Blue, 4GB RAM, 64GB Storage) with No Cost EMI & Additional Exchange Offers"
          price={10999}
          rating={4}
          image="\Images\71k86pEH5LS._SX679_.jpg"
        />
        <Product
          id="12321344"
          title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast™ Mode(Low Latency Upto 80ms)"
          price={1487.98}
          rating={4}
          image="\Images\31GUbeFG3FL._AC_SX184_.jpg"
        />
        <Product
          id="12321345"
          title="boAt Xtend Smartwatch with Alexa Built-in"
          price={2999}
          rating={4}
          image="\Images\61IMRs+o0iL._AC_UL320_.jpg"
        />
      </div>
      <div className="home_product">
        <Product
          id="12321343"
          title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50 | L50M6-RA (Black)"
          price={32999}
          rating={4}
          image="\Images\41Om+JyC4iL._SX300_SY300_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
