import React from "react";
import "./detail.css";
import wakatobi1 from "./Destinasi/sulawesi/wakatobi1.jpg";
import wakatobi2 from "./Destinasi/sulawesi/wakatobi2.jpg";
import wakatobi3 from "./Destinasi/sulawesi/wakatobi3.jpg";
import wakatobi4 from "./Destinasi/sulawesi/wakatobi4.jpg";

const wakatobi = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Wakatobi</h1>
        </div>
        <div className="description1">
          <p>
          Wakatobi juga merupakan nama kawasan taman nasional yang ditetapkan pada tahun 1996, dengan total area 1,39 juta ha, menyangkut keanekaragaman hayati laut, skala dan kondisi karang; yang menempati salah satu posisi prioritas tertinggi dari konservasi laut di Indonesia.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/sBVTXV24C1CLiLbz7" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={wakatobi1} alt="wakatobi1" />
            <img src={wakatobi2} alt="wakatobi2" />
            <img src={wakatobi3} alt="wakatobi3" />
            <img src={wakatobi4} alt="wakatobi4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 160.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default wakatobi;
