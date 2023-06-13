import React from "react";
import "./detail.css";
import kakaban1 from "./Destinasi/kalimantan/kakaban1.jpg";
import kakaban2 from "./Destinasi/kalimantan/kakaban2.jpg";
import kakaban3 from "./Destinasi/kalimantan/kakaban3.jpg";
import kakaban4 from "./Destinasi/kalimantan/kakaban4.jpg";

const kakaban = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Pulau Kakaban</h1>
        </div>
        <div className="description1">
          <p>
          Pulau Kakaban merupakan pulau unik dan spesifik karena sebagian besar merupakan danau. 
          Kondisi airnya tetap, tidak pernah pasang surut seperti laut. Selain danau, di pulau tersebut juga ada daratan dengan tumbuhan pepohonan purba dengan sedikit ditumbuhi mangrove.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps">
          <a href="https://goo.gl/maps/sKUF671CWsA6TJqg7" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={kakaban1} alt="kakaban1" />
            <img src={kakaban2} alt="kakaban2" />
            <img src={kakaban3} alt="kakaban3" />
            <img src={kakaban4} alt="kakaban4" />
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

export default kakaban;
