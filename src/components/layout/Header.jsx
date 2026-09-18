import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { nav } from "../../data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* ========================================
      SCROLL STATE
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========================================
      ROUTE / HASH DEĞİŞİNCE MENÜLERİ KAPAT
  ======================================== */

  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [location.pathname, location.hash]);

  /* ========================================
      MOBILE BODY SCROLL LOCK
  ======================================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ========================================
      ESC İLE MENÜYÜ KAPAT
  ======================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMega(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ========================================
      NAVIGATION HELPERS
  ======================================== */

  const closeNavigation = () => {
    setOpen(false);
    setMega(null);
  };

  const isNavItemActive = (item) => {
    const pathname = location.pathname;

    /*
      Teknoloji & Ar-Ge tek ana navigasyon çatısıdır.

      /ar-ge
      /ar-ge/*
      /teknolojiler
      /teknolojiler/*

      adreslerinde Teknoloji & Ar-Ge aktif kalır.
    */

    if (item.to === "/ar-ge") {
      return (
        pathname === "/ar-ge" ||
        pathname.startsWith("/ar-ge/") ||
        pathname === "/teknolojiler" ||
        pathname.startsWith("/teknolojiler/")
      );
    }

    /*
      Ürün detaylarında da Ürünler
      ana navigasyonu aktif kalır.
    */

    if (item.to === "/urunler") {
      return (
        pathname === "/urunler" ||
        pathname.startsWith("/urunler/")
      );
    }

    return pathname === item.to;
  };

  return (
    <>
      {/* ========================================
          HEADER
      ======================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-paper/95 shadow-[0_8px_30px_rgba(23,33,29,.05)] backdrop-blur-xl"
            : "border-ink/10 bg-paper/90 backdrop-blur-md"
        }`}
        onMouseLeave={() => setMega(null)}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-[height] duration-300 md:px-10 xl:px-16 ${
            scrolled ? "h-[70px]" : "h-[82px]"
          }`}
        >
          {/* ========================================
              LOGO
          ======================================== */}

          <Link
            to="/"
            onClick={closeNavigation}
            className="relative z-10 flex min-w-0 shrink-0 items-center"
            aria-label="TAMİS Teknoloji ana sayfa"
          >
            <img
              src="/brand/tamis-logo.png"
              alt="TAMİS Teknoloji"
              className={`w-auto object-contain transition-[height] duration-300 ${
                scrolled
                  ? "h-[38px] md:h-[43px]"
                  : "h-[42px] md:h-[49px]"
              }`}
            />
          </Link>

          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}

          <nav
            className="hidden h-full items-center gap-1 xl:flex"
            aria-label="Ana navigasyon"
          >
            {nav.map((item, index) => {
              const hasChildren =
                Array.isArray(item.children) &&
                item.children.length > 0;

              const active = isNavItemActive(item);

              return (
                <div
                  key={item.to}
                  className="flex h-full items-center"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      setMega(index);
                    } else {
                      setMega(null);
                    }
                  }}
                >
                  <NavLink
                    to={item.to}
                    className={`relative flex h-full items-center gap-1.5 px-3 text-[10px] font-bold uppercase tracking-[.12em] transition-colors duration-300 ${
                      active
                        ? "text-green"
                        : "text-ink/62 hover:text-green"
                    }`}
                  >
                    {item.label}

                    {hasChildren && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          mega === index ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {active && (
                      <motion.span
                        layoutId="desktop-navigation-active"
                        className="absolute inset-x-3 bottom-0 h-[2px] bg-green"
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    )}
                  </NavLink>
                </div>
              );
            })}

            <Link
              to="/iletisim"
              onClick={closeNavigation}
              className="ml-3 inline-flex items-center gap-2 bg-green px-5 py-3.5 text-[10px] font-bold uppercase tracking-[.16em] text-white transition-colors duration-300 hover:bg-ink"
            >
              İletişim
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* ========================================
              MOBILE BUTTON
          ======================================== */}

          <button
            type="button"
            className="relative z-10 grid size-11 shrink-0 place-items-center text-ink xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X size={27} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu size={28} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ========================================
            DESKTOP MEGA MENU
        ======================================== */}

        <AnimatePresence>
          {mega !== null && nav[mega] && (
            <motion.div
              key={mega}
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -6,
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hidden border-t border-ink/10 bg-paper shadow-[0_24px_50px_rgba(23,33,29,.06)] xl:block"
            >
              <div className="mx-auto grid max-w-[1600px] grid-cols-[.7fr_1fr_.8fr] gap-16 px-16 py-10">
                {/* Mega title */}

                <div>
                  <span className="eyebrow">
                    0{mega + 1} / Navigasyon
                  </span>

                  <h3 className="mt-4 text-4xl font-medium tracking-[-.05em]">
                    {nav[mega].label}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-ink/50">
                    TAMİS'in teknoloji, mühendislik ve kurumsal yaklaşımını
                    keşfedin.
                  </p>

                  <Link
                    to={nav[mega].to}
                    onClick={closeNavigation}
                    className="mt-7 inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-[10px] font-bold uppercase tracking-[.15em]"
                  >
                    Bölüme git
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Mega links */}

                <div className="grid content-start grid-cols-2 gap-x-10">
                  {nav[mega].children?.map(([label, to]) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={closeNavigation}
                      className="group flex items-center justify-between border-b border-ink/15 py-4 text-sm font-semibold transition-colors duration-300 hover:text-green"
                    >
                      <span>{label}</span>

                      <ArrowUpRight
                        size={15}
                        className="opacity-30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>

                {/* Mega visual */}

                <div className="media-placeholder min-h-44">
                  <span>FEATURED MEDIA</span>

                  <small>
                    Menü görseli
                    <br />
                    16:9
                  </small>

                  <div className="media-code">
                    NAV MEDIA
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================
          MOBILE NAVIGATION
      ======================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-paper xl:hidden"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-5 pb-10 pt-[105px] md:px-10"
            >
              <div className="mx-auto max-w-[1500px]">
                {/* Label */}

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-green" />

                  <span className="eyebrow text-green">
                    Navigasyon
                  </span>
                </div>

                {/* Navigation items */}

                <div>
                  {nav.map((item, index) => {
                    const active = isNavItemActive(item);

                    return (
                      <motion.div
                        key={item.to}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.04 * index,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`border-b py-5 ${
                          active
                            ? "border-green/35"
                            : "border-ink/15"
                        }`}
                      >
                        <Link
                          onClick={closeNavigation}
                          to={item.to}
                          className="group flex items-start justify-between gap-6"
                        >
                          <span
                            className={`min-w-0 text-[clamp(1.65rem,7.5vw,2.4rem)] font-semibold leading-[.95] tracking-[-.045em] transition-colors group-hover:text-green ${
                              active
                                ? "text-green"
                                : "text-ink"
                            }`}
                          >
                            {item.label}
                          </span>

                          <span className="shrink-0 pt-1 text-[9px] font-bold tracking-[.15em] text-green">
                            0{index + 1}
                          </span>
                        </Link>

                        {item.children?.length > 0 && (
                          <div className="mt-5 grid gap-3">
                            {item.children
                              .slice(0, 4)
                              .map(([label, to]) => (
                                <Link
                                  onClick={closeNavigation}
                                  key={to}
                                  to={to}
                                  className="group flex items-center justify-between gap-5 text-sm text-ink/50 transition-colors hover:text-green"
                                >
                                  <span>
                                    {label}
                                  </span>

                                  <ArrowUpRight
                                    size={13}
                                    className="shrink-0 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                                  />
                                </Link>
                              ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile contact */}

                <Link
                  to="/iletisim"
                  onClick={closeNavigation}
                  className="mt-8 flex w-full items-center justify-between bg-green px-5 py-5 text-[10px] font-bold uppercase tracking-[.16em] text-white"
                >
                  İletişime geç
                  <ArrowUpRight size={16} />
                </Link>

                <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                    TAMİS Teknoloji
                  </span>

                  <span className="text-[9px] uppercase tracking-[.16em] text-ink/30">
                    Türkiye
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}