import React from "react";
import "./detail.css";
import cendrawasih1 from "./Destinasi/papua/cendrawasih1.jpg";
import cendrawasih2 from "./Destinasi/papua/cendrawasih2.jpg";
import cendrawasih3 from "./Destinasi/papua/cendrawasih3.jpg";
import cendrawasih4 from "./Destinasi/papua/cendrawasih4.jpg";

const cendrawasih = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Taman Nasional Teluk Cendrawasih</h1>
        </div>
        <div className="description1">
          <p>
          Taman Nasional Teluk Cendrawasih juga dikenal dengan singkatan TNTC. Kawasan alam ini merupakan salah satu taman nasional yang berada di Papua. Luasnya yang mencapai 1.453.500 hektar menjadikan kawasan ini sebagai salah satu taman nasional terluas di Indonesia dibawah TN Lorentz. Taman laut besar yang populer untuk snorkeling di sekitar terumbu karang & berenang bersama hiu paus.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/uwya7YYNs66igkGm7?coh=178571&entry=tt" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={cendrawasih1} alt="cendrawasih1" />
            <img src={cendrawasih2} alt="cendrawasih2" />
            <img src={cendrawasih3} alt="cendrawasih3" />
            <img src={cendrawasih4} alt="cendrawasih4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Rp 20.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default cendrawasih;
