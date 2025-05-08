"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <section className="w-full py-20 px-4 relative z-10">
      {/* Optional background layer that won't block clicks */}
      {/* 
      <div className="pointer-events-none absolute inset-0 z-0">
        {generateBackgroundElements()}
      </div> 
      */}

      <div className="max-w-3xl mx-auto text-center relative z-10 pointer-events-auto">
        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-8 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently looking for a front-end internship or freelance
          opportunities. My inbox is always open — feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative z-10 pointer-events-auto">
            <Button
              asChild
              className="px-8 py-6 rounded-full font-normal bg-pink-400 text-white text-lg transition-all duration-300  border-gray-100"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mariannecelest@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say Hello!
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
