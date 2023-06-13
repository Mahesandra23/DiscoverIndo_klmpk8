import React, { useState, useEffect } from "react";
import "./detail.css";
import sianok1 from "./Destinasi/sumatra/Sianok1.jpg";
import sianok2 from "./Destinasi/sumatra/Sianok2.jpg";
import sianok3 from "./Destinasi/sumatra/Sianok3.jpg";
import sianok4 from "./Destinasi/sumatra/Sianok4.jpg";
import axios from "axios";

const NgaraiSianok = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-6.347891&lon=106.741158&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Ngarai Sianok</h1>
        </div>
        <div className="description1">
          <p>
            Deskripsi tempat: Ngarai Sianok merupakan sebuah lembah curam
            (jurang) yang terletak di perbatasan Kota Bukittinggi, di Kecamatan
            IV Koto, Kabupaten Agam, Sumatra Barat. Lembah ini memanjang dan
            berkelok sebagai garis batas kota dari selatan Ngarai Koto Gadang
            sampai ke nagari Sianok Anam Suku, dan berakhir di Kecamatan
            Palupuh. Ngarai Sianok memiliki pemandangan yang sangat indah dan
            juga menjadi salah satu objek wisata andalan provinsi Sumatra Barat.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/PMdUdBEQ9J2WxTXY9" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={sianok1} alt="sianok1" />
            <img src={sianok2} alt="sianok2" />
            <img src={sianok3} alt="sianok3" />
            <img src={sianok4} alt="sianok4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Dewasa: Rp 15.000,-</li>
            <li>Anak: Rp 10.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NgaraiSianok;
