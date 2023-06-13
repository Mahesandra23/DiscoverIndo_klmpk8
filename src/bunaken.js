import React from "react";
import "./detail.css";
import bunaken1 from "./Destinasi/sulawesi/bunaken1.jpg";
import bunaken2 from "./Destinasi/sulawesi/bunaken2.jpg";
import bunaken3 from "./Destinasi/sulawesi/bunaken3.jpg";
import bunaken4 from "./Destinasi/sulawesi/bunaken4.jpg";

const bunaken = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Taman Nasional Bunaken</h1>
        </div>
        <div className="description1">
          <p>
          Taman laut yang terletak di Sulawesi Utara, Indonesia. 
          Taman ini terleletak di segitiga terumbu karang yang menjadi habitat 390 spesies terumbu karang dan juga berbagai spesies ikan ,moluska ,reptile,dan mamalia laut.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/Y469ZNUduC2HrWqf9" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={bunaken1} alt="bunaken1" />
            <img src={bunaken2} alt="bunaken2" />
            <img src={bunaken3} alt="bunaken3" />
            <img src={bunaken4} alt="bunaken4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>WNI: Rp 5.000,-</li>
            <li>WNA: Rp 150.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default bunaken;
