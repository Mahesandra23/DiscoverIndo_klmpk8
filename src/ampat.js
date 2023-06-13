import React, { useState, useEffect } from "react";
import "./detail.css";
import ampat1 from "./Destinasi/papua/ampat1.jpg";
import ampat2 from "./Destinasi/papua/ampat2.jpg";
import ampat3 from "./Destinasi/papua/ampat3.jpg";
import ampat4 from "./Destinasi/papua/ampat4.jpg";
import axios from "axios";

const ampat = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-1.032047&lon=130.505218&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
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
