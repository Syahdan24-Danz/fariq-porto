import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/#home",
    section: "home",
  },
  {
    name: "About",
    href: "/#about",
    section: "about",
  },
  {
    name: "Experience",
    href: "/#experience",
    section: "experience",
  },
  {
    name: "Achievements",
    href: "/#achievements",
    section: "achievements",
  },
  {
    name: "Projects",
    href: "/projects",
    section: "projects",
  },
  {
    name: "Contact",
    href: "/#contact",
    section: "contact",
  },
];

const Header = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isProjectsPage = location.pathname === "/projects";

  // ==========================================
  // SCROLL DETECTION
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== "/") {
        return;
      }

      const sections = [
        "home",
        "about",
        "experience",
        "achievements",
        "projects",
        "contact",
      ];

      let currentSection = "home";

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);

        if (element && window.scrollY >= element.offsetTop - 150) {
          currentSection = section;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // ==========================================
  // CLOSE MOBILE MENU ON ROUTE CHANGE
  // ==========================================

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // ==========================================
  // HANDLE NAVIGATION
  // ==========================================

  const handleNavigation = (link) => {
    setIsMenuOpen(false);

    // If we're already on the homepage and the user
    // clicks a section link, scroll to that section.
    if (location.pathname === "/" && link.href.startsWith("/#")) {
      const sectionId = link.section;

      // A normal Link won't trigger a location change
      // when clicking the same hash again.
      // This ensures scrolling always works.
      window.setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 0);
    }
  };

  // ==========================================
  // ACTIVE NAVIGATION
  // ==========================================

  const checkIsActive = (link) => {
    if (link.section === "projects") {
      return isProjectsPage;
    }

    if (isProjectsPage) {
      return false;
    }

    return activeSection === link.section;
  };

  return (
    <>
      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 z-50 w-full px-4 py-4 md:px-8"
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center
            justify-between rounded-2xl
            border px-6 py-4
            transition-all duration-500
            ${
              isScrolled || isProjectsPage
                ? "border-[#E8E6DC] bg-[#F8F7F2]/90 shadow-lg shadow-black/5 backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }
          `}
        >
          {/* ================================= */}
          {/* LOGO */}
          {/* ================================= */}

          <Link
            to="/#home"
            onClick={() =>
              handleNavigation({
                href: "/#home",
                section: "home",
              })
            }
            className="group flex items-center gap-1"
          >
            <span className="text-2xl font-bold tracking-[-0.06em] text-[#16382E]">
              fariq
            </span>

            <span className="text-2xl font-bold text-[#D4A843] transition-transform duration-300 group-hover:rotate-45">
              .
            </span>
          </Link>

          {/* ================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================= */}

          <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavigation(link)}
                  className={`
                    group relative py-2 text-sm font-medium
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-[#16382E]"
                        : "text-[#777D75] hover:text-[#16382E]"
                    }
                  `}
                >
                  {link.name}

                  {/* ACTIVE UNDERLINE */}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-[2px]
                      bg-[#D4A843]
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ================================= */}
          {/* DESKTOP CTA */}
          {/* ================================= */}

          <Link
            to="/#contact"
            onClick={() =>
              handleNavigation({
                href: "/#contact",
                section: "contact",
              })
            }
            className="
              group hidden items-center gap-2
              rounded-full bg-[#16382E]
              px-5 py-3 text-sm font-medium
              text-[#F8F7F2]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#245342]
              hover:shadow-lg
              hover:shadow-[#16382E]/15
              md:inline-flex
            "
          >
            Let's Talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* ================================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ================================= */}

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-[#16382E]
              text-white md:hidden
            "
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* ================================= */}
      {/* MOBILE NAVIGATION */}
      {/* ================================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed top-24 right-4 left-4 z-40
              rounded-2xl border border-[#E8E6DC]
              bg-[#F8F7F2] p-6
              shadow-xl md:hidden
            "
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = checkIsActive(link);

                return (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => handleNavigation(link)}
                      className={`
                        block rounded-xl px-4 py-3
                        text-base font-medium
                        transition-colors
                        ${
                          isActive
                            ? "bg-[#16382E] text-white"
                            : "text-[#16382E] hover:bg-[#E8E6DC]"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* MOBILE CTA */}
              <Link
                to="/#contact"
                onClick={() =>
                  handleNavigation({
                    href: "/#contact",
                    section: "contact",
                  })
                }
                className="
                  mt-4 flex items-center justify-between
                  rounded-xl bg-[#16382E]
                  px-5 py-4 font-medium text-white
                "
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
