import React from "react";
import "./detail.css";
import biak1 from "./Destinasi/papua/biak1.jpg";
import biak2 from "./Destinasi/papua/biak2.jpg";
import biak3 from "./Destinasi/papua/biak3.jpg";
import biak4 from "./Destinasi/papua/biak4.jpg";

const biak = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Pulau Biak</h1>
        </div>
        <div className="description1">
          <p>
          Biak adalah pulau kecil yang terletak di Teluk Cendrawasih dekat sebelah utara pesisir Provinsi Papua, Indonesia. 
          Posisi Biak berada di sebelah barat laut provinsi Papua. 
          Biak adalah pulau terbesar di antara rantai kepulauan kecil, serta mempunyai banyak atol dan terumbu karang.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/uw4X8u7Re32ZedsL9?coh=178571&entry=tt" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={biak1} alt="biak1" />
            <img src={biak2} alt="biak2" />
            <img src={biak3} alt="biak3" />
            <img src={biak4} alt="biak4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum : Rp 35.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default biak;
