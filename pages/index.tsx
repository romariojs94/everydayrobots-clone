import { riseWithFade, staggerChildren, videoAnimation, wordAnimation} from "@/utils/animations";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import React, { FC } from 'react';

export default function Home() {
  return (
      <motion.div initial="initial" animate="animate">
        <Navbar />
        <div className="grid gap-5 lg:gap-0 lg:grid-cols-[3fr_1fr] py-12">
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl font-bold lg:w-[40rem] leading-[87%]  md:leading-[90%] tracking-[-2px]" >
            <AnimatedWords title="Helper robots for a better everyday" />
          </h1>
          <motion.p className="text-xl leading-[150%] self-end text-[#262626] font-medium pr-12 lg:pr-0" variants={riseWithFade}>
            Born from the moonshot factory, we're building a new type of robot. One that can learn by itself, to help anyone with (almost) anything.
          </motion.p>
        </div>
        <motion.video loop muted autoPlay playsInline variants={videoAnimation}>
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </motion.video>
        <footer className="flex justify-center text-sm text-zinc-400 py-6 sm:py-12">
          <p>Copyright 2022 Robot Co. All rights reserved.</p>
        </footer>
      </motion.div>
    );
};


type AnimatedWordsProps = {
  title: string
}
const AnimatedWords: FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map( (word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span className="inline-block overflow-hidden" variants={wordAnimation}>{word + "\u00A0"}</motion.span>
        </div>
      ))}
    </motion.span>
  )
}