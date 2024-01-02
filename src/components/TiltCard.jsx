import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Heading from "./Heading";
import event1 from '../images/event1.jpeg'
import event2 from '../images/event2.jpeg'
import event3 from '../images/event3.jpeg'
import event4 from '../images/event4.jpeg'
import event5 from '../images/event5.jpeg'

const Example = () => {
  const cards = [
    {
      url: event1,
      title: "Code of duty",
      id: 1,
      link:''
    },
    {
        url: event2,
      title: "Blind Coding",
      id: 2,
      link:''
    },
    {
        url: event3,
      title: "Squid Game",
      id: 3,
      link:''
    },
    {
        url: event4,
      title: "Create code crack",
      id: 4,
      link:''
    },
    {
        url: event5,
      title: "Ideathon",
      id: 5,
      link:''
    }
    
    // Add other card objects here
  ];

  return (
    <div>
    <Heading text="EVENTS"/>
    <div className="flex flex-wrap gap-10 w-full place-content-center px-14 py-14 text-slate-900">
      {cards.map((card) => {
        return <TiltCard key={card.id} card={card} />;
      })}
    </div>
    </div>
  );
};

const TiltCard = ({ card }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col items-center justify-center h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        {isHovered && (
          <div>
            <p className=" absolute top-2 left-4 z-10 text-xl uppercase font-serif font-semibold">{card.title}</p>
            <a href="#" className="text-blue-500 absolute bottom-4 left-4 z-10">Know More</a>
          </div>
        )}

        <img
          
          className=" h-[16rem] w-[15rem] bottom-4 inset-5 grid place-content-center rounded-xl bg-white shadow-lg"
          src={card.url}
          alt={card.title}
        />
        
        
      </div>
    </motion.div>
  );
};

export default Example;
