import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="bg-[#F8F7F2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#D4A843]">
              03 / SELECTED WORK
            </span>

            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#16382E] md:text-6xl lg:text-7xl">
            Ideas backed by data.
            <br />

            <span className="font-serif font-normal italic text-[#D4A843]">
              Strategies built for impact.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#777D75] md:text-lg">
            A collection of research, business strategy, and data
            analytics projects focused on solving meaningful
            challenges through structured thinking and insights.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* EXPLORE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-4 rounded-full bg-[#16382E] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#245342] hover:shadow-xl hover:shadow-[#16382E]/15"
          >
            Explore All Projects

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* PROJECT MODAL */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;