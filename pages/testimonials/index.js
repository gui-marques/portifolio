import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        <motion.h2
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        animate='show'
        exit="hidden"
        >
          O que os clientes <span className='text-accent'>dizem?</span>
          </motion.h2>
        {/* Slider testemunha */}
        <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        animate='show'
        exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
    );
};

export default Testimonials;
