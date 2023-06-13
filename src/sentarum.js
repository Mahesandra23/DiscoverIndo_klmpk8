import React from "react";
import "./detail.css";
import sentarum1 from "./Destinasi/kalimantan/sentarum1.jpg";
import sentarum2 from "./Destinasi/kalimantan/sentarum2.jpg";
import sentarum3 from "./Destinasi/kalimantan/sentarum3.jpg";
import sentarum4 from "./Destinasi/kalimantan/sentarum4.jpg";

const sentarum = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Danau Sentarum</h1>
        </div>
        <div className="description1">
          <p>
          Danau Sentarum adalah danau musiman yang berada di Kapuas Hulu, Kalimantan Barat. 
          Danau ini dipenuhi ari selama kurang lebih 10 bulan setiap tahunnya, dan sisanya akan surut membentuk kolam – kolam kecil yang berisi ikan ikan kecil. 
          Saat kemarau, air danau sentarum memasok setengah dari aliran air Sungai Kapuas. Luas keseluruhan danau ini 132.000 Ha.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/KPLYqoqMcvurj5y77" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={sentarum1} alt="sentarum1" />
            <img src={sentarum2} alt="sentarum2" />
            <img src={sentarum3} alt="sentarum3" />
            <img src={sentarum4} alt="sentarum4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 15.000,- sampai Rp 35.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sentarum;
