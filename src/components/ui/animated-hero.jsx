import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Frontend Developer", "UI/UX Designer"], []);

  const generateBackgroundElements = () => {
    const elements = [];

    for (let i = 0; i < 12; i++) {
      elements.push(
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300/30 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          ♥
        </motion.div>
      );
    }

    for (let i = 0; i < 15; i++) {
      elements.push(
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-yellow-300/60 text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          ✦
        </motion.div>
      );
    }

    return elements;
  };



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      {/* Optional background animation */}
      {/* 
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-0">
          {generateBackgroundElements()}
        </div>
        <div className="relative z-10">
      */}
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">
                Hello Everyone! I am Celest Jerez
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-pink-400"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed pt-6 tracking-tight text-muted-foreground max-w-2xl text-center">
              I am a 3rd year student taking up a Bachelor of Science in Computer Science. I am a self-taught Frontend Developer and UI/UX Designer. I am passionate about creating beautiful and functional user interfaces that provide an excellent user experience.
            </p>

          
          </div>
        </div>
      </div>
      {/* Uncomment this if you're using background */}
      {/* </div>
      </div> */}
    </div>
  );
}

export { Hero };
