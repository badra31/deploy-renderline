import React from "react";
import Navleft from "../components/Navleft";
import Navigation from "../components/Navigation";
import { page2 } from "../data";
import { Link } from "react-scroll";

const Tool_2 = () => {
  return (
    <div className="tool">
      <Navigation />
      <Navleft />

      <div className="text">
        {/* Section Nav */}
        <div className="section-nav">
          <h2>Sommaire</h2>
          <div>
            {page2.map((page) => {
              return (
                <li>
                  <Link
                    to={page.url}
                    key={page.id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </div>
        </div>

        {/* Texte */}
        <h1>DataView</h1>
        <p>
          La vue DataView fournit une interface de bas niveau pour lire et
          écrire des données de différents types numériques dans un objet
          ArrayBuffer, quel que soit le « boutisme » (endianness) de la
          plateforme.
        </p>
        <div>
          {page2.map((page) => {
            return (
              <section className={page.url}>
                <h3>{page.title}</h3>
                <p>{page.text}</p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tool_2;
