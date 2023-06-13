import React from "react";
import "./detail.css";
import derawan1 from "./Destinasi/kalimantan/derawan1.jpg";
import derawan2 from "./Destinasi/kalimantan/derawan2.jpg";
import derawan3 from "./Destinasi/kalimantan/derawan3.jpg";
import derawan4 from "./Destinasi/kalimantan/derawan4.jpg";

const derawan = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Kepulauan Derawan</h1>
        </div>
        <div className="description1">
          <p>
          Kepulauan Derawan adalah sebuah kepulauan yang berada di Kabupaten Berau, Kalimantan Timur. 
          Di kepulauan ini terdapat sejumlah objek wisata bahari menawan, salah satunya taman bawah laut yang diminati wisatawan mancanegara terutama para penyelam kelas dunia.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/LBVoBF7Ucgv5VZkAA" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={derawan1} alt="derawan1" />
            <img src={derawan2} alt="derawan2" />
            <img src={derawan3} alt="derawan3" />
            <img src={derawan4} alt="derawan4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>GRAATIS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default derawan;
