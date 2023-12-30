import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";

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
    url: 'src/images/team1.jpeg',
    title: "Naman Gupta",
    postion:"Technical Head",
    id: 1,
  },
  {
    url: 'src/images/team2.jpeg',
    title: "Ronith Khatri",
    postion:"Web Master",
    id: 2,
  },
  {
    url: 'src/images/team3.jpeg',
    title: "Harsh Sharma",
    postion:"Techinical volunteer",
    id: 3,
  },
  {
    url: 'src/images/team4.jpeg',
    title: "Kavya Baranwal",
    postion:"Techinical volunteer",
    id: 4,
  },
  {
    url: 'src/images/team5.jpeg',
    title: "Aryan Arora",
    postion:"Techinical volunteer",
    id: 5,
  },
  {
    url: 'src/images/team6.jpeg',
    title: "Deepti Jain",
    postion:"Techinical volunteer",
    id: 6,
  },
  {
    url: 'src/images/team7.jpeg',
    title: "Nancy Soni",
    postion:"Techinical volunteer",
    id: 7,
  },
  {
    url: 'src/images/team8.jpeg',
    title: "Aryan Goyel",
    postion:"Technical volunteer",
    id: 8,
  },
];