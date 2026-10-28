import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Sparkles,
  BarChart3,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8F7F2] pt-28 pb-16 lg:pt-32"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#D4A843]/5 blur-3xl" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#16382E]/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* ================================= */}
        {/* LEFT SIDE - TEXT CONTENT */}
        {/* ================================= */}

        <div className="flex flex-col items-start">
          {/* AVAILABLE BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#16382E]/10 bg-white/70 px-4 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4A843] opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D4A843]" />
            </span>

            <span className="text-xs font-medium tracking-wide text-[#16382E]">
              OPEN FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-4 text-lg font-medium text-[#777D75] md:text-xl">
              Hello, I'm Fariq 👋
            </p>

            <h1 className="text-[clamp(3.5rem,6vw,6rem)] leading-[1.08] font-semibold tracking-[-0.065em] text-[#16382E]">
              Researcher
              <br />
              <span className="font-serif italic font-normal text-[#D4A843]">
                &
              </span>{" "}
              Analyst<span className="text-[#D4A843]">.</span>
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-8 max-w-lg text-base leading-relaxed text-[#777D75] md:text-lg"
          >
            Passionate about uncovering meaningful insights through research and
            data analysis. I transform complex information into clear,
            actionable strategies that drive smarter decisions and create
            real-world impact.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* PRIMARY CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#16382E] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#245342] hover:shadow-xl hover:shadow-[#16382E]/15"
            >
              <Mail size={18} />
              Contact Me
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* SECONDARY CTA */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#16382E]/20 px-7 py-4 text-sm font-medium text-[#16382E] transition-all duration-300 hover:border-[#16382E] hover:bg-[#16382E]/5"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* BOTTOM SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#16382E]/15">
              <ArrowDownRight size={18} className="text-[#16382E]" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-[#777D75] uppercase">
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* ================================= */}
        {/* RIGHT SIDE - PROFILE IMAGE */}
        {/* ================================= */}

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[480px]"
        >
          {/* DECORATIVE FRAME */}
          <div className="absolute -top-5 -right-5 h-full w-full rounded-[2.5rem] border-2 border-[#D4A843]/50" />

          {/* IMAGE CONTAINER */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#E8E6DC]">
            <img
              src="/fariq-profile.jpg"
              alt="Portrait of Fariq"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* IMAGE GRADIENT */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16382E]/30 via-transparent to-transparent" />

            {/* BOTTOM PHOTO LABEL */}
            <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between">
              <span className="text-sm font-medium text-white">Fariq.</span>

              <span className="text-xs tracking-wider text-white/80 uppercase">
                Research & Analytics
              </span>
            </div>
          </div>

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-[#E8E6DC] bg-white px-5 py-4 shadow-xl shadow-black/5 md:-left-10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
              <BarChart3 size={22} className="text-[#16382E]" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#16382E]">
                Data-Driven
              </p>

              <p className="text-xs text-[#777D75]">Research & Insights</p>
            </div>
          </motion.div>

          {/* DECORATIVE SPARKLE */}
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-8 -left-8 text-[#D4A843]"
          >
            <Sparkles size={40} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
