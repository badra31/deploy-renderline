import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import AnimatedSphere from "../components/AnimatedSphere";

const Home = () => {
  return (
    <div className="home">
      <h1>RENDERLINE</h1>
      <div className="hero">
        <div className="back-video">
          <Canvas className="canvas">
            <OrbitControls
              enableZoom={true}
              autoRotate={true}
              autoRotateSpeed={3}
              enablePan={false}
            />
            <ambientLight intensity={0.3} />
            <directionalLight position={[-2, 7, 2]} intensity={0.5} />
            <Suspense fallback={null}>
              <AnimatedSphere />
            </Suspense>
          </Canvas>
        </div>
        <div className="content">
          <NavLink to="/render">
            <p>Explore</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
