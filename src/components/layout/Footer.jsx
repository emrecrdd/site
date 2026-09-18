import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerNavigation = [
  {
    index: "01",
    label: "Kurumsal",
    to: "/kurumsal",
  },
  {
    index: "02",
    label: "Yetkinlikler",
    to: "/yetkinlikler",
  },
  {
    index: "03",
    label: "Ürünler",
    to: "/urunler",
  },
  {
    index: "04",
    label: "Teknoloji & Ar-Ge",
    to: "/ar-ge",
  },
  {
    index: "05",
    label: "Medya",
    to: "/medya",
  },
  {
    index: "06",
    label: "Kariyer",
    to: "/kariyer",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-green text-white">
      {/* ========================================
          TOP STATEMENT
      ======================================== */}

      <div className="border-b border-white/15">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
          <div className="grid min-h-[320px] py-14 md:min-h-[390px] md:py-20 lg:grid-cols-12 lg:items-end lg:py-24">
            {/* LABEL */}

            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/50" />

                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/50">
                  TAMİS Teknoloji
                </span>
              </div>
            </div>

            {/* STATEMENT */}

            <div className="mt-16 lg:col-span-9 lg:mt-0">
              <p className="max-w-[980px] text-[clamp(2.6rem,5.4vw,5.6rem)] font-medium leading-[.95] tracking-[-.06em]">
                Teknolojiyi
                <br />
                mühendislikle
                <span className="text-white/35"> ileri taşıyoruz.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          NAVIGATION
      ======================================== */}

      <div className="border-b border-white/15">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
          <div className="grid lg:grid-cols-12">
            {/* LEFT */}

            <div className="border-b border-white/15 py-12 lg:col-span-3 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/40">
                Navigasyon
              </span>

              <p className="mt-5 max-w-[230px] text-sm leading-7 text-white/55">
                TAMİS'in kurumsal yapısını, mühendislik
                yetkinliklerini ve teknoloji alanlarını keşfedin.
              </p>
            </div>

            {/* LINKS */}

            <div className="lg:col-span-9 lg:pl-12">
              <div className="grid md:grid-cols-2">
                {footerNavigation.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group flex min-h-[92px] items-center justify-between gap-6 border-b border-white/15 py-6 transition-colors duration-300 hover:text-white md:min-h-[108px] md:px-7 ${
                      index % 2 === 0
                        ? "md:border-r md:pl-0"
                        : "md:pr-0"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-5">
                      <span className="shrink-0 text-[9px] font-bold tracking-[.16em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                        {item.index}
                      </span>

                      <span className="text-lg font-medium tracking-[-.03em] text-white/78 transition-colors duration-300 group-hover:text-white md:text-xl">
                        {item.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                      className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          CONTACT STRIP
      ======================================== */}

      <div className="border-b border-white/15">
        <Link
          to="/iletisim"
          className="group block transition-colors duration-500 hover:bg-white hover:text-green"
        >
          <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
            <div className="grid items-center gap-8 py-10 md:py-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/40 transition-colors duration-500 group-hover:text-green/45">
                  İletişim
                </span>
              </div>

              <div className="flex items-center justify-between gap-8 lg:col-span-9">
                <span className="text-[clamp(1.8rem,3vw,3.2rem)] font-medium tracking-[-.05em]">
                  Bizimle iletişime geçin.
                </span>

                <div className="grid size-12 shrink-0 place-items-center border border-white/25 transition-all duration-500 group-hover:border-green/25 md:size-14">
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ========================================
          BRAND SIGNATURE
      ======================================== */}

      <div className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-16">
        <div className="relative overflow-hidden border-b border-white/15 py-12 md:py-16">
          <div className="flex items-end justify-between gap-8">
            <div
              aria-label="TAMİS"
              className="select-none text-[clamp(5rem,15vw,14rem)] font-bold leading-[.72] tracking-[-.085em] text-white"
            >
              TAMİS
            </div>

            <span className="hidden pb-1 text-[9px] font-bold uppercase tracking-[.2em] text-white/30 lg:block">
              Technology / Engineering / R&amp;D
            </span>
          </div>
        </div>

        {/* ========================================
            LEGAL / BOTTOM
        ======================================== */}

        <div className="flex flex-col gap-7 py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/40">
              © 2026 TAMİS Teknoloji
            </span>

            <span className="hidden h-3 w-px bg-white/15 sm:block" />

            <span className="text-[9px] uppercase tracking-[.16em] text-white/30">
              Ankara · Türkiye
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/kurumsal#kalite"
              className="text-[9px] font-bold uppercase tracking-[.15em] text-white/35 transition-colors hover:text-white"
            >
              Kalite &amp; Etik
            </Link>

            <span className="h-3 w-px bg-white/15" />

            <Link
              to="/iletisim"
              className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.15em] text-white/35 transition-colors hover:text-white"
            >
              İletişim

              <ArrowUpRight
                size={11}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}