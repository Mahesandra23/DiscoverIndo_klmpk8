import React, { useState } from "react";
import "./styles.css";
import locpin from "./locpin.png";
import logo from "./logo.png";
import sumatra from "./peta1/sumatra.png";
import kalimantan from "./peta1/kalimantan.png";
import jawa from "./peta1/jawa.png";
import papua from "./peta1/papua.png";
import sulawesi from "./peta1/sulawesi.png";
// import { Routes, Route } from "react-router-dom"
// import AboutUs from "./Page2"
import LhokMe from "./LhokMe"
import Toba from "./Toba"
import PesisirKalianda from "./PesisirKalianda"
import NgaraiSianok from "./NgaraiSianok";
import Ranau from "./Ranau";
import Bromo from "./bromo";
import Karimunjawa from "./karimunjawa";
import Telagawarna from "./telagawarna";
import Panjang from "./panjang";
import Ijen from "./ijen";
import Bantimurung from "./bantimurung";
import Lore from "./lore";
import Togean from "./togean";
import Wakatobi from "./wakatobi";
import Bunaken from "./bunaken";
import Kelam from "./kelam";
import Tjputing from "./tjputing";
import Sentarum from "./sentarum";
import Derawan from "./derawan";
import Kakaban from "./kakaban";
import Ampat from "./ampat";
import Anggi from "./anggi";
import Cendrawasih from "./cendrawasih";
import Biak from "./biak";
import Payum from "./payum";

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="" />
  </div>
);

const Navbar = () => (
  <div className="navbar">
    <div className="dalemnav">
      <div className="navhome">
        <div className="home">
          <a href="2.html">Home</a>
        </div>
      </div>
      <div className="aboutUs">About Us</div>
    </div>
  </div>
);

