"use client";

import { animate } from "motion";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React from "react";
import { HiArrowSmallDown } from "react-icons/hi2";
import BouncingButton from "../BouncingButton";

function index() {
  const images = [
    { src: "/banner1.jpg", alt: "This is one of my projects" },
    { src: "/banner2.jpg", alt: "Here is another one" },
    { src: "/banner3.jpg", alt: "This s just and example" },
  ];

  const ref = React.useRef<HTMLElement>(null);

  const [currentImage, setCurrentImage] = React.useState(0);

  const [isBouncing, setIsBouncing] = React.useState(false);

  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    axis: "y",
    offset: ["start start", "1 1"],
  });

  const latest = useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const imageChangeThreshold = 1 / images.length;

    if (latest >= imageChangeThreshold * (currentImage + 1)) {
      setCurrentImage((prev) => prev + 1);
    } else if (latest < imageChangeThreshold * currentImage) {
      setCurrentImage((prev) => prev - 1);
    }
  });

  const handleBounce = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };

  const scrollToNext = (index: number) => () => {
    scrollYProgress.set((index + 1) / images.length);
  };

  return (
    <section
      ref={ref}
      className="relative w-screen"
      style={{ height: `${100 * images.length}vh` }}
    >
      <div className="w-screen sticky h-screen top-0">
        {images.map((image, index) => (
          <motion.div
            style={{ maskSize: `${index <= currentImage ? 400 : 0}%` }}
            key={"animated-banner-slide-" + image.src}
            className="w-screen h-screen absolute top-0 left-0 mask transition-mask duration-1000"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 top-0 left-0 right-0 text-center text-2xl flex flex-col justify-center items-center">
              <h2>{image.alt}</h2>
            </div>
          </motion.div>
        ))}
        <BouncingButton
            y={[-10, 0]}
            onClick={scrollToNext(currentImage)}
            className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center text-white bg-black"
        >
            <HiArrowSmallDown className="text-2xl" />
        </BouncingButton>
      </div>
    </section>
  );
}

export default index;
