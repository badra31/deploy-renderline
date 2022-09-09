import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BtnSlider from "../components/BtnSlider";

//Images du carousel
import img1 from "../assets/imgExoa.jpg";
import img2 from "../assets/imgFlightAware.png";
// import video from "../assets/shipVideo.mp4";

const Data = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== 3) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 3) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(3);
    }
  };

  return (
    <div className="data">
      <Navigation />
      <h1>DATA</h1>
      <div className="mid">
        {/* Carousel */}
        <div className="container-slider">
          <div className={slideIndex === 1 ? "slide active-anim" : "slide"}>
            <img src={img1}></img>
          </div>
          <div className={slideIndex === 2 ? "slide active-anim" : "slide"}>
            <img src={img2}></img>
          </div>
          <div className={slideIndex === 3 ? "slide active-anim" : "slide"}>
            <div>
              {/* <video autoPlay loop muted playsInline className="video">
                <source src={video} type="video/mp4"></source>
              </video> */}
            </div>
          </div>
          <div
            className={slideIndex === 3 ? "slide active-anim" : "slide"}
          ></div>
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>

        {/* Texte */}
        <div className={slideIndex === 1 ? "slide2 active-anim2" : "slide2"}>
          <h3>Evoa</h3>
          <p>
            The real time attacks globe is using the Norse Intelligence Service
            that continuously monitors the networks for suspicious activities.
            It allows to see where attacks come from in real time. The shapes
            used allow to distinguish the places and the senses of the attack.
          </p>
          <i>
            <i>(Source: Exoa, website, seen: 26/04/2022)</i>
          </i>
        </div>
        <div className={slideIndex === 2 ? "slide2 active-anim2" : "slide2"}>
          <h3>FlightAware</h3>
          <p>
            A tracking application called FlightAware. It’s one of the most used
            tracking platforms in the world. It allows to trace/locate the
            planes by giving the name, type, time, destination, etc... Also, it
            makes it possible to trace the journey of an airplane.
          </p>
          <i>(Source: FlightAware, website, seen: 26/04/2022)</i>
        </div>
        <div className={slideIndex === 3 ? "slide2 active-anim2" : "slide2"}>
          <h3>FleetMon</h3>
          <p>
            A week of ship traffic on the seven seas, seen from space. Get a
            glimpse of the vibrant lanes of goods transport that link the
            continents. The vessel movements were captured using newest
            terrestrial and space-borne AIS technology from FleetMon and its
            partner Luxspace. FleetMon provides advanced fleet monitoring
            services, software APIs, reports and analyses of maritime traffic
            data. The inset shows live monitoring with the FleetMon Explorer
            software.
          </p>
          <i>(Source: FleetMon, youtube, seen: 28/04/2022)</i>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Data;
