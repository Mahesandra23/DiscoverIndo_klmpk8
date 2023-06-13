import React from "react";
import "./detail.css";
import panjang1 from "./Destinasi/jawa/panjang1.jpg";
import panjang2 from "./Destinasi/jawa/panjang2.jpg";
import panjang3 from "./Destinasi/jawa/panjang3.jpg";
import panjang4 from "./Destinasi/jawa/panjang4.jpg";

const panjang = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Pulau Panjang</h1>
        </div>
        <div className="description1">
          <p>
            Pesona utama yang di tawarkan dari Pulau Sepanjang Jepara yaitu
            wisata snorkeling, pantai cantik, camping seru hingga ziarah ke
            makan wali. Hamparan pasir putih mulus bersentuhan langsung dengan
            bening air laut yang bisa digunakan untuk mengaca. Saking bersihnya
            karang-karang kecil terlihat begitu saja.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a
            href="https://goo.gl/maps/vDbwWTgF3zCQsJsR7?coh=178571&entry=tt"
            className="buttonn"
          >
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={panjang1} alt="panjang1" />
            <img src={panjang2} alt="panjang2" />
            <img src={panjang3} alt="panjang3" />
            <img src={panjang4} alt="panjang4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 5.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default panjang;
