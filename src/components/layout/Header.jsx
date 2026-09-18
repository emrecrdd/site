import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeNavigation = () => {
    setOpen(false);
    setMega(null);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-paper/95 shadow-[0_8px_30px_rgba(23,33,29,.04)] backdrop-blur-xl"
            : "border-ink/10 bg-paper/90 backdrop-blur-md"
        }`}
        onMouseLeave={() => setMega(null)}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-all duration-300 md:px-10 xl:px-16 ${
            scrolled ? "h-[72px]" : "h-[82px]"
          }`}
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeNavigation}
            className="relative flex shrink-0 items-center"
            aria-label="TAMİS Teknoloji ana sayfa"
          >
            <img
              src="/brand/tamis-logo.png"
              alt="TAMİS Teknoloji"
              className="h-[46px] w-auto object-contain md:h-[52px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden h-full items-center gap-1 xl:flex">
            {nav.map((item, index) => (
              <div
                key={item.to}
                className="flex h-full items-center"
                onMouseEnter={() => setMega(index)}
              >
                <NavLink
                  to={item.to}
                  className="flex items-center gap-1.5 px-3 text-[10px] font-bold uppercase tracking-[.12em] text-ink/62 transition-colors duration-300 hover:text-green"
                >
                  {item.label}

                  {item.children?.length > 0 && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${
                        mega === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </NavLink>
              </div>
            ))}

            <Link
              to="/iletisim"
              className="ml-3 inline-flex items-center gap-2 bg-green px-5 py-3.5 text-[10px] font-bold uppercase tracking-[.16em] text-white transition-colors hover:bg-ink"
            >
              İletişim
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="grid size-11 place-items-center text-ink xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? <X size={27} /> : <Menu size={28} />}
          </button>
        </div>

        {/* DESKTOP MEGA MENU */}
        {mega !== null && nav[mega] && (
          <div className="hidden border-t border-ink/10 bg-paper/98 shadow-[0_24px_50px_rgba(23,33,29,.06)] backdrop-blur-xl xl:block">
            <div className="mx-auto grid max-w-[1600px] grid-cols-[.7fr_1fr_.8fr] gap-16 px-16 py-10">
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
              </div>

              <div className="grid content-start grid-cols-2 gap-x-10">
                {nav[mega].children?.map(([label, to]) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={closeNavigation}
                    className="group flex items-center justify-between border-b border-ink/15 py-4 text-sm font-semibold transition-colors hover:text-green"
                  >
                    <span>{label}</span>

                    <ArrowUpRight
                      size={15}
                      className="opacity-35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>

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
          </div>
        )}
      </header>

      {/* MOBILE NAVIGATION */}
      {open && (
        <motion-menu>
          <div className="fixed inset-0 z-40 overflow-y-auto bg-paper px-5 pb-10 pt-[105px] md:px-10 xl:hidden">
            <div className="mx-auto max-w-[1500px]">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-green" />
                <span className="eyebrow text-green">
                  Navigasyon
                </span>
              </div>

              {nav.map((item, index) => (
                <div
                  key={item.to}
                  className="border-b border-ink/15 py-5"
                >
                  <Link
                    onClick={closeNavigation}
                    to={item.to}
                    className="flex items-start justify-between gap-6"
                  >
                    <span className="text-[clamp(1.7rem,8vw,2.4rem)] font-semibold leading-none tracking-[-.045em]">
                      {item.label}
                    </span>

                    <span className="pt-1 text-[10px] font-bold tracking-[.15em] text-green">
                      0{index + 1}
                    </span>
                  </Link>

                  {item.children?.length > 0 && (
                    <div className="mt-5 grid gap-3">
                      {item.children.slice(0, 4).map(([label, to]) => (
                        <Link
                          onClick={closeNavigation}
                          key={to}
                          to={to}
                          className="flex items-center justify-between text-sm text-ink/50"
                        >
                          {label}
                          <ArrowUpRight size={13} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/iletisim"
                onClick={closeNavigation}
                className="mt-8 flex w-full items-center justify-between bg-green px-5 py-5 text-xs font-bold uppercase tracking-[.16em] text-white"
              >
                İletişime geç
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </motion-menu>
      )}
    </>
  );
}

function motionMenu({ children }) {
  return children;
}