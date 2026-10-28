import { motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Medal,
  Trophy,
} from "lucide-react";

// ==========================================
// ACHIEVEMENTS DATA
// ==========================================

const competitions = [
  {
    id: 1,
    title: "IMOTION Marketing Plan Competition",
    organizer: "by.U",
    achievement: "Participant",
    date: "Oct 2025",
    icon: Trophy,
    credential: null,
  },
  {
    id: 2,
    title: "ENTERNS UI Business Case Competition",
    organizer: "BOSCH",
    achievement: "Semifinalist",
    date: "Nov 2024",
    icon: Medal,
    credential: null,
  },
  {
    id: 3,
    title: "Market Town Business Case Competition",
    organizer: "7Preneur",
    achievement: "Semifinalist",
    date: "Oct 2024",
    icon: Medal,
    credential: null,
  },
];

const certifications = [
  {
    id: 1,
    title: "English Language Test",
    organizer: "FIB Universitas Padjadjaran",
    achievement: "Score: 503",
    date: "Jun 2026 — Jun 2028",
    icon: GraduationCap,
    credential: null,
  },
  {
    id: 2,
    title: "Forward Program Course",
    organizer: "McKinsey.org",
    achievement: "Professional Development",
    date: "Mar — Jun 2026",
    icon: Award,
    credential: null,
  },
  {
    id: 3,
    title: "Data Analysis: Fullstack Intensive Bootcamp - Mastery",
    organizer: "MySkill",
    achievement: "Data Analytics",
    date: "Jan — Feb 2024",
    icon: GraduationCap,
    credential: null,
  },
];

const publication = {
  title:
    "Pengaruh Digital Entrepreneurship Learning Experience terhadap Minat Suksesi Generasi Z pada Bisnis Keluarga: Peran Mediasi Self-Efficacy",
  role: "First Author",
  journal: "SINTA 4",
  date: "Aug 2026",
  description:
    "An academic research publication examining the relationship between digital entrepreneurship learning experiences and Generation Z's intention to succeed family businesses, with self-efficacy as a mediating factor.",
  url: null,
};

// ==========================================
// ANIMATION
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// REUSABLE ACHIEVEMENT CARD
// ==========================================

const AchievementCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="
        group flex h-full flex-col
        rounded-3xl border border-[#E8E6DC]
        bg-white/70 p-6
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#D4A843]/50
        hover:bg-white
        hover:shadow-xl
        hover:shadow-[#16382E]/5
        md:p-8
      "
    >
      {/* TOP */}
      <div className="mb-8 flex items-start justify-between">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-2xl bg-[#16382E]/5
            transition-colors duration-300
            group-hover:bg-[#D4A843]/15
          "
        >
          <Icon size={22} className="text-[#16382E]" />
        </div>

        <span
          className="
            rounded-full border border-[#E8E6DC]
            bg-[#F8F7F2] px-3 py-1.5
            text-xs font-medium text-[#777D75]
          "
        >
          {item.achievement}
        </span>
      </div>

      {/* TITLE */}
      <h4 className="text-xl leading-snug font-semibold tracking-tight text-[#16382E]">
        {item.title}
      </h4>

      {/* ORGANIZER */}
      <p className="mt-3 text-sm font-medium text-[#777D75]">
        {item.organizer}
      </p>

      {/* BOTTOM */}
      <div
        className="
          mt-auto flex items-center justify-between gap-3
          border-t border-[#E8E6DC] pt-6
        "
        style={{ marginTop: "auto", paddingTop: "24px" }}
      >
        <div className="flex items-center gap-2 text-xs text-[#777D75]">
          <CalendarDays size={14} />
          {item.date}
        </div>

        {item.credential ? (
          <a
            href={item.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1
              text-xs font-semibold text-[#16382E]
              transition-colors hover:text-[#B68B2E]
            "
          >
            Credential
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="text-xs text-[#A0A59D]">
            Credential unavailable
          </span>
        )}
      </div>
    </motion.article>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#F8F7F2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* ================================= */}
        {/* SECTION HEADER */}
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
              03 / ACHIEVEMENTS
            </span>

            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <h2 className="max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.05em] text-[#16382E] md:text-6xl lg:text-7xl">
            Milestones of
            <br />

            <span className="font-serif font-normal italic text-[#D4A843]">
              growth & exploration.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#777D75] md:text-lg">
            A collection of competitions, professional learning
            experiences, and academic contributions that reflect
            my curiosity, continuous growth, and passion for
            research and business strategy.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* COMPETITION ACHIEVEMENTS */}
        {/* ================================= */}

        <div className="mb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
                <Trophy size={21} className="text-[#16382E]" />
              </span>

              <h3 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                Competition Achievements
              </h3>
            </div>

            <span className="hidden text-sm text-[#777D75] sm:block">
              01 — 03
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competitions.map((item, index) => (
              <AchievementCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ================================= */}
        {/* CERTIFICATIONS */}
        {/* ================================= */}

        <div className="mb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
                <Award size={21} className="text-[#16382E]" />
              </span>

              <h3 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                Certifications
              </h3>
            </div>

            <span className="hidden text-sm text-[#777D75] sm:block">
              01 — 03
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <AchievementCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ================================= */}
        {/* RESEARCH PUBLICATION */}
        {/* ================================= */}

        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
              <BookOpen size={21} className="text-[#16382E]" />
            </span>

            <h3 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
              Research Publication
            </h3>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="
              relative overflow-hidden rounded-[2rem]
              bg-[#16382E] p-8 text-white
              md:p-12 lg:p-14
            "
          >
            {/* DECORATIVE CIRCLE */}
            <div
              className="
                pointer-events-none absolute -top-24 -right-24
                h-80 w-80 rounded-full
                border border-white/10
              "
            />

            <div
              className="
                pointer-events-none absolute -right-12 -bottom-40
                h-96 w-96 rounded-full
                border border-[#D4A843]/20
              "
            />

            <div className="relative z-10">

              {/* LABEL */}
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#D4A843] px-4 py-2 text-xs font-semibold text-[#16382E]">
                  SINTA 4
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80">
                  First Author
                </span>

                <span className="flex items-center gap-2 text-xs text-white/60">
                  <CalendarDays size={14} />
                  {publication.date}
                </span>
              </div>

              {/* PUBLICATION TITLE */}
              <h4 className="max-w-4xl text-2xl leading-snug font-semibold tracking-tight md:text-4xl">
                {publication.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-3xl text-sm leading-8 text-white/65 md:text-base">
                {publication.description}
              </p>

              {/* DIVIDER */}
              <div className="my-9 h-px w-full bg-white/15" />

              {/* BOTTOM */}
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs tracking-widest text-[#D4A843] uppercase">
                    Academic Publication
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    Research & Academic Contribution
                  </p>
                </div>

                {publication.url ? (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex items-center justify-center gap-3
                      rounded-full bg-[#D4A843]
                      px-6 py-3.5 text-sm font-semibold
                      text-[#16382E]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-[#E6BB5C]
                    "
                  >
                    Read Full Article

                    <ExternalLink
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <span className="text-sm text-white/60">
                    Article link coming soon
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Achievements;