import React, { useState, useEffect } from "react";
import "./detail.css";
import anggi1 from "./Destinasi/papua/anggi1.jpeg";
import anggi2 from "./Destinasi/papua/anggi2.jpg";
import anggi3 from "./Destinasi/papua/anggi3.jpg";
import anggi4 from "./Destinasi/papua/anggi4.jpg";
import axios from "axios";

const anggi = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-0.8633333&lon=134.0529156&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Danau Anggi</h1>
        </div>
        <div className="description1">
          <p>
          Danau Anggi ini memiliki warna yang sangat unik dan tidak keruh. Danau yang luas ini seperti dirawat sendiri oleh alam. Hal tersebut karena kebersihan dan ketenangan airnya. Tanaman yang ada di sekitar danau ini juga merupakan jenis tanaman yang langka. 
          Hal tersebut dikarenakan tanaman ini tidak ada di tempat lain dan hanya ada di lokasi pegunungan area danau. Tanaman endemik yang ada pada pegunungan berkisar danau memang unik.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/sF8BDC9T6pNcDzGK6?coh=178571&entry=tt" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={anggi1} alt="anggi1" />
            <img src={anggi2} alt="anggi2" />
            <img src={anggi3} alt="anggi3" />
            <img src={anggi4} alt="anggi4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum : Rp 20.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default anggi;
