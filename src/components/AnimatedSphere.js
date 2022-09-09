import React from "react";
import { useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/earth.jpg";

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <Sphere visible scale={2}>
      <meshStandardMaterial map={colorMap} />
    </Sphere>
  );
}