const Description = () => {
  const [popup, setPopup] = useState(null);
  const [blur, setBlur] = useState(false);
  const [selectedPulau, setSelectedPulau] = useState(null);

  const tampilkanWisata = (imageSrc, description) => {
    if (!popup) {
      setBlur(true);
      setSelectedPulau(description);

      const closeButton = (
        <span className="close-button" onClick={hapusPopup}>
          &times;
        </span>
      );

      const image = <img src={imageSrc} className="popup-image" alt="" />;

      const newPopup = (
        <div className="popup">
          {closeButton}
          {image}
          {renderLocationPins(imageSrc)}
        </div>
      );

      setPopup(newPopup);
    }
  };

  const hapusPopup = () => {
    setBlur(false);
    setSelectedPulau(null);
    setPopup(null);
  };

  const renderLocationPins = (imageSrc) => {
    const pinCoordinates = getPulauCoordinates(imageSrc);
  
    const handleClick = (target) => {
      const divTujuan = document.getElementById(target);
      divTujuan.scrollIntoView({ behavior: 'smooth' });
    };
  
    return pinCoordinates.map((coordinate, index) => (
      <button
        className={`button button${index}`}
        key={index}
        style={{ position: "absolute", top: coordinate.y, left: coordinate.x }}
        onClick={() => {
          handleClick(coordinate.id);
          hapusPopup();
        }}
        data-target={coordinate.id}
      >
        <img
          src={locpin}
          alt="location pin"
          className="location-pin"
          style={{ position: "relative" }}
        />
        <span className="location-name">{coordinate.name}</span>
      </button>
    ));
  };
  
  const getPulauCoordinates = (imageSrc) => {
    const coordinates = {
      [sumatra]: [
        { x: "15%", y: "5%", name: "Pantai Lhok Me, Aceh", id: "div1" },
        { x: "40%", y: "20%", name: "Danau Toba, Sumatera Utara", id: "div2" },
        { x: "70%", y: "50%", name: "Ngarai Sianok, Bukitinggi", id: "div3" },
        { x: "103%", y: "80%", name: "Danau Ranau, Sumatera Selatan", id: "div4" },
        { x: "125%", y: "87%", name: "Pantai Pesisir Kalianda, Lampung", id: "div5" }
      ],
      [kalimantan]: [
        { x: "45%", y: "50%", name: "Bukit Kelam, Kalimantan Barat", id: "div6" },
        { x: "48%", y: "80%", name: "Taman Nasional Tanjung Puting, Kalimantan Tengah", id: "div7" },
        { x: "55%", y: "45%", name: "Danau Sentarum, Kalimantan Barat", id: "div8" },
        { x: "118%", y: "30%", name: "Pulau Derawan, Kalimantan Timur", id: "div9" },
        { x: "130%", y: "30%", name: "Pulau Kakaban, Kalimantan Timur", id: "div10" }
      ],
      [jawa]: [
        { x: "75%", y: "43%", name: "Telaga Warna, Dieng, Jawa Tengah", id: "div11" },
        { x: "80%", y: "15%", name: "Kepulauan Karimunjawa, Jawa Tengah", id: "div12" },
        { x: "83%", y: "25%", name: "Pulau Panjang, Jepara, Jawa Tengah", id: "div13" },
        { x: "117%", y: "60%", name: "Taman Nasional Bromo Tengger Semeru, Jawa Timur", id: "div14" },
        { x: "130%", y: "63%", name: "Kawah Ijen, Jawa Timur", id: "div15" }
      ],
      [sulawesi]: [
        { x: "27%", y: "85%", name: "Taman Nasional Bantimurung, Sulawesi Selatan", id: "div16" },
        { x: "37%", y: "40%", name: "Taman Nasional Lore Lindu, Sulawesi Tengah", id: "div17" },
        { x: "70%", y: "30%", name: "Kepulauan Togean, Sulawesi Tengah", id: "div18" },
        { x: "100%", y: "85%", name: "Wakatobi, Sulawesi Tenggara", id: "div19" },
        { x: "120%", y: "7%", name: "Taman Nasional Bunaken, Sulawesi Utara", id: "div20" }
      ],
      [papua]: [
        { x: "17%", y: "15%", name: "Kepulauan Raja Ampat, Papua Barat", id: "div21" },
        { x: "45%", y: "15%", name: "Danau Anggi, Pegunungan Arfak, Papua Barat", id: "div22" },
        { x: "55%", y: "30%", name: "Taman Nasional Teluk Cenderawasih, Papua Barat", id: "div23" },
        { x: "67%", y: "20%", name: "Pulau Biak, Papua Barat", id: "div24" },
        { x: "125%", y: "83%", name: "Pantai Payum, Merauke", id: "div25" }
      ]
    };
  
    return coordinates[imageSrc] || [];
  };
  

  const pulauList = [
    {
      name: "Sumatra",
      image: sumatra,
      description:
        "Pulau Sumatera merupakan pulau keenam terbesar di dunia dengan luas 473.481 km persegi, merupakan sebuah 'melting pot' budaya. Pulau ini memiliki keragaman budaya yang kaya, mulai dari suku-suku asli seperti Gayo, Batak, Minang, Mentawai, dan Anak Dalam, hingga adanya pengaruh budaya Melayu, Cina, dan India."
    },
    {
      name: "Kalimantan",
      image: kalimantan,
      description:
        "Pulau Kalimantan, yang memiliki luas 743.330 km persegi, merupakan pulau terbesar ketiga di dunia. Keunikan dari Pulau Kalimantan adalah bahwa ia terbagi menjadi tiga wilayah negara, yaitu Indonesia, Malaysia, dan Brunei. Pulau Kalimantan terdiri dari lima provinsi, termasuk Kalimantan Selatan, Kalimantan Barat, Kalimantan Timur, Kalimantan Tengah, dan Kalimantan Utara."
    },
    {
      name: "Jawa",
      image: jawa,
      description:
        "Pulau Jawa merupakan pulau yang menduduki peringkat ke-13 sebagai pulau terluas di dunia, memiliki populasi hampir mencapai 160 juta jiwa. Pulau Jawa juga merupakan pulau dengan jumlah penduduk terbanyak dan kepadatan tertinggi di Indonesia. Sebanyak 60 persen penduduk Indonesia tinggal di Pulau Jawa yang memiliki luas sekitar 138.793,6 km2, dan terbagi menjadi enam provinsi, yaitu Jawa Barat, Jawa Tengah, Jawa Timur, Banten, Daerah Khusus Ibukota Jakarta, dan Daerah Istimewa Yogyakarta."
    },
    {
      name: "Sulawesi",
      image: sulawesi,
      description:
        "Asal-usul nama Sulawesi diduga berasal dari bahasa lokal, di mana 'Sula' memiliki arti pulau, sedangkan 'Mesi' merujuk pada besi. Nama tersebut digunakan karena pulau ini merupakan pusat perdagangan bijih besi yang diekstraksi dari tambang di sekitar Danau Matano, dekat Sorowako, Luwu Timur. Pulau Sulawesi terbagi menjadi enam provinsi, yaitu Sulawesi Barat, Sulawesi Utara, Sulawesi Tengah, Sulawesi Selatan, Sulawesi Tenggara, dan Gorontalo."
    },
    {
      name: "Papua",
      image: papua,
      description:
        "Pulau Papua memiliki luas wilayah 808.105 km persegi, merupakan pulau terbesar kedua di dunia dan pulau terbesar di Indonesia. Wilayah provinsi Papua terbagi menjadi dua bagian, yaitu Papua dan Papua Barat. Papua terkenal sebagai daerah yang kaya akan budaya. Terdapat sekitar 255 suku yang tersebar di berbagai distrik di pulau ini."
    }
  ];

  return (
    <div className="dalem">
      <div className="judul">
        <span className="headline">Mau Liburan Kemana?</span>
        <span className="subheadline">
          Pencet gambar pulau sesuai tujuan wisata alam yang dituju
        </span>
        <p className="bar" />
        <p className="description" id="description">
          {selectedPulau
            ? selectedPulau
            : "Indonesia adalah negara yang memiliki banyak objek pariwisata, terutama wisata alam. Keberagaman alamnya menawarkan panorama yang memukau dan keindahan alam yang luar biasa. Mulai dari hutan-hutan lebat, pegunungan yang menjulang tinggi, air terjun yang menawan, danau-danau indah, hingga sungai-sungai yang mempesona."}
        </p>
      </div>
      <div className="lingkaran">
        <div className={`pulau ${blur ? "blurred" : ""}`}>
          {pulauList.map((pulau, index) => (
            <div key={index}>
              <img
                src={pulau.image}
                alt=""
                className={`pulau-img ${pulau.name.toLowerCase()}`}
                onClick={() => tampilkanWisata(pulau.image, pulau.description)}
              />
             <div className={`overlay overlay${index}`}>{pulau.name}</div>
            </div>
          ))}
        </div>
      </div>
      {popup}
    </div>
  );
};

