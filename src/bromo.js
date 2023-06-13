import React, { useState, useEffect } from "react";
import "./detail.css";
import bromo1 from "./Destinasi/jawa/bromo1.jpg";
import bromo2 from "./Destinasi/jawa/bromo2.jpg";
import bromo3 from "./Destinasi/jawa/bromo3.jpg";
import bromo4 from "./Destinasi/jawa/bromo4.jpg";
import axios from "axios";

const bromo = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-7.942965&lon=112.9531866&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Taman Nasional Bromo Tengger Semeru</h1>
        </div>
        <div className="description1">
          <p>
            Taman Nasional Bromo Tengger Semeru merupakan satu-satunya kawasan
            konservasi di Indonesia yang memiliki lautan pasir seluas 10 km yang
            disebut Tengger, tempat dimana empat anak gunung berapi baru berada.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/u1my8vpEprDQtkdu9" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={bromo1} alt="bromo1" />
            <img src={bromo2} alt="bromo2" />
            <img src={bromo3} alt="bromo3" />
            <img src={bromo4} alt="bromo4" />
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

export default bromo;
