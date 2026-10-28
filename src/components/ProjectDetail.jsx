import { motion } from "motion/react";

import {
  MapPin,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ProjectDetail = ({ project, onClose }) => {
  return (
    <Dialog
      open={!!project}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border-[#E8E6DC] bg-[#F8F7F2] p-0 sm:max-w-3xl">
        {project && (
          <div>
            {/* PROJECT IMAGE */}
            <div className="relative h-56 overflow-hidden bg-[#E8E6DC] md:h-72">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#16382E]/70 to-transparent" />

              <span className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#16382E] md:left-10">
                {project.category}
              </span>
            </div>

            {/* HEADER */}
            <div className="border-b border-[#E8E6DC] p-6 md:p-10">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#D4A843] uppercase">
                Project Case Study
              </p>

              <DialogHeader>
                <DialogTitle className="text-left text-3xl font-semibold tracking-tight text-[#16382E] md:text-4xl">
                  {project.title}
                </DialogTitle>

                <DialogDescription className="mt-4 text-left text-base leading-7 text-[#777D75]">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-7 flex flex-wrap gap-5 text-sm text-[#777D75]">
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {project.location}
                </span>

                <span className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {project.period}
                </span>
              </div>

              <div className="mt-6">
                <span className="text-xs text-[#777D75]">
                  ROLE
                </span>

                <p className="mt-1 font-semibold text-[#16382E]">
                  {project.role}
                </p>
              </div>
            </div>

            {/* BODY */}
            <div className="p-6 md:p-10">

              {/* KEY METRICS */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {project.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#E8E6DC] bg-white p-5"
                  >
                    <p className="break-words text-xl font-semibold text-[#16382E] md:text-2xl">
                      {item.value}
                    </p>

                    <p className="mt-2 text-xs text-[#777D75]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* RESPONSIBILITIES */}
              <div className="mt-12">
                <h4 className="mb-7 text-xl font-semibold text-[#16382E]">
                  Research & Contributions
                </h4>

                <div className="space-y-6">
                  {project.responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                      }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4A843]/15">
                        <CheckCircle2
                          size={16}
                          className="text-[#16382E]"
                        />
                      </div>

                      <p className="text-sm leading-7 text-[#555D55]">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TOOLS */}
              <div className="mt-12 border-t border-[#E8E6DC] pt-8">
                <h4 className="mb-5 text-sm font-semibold text-[#16382E]">
                  Skills & Methodologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#16382E]/5 px-4 py-2 text-xs font-medium text-[#16382E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CREDENTIAL */}
              {project.credential && (
                <a
                  href={project.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#16382E] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#245342]"
                >
                  View Credential
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;