import React from "react";
import "./detail.css";
import kelam1 from "./Destinasi/kalimantan/kelam1.jpg";
import kelam2 from "./Destinasi/kalimantan/kelam2.jpg";
import kelam3 from "./Destinasi/kalimantan/kelam3.jpg";
import kelam4 from "./Destinasi/kalimantan/kelam4.jpg";

const kelam = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Bukit Kelam</h1>
        </div>
        <div className="description1">
          <p>
          Bukit ini terletak di Kalimantan Barat. 
          Bukit Kelam membentang dari barat ke timur dengan ketinggian  1.002 mdpl. 
          Bentuk dari bukit ini merupakan sebongkah batu raksasa (monolit). 
          Tempat ini terletak 20 km dari Sintang dan sekitar 395 km dari Pontianak, ibukota Kalimantan Barat.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/UAbyY853utFcJE1E7" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={kelam1} alt="kelam1" />
            <img src={kelam2} alt="kelam2" />
            <img src={kelam3} alt="kelam3" />
            <img src={kelam4} alt="kelam4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Hari biasa : Rp 15.000,-</li>
            <li>Hari libur : Rp 20.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default kelam;
