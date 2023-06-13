import React from "react";
import "./detail.css";
import ampat1 from "./Destinasi/papua/ampat1.jpg";
import ampat2 from "./Destinasi/papua/ampat2.jpg";
import ampat3 from "./Destinasi/papua/ampat3.jpg";
import ampat4 from "./Destinasi/papua/ampat4.jpg";

const ampat = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Kepulauan Raja Ampat</h1>
        </div>
        <div className="description1">
          <p>
          Sebagai destinasi wisata, Raja Ampat adalah salah satu raja di bidang wisata bahari. 
          Daya tarik yang membuatnya mendunia yaitu pemandangan bawah laut. 
          Kekayaan terumbu karang dan biota lautnya jadi yang terbesar di dunia. Di samping itu, sebaran pulau-pulau kecilnya menyajikan pesona alam yang tak biasa.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/BJ8BMjj1cMPvfFGRA?coh=178571&entry=tt" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={ampat1} alt="ampat1" />
            <img src={ampat2} alt="ampat2" />
            <img src={ampat3} alt="ampat3" />
            <img src={ampat4} alt="ampat4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Rp 500.000 (Berlaku 1 tahun)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ampat;
