import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate='show'
          className='h2 xl:mt-12'>
            Meus Trabalhos <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate='show'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Esse aqui é o meu serviço bla bla bla bla bla
          </motion.p>
          </div>
          <motion.div 
          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate='show'
          className='w-full xl:max-w-[65%]'>
            {/* slider */}
          <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};
export default Work;
