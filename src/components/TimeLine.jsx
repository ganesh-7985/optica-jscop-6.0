import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from './TimeLineElement';
import { FaLocationDot,FaClock } from "react-icons/fa6";
import Heading from './Heading';


const TimelineWithAnimations = () => {
  const handleHover = (e) => {
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

  const handleLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div>
    <Heading text="TIMELINE"/>
    <div className="flex flex-wrap place-content-center px-14 py-14 text-slate-900 bg-transparent">
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            
          >
            <motion.div
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="timeline-content bg-gradient-to-br from-indigo-300 to-violet-300  rounded-xl shadow-lg "
            >
              <motion.img
                src={element.url}
                alt="Event"
                className="timeline-image rounded-xl h-52 w-full"
                whileHover={{ rotate: 360 }}
              />

    
              <h3 className="vertical-timeline-element-title text-white font-bold flex justify-center items-center uppercase bg-[#7167e2] rounded">
                {element.title}
              </h3>

              {/* Location and Time */}
              <div className="location-time text-center text-gray-700">
                <p className="vertical-timeline-element-subtitle flex justify-center items-center text-white font-bold"><span className='px-4 flex items-center'><FaLocationDot/></span>{element.location}</p>
                <p className="vertical-timeline-element-subtitle flex justify-center items-center  text-white font-bold"><span className='px-4 flex items-center'><FaClock/></span>{element.time}</p>
              </div>

            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </div>
  );
};

export default TimelineWithAnimations;
