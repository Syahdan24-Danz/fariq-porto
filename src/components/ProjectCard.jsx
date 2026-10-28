import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const ProjectCard = ({ project, index = 0, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8E6DC] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#D4A843]/50 hover:shadow-2xl hover:shadow-[#16382E]/10"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[#E8E6DC]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16382E]/40 via-transparent to-transparent" />

        {/* CATEGORY */}
        <div className="absolute top-5 left-5">
          <span className="rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-medium text-[#16382E] backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* YEAR */}
        <div className="absolute right-5 bottom-5">
          <span className="text-sm font-medium text-white">
            {project.year}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6 md:p-8">

        {/* PROJECT NUMBER */}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#D4A843]">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>

          <CalendarDays size={16} className="text-[#777D75]" />
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-[26px]">
          {project.title}
        </h3>

        {/* ROLE */}
        <p className="mt-3 text-sm font-medium text-[#D4A843]">
          {project.role}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-5 line-clamp-3 text-sm leading-7 text-[#777D75]">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#F8F7F2] px-3 py-1.5 text-xs text-[#555D55]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={() => onClick(project)}
            className="flex w-full items-center justify-between border-t border-[#E8E6DC] pt-5 text-sm font-semibold text-[#16382E] transition-colors hover:text-[#B68B2E]"
          >
            View Case Study

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16382E] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#D4A843] group-hover:text-[#16382E]">
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;