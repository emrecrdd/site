import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

const routes = [
  {
    index: "01",
    title: "Kurumsal",
    text: "TAMİS Teknoloji hakkında kurumsal bilgiler.",
    to: "/kurumsal",
  },
  {
    index: "02",
    title: "Medya & Basın",
    text: "Basın, yayın ve kurumsal medya içerikleri.",
    to: "/medya#basin",
  },
  {
    index: "03",
    title: "Kariyer",
    text: "Kariyer ve açık pozisyon bilgileri.",
    to: "/kariyer#pozisyonlar",
  },
];

export default function Contact() {
  return (
    <main className="overflow-hidden bg-paper">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="border-b border-ink/15 pt-[82px]">
        <Container className="relative">
          <motion.div
            {...reveal}
            className="grid min-h-[58vh] grid-cols-1 py-14 md:py-20 lg:grid-cols-12 lg:py-24"
          >
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-green" />

                <span className="eyebrow text-green">
                  İletişim
                </span>
              </div>
            </div>

            <div className="mt-20 flex flex-col justify-end lg:col-span-9 lg:mt-0">
              <div className="flex items-end justify-between gap-10">
                <h1 className="max-w-5xl text-[clamp(4.5rem,14vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
                  Bizimle
                  <br />
                  iletişime geçin.
                </h1>

                <span className="mb-3 hidden text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30 xl:block">
                  TAMİS / 08
                </span>
              </div>

              <div className="mt-12 border-t border-ink/15 pt-6 md:mt-16">
                <p className="max-w-xl text-base leading-8 text-ink/50">
                  Kurumsal iletişim ve genel bilgi talepleri için
                  TAMİS Teknoloji ile iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CORPORATE CONTACT
      ======================================== */}

      <section className="bg-white">
        <Container>
          <motion.div
            {...reveal}
            className="grid border-b border-ink/15 lg:grid-cols-12"
          >
            {/* LEFT LABEL */}

            <div className="border-b border-ink/15 py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:py-16">
              <p className="eyebrow">
                Genel Merkez
              </p>

              <div className="mt-7 flex items-center gap-2 text-green">
                <MapPin size={14} />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Ankara · Türkiye
                </span>
              </div>
            </div>

            {/* MAIN INFORMATION */}

            <div className="py-12 lg:col-span-9 lg:py-16 lg:pl-16 xl:pl-20">
              <div className="grid gap-14 xl:grid-cols-[1.25fr_.75fr] xl:gap-20">
                {/* ADDRESS */}

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/35">
                    Adres
                  </span>

                  <address className="mt-6 max-w-3xl not-italic text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.05em]">
                    Saray Mah.
                    <br />
                    50. Cad. 17/C
                    <br />
                    Kahramankazan, Ankara
                  </address>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink/35">
                    Türkiye · 06980
                  </p>
                </div>

                {/* CONTACT */}

                <div className="border-t border-ink/15 pt-8 xl:border-l xl:border-t-0 xl:pl-12 xl:pt-0">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/35">
                      Telefon
                    </span>

                    <a
                      href="tel:+903123940135"
                      className="group mt-4 flex w-fit items-center gap-3 text-xl font-medium tracking-[-0.025em] md:text-2xl"
                    >
                      +90 312 394 01 35

                      <ArrowUpRight
                        size={16}
                        className="text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                      />
                    </a>
                  </div>

                  <div className="mt-10 border-t border-ink/15 pt-8">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/35">
                      E-posta
                    </span>

                    <a
                      href="mailto:info@tamis.com.tr"
                      className="group mt-4 flex w-fit items-center gap-3 text-xl font-medium tracking-[-0.025em] md:text-2xl"
                    >
                      info@tamis.com.tr

                      <ArrowUpRight
                        size={16}
                        className="text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          MAP
      ======================================== */}

      <section className="bg-white py-4 md:py-6">
        <motion.div
          {...reveal}
          className="mx-auto w-full max-w-[1800px] px-4 md:px-6"
        >
          <div className="relative h-[460px] overflow-hidden bg-mist md:h-[620px] lg:h-[680px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24435.68836080939!2d32.598189!3d40.042811!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x14d33fa5d77d715f%3A0xa5434c7219f8c8de!2zVEFNxLBT!5e0!3m2!1str!2str!4v1789760539689!5m2!1str!2str"
              title="TAMİS Teknoloji konumu"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

       

            
          </div>
        </motion.div>
      </section>

      {/* ========================================
          CORPORATE ROUTES
      ======================================== */}

      <section className="border-t border-ink/15 bg-paper py-20 md:py-28">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="eyebrow">
                  İlgili Bölümler
                </p>
              </div>

              <div className="lg:col-span-9">
                <div className="border-t border-ink/15">
                  {routes.map((item) => (
                    <Link
                      key={item.index}
                      to={item.to}
                      className="group grid gap-5 border-b border-ink/15 py-7 md:grid-cols-[70px_1fr_1fr_auto] md:items-center md:py-8"
                    >
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-green">
                        {item.index}
                      </span>

                      <h2 className="text-xl font-medium tracking-[-0.035em] md:text-2xl">
                        {item.title}
                      </h2>

                      <p className="max-w-sm text-sm leading-6 text-ink/45">
                        {item.text}
                      </p>

                      <ArrowUpRight
                        size={18}
                        className="text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}