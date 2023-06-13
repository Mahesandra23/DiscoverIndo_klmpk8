import React, { useState, useEffect } from "react";
import "./detail.css";
import Ranauu from "./Destinasi/sumatra/Ranau.jpg";
import Ranau2 from "./Destinasi/sumatra/Ranau2.jpg";
import Ranau3 from "./Destinasi/sumatra/Ranau3.jpg";
import Ranau4 from "./Destinasi/sumatra/Ranau4.jpg";
const Ranau = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-4.8409803&lon=103.9041856&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Danau Ranau</h1>
        </div>
        <div className="description1">
          <p>
            Danau Ranau merupakan salah satu danau terbesar di Sumatera Selatan
            yang terbentuk akibat gempa vulkanik dan letusan gunung berapi.
            Danau yang memiliki pemandangan indah ini secara administrasi berada
            di antara Kabupaten Ogan Kemering Ulu Selatan dan Lampung Barat.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/raPohX3d3ChuL8nb8" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={Ranauu} alt="Danau Toba" />
            <img src={Ranau2} alt="Danau Toba2" />
            <img src={Ranau3} alt="Danau Toba3" />
            <img src={Ranau4} alt="Danau Toba4" />
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

export default Ranau;
