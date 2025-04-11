import { motion } from 'framer-motion'; // ← ✅ Add this
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-0"
      >
        <span
          style={{
            display: 'block',
          }}
          id={idName}
        >
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
