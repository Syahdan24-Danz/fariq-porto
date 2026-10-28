import { motion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Code2,
  Brain,
  Languages,
  CalendarDays,
  MapPin,
  Award,
} from "lucide-react";

// ==========================================
// DATA
// ==========================================

const education = {
  university: "Universitas Padjadjaran",
  location: "Indonesia",
  degree: "Bachelor of Economics",
  major: "Digital Business",
  faculty: "Faculty of Economics and Business",
  period: "Aug 2022 — Aug 2026",
  gpa: "3.72 / 4.00",
};

const coursework = [
  "Strategic Management",
  "Business Analytics and Big Data",
  "Business Intelligence",
  "Business Process Analysis",
  "Product Development",
  "Design Thinking",
  "Digital Marketing",
  "Pitching and Negotiation",
  "Computer Science and Programming Algorithms",
];

const technicalSkills = [
  "Microsoft Office",
  "Google Workspace",
  "Strategic Management",
  "SQL",
  "KNIME",
  "Tableau",
  "Excel",
  "Basic Accounting",
  "Project Management",
  "Canva",
  "Figma",
];

const softSkills = [
  "Structured Problem Solving",
  "Critical Thinking",
  "Decision Making",
  "Collaboration",
  "Leadership",
  "Teamwork",
  "Communication",
  "Adaptability",
];

const projects = [
  {
    title: "Ihana Socks Sales Data Report Analysis",
    year: "2023",
  },
  {
    title: "Growth Strategy Wiper Product by BOSCH",
    year: "2024",
  },
  {
    title: "KEJU Strategic",
    year: "2024",
  },
  {
    title: "ReKindle: Calm Scents for Better Rest!",
    year: "2024",
  },
  {
    title: "Data Analysis Bootcamp Project by MySkill",
    year: "2024",
  },
];

