import React from "react";
import Navleft from "../components/Navleft";
import Navigation from "../components/Navigation";
import { page3 } from "../data";
import { Link } from "react-scroll";

const Tool_3 = () => {
  return (
    <div className="tool">
      <Navigation />
      <Navleft />

      <div className="text">
        {/* Section Nav */}
        <div className="section-nav">
          <h2>Sommaire</h2>
          <div>
            {page3.map((page) => {
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
        <h1>Function</h1>
        <p>
          Chaque fonction JavaScript est en réalité un objet Function (ce qu'on
          peut vérifier avec l'expression (function(){}).constructor ===
          Function qui donne true).
        </p>

        <div>
          {page3.map((page) => {
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

export default Tool_3;
