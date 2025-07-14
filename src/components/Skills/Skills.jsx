// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[8vw] md:px-[10vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-20 py-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div
            className="bg-gray-900 backdrop-blur-md px-8 sm:px-12 py-10 sm:py-8 w-full rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 items-center sm:grid-cols-3 gap-x-4 gap-y-5 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 border-2 border-gray-700 rounded-xl py-2 px-3 bg-gray-800"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>


              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
