import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";

const links = [
  ["Kurumsal", "/kurumsal"],
  ["Yetkinlikler", "/yetkinlikler"],
  ["Üretim Altyapısı", "/uretim-altyapisi"],
  ["Ar-Ge", "/ar-ge"],
  ["Medya", "/medya"],
  ["Kariyer", "/kariyer"],
];

export default function Footer() {
  return (
    <footer className="bg-green text-white">
      <Container>

        {/* ANA FOOTER */}
        <div className="grid gap-16 border-b border-white/15 py-20 lg:grid-cols-12 lg:py-28">

          {/* SOL */}
          <div className="lg:col-span-7">
            <p className="micro-label !text-white/45">
              TAMİS Teknoloji · 1987
            </p>

            <h2 className="mt-8 text-[clamp(3.6rem,8vw,8rem)] font-medium leading-[.84] tracking-[-.07em]">
              Savunma
              <br />
              Havacılık
              <br />
              <span className="text-white/38">
                Mühendislik
              </span>
            </h2>

            <p className="mt-9 max-w-lg text-sm leading-7 text-white/55">
              Hassas üretim, tasarım, prototipleme ve Ar-Ge
              kabiliyetlerini savunma ve havacılık sektörlerinin
              teknik gereksinimleriyle buluşturuyoruz.
            </p>
          </div>

          {/* SAĞ */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-12">
            <p className="micro-label !text-white/45">
              Kurumsal
            </p>

            <div className="mt-6">
              {links.map(([label, target]) => (
                <Link
                  key={target}
                  to={target}
                  className="group flex items-center justify-between border-b border-white/15 py-4"
                >
                  <span className="text-lg">
                    {label}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </Link>
              ))}
            </div>

            {/* İLETİŞİM */}
            <Link
              to="/iletisim"
              className="group mt-10 flex items-center justify-between border border-white/20 p-5 transition-colors hover:bg-white/[0.04]"
            >
              <div>
                <p className="micro-label !text-white/40">
                  Kurumsal iletişim
                </p>

                <p className="mt-2 text-xl">
                  İletişime geçin
                </p>
              </div>

              <span className="grid size-10 place-items-center border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-green">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        {/* MARKA */}
        <div className="flex flex-col gap-6 border-b border-white/15 py-12 md:flex-row md:items-end md:justify-between">
          <img
            src="/brand/tamis-logo.png"
            alt="TAMİS Teknoloji"
            className="w-[180px] brightness-0 invert md:w-[240px]"
          />

          <span className="micro-label !text-white/35">
            Ankara · Türkiye
          </span>
        </div>

        {/* ALT BİLGİ */}
        <div className="flex flex-col gap-4 py-7 text-[9px] font-bold uppercase tracking-[.14em] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>
            © 2026 TAMİS Teknoloji · Tüm hakları saklıdır
          </span>

          <Link
            to="/iletisim"
            className="transition-colors hover:text-white"
          >
            İletişim
          </Link>
        </div>

      </Container>
    </footer>
  );
}