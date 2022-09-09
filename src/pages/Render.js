import React from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect } from "react";

// import bg from "../assets/video.mp4";
import francepng from "../assets/France.png";
import parispng from "../assets/Paris 3.png";
import franceCovidpng from "../assets/France Covid.png";

const Render = () => {
  // Fade Effect

  useEffect(() => {
    const ratio = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
      observer.observe(r);
    });
  });
  return (
    <div className="render">
      <Navigation />
      <div className="mid">
        <div className="title">
          <div className="projectName">RENDERLINE</div>
          <div className="sub-projectName">Next-Generation of Data Visualisation Tool</div>
        </div>
        <div className="reveal-1 section" id="id1">
          <h2>What is this project about ?</h2>
          <section className="aboutProject">
            <div class="about-content">
              <div class="column left">
                <div class="img-container">
                  <img src={francepng} alt="Point flow visualization above France" />
                </div>
              </div>
              <div class="column right text">
                <p>
                  <strong>Renderline is a data visualization tool.</strong> It is a tool
                  accessible through a web interface, easy to use, which will allow the
                  user to quickly create videos that use aeronautical data (aircraft 
                  trajectory, sectorization, background map, etc.) while preserving it
                  confidentiality, and thus to create communication media adapted to
                  the target audiences (from the expert to the general public) to 
                  inform or make decisions.
                  <br/>
                  <br/>
                  Originally, the objective of the project was to develop data visualization
                  tools at DSNA. Indeed, every day, we record a significant amount of data
                  concerning air traffic (position, speed, altitude, heading, climb/descent
                  coefficients...) and few tools were available to visualize them without
                  technical skills. Under the leadership of Stéphane Chatty, Thibaud Figueroa
                  and Christophe Hurter, the Renderline project will start to take shape
                  in early 2021. To give the project a boost from the start, Christophe Hurter,
                  then a professor at ENAC, decided to capitalize on the expertise of the Ecole
                  Nationale de l'Aviation Civile and its 15 years of research in DataVis, its scientific
                  publications and patents on the subject. This expertise was not yet used in operations at the DSNA.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="reveal-2 section" id="id2">
          <h2>What are the applications of these aircraft trajectory visualizations ?</h2>
          <section className="aboutProject">
            <div class="about-content">
              <div class="column left">
                <div class="img-container">
                  {/* <video autoPlay loop muted playsInline class="video">
                    <source src={bg} type="video/mp4"></source>
                  </video> */}
                </div>
              </div>
              <div class="column right text">
                <p>
                These flight data renderings are particularly valued by environmental
                organizations, such as the Environmental Mission, which is responsible
                for providing data on the visual, noise and environmental impacts of civil aviation. 
                The BEA (Bureau d'Enquête et d'Analyse pour la Sécurité de l'Aviation Civile)
                is also a client to work visually on an incident that would require thorough investigations.
                All the aeronautical training institutions are also customers who are looking for
                training materials around aeronautical data.
                In general, decision makers and communication units of the DSNA also need support
                to communicate on air traffic and its evolution.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="reveal-3 section" id="id3">
          {/* <h2>What are the applications of these aircraft trajectory visualizations ?</h2> */}
          <section className="aboutProject">
            <div class="about-content">
              <div class="column left text">
                <p>
                Technically speaking, Renderline displays the flight path recordings using a graphic engine similar to those used in the film animation or video game industry. This rendering can be modulated according to the parameters that the user can choose to display according to his needs.
                The project is divided into two distinct parts:
                <ul>
                  <li>A first part which includes the graphic engine itself which is free of rights,
                    but which requires advanced technical skills to make it work properly.</li>
                  <li>A second part which includes the graphic engine control thanks to a
                    simplified web interface proprietary to the DSNA.</li>
                </ul>
                </p>
              </div>
              <div class="column right">
                <div class="img-container">
                  <img src={parispng} alt="Trajectories as lines above Paris" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Render;
