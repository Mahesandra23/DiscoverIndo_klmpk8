import React from "react";
import "./detail.css";
import telaga1 from "./Destinasi/jawa/telaga1.jpg";
import telaga2 from "./Destinasi/jawa/telaga2.jpg";
import telaga3 from "./Destinasi/jawa/telaga3.jpg";
import telaga4 from "./Destinasi/jawa/telaga4.jpg";

const telagawarna = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Telaga Warna</h1>
        </div>
        <div className="description1">
          <p>
            Keunikan tempat ini terletak Air Telaga yang dapat berubah-ubah
            warna tergantung cuaca dan sinar matahari. Hal tersebut karena air
            danau mengandung sulfur atau belerang yang bereaksi terhadap cahaya
            matahari.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps1">
          <a
            href="https://goo.gl/maps/s6J3F12HX1WATSdU8?coh=178571&entry=tt"
            className="buttonn"
          >
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={telaga1} alt="telaga1" />
            <img src={telaga2} alt="telaga2" />
            <img src={telaga3} alt="telaga3" />
            <img src={telaga4} alt="telaga4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 15.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default telagawarna;
