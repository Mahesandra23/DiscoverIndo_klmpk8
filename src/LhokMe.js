import React, { useState, useEffect } from "react";
import "./detail.css";
import LhokMee from "./Destinasi/sumatra/Lhok Mee.jpg";
import LhokMee2 from "./Destinasi/sumatra/Lhok Mee2.jpg";
import LhokMee3 from "./Destinasi/sumatra/Lhok Mee3.jpg";
import LhokMee4 from "./Destinasi/sumatra/Lhok Mee4.jpg";
import axios from "axios";

const LhokMe = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=4.695135&lon=96.749397&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
        );
        setData1(response1.data);
        console.log(response1.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="dalem1">
        <div className="judul1">
          <h1>Pantai Lhok Me</h1>
        </div>
        <div className="description1">
          <p>
            Pantai Lhok Mee. Pantai Lhok Mee yang terkenal dengan pantai pasir
            putih dan pohon dalam air ini terletak di Desa Lamreh, Kecamatan
            Mesjid Raya, Kabupaten Aceh Besar, Aceh. Jika mayoritas pantai di
            Aceh Besar tampak indah dengan deretan pohon cemaranya, maka di
            Pantai Pasir Putih Lhok Mee ini sedikit berbeda. Kita di sini bisa
            menyaksikan keindahan pohon Geurumbang yang tumbuh berjejer di dalam
            permukaan laut. Selain itu juga ada akar-akar bakau yang menjulang
            di tepi pantainya. Air laut di sana bisa pasang-surut seketika.
            Ketika air laut tersebut pasang, pasir pantai yang putih tersebut
            berpadu warnanya dengan air laut yang biru nan bening. Namun, ketika
            air laut kembali surut, akar-akar bakau tadi muncul satu per satu
            bak ujung tombak yang ditancapkan begitu saja.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/2eUEVKFt3fw2c9kC7" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={LhokMee} alt="Lhok Mee" />
            <img src={LhokMee2} alt="Lhok Mee2" />
            <img src={LhokMee3} alt="Lhok Mee3" />
            <img src={LhokMee4} alt="Lhok Mee4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 5.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LhokMe;
