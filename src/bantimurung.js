import React from "react";
import "./detail.css";
import bantimurung1 from "./Destinasi/sulawesi/bantimurung1.jpg";
import bantimurung2 from "./Destinasi/sulawesi/bantimurung2.jpg";
import bantimurung3 from "./Destinasi/sulawesi/bantimurung3.jpg";
import bantimurung4 from "./Destinasi/sulawesi/bantimurung4.jpg";

const bantimurung = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Taman Nasional Bantimurung</h1>
        </div>
        <div className="description1">
          <p>
          Deskripsi tempat : Taman Nasional Bantimurung adalah sebuah taman nasional yang ditunjuk menjadi kawasan konservasi berdasarkan Surat Keputusan Menteri Kehutanan RI Nomor SK 398/Menhut-ii/2004 tanggal 18 Oktober 2004. 
          TN Bantimurung memiliki luas kurang lebih 43.750 ha.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/pTDJ4n2ZpLSFVMn48" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={bantimurung1} alt="bantimurung1" />
            <img src={bantimurung2} alt="bantimurung2" />
            <img src={bantimurung3} alt="bantimurung3" />
            <img src={bantimurung4} alt="bantimurung4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 30.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default bantimurung;
