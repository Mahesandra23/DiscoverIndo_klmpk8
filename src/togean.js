import React from "react";
import "./detail.css";
import togean1 from "./Destinasi/sulawesi/togean1.jpg";
import togean2 from "./Destinasi/sulawesi/togean2.jpg";
import togean3 from "./Destinasi/sulawesi/togean3.jpg";
import togean4 from "./Destinasi/sulawesi/togean4.jpg";

const togean = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Kepulauan Togean</h1>
        </div>
        <div className="description1">
          <p>
          Deskripsi tempat: Kepulauan Togean merupakan kepulauan yang terletak di Teluk Tomini, Sulawesi Tengah Indonesia. 
          Secara administrasi, wilayah ini berada di Kabupaten Tojo Una-una, Kepulauan Togean tersebar sepanjang kurang lebih 90 Kilometer.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/g2yf8HFEy2u5g4oJA" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={togean1} alt="togean1" />
            <img src={togean2} alt="togean2" />
            <img src={togean3} alt="togean3" />
            <img src={togean4} alt="togean4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>WNI: Rp 5.000,-</li>
            <li>WNI: Rp 150.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default togean;
