import React from "react";
import "./detail.css";
import tjputing1 from "./Destinasi/kalimantan/tjputing1.jpg";
import tjputing2 from "./Destinasi/kalimantan/tjputing2.jpg";
import tjputing3 from "./Destinasi/kalimantan/tjputing3.jpg";
import tjputing4 from "./Destinasi/kalimantan/tjputing4.jpg";

const tjputing = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Taman Nasional Tanjung Puting</h1>
        </div>
        <div className="description1">
          <p>
          Taman Nasional Tanjung Putting adalah sebuah taman nasional yang terletak di semenanjung barat daya provinsi Kalimantan Tengah.
          Tanjung Putting pada awalnya merupakan cagar alam dan suaka margasatwa yang di tetapkan oleh pemerintah Hindia Belanda pada tahun 1937. 
          Selanjutnya berdasarkan SK Menteri Kehutanan No. 687/Kpts-II/1996 tanggal 25 Oktober 1995, Tanjung Putting ditetapkan sebagai taman nasional dengan luas seluruhnya 415.040 ha.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps">
          <a href="https://goo.gl/maps/Umhv4JLqsAViv7G89" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={tjputing1} alt="tjputing1" />
            <img src={tjputing2} alt="tjputing2" />
            <img src={tjputing3} alt="tjputing3" />
            <img src={tjputing4} alt="tjputing4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket WNI: Rp 5.000,-</li>
            <li>Tiket WNA: Rp 150.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default tjputing;
