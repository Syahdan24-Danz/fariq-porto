import { useState } from "react";
import { motion } from "motion/react";

import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CalendarDays,
  BriefcaseBusiness,
  Building2,
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

// ==========================================
// EXPERIENCE DATA
// ==========================================

const experiences = [
  {
    id: 1,
    company: "PT Eigerindo Multi Product Industry",
    shortCompany: "Eigerindo",
    position: "Strategic Management Office Intern",
    location: "Bandung, Indonesia",
    period: "Jul 2026 — Present",
    year: "2026 — Present",
    type: "Internship",
    current: true,

    tags: [
      "Strategic Management",
      "Market Research",
      "Business Analysis",
    ],

    summary:
      "Supporting strategic decision-making through market intelligence, macroeconomic analysis, and cross-functional performance monitoring.",

    achievements: [
      "Created 25+ Weekly & Exclusive News Updates on retail trends, empowering senior leaders to adapt and make agile business decisions.",

      "Built 3 monthly macroeconomy reports by analyzing economic indicators, guiding leaders with clear insights to mitigate risks.",

      "Monitored daily industry news to keep the company updated on retail trends, helping the team adapt to fast market changes.",

      "Used PESTLE, Porter’s Five Forces, and other strategic frameworks to evaluate complex market data and develop clear positioning strategies.",

      "Monitored each division's progress against the previous year's KPIs, collaborating across teams to ensure organizational goals stayed on track.",
    ],

    credential: null,
  },

  {
    id: 2,
    company:
      "NSEI - PT Paragon Universa Utama (ParagonCorp)",
    shortCompany: "ParagonCorp",
    position: "Ecosystem Analyst Intern",
    location: "Jakarta, Indonesia",
    period: "Aug 2025 — Dec 2025",
    year: "2025",
    type: "Internship",
    current: false,

    tags: [
      "Ecosystem Analysis",
      "Business Strategy",
      "Stakeholder Management",
    ],

    summary:
      "Analyzed business ecosystems, managed external partnerships, and developed strategic recommendations to support executive decision-making.",

    achievements: [
      "Built and maintained a central Data Network Sheet to ensure clear and accurate information from all external partners.",

      "Screened invitations and proposals for the CEO and company using a scoring rubric, providing concise weekly briefs and logical recommendations.",

      "Built strategy decks by analyzing market trends, root issues, benchmark comparators, and implementation roadmaps with sequenced initiatives.",

      "Crafted executive-ready materials, including presentation decks, talking points, and learning materials tailored to different audiences and contexts.",

      "Managed the intake pipeline end-to-end and coordinated with ecosystem partners on alignment scope and technical requirements.",

      "Planned and supported ecosystem activations and programs, from preparation and coordination to on-site execution and post-activity evaluations.",
    ],

    credential: null,
  },

  {
    id: 3,
    company:
      "PT Adira Dinamika Multi Finance (Adira Finance)",
    shortCompany: "Adira Finance",
    position: "Business Strategy Used MCY Intern",
    location: "Jakarta, Indonesia",
    period: "Feb 2025 — Aug 2025",
    year: "2025",
    type: "Internship",
    current: false,

    tags: [
      "Business Strategy",
      "Data Analysis",
      "Performance Monitoring",
    ],

    summary:
      "Supported business strategy initiatives through performance analytics, standardized reporting, and partner development programs.",

    achievements: [
      "Developed 25+ performance reports by tracking 20+ partner social media accounts, providing actionable insights to evaluate business strategies.",

      "Processed 1,200+ data rows and reviewed 50K+ approvals, ensuring accuracy and consistency in executive reporting.",

      "Created standardized monitoring sheet templates to organize data and improve reporting consistency across partner accounts.",

      "Led 3 online coaching sessions and in-person training for 50+ showroom partners, communicating strategies to improve their capabilities.",

      "Provided strategic guidance on content creation and Meta Ads to improve partner visibility and engagement across Instagram, Facebook, and TikTok.",
    ],

    credential: null,
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

const Experience = () => {
  const [selectedExperience, setSelectedExperience] =
    useState(null);

  return (
    <section
      id="experience"
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
          {/* SECTION LABEL */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#D4A843]">
              02 / EXPERIENCE
            </span>

            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          {/* HEADING */}
          <h2 className="max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.05em] text-[#16382E] md:text-6xl lg:text-7xl">
            Where strategy meets
            <br />

            <span className="font-serif font-normal italic text-[#D4A843]">
              real-world impact.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#777D75] md:text-lg">
            My professional journey revolves around transforming
            research, data, and business insights into meaningful
            strategies that support informed decisions and
            organizational growth.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* EXPERIENCE TIMELINE */}
        {/* ================================= */}

        <div className="relative">

          {/* TIMELINE LINE */}
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-[#E8E6DC] md:left-[11px]" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative pl-10 md:pl-16"
              >

                {/* TIMELINE DOT */}
                <div
                  className={`
                    absolute top-2 left-0 z-10
                    h-4 w-4 rounded-full
                    border-4 border-[#F8F7F2]
                    ring-2
                    md:h-6 md:w-6
                    ${
                      experience.current
                        ? "bg-[#D4A843] ring-[#D4A843]/30"
                        : "bg-[#16382E] ring-[#16382E]/20"
                    }
                  `}
                />

                {/* YEAR */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#777D75] uppercase">
                    {experience.year}
                  </span>

                  {experience.current && (
                    <span className="flex items-center gap-2 rounded-full bg-[#D4A843]/15 px-3 py-1 text-xs font-medium text-[#16382E]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4A843]" />
                      Current
                    </span>
                  )}
                </div>

                {/* EXPERIENCE CARD */}
                <div
                  className="
                    group rounded-3xl border border-[#E8E6DC]
                    bg-white/60 p-6
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#D4A843]/50
                    hover:bg-white
                    hover:shadow-xl
                    hover:shadow-[#16382E]/5
                    md:p-10
                  "
                >

                  {/* CARD TOP */}
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">

                    {/* COMPANY INFO */}
                    <div className="flex-1">

                      {/* COMPANY */}
                      <div className="mb-4 flex items-center gap-2">
                        <Building2
                          size={17}
                          className="text-[#D4A843]"
                        />

                        <span className="text-sm font-medium text-[#777D75]">
                          {experience.company}
                        </span>
                      </div>

                      {/* POSITION */}
                      <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                        {experience.position}
                      </h3>

                      {/* LOCATION & PERIOD */}
                      <div className="mt-5 flex flex-wrap items-center gap-5">

                        <div className="flex items-center gap-2 text-sm text-[#777D75]">
                          <MapPin size={15} />
                          {experience.location}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#777D75]">
                          <CalendarDays size={15} />
                          {experience.period}
                        </div>

                      </div>
                    </div>

                    {/* ICON */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#16382E]/5">
                      <BriefcaseBusiness
                        size={22}
                        className="text-[#16382E]"
                      />
                    </div>
                  </div>

                  {/* SUMMARY */}
                  <p className="mt-7 max-w-2xl text-sm leading-7 text-[#777D75] md:text-base">
                    {experience.summary}
                  </p>

                  {/* TAGS */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E8E6DC] bg-[#F8F7F2] px-4 py-2 text-xs font-medium text-[#16382E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM ACTION */}
                  <div className="mt-8 flex items-center justify-between border-t border-[#E8E6DC] pt-6">

                    <span className="text-xs font-medium tracking-wider text-[#777D75] uppercase">
                      {experience.type}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedExperience(experience)
                      }
                      className="
                        group/btn inline-flex items-center gap-2
                        text-sm font-semibold text-[#16382E]
                        transition-colors duration-300
                        hover:text-[#D4A843]
                      "
                    >
                      View Details

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* EXPERIENCE DETAIL MODAL */}
      {/* ================================= */}

      <Dialog
        open={!!selectedExperience}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedExperience(null);
          }
        }}
      >
        <DialogContent
          className="
            max-h-[85vh] w-[calc(100%-2rem)]
            max-w-2xl overflow-y-auto
            rounded-3xl border-[#E8E6DC]
            bg-[#F8F7F2] p-0
            sm:max-w-2xl
          "
        >
          {selectedExperience && (
            <div>

              {/* MODAL HEADER */}
              <div className="border-b border-[#E8E6DC] p-6 md:p-10">

                {/* LABEL */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#D4A843] uppercase">
                    Professional Experience
                  </span>

                  <div className="h-px w-10 bg-[#D4A843]" />
                </div>

                {/* COMPANY */}
                <div className="mb-4 flex items-center gap-2">
                  <Building2
                    size={17}
                    className="text-[#D4A843]"
                  />

                  <span className="text-sm text-[#777D75]">
                    {selectedExperience.company}
                  </span>
                </div>

                {/* POSITION */}
                <DialogHeader>
                  <DialogTitle className="pr-6 text-left text-2xl leading-tight font-semibold tracking-tight text-[#16382E] md:text-3xl">
                    {selectedExperience.position}
                  </DialogTitle>

                  <DialogDescription className="mt-3 text-left text-sm leading-relaxed text-[#777D75]">
                    {selectedExperience.summary}
                  </DialogDescription>
                </DialogHeader>

                {/* META */}
                <div className="mt-6 flex flex-wrap gap-5">
                  <div className="flex items-center gap-2 text-sm text-[#777D75]">
                    <MapPin size={15} />
                    {selectedExperience.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#777D75]">
                    <CalendarDays size={15} />
                    {selectedExperience.period}
                  </div>
                </div>
              </div>

              {/* MODAL BODY */}
              <div className="p-6 md:p-10">

                {/* RESPONSIBILITIES */}
                <h4 className="mb-7 text-lg font-semibold text-[#16382E]">
                  Key Responsibilities & Achievements
                </h4>

                <div className="space-y-6">
                  {selectedExperience.achievements.map(
                    (achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.07,
                          duration: 0.4,
                        }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4A843]/15">
                          <CheckCircle2
                            size={15}
                            className="text-[#16382E]"
                          />
                        </div>

                        <p className="text-sm leading-7 text-[#555D55]">
                          {achievement}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>

                {/* SKILLS */}
                <div className="mt-10 border-t border-[#E8E6DC] pt-8">
                  <h4 className="mb-5 text-sm font-semibold text-[#16382E]">
                    Areas of Expertise
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.tags.map((tag) => (
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
                {selectedExperience.credential && (
                  <a
                    href={selectedExperience.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#16382E] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#245342]"
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
    </section>
  );
};

export default Experience;