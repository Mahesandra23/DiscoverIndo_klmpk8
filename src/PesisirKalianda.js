import React, { useState, useEffect } from "react";
import "./detail.css";
import Kalianda1 from "./Destinasi/sumatra/Kalianda1.jpg";
import Kalianda2 from "./Destinasi/sumatra/Kalianda2.jpg";
import Kalianda3 from "./Destinasi/sumatra/Kalianda33.jpg";
import Kalianda4 from "./Destinasi/sumatra/Kalianda44.jpg";
import axios from "axios";

const PesisirKalianda = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-5.83567882&lon=105.53365&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Pantai Pesisir Kalianda</h1>
        </div>
        <div className="description1">
          <p>
            Pesisir Kalianda, menjadi salah-satu mahkota wisata bagi Provinsi
            Lampung karena Pesisir Kalianda menjadi kawasan berjuta wisata,
            dengan berjuta keindahan. Kalianda adalah sebuah kecamatan yang
            terletak di Kabupaten Lampung Selatan. Lebih terkenal dengan sebutan
            Pesisir Kalianda, karena lokasinya berbatasan dengan Teluk Lampung,
            dan berada di Kaki Gunung Rajabasa.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/8maLCdpueqrPEd8S8" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={Kalianda1} alt="Kalianda1" />
            <img src={Kalianda2} alt="Kalianda2" />
            <img src={Kalianda3} alt="Kalianda3" />
            <img src={Kalianda4} alt="Kalianda4" />
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

export default PesisirKalianda;
