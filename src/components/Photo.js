import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";

const Photo = () => {
  //Tableau de données
  let data = [
    {
      id: 1,
      nom: "Christophe Hurter",
      poste: "Professeur",
      imgSrc: photo1,
    },
    {
      id: 2,
      nom: "Guillaume Truong",
      poste: "Ingénieur de recherche",
      imgSrc: photo5,
    },
    {
      id: 3,
      nom: "Ludovic d’Estampes",
      poste: "Enseignant-Chercheur",
      imgSrc: photo4,
    },
    {
      id: 4,
      nom: "Steve Lawford",
      poste: "Enseignant-Chercheur",
      imgSrc: photo3,
    },
    {
      id: 5,
      nom: "Anaïs Servais",
      poste: "Doctorant",
      imgSrc: photo6,
    },
    { id: 5, nom: "Masao Ascencio", poste: "Stagiaire", imgSrc: photo2 },
  ];

  return (
    <>
      <div className="photo">
        {/* Map parcoure le tableau data avec un index */}
        {data.map((item, index) => {
          return (
            <div className="tableau" key={index}>
              <div className="element">
                <img src={item.imgSrc} />
                <h3>{item.nom}</h3>
                <p>{item.poste}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Photo;
