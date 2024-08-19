import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePhoto from "../assets/profile-photo.jpg"; // Import your profile photo

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-2 px-4 min-h-[180px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("", "", 0.1, 1)} 
        className='mt-4 flex flex-row-reverse items-center justify-between'
      >
        {/* Profile photo */}
        <img 
          src={profilePhoto} 
          alt='Vyankatesh Kalantri' 
          className='w-96 h-96 rounded-full object-cover' // Increased size
        />
        
        {/* Introduction text */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-xl leading-[30px]'
        >
          👋 Hi there! I'm Vyankatesh Kalantri, a tech enthusiast with a keen eye for innovative problem-solving. 
          My journey in computer science has been fueled by a passion for building meaningful solutions, 
          whether it's crafting intuitive user interfaces 🎨, optimizing backend processes 🔧, or exploring 
          the potential of AI 🤖. I thrive in environments where learning and adaptability are key 📚, 
          and I'm excited to bring my creativity and dedication to a dynamic team 💼. I'm on the lookout 
          for an internship where I can make an impact 💥 and grow into a full-time role, contributing to 
          cutting-edge projects that push the boundaries of technology 🚀.
          <br />
          <br />
          Excited to connect with you! 😊
        </motion.p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
