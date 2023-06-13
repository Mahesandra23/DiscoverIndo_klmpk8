import React from "react";
import "./detail.css";
import ijen1 from "./Destinasi/jawa/ijen1.jpg";
import ijen2 from "./Destinasi/jawa/ijen2.jpg";
import ijen3 from "./Destinasi/jawa/ijen3.jpg";
import ijen4 from "./Destinasi/jawa/ijen4.jpg";

const ijen = () => {
  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Kawah Ijen</h1>
        </div>
        <div className="description1">
          <p>
          Kawah Ijen menjadi kebanggaan masyarakat Jawa Timur karena ternyata Kawah Ijen termasuk dalam danau air asam terbesar yang ada di dunia. 
          Tingkat keasaman dari Kawah Ijen bahkan bisa mendekati titik nol sehingga bisa melarutkan segala macam benda yang masuk ke dalamnya dengan cepat.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: Clear</span>
        </div>
        <div className="maps">
          <a href="https://goo.gl/maps/cTbNTM72xFqDcU5K6?coh=178571&entry=tt" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={ijen1} alt="ijen1" />
            <img src={ijen2} alt="ijen2" />
            <img src={ijen3} alt="ijen3" />
            <img src={ijen4} alt="ijen4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 5.000,- sampai Rp 7.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ijen;
