import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";

const categories = [
  "All Projects",
  ...new Set(projects.map((project) => project.category)),
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-36 pb-24">

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* BACK LINK */}
        <Link
          to="/"
          className="group mb-14 inline-flex items-center gap-2 text-sm font-medium text-[#777D75] transition-colors hover:text-[#16382E]"
        >
          <ArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#D4A843]">
              PORTFOLIO / PROJECTS
            </span>

            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[#16382E] md:text-7xl lg:text-8xl">
            Selected
            <br />

            <span className="font-serif font-normal italic text-[#D4A843]">
              Projects.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#777D75] md:text-lg">
            Explore my work across market research, business
            strategy, startup valuation, and data analytics.
            Each project represents a unique challenge,
            analytical approach, and learning experience.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`
                rounded-full border px-5 py-2.5
                text-sm font-medium
                transition-all duration-300
                ${
                  activeCategory === category
                    ? "border-[#16382E] bg-[#16382E] text-white"
                    : "border-[#E8E6DC] bg-white text-[#777D75] hover:border-[#16382E] hover:text-[#16382E]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT COUNT */}
        <div className="mb-8 flex items-center justify-between border-b border-[#E8E6DC] pb-5">
          <p className="text-sm text-[#777D75]">
            Showing{" "}
            <span className="font-semibold text-[#16382E]">
              {filteredProjects.length}
            </span>{" "}
            projects
          </p>

          <span className="text-xs tracking-widest text-[#777D75] uppercase">
            Fariq / Portfolio
          </span>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-28 rounded-[2.5rem] bg-[#16382E] px-8 py-16 text-center md:px-16 md:py-20">
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[#D4A843] uppercase">
            Have a project in mind?
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Let's create something
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              meaningful together.
            </span>
          </h2>

          <Link
            to="/#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A843] px-7 py-4 text-sm font-semibold text-[#16382E] transition-transform hover:-translate-y-1"
          >
            Let's Collaborate
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* PROJECT DETAIL POPUP */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default ProjectsPage;