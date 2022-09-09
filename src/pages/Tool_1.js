import React from "react";
import Navleft from "../components/Navleft";
import Navigation from "../components/Navigation";
import { page1 } from "../data";
import { Link } from "react-scroll";

const Tool_1 = () => {
  return (
    <div className="tool">
      <Navigation />
      <Navleft />

      <div className="text">
        {/* Section Nav */}
        <div className="section-nav">
          <h2>Sommaire</h2>
          <div>
            {page1.map((page) => {
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
        <h1>String</h1>
        <p>
          Un objet String est utilisé afin de représenter et de manipuler une
          chaîne de caractères.
        </p>
        <div>
          {page1.map((page) => {
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

export default Tool_1;
