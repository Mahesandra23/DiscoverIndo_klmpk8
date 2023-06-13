import React from "react";
import "./detail.css";
import karimunjawa1 from "./Destinasi/jawa/karimun1.jpg";
import karimunjawa2 from "./Destinasi/jawa/karimun2.jpg";
import karimunjawa3 from "./Destinasi/jawa/karimun3.jpg";
import karimunjawa4 from "./Destinasi/jawa/karimun4.jpg";

const karimunjawa = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Kepulauan Karimunjawa</h1>
        </div>
        <div className="description1">
          <p>
            Karimunjawa adalah kepulauan di Laut Jawa yang termasuk dalam
            Kabupaten Jepara, Jawa Tengah. Dengan luas daratan ±1.500 hektare
            dan perairan ±110.000 hektare, Karimunjawa kini dikembangkan menjadi
            pesona wisata Taman Laut yang mulai banyak digemari wisatawan lokal
            maupun mancanegara.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a
            href="https://goo.gl/maps/yyHgh6dc8cjvRst99?coh=178571&entry=tt"
            className="buttonn"
          >
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={karimunjawa1} alt="karimunjawa1" />
            <img src={karimunjawa2} alt="karimunjawa2" />
            <img src={karimunjawa3} alt="karimunjawa3" />
            <img src={karimunjawa4} alt="karimunjawa4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 95.000,- sampai Rp 125.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default karimunjawa;
