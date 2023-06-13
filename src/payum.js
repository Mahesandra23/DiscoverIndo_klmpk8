import React, { useState, useEffect } from "react";
import "./detail.css";
import payum1 from "./Destinasi/papua/payum1.jpg";
import payum2 from "./Destinasi/papua/payum2.jpg";
import payum3 from "./Destinasi/papua/payum3.jpg";
import payum4 from "./Destinasi/papua/payum4.jpeg";
import axios from "axios";

const payum = () => {
  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-0.4952691&lon=104.564276&appid=4a8a11a31333df1cf83fecc38f0e4cb8"
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
          <h1>Pantai Payum</h1>
        </div>
        <div className="description1">
          <p>
          Sejauh ini Pantai Payum memang belum menjadi sebuah destinasi wisata dan bisa dikatakan masih perlu sentuhan. Hal itu nampak dari belum tersedianya fasilitas untuk wisatawan. Namun demikian, dengan bermodal potensi yang dimilikinya serta penataan yang lebih baik, pantai ini dapat menjadi pilihan utama para wisatawan.
          </p>
        </div>
        <div className="cuaca1">
          <span>Kondisi cuaca sekarang: {data1?.weather?.[0]?.main}</span>
        </div>
        <div className="maps1">
          <a href="https://goo.gl/maps/Y9wLfyD7K5r5Sjok6?coh=178571&entry=tt" className="buttonn">
            Klik di sini untuk rute perjalanan
          </a>
        </div>
        <div className="image1">
          <div className="photo-gallery1">
            <img src={payum1} alt="payum1" />
            <img src={payum2} alt="payum2" />
            <img src={payum3} alt="payum3" />
            <img src={payum4} alt="payum4" />
          </div>
        </div>
        <div className="ticket-info1">
          <h2>Harga Tiket Masuk</h2>
          <ul>
            <li>Rp 5.000,-</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default payum;
