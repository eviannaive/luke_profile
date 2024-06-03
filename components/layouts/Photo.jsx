"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[240px] h-[240px] xl:w-[380px] xl:h-[380px] mix-blend-lighten absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <Image
            src="/photo.jpg"
            priority
            fill
            quality={100}
            alt=""
            className="object-cover rounded-full"
          />
        </motion.div>
        {/* corcle */}
        <motion.svg
          className="w-[250px] xl:w-[400px] h-[250px] xl:h-[400px]"
          fill="transparent"
          viewBox="0 0 400 400"
          xmlns="http://www,w3,org/2000/svg"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.circle cx="200" cy="200" r="200" stroke="#00ff99" />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