const App = () => (
  <div>
    <Logo />
    <Navbar />
    <Description />
    <div id="div1">
      <LhokMe />
    </div>
    <div id="div2">
      <Toba />
    </div>
    <div id="div3">
      <NgaraiSianok />
    </div>
    <div id="div4">
      <Ranau />
    </div>
    <div id="div5">
      <PesisirKalianda />
    </div>
    <div id="div6">
      <Kelam />
    </div>
    <div id="div7">
      <Tjputing />
    </div>
    <div id="div8">
      <Sentarum />
    </div>
    <div id="div9">
      <Derawan />
    </div>
    <div id="div10">
      <Kakaban />
    </div>
    <div id="div14">
      <Bromo />
    </div>
    <div id="div12">
      <Karimunjawa />
    </div>
    <div id="div11">
      <Telagawarna />
    </div>
    <div id="div13">
      <Panjang />
    </div>
    <div id="div15">
      <Ijen />
    </div>
    <div id="div16">
      <Bantimurung />
    </div>
    <div id="div17">
      <Lore />
    </div>
    <div id="div18">
      <Togean />
    </div>
    <div id="div19">
      <Wakatobi />
    </div>
    <div id="div20">
      <Bunaken />
    </div>
    <div id="div21">
      <Ampat />
    </div>
    <div id="div22">
      <Anggi />
    </div>
    <div id="div23">
      <Cendrawasih />
    </div>
    <div id="div24">
      <Biak />
    </div>
    <div id="div25">
      <Payum />
    </div>
  </div>
);

export default App;
