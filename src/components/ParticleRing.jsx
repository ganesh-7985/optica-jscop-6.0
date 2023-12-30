import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import logo1 from '../images/logo1.png'


const ParticleRing = () => {
  const canvasRef = useRef(null);
  const [scrollTransform, setScrollTransform] = useState(0);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegistrationClick = () => {
    setShowRegistration(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const handleWheel = (event) => {
      setScrollTransform(event.deltaY > 0 ? -100 : 100);
    };

    const handleMouseUp = () => {
      setScrollTransform(0);
    };

    canvas.addEventListener("wheel", handleWheel);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
          rotation: [0, 0, 0], // Set initial rotation to [0, 0, 0]
        }}
        style={{
          height: "100vh",
          transform: `translateZ(${scrollTransform}px)`,
          pointerEvents: scrollTransform !== 0 ? "none" : "auto",
        }}
        className="bg-slate-900"
        ref={canvasRef}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full items-center">
        <div className="flex flex-col items-center">
          <img
            className="w-72 md:w-96  text-slate-200 font-medium text-lg md:text-4xl pointer-events-none"
            src={logo1}
            alt="Logo"
          />
          <h1 className="text-slate-200 text-3xl md:text-6xl pointer-events-none font-extrabold">
            6.0
          </h1>
        </div>
        <p className="text-slate-200 font-extrabold text-lg md:text-xl">
          JIIT STUDENT CONFERENCE FOR OPTICS AND PHOTONICS
        </p>
        <button className="hover:bg-[#7167e2] text-white font-bold py-2 px-4 rounded-lg border-white border-solid text-lg border" onClick={()=>(<Registation/>)}>
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.3; // Rotate along X-axis
      ref.current.rotation.y = clock.getElapsedTime() * 0.2; // Rotate along Y-axis
      ref.current.rotation.z = clock.getElapsedTime() * 0.1; // Rotate along Z-axis
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
