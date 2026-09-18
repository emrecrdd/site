import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerNavigation = [
  { index: "01", label: "Kurumsal", to: "/kurumsal" },
  { index: "02", label: "Yetkinlikler", to: "/yetkinlikler" },
  { index: "03", label: "Ürünler", to: "/urunler" },
  { index: "04", label: "Teknoloji & Ar-Ge", to: "/ar-ge" },
  { index: "05", label: "Medya", to: "/medya" },
  { index: "06", label: "Kariyer", to: "/kariyer" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-green text-white">
      {/* ========================================
          PRIMARY STATEMENT
      ======================================== */}

      <section className="border-b border-white/[0.14]">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
          <div className="grid py-16 md:py-20 lg:min-h-[410px] lg:grid-cols-12 lg:items-end lg:py-24">
            {/* LEFT INDEX */}

            <div className="lg:col-span-3">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-white/50" />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                  TAMİS / 09
                </span>
              </div>
            </div>

            {/* STATEMENT */}

            <div className="mt-20 lg:col-span-9 lg:mt-0">
              <p className="max-w-[1050px] text-[clamp(3rem,6vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Mühendislik.
                <br />

                <span className="text-white/38">
                  Teknoloji.
                </span>

                <br />

                Gelecek.
              </p>

              <div className="mt-10 flex max-w-[900px] items-end justify-between gap-10 border-t border-white/15 pt-6">
                <p className="max-w-md text-sm leading-7 text-white/50">
                  Araştırmadan tasarıma, teknolojiden sisteme.
                </p>

                <span className="hidden text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 md:block">
                  Ankara · Türkiye
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          NAVIGATION
      ======================================== */}

      <section className="border-b border-white/[0.14]">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
          <div className="grid lg:grid-cols-12">
            {/* SECTION LABEL */}

            <div className="border-b border-white/[0.14] py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:py-14 lg:pr-12">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Keşfet
              </span>

              <div className="mt-6 hidden lg:block">
                <span className="block h-10 w-px bg-white/20" />
              </div>
            </div>

            {/* NAVIGATION ITEMS */}

            <div className="lg:col-span-9 lg:pl-12">
              <div className="grid md:grid-cols-2">
                {footerNavigation.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group relative flex min-h-[92px] items-center justify-between gap-6 overflow-hidden border-b border-white/[0.14] py-6 md:min-h-[104px] md:px-7 ${
                      index % 2 === 0
                        ? "md:border-r md:pl-0"
                        : "md:pr-0"
                    }`}
                  >
                    {/* HOVER LINE */}

                    <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" />

                    <div className="flex min-w-0 items-center gap-5">
                      <span className="w-5 shrink-0 text-[8px] font-bold tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-white/55">
                        {item.index}
                      </span>

                      <span className="text-[17px] font-medium tracking-[-0.025em] text-white/72 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:text-[19px]">
                        {item.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="shrink-0 text-white/22 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT
      ======================================== */}

      <section className="border-b border-white/[0.14]">
        <Link
          to="/iletisim"
          className="group relative block overflow-hidden"
        >
          {/* SUBTLE HOVER */}

          <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-white/[0.035] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />

          <div className="relative mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
            <div className="grid items-center py-11 md:py-14 lg:grid-cols-12">
              {/* LABEL */}

              <div className="mb-8 lg:col-span-3 lg:mb-0">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/35 transition-colors duration-300 group-hover:text-white/60">
                  İletişim
                </span>
              </div>

              {/* CTA */}

              <div className="flex items-center justify-between gap-8 lg:col-span-9">
                <div>
                  <span className="block text-[clamp(2rem,4vw,4.5rem)] font-medium leading-none tracking-[-0.055em] text-white">
                    İletişime geçin
                  </span>

                  <span className="mt-3 block text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Kurumsal iletişim
                  </span>
                </div>

                <div className="relative grid size-14 shrink-0 place-items-center border border-white/25 md:size-16">
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-400 group-hover:scale-x-100" />

                  <ArrowRight
                    size={19}
                    strokeWidth={1.5}
                    className="relative z-10 text-white transition-all duration-400 group-hover:translate-x-1 group-hover:text-green"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ========================================
          BRAND SIGNATURE
      ======================================== */}

      <section>
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
          <div className="relative border-b border-white/[0.14] pb-9 pt-16 md:pb-12 md:pt-20">
            {/* TOP META */}

            <div className="mb-12 flex items-center justify-between md:mb-16">
              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/30">
                Technology / Engineering / R&amp;D
              </span>

              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/30">
                TR / 2026
              </span>
            </div>

            {/* GIANT WORDMARK */}

            <div className="relative">
              <div
                aria-label="TAMİS"
                className="select-none whitespace-nowrap text-[clamp(5rem,16.5vw,15.5rem)] font-bold leading-[0.7] tracking-[-0.09em] text-white"
              >
                TAMİS
              </div>

              <div
                aria-hidden="true"
                className="absolute right-0 top-0 hidden translate-y-[-15%] text-[clamp(4rem,8vw,8rem)] font-light leading-none text-white/[0.055] lg:block"
              >
                T
              </div>
            </div>
          </div>

          {/* ========================================
              BOTTOM BAR
          ======================================== */}

          <div className="flex flex-col gap-7 py-7 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/38">
                © 2026 TAMİS Teknoloji
              </span>

              <span className="hidden h-3 w-px bg-white/15 sm:block" />

              <span className="text-[8px] uppercase tracking-[0.18em] text-white/28">
                Tüm hakları saklıdır
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/kurumsal#kalite"
                className="text-[8px] font-bold uppercase tracking-[0.17em] text-white/32 transition-colors duration-300 hover:text-white"
              >
                Kalite &amp; Etik
              </Link>

              <span className="h-3 w-px bg-white/15" />

              <Link
                to="/medya#basin"
                className="text-[8px] font-bold uppercase tracking-[0.17em] text-white/32 transition-colors duration-300 hover:text-white"
              >
                Basın
              </Link>

              <span className="h-3 w-px bg-white/15" />

              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.17em] text-white/32 transition-colors duration-300 hover:text-white"
              >
                İletişim

                <ArrowUpRight
                  size={10}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}