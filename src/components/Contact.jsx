import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const contactInfo = {
  email: "",
  linkedin: "",
  location: "Indonesia",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#16382E] text-[#F8F7F2]"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="absolute -right-20 -bottom-60 h-[600px] w-[600px] rounded-full border border-[#D4A843]/15" />

        <div className="absolute top-1/3 -left-40 h-[350px] w-[350px] rounded-full bg-[#D4A843]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
        {/* SECTION HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#D4A843]">
              05 / GET IN TOUCH
            </span>

            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          {/* AVAILABILITY BADGE */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4A843] opacity-40" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D4A843]" />
            </span>

            <span className="text-xs font-medium tracking-wide text-white/80">
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h2 className="max-w-5xl text-5xl leading-[1.1] font-semibold tracking-[-0.06em] md:text-7xl lg:text-[100px]">
            Have an idea?
            <br />

            <span className="font-serif font-normal italic text-[#D4A843]">
              Let's make it
            </span>

            <br />

            meaningful.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-10 max-w-xl text-base leading-8 text-white/60 md:text-lg">
            I'm always open to discussing new opportunities,
            research collaborations, and exciting projects.
            Whether you have a question or simply want to
            connect, feel free to reach out.
          </p>

          {/* CONTACT BUTTONS */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            {contactInfo.email && (
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-4 rounded-full bg-[#D4A843] px-7 py-4 text-sm font-semibold text-[#16382E] transition-colors hover:bg-[#E5BA59]"
              >
                <Mail size={19} />

                Send an Email

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            )}

            {contactInfo.linkedin && (
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-4 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-[#D4A843] hover:bg-white/5"
              >
                <Linkedin size={19} />

                LinkedIn

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            )}
          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
            {contactInfo.email && (
              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest text-[#D4A843] uppercase">
                  Email
                </p>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </div>
            )}

            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-[#D4A843] uppercase">
                Based In
              </p>

              <div className="flex items-center gap-2 text-sm text-white/75">
                <MapPin size={15} />
                {contactInfo.location}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-28 border-t border-white/15 pt-10 pb-10 md:mt-36">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            {/* BRAND */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="group flex items-center gap-1"
              >
                <span className="text-3xl font-bold tracking-[-0.06em] text-white">
                  fariq
                </span>

                <span className="text-3xl font-bold text-[#D4A843] transition-transform group-hover:rotate-45">
                  .
                </span>
              </button>

              <p className="mt-3 text-sm text-white/50">
                Researcher & Analyst
              </p>
            </div>

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-white/75 transition-colors hover:text-[#D4A843]"
            >
              Back to top

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all group-hover:-translate-y-1 group-hover:border-[#D4A843]">
                <ArrowUp size={17} />
              </span>
            </button>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Fariq. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <Sparkles size={13} className="text-[#D4A843]" />

              <span>
                Built with curiosity & purpose.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;