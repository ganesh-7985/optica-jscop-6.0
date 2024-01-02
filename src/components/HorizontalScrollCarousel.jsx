import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Heading from "./Heading";
import team1 from '../images/team1.jpeg';
import team2 from '../images/team2.jpeg';
import team3 from '../images/team3.jpeg';
import team4 from '../images/team4.jpeg';
import team5 from '../images/team5.jpeg';
import team6 from '../images/team6.jpeg';
import team7 from '../images/team7.jpeg';
import team8 from '../images/team8.jpeg';


const Example = () => {
  return (

    <div>
      <Heading text="OUR TEAM"/>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] overflow-hidden flex flex-wrap gap-3 rounded-md bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end p-4">
        <p className="text-white text-2xl font-bold">{card.title}</p>
        <p className="text-white text-lg">{card.postion}</p>
      </div>
    </div>
  );
};

export default Example;



const cards = [
  {
    url: team1,
    title: "Naman Gupta",
    postion:"Technical Head",
    id: 1,
  },
  {
    url: team2,
    title: "Ronith Khatri",
    postion:"Web Master",
    id: 2,
  },
  {
    url: team3,
    title: "Harsh Sharma",
    postion:"Techinical volunteer",
    id: 3,
  },
  {
    url: team4,
    title: "Kavya Baranwal",
    postion:"Techinical volunteer",
    id: 4,
  },
  {
    url: team5,
    title: "Aryan Arora",
    postion:"Techinical volunteer",
    id: 5,
  },
  {
    url: team6,
    title: "Deepti Jain",
    postion:"Techinical volunteer",
    id: 6,
  },
  {
    url: team7,
    title: "Nancy Soni",
    postion:"Techinical volunteer",
    id: 7,
  },
  {
    url: team8,
    title: "Aryan Goyel",
    postion:"Technical volunteer",
    id: 8,
  },
];