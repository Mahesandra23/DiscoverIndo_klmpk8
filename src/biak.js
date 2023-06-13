import React, { useState, useEffect } from "react";
import "./detail.css";
import biak1 from "./Destinasi/papua/biak1.jpg";
import biak2 from "./Destinasi/papua/biak2.jpg";
import biak3 from "./Destinasi/papua/biak3.jpg";
import biak4 from "./Destinasi/papua/biak4.jpg";
import axios from "axios";

const biak = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-1.038102&lon=135.980085&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Pulau Biak</h1>
        </div>
        <div className="description1">
          <p>
          Biak adalah pulau kecil yang terletak di Teluk Cendrawasih dekat sebelah utara pesisir Provinsi Papua, Indonesia. 
          Posisi Biak berada di sebelah barat laut provinsi Papua. 
          Biak adalah pulau terbesar di antara rantai kepulauan kecil, serta mempunyai banyak atol dan terumbu karang.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/uw4X8u7Re32ZedsL9?coh=178571&entry=tt" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={biak1} alt="biak1" />
            <img src={biak2} alt="biak2" />
            <img src={biak3} alt="biak3" />
            <img src={biak4} alt="biak4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum : Rp 35.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default biak;
