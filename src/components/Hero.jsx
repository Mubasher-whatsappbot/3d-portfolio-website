import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-gradient-to-b from-primary to-tertiary`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='w-5 h-5 rounded-full bg-secondary' 
          />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.8 }}
            className='w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary to-transparent' 
          />
        </div>

        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${styles.heroHeadText}`}
          >
            Hi, I'm <span className='text-secondary'>Mubasher Dev</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${styles.heroSubText} mt-2`}
          >
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web experiences
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
