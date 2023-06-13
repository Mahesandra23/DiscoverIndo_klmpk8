import React, { useState, useEffect } from "react";
import "./detail.css";
import danauToba from "./Destinasi/sumatra/Danau Toba.jpg";
import danauToba2 from "./Destinasi/sumatra/Danau Toba2.jpg";
import danauToba3 from "./Destinasi/sumatra/Danau Toba3.jpg";
import danauToba4 from "./Destinasi/sumatra/Danau Toba4.jpg";
import axios from "axios";

const Toba = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=2.010856&lon=98.978489&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Danau Toba</h1>
        </div>
        <div className="description1">
          <p>
            Danau Toba adalah sebuah danau vulkanik dengan ukuran panjang 100
            kilometer dan lebar 30 kilometer yang terletak di Provinsi Sumatera
            Utara, Indonesia. Danau ini merupakan danau terbesar di Indonesia
            dan Asia Tenggara. Di tengah danau ini terdapat sebuah pulau
            vulkanik bernama Pulau Samosir.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/yRMPP8M8q75umgZq6" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={danauToba} alt="Danau Toba" />
            <img src={danauToba2} alt="Danau Toba2" />
            <img src={danauToba3} alt="Danau Toba3" />
            <img src={danauToba4} alt="Danau Toba4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Tiket umum: Rp 10.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toba;
