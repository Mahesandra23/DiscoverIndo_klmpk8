import "./styles.css";
import React from "react";
import logo from "./logo.png";
import sumatra from "./peta1/sumatra.png";
import kalimantan from "./peta1/kalimantan.png";
import jawa from "./peta1/jawa.png";
import papua from "./peta1/papua.png";
import sulawesi from "./peta1/sulawesi.png";

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="" />
  </div>
);

const Navbar = () => (
  <div className="navbar">
    <div className="dalemnav">
      <div className="navhome">
        <div className="home">
          <a href="2.html">Home</a>
        </div>
      </div>
      <div className="aboutUs">About Us</div>
    </div>
  </div>
);

const Description = () => (
  <div className="dalem">
    <div className="judul">
      <span className="headline">Mau Liburan Kemana?</span>
      <span className="subheadline">
        Pencet gambar pulau sesuai tujuan wisata alam yang dituju
      </span>
      <p className="bar"></p>
      <p className="description" id="description">
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </p>
    </div>
    <div className="lingkaran">
      <div className="pulau">
        <img className="sumatra" src={sumatra} alt="" />
        <div className="overlay" id="sumatraOverlay">
          Sumatra
        </div>
        <img className="kalimantan" src={kalimantan} alt="" />
        <div className="overlay1">Kalimantan</div>
        <img className="jawa" src={jawa} alt="" />
        <div className="overlay2">Jawa</div>
        <img className="sulawesi" src={sulawesi} alt="" />
        <div className="overlay3">Sulawesi</div>
        <img className="papua" src={papua} alt="" />
        <div className="overlay4">Papua</div>
      </div>
    </div>
  </div>
);

const page2 = () => (
  <div>
    <Logo className="back" />
    <Navbar />
    <Description />
  </div>
);

export default page2;
