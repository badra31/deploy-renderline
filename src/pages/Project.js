import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Project = () => {
  return (
    <div className="project">
      <Navigation />
      <div className="mid">
        <h1>THE PROJECT</h1>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1rrWBGvFSRaD1bKw5lYZM8S2_BBBYlfXZ&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
        <div className="options">
          <div>
            <label for="vol">Altitude </label>
            <input type="range" id="vol" name="vol" min="0" max="20000"></input>
          </div>
          <div>
            <label for="vol">Vitesse </label>
            <input type="range" id="vol" name="vol" min="0" max="1300"></input>
          </div>
          <div>
            <select name="quantiteFrites">
              <option selected hidden value="0">
                Type de vol
              </option>
              <option value="1">Aviation générale</option>
              <option value="2">Aviation d'affaires</option>
              <option value="3">Compagnie aériennes commerciales</option>
              <option value="4">Compagnie aérienne cargo</option>
              <option value="4">Medevac</option>
            </select>
          </div>

          <div>
            <select name="quantiteFrites">
              <option selected hidden value="0">
                Type d'avion
              </option>
              <option value="1">Aviation générale</option>
              <option value="2">Aviation d'affaires</option>
              <option value="3">Compagnie aériennes commerciales</option>
              <option value="4">Compagnie aérienne cargo</option>
              <option value="4">Medevac</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