const languages = [
  {
    name: "Bahasa Indonesia",
    level: "Native",
  },
  {
    name: "English",
    level: "Basic",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENT
// ==========================================

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F7F2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* ================================= */}
        {/* SECTION HEADING */}
        {/* ================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#D4A843]">
              01 / ABOUT ME
            </span>

            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <h2 className="max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.05em] text-[#16382E] md:text-6xl lg:text-7xl">
            Turning curiosity into
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              meaningful insights.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#777D75] md:text-lg">
            I'm Fariq, a Digital Business graduate from Universitas
            Padjadjaran with a strong interest in research, data
            analysis, and business strategy. My academic background
            combines technology, business management, and analytical
            thinking, allowing me to approach complex challenges from
            multiple perspectives. I'm passionate about uncovering
            meaningful insights, understanding business problems, and
            transforming data into practical recommendations that
            support strategic decisions and sustainable growth.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* EDUCATION */}
        {/* ================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-t border-[#E8E6DC] pt-12"
        >
          {/* SECTION TITLE */}
          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
              Education
            </h3>

            <GraduationCap
              size={28}
              strokeWidth={1.5}
              className="text-[#D4A843]"
            />
          </div>

          {/* EDUCATION CARD */}
          <div className="group rounded-3xl border border-[#E8E6DC] bg-white/60 p-6 transition-all duration-500 hover:border-[#D4A843]/50 hover:shadow-xl hover:shadow-[#16382E]/5 md:p-10">

            {/* UNIVERSITY INFO */}
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">

              <div>
                <div className="mb-4 flex items-center gap-2 text-sm text-[#777D75]">
                  <MapPin size={15} />
                  {education.location}
                </div>

                <h4 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                  {education.university}
                </h4>

                <p className="mt-3 text-base font-medium text-[#242924]">
                  {education.degree}
                </p>

                <p className="mt-1 text-sm text-[#777D75]">
                  Majoring in {education.major}
                </p>

                <p className="mt-1 text-sm text-[#777D75]">
                  {education.faculty}
                </p>
              </div>

              {/* PERIOD */}
              <div className="flex items-center gap-2 rounded-full bg-[#F8F7F2] px-4 py-2 text-sm text-[#16382E]">
                <CalendarDays size={16} />
                {education.period}
              </div>
            </div>

            {/* GPA */}
            <div className="mt-10 flex items-center gap-4 border-t border-[#E8E6DC] pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A843]/15">
                <Award
                  size={23}
                  className="text-[#16382E]"
                />
              </div>

              <div>
                <p className="text-xs tracking-wider text-[#777D75] uppercase">
                  Cumulative GPA
                </p>

                <p className="mt-1 text-2xl font-semibold text-[#16382E]">
                  {education.gpa}
                </p>
              </div>
            </div>

            {/* COURSEWORK */}
            <div className="mt-10">
              <div className="mb-5 flex items-center gap-2">
                <BookOpen
                  size={18}
                  className="text-[#D4A843]"
                />

                <h5 className="text-sm font-semibold text-[#16382E]">
                  Relevant Coursework
                </h5>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-[#E8E6DC] bg-[#F8F7F2] px-4 py-2 text-xs font-medium text-[#777D75] transition-colors duration-300 hover:border-[#D4A843] hover:text-[#16382E]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================= */}
        {/* SKILLS */}
        {/* ================================= */}

        <div className="mt-24 border-t border-[#E8E6DC] pt-12">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
              Expertise & Skills
            </h3>

            <p className="mt-3 text-sm text-[#777D75]">
              A combination of technical knowledge and interpersonal
              capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* TECHNICAL SKILLS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl border border-[#E8E6DC] bg-white/60 p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16382E]">
                  <Code2
                    size={22}
                    className="text-white"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#16382E]">
                    Technical Skills
                  </h4>

                  <p className="text-xs text-[#777D75]">
                    Tools & Technologies
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-[#F8F7F2] px-3 py-2 text-sm text-[#242924] transition-colors duration-300 hover:bg-[#D4A843]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* SOFT SKILLS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl border border-[#E8E6DC] bg-white/60 p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A843]">
                  <Brain
                    size={22}
                    className="text-[#16382E]"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#16382E]">
                    Soft Skills
                  </h4>

                  <p className="text-xs text-[#777D75]">
                    Personal Strengths
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-[#F8F7F2] px-3 py-2 text-sm text-[#242924] transition-colors duration-300 hover:bg-[#D4A843]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================================= */}
        {/* SELECTED PROJECTS */}
        {/* ================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 border-t border-[#E8E6DC] pt-12"
        >
          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
              Academic Projects
            </h3>

            <span className="text-sm text-[#777D75]">
              2023 — 2024
            </span>
          </div>

          <div className="divide-y divide-[#E8E6DC] border-y border-[#E8E6DC]">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group flex flex-col justify-between gap-4 py-6 transition-all duration-300 hover:px-3 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-6">
                  <span className="pt-1 text-xs font-medium text-[#D4A843]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h4 className="text-base font-medium text-[#16382E] transition-colors duration-300 group-hover:text-[#D4A843] md:text-lg">
                    {project.title}
                  </h4>
                </div>

                <div className="flex items-center gap-5 pl-9 sm:pl-0">
                  <span className="text-sm text-[#777D75]">
                    {project.year}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#16382E] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================================= */}
        {/* LANGUAGES */}
        {/* ================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 border-t border-[#E8E6DC] pt-12"
        >
          <div className="mb-10 flex items-center gap-3">
            <Languages
              size={25}
              className="text-[#D4A843]"
            />

            <h3 className="text-2xl font-semibold text-[#16382E] md:text-3xl">
              Languages
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex items-center justify-between rounded-2xl border border-[#E8E6DC] bg-white/60 px-6 py-5"
              >
                <span className="font-medium text-[#16382E]">
                  {language.name}
                </span>

                <span className="rounded-full bg-[#D4A843]/15 px-4 py-1.5 text-xs font-medium text-[#16382E]">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;