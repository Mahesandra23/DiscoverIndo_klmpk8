import React from "react";
import "./detail.css";
import lore1 from "./Destinasi/sulawesi/lore1.jpg";
import lore2 from "./Destinasi/sulawesi/lore2.jpg";
import lore3 from "./Destinasi/sulawesi/lore3.jpg";
import lore4 from "./Destinasi/sulawesi/lore4.jpg";

const lore = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Taman Nasional Lore Lindu</h1>
        </div>
        <div className="description1">
          <p>
          Taman Nasional Lore Lindu (TNLL) merupakan salah satu taman nasional di Indonesia yang terletak di provinsi Sulawesi Tengah dan salah satu lokasi perlindungan hayati Sulawesi. 
          Taman Nasional Lore Lindu terletak sekitar 60 kilometer selatan kota Palu dan terletak antara 119°90’ – 120°16’BT dan 1°8’ – 1°3’LS.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/xrryTKdjhJJH27cM9" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={lore1} alt="lore1" />
            <img src={lore2} alt="lore2" />
            <img src={lore3} alt="lore3" />
            <img src={lore4} alt="lore4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 10.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default lore;
