import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { nav } from "../../data/navigation";
import Container from "../ui/Container";

const ease = [0.16, 1, 0.3, 1];

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const loc = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setMobileOpen(null);
  }, [loc.pathname, loc.hash]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(null);
        setMobile(false);
        setMobileOpen(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const active = (item) => {
    if (item.to === "/ar-ge") {
      return (
        loc.pathname === "/ar-ge" ||
        loc.pathname === "/teknolojiler"
      );
    }

    return (
      loc.pathname === item.to ||
      loc.pathname.startsWith(`${item.to}/`)
    );
  };

  const toggleMobile = () => {
    setOpen(null);
    setMobileOpen(null);
    setMobile((current) => !current);
  };

  const toggleMobileSection = (index) => {
    setMobileOpen((current) =>
      current === index ? null : index
    );
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color] duration-300 ${
          scrolled
            ? "border-ink/12 bg-paper/95 backdrop-blur-xl"
            : "border-ink/10 bg-paper/90 backdrop-blur-md"
        }`}
      >
        <Container
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-[70px]" : "h-[84px]"
          }`}
        >
          {/* LOGO */}

          <Link
            to="/"
            className="relative z-[110] shrink-0"
            aria-label="TAMİS Teknoloji Ana Sayfa"
          >
            <img
              src="/brand/tamis-logo.png"
              alt="TAMİS Teknoloji"
              className="h-auto w-[142px] sm:w-[155px] md:w-[180px]"
            />
          </Link>

          {/* DESKTOP NAV */}

          <nav
            className="hidden h-full items-center xl:flex"
            aria-label="Ana navigasyon"
          >
            {nav.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => setOpen(index)}
                onFocus={() => setOpen(index)}
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className={`group relative flex h-full items-center gap-1.5 px-3 text-[10px] font-bold uppercase tracking-[.1em] transition-colors ${
                  active(item)
                    ? "text-green"
                    : "text-ink/62 hover:text-ink"
                }`}
                aria-expanded={open === index}
              >
                {item.label}

                <ChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

                <span
                  className={`absolute inset-x-3 bottom-0 h-[2px] origin-left bg-green transition-transform duration-300 ${
                    active(item)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* DESKTOP CONTACT */}

          <div className="hidden items-center gap-5 xl:flex">
            <span className="h-6 w-px bg-ink/15" />

            <Link
              to="/iletisim"
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] transition-colors hover:text-green"
            >
              İletişim

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={toggleMobile}
            className={`relative z-[120] grid size-11 shrink-0 place-items-center border transition-colors xl:hidden ${
              mobile
                ? "border-white/30 bg-white text-green"
                : "border-ink/15 text-ink"
            }`}
            aria-label={mobile ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
          >
            {mobile ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </Container>

        {/* =============== DESKTOP MEGA MENU =============== */}

        <AnimatePresence>
          {open !== null && !mobile && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
              onMouseEnter={() => setOpen(open)}
              onMouseLeave={() => setOpen(null)}
              className="absolute inset-x-0 top-full hidden border-b border-ink/10 bg-paper shadow-[0_24px_50px_rgba(23,33,29,0.06)] xl:block"
            >
              <Container className="grid grid-cols-12 py-10">
                <div className="col-span-4">
                  <p className="eyebrow">
                    TAMİS / NAVIGATION
                  </p>

                  <p className="mt-4 max-w-xs text-2xl font-medium tracking-[-.04em]">
                    {nav[open].label}
                  </p>
                </div>

                <div className="col-span-8 grid grid-cols-2 gap-x-12">
                  {nav[open].children.map(
                    ([label, target], index) => (
                      <Link
                        key={`${label}-${target}`}
                        to={target}
                        className="group flex items-center justify-between border-b border-ink/12 py-4"
                      >
                        <span className="text-sm font-medium">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                          {" / "}
                          {label}
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                        />
                      </Link>
                    )
                  )}
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==================================================
          MOBILE NAVIGATION
          HEADER'IN DIŞINDA
      ================================================== */}

      <AnimatePresence>
        {mobile && (
          <motion.div
            id="mobile-navigation"
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
              duration: 0.35,
              ease,
            }}
            className="fixed inset-0 z-[90] overflow-y-auto overscroll-contain bg-green pt-[84px] text-white xl:hidden"
          >
            <Container className="flex min-h-[calc(100dvh-84px)] flex-col py-6 sm:py-8">
              {/* MOBILE TOP */}

              <div className="mb-4 flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
                  TAMİS / Navigation
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
                  Ankara · Türkiye
                </span>
              </div>

              {/* MOBILE LINKS */}

              <nav aria-label="Mobil navigasyon">
                {nav.map((item, index) => {
                  const expanded = mobileOpen === index;

                  return (
                    <div
                      key={item.label}
                      className="border-b border-white/15"
                    >
                      <div className="flex items-stretch">
                        <Link
                          to={item.to}
                          className="flex min-w-0 flex-1 items-center py-5"
                        >
                          <span className="mr-4 shrink-0 text-[9px] font-bold tracking-[.15em] text-white/40">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span className="text-[clamp(1.35rem,6vw,1.8rem)] font-medium tracking-[-.04em] text-white">
                            {item.label}
                          </span>
                        </Link>

                        {item.children?.length > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              toggleMobileSection(index)
                            }
                            className="grid w-14 shrink-0 place-items-center border-l border-white/10 text-white/60"
                            aria-label={`${item.label} alt menüsü`}
                            aria-expanded={expanded}
                          >
                            <ChevronDown
                              size={17}
                              className={`transition-transform duration-300 ${
                                expanded
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* MOBILE SUBMENU */}

                      <AnimatePresence initial={false}>
                        {expanded &&
                          item.children?.length > 0 && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.3,
                                ease,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-white/10 pb-4 pl-8">
                                {item.children.map(
                                  (
                                    [label, target],
                                    childIndex
                                  ) => (
                                    <Link
                                      key={`${label}-${target}`}
                                      to={target}
                                      className="flex items-center justify-between border-b border-white/10 py-3.5 text-[12px] text-white/65"
                                    >
                                      <span>
                                        {String(
                                          childIndex + 1
                                        ).padStart(2, "0")}
                                        {" / "}
                                        {label}
                                      </span>

                                      <ArrowUpRight
                                        size={13}
                                        className="mr-2 opacity-50"
                                      />
                                    </Link>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* CONTACT */}

              <div className="mt-auto pt-10">
                <Link
                  to="/iletisim"
                  className="group flex items-center justify-between border border-white/25 p-5 text-[11px] font-bold uppercase tracking-[.14em]"
                >
                  İletişim

                  <ArrowUpRight size={16} />
                </Link>

                <div className="mt-5 flex items-center justify-between pb-4 text-[8px] font-bold uppercase tracking-[.18em] text-white/35">
                  <span>TAMİS Teknoloji</span>
                  <span>TR / 2026</span>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}