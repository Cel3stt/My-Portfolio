"use client";

import { motion } from "framer-motion";

const TimelineSection = () => {
  const timelineItems = [
    {
      id: 1,
      date: "Jan – Apr 2025",
      title: "Codify | MERN Stack",
      content: (
        <p className="text-sm text-gray-700">
          A gamified LMS with Code Editor and Video Conference. Features include Course Management, User Roles (Admin, Professor, Student), Code Challenges, and Code Battle.
        </p>
      ),
    },
    {
      id: 2,
      date: "Mar – Apr 2025",
      title: "PetFeeds | MERN, EC2, Arduino",
      content: (
        <p className="text-sm text-gray-700">
          An IoT-based smart pet feeder system featuring real-time camera integration and scheduled feeding using Arduino and AWS EC2.
        </p>
      ),
    },
    {
      id: 3,
      date: "Sep – Dec 2024",
      title: "The Coffee Junkie | MERN Stack",
      content: (
        <p className="text-sm text-gray-700">
          A full-stack e-commerce app built for a client to showcase and sell coffee machines and brewing tools, with payment and media integration.
        </p>
      ),
    },
    {
      id: 4,
      date: "Aug 2024",
      title: "Apple iPhone 15 Web Clone | React, Framer",
      content: (
        <p className="text-sm text-gray-700">
          A responsive front-end clone of Apple’s iPhone 15 product page with smooth scroll and UI transitions using Framer Motion.
        </p>
      ),
    },
    {
      id: 5,
      date: "July 2024",
      title: "NoteCheck | React",
      content: (
        <p className="text-sm text-gray-700">
          A task-tracking app featuring three categories: To Do, Doing, and Done. Built with React and styled with CSS.
        </p>
      ),
    },
    {
      id: 6,
      date: "June 2024",
      title: "MomoTalk | React",
      content: (
        <p className="text-sm text-gray-700">
          A responsive single-page social media interface with theme customization. Built using React and CSS.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Project Timeline</h2>
          <p className="text-sm text-gray-600">
            Here's a chronological summary of the web projects I've developed.
          </p>
        </div>

        <div className="relative pl-6">
          <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-pink-400" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative pl-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-white border-2 border-pink-400" />

                <div>
                  <h3 className="text-sm font-semibold text-pink-600 mb-1">{item.date}</h3>
                  <h4 className="text-base font-medium text-gray-900 mb-1">{item.title}</h4>
                  <div>{item.content}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
