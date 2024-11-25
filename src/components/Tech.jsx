import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});


const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex  flex-wrap items-center justify-center gap-4">

        <motion.div
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-cyan-400"/>
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-4xl"/>
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-4xl text-green-500"/>
        </motion.div>

        <motion.div
        variants={iconVariants(7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp className="text-4xl text-blue-950"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(9)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className="text-4xl text-yellow-500"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(11)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-4xl text-gray-800"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(13)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-4xl text-cyan-400"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(15)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-4xl text-orange-700"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(17)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-4xl"/>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Tech
