import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Photo from "../components/Photo";
import { useEffect } from "react";
const About = () => {
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
    <div className="about">
      <Navigation />
      <div className="mid">
        <h1 className="reveal-1">ABOUT US</h1>
        <div className="reveal-2">
          <h2>What we do ?</h2>
          <p>
            The growth of the data collected does not spare aeronautics and air
            transport in particular; these data may be real time data
            communicated on the ground by aircraft, but also data specific to
            the operation of an airport for example, or economic data. These
            developments require the implementation of new research programmes
            and also actions in the training of future civil aviation engineers
            and technicians.
            <br></br>It is in this spirit that ENAC created the DEVI team in
            order to participate, in the context of aviation, in the advancement
            of knowledge in data science but also in the development of economic
            models for analysing the behaviour of agents, the estimation and
            testing of these models using tools provided by econometrics or
            statistics and the interpretation and visualization of data for
            knowledge generation and decision-making.
          </p>
        </div>
        <div className="reveal-3">
          <h2>DEVI Team</h2>
          <Photo />
          <div className="reveal-1">
            <h2>Field of activity</h2>
            <p>
              This team relies on skills such as Statistics, Economics and
              Interactive Data Visualization. This requires expertise in a wide
              range of scientific fields ranging from research on methods
              (machine learning, data mining, data visualization, database) to
              mastering the scientific field from which the data are derived.
            </p>
          </div>
        </div>
        <div className="reveal-2">
          <h2>Where are we located ?</h2>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Cd8z0fzaWutcPNe_8WcHZJ6lnebWB5XP&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
