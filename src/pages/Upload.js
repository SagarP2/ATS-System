import React from "react";
import UploadComponent from '../components/Upload';
import { motion } from 'framer-motion';


// Page transitions
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const Upload = () => {
  // Smooth scroll behavior for browsers that support it
  React.useEffect(() => {
    // Check if the browser supports scroll behavior
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="relative"
    >
      <UploadComponent />
    </motion.div>
  );
}

export default Upload;
