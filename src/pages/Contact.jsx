import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Container from "../components/ui/Container";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
};

export default function Contact() {
  return (
    <main className="overflow-hidden">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="min-h-[72vh] border-b border-ink/12 pt-[82px]">
        <Container className="flex min-h-[calc(72vh-82px)] flex-col justify-between py-14 md:py-20">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-green" />

              <span className="eyebrow text-green">
                TAMİS / İletişim
              </span>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="mt-20 grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end"
          >
            <h1 className="max-w-6xl text-[clamp(4.2rem,15vw,8rem)] font-semibold leading-[.8] tracking-[-.08em] lg:text-[clamp(7rem,10vw,11rem)]">
              Bağlantı
              <br />
              <span className="text-green">kuralım.</span>
            </h1>

            <div className="max-w-md lg:pb-3">
              <p className="text-base leading-8 text-ink/55 md:text-lg">
                Kurumsal iletişim, iş birlikleri ve genel bilgi
                talepleri için bize ulaşabilirsiniz.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full border border-ink/15">
                  <ArrowDownRight size={17} />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                  İletişim bilgileri
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          DIRECT CONTACT
      ======================================== */}

      <section className="bg-white py-20 md:py-32">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.45fr_1.55fr] lg:gap-24">
              <div>
                <p className="eyebrow">
                  01 / Doğrudan İletişim
                </p>
              </div>

              <div className="border-t border-ink/15">
                {/* EMAIL */}

                <a
                  href="mailto:info@tamis.com.tr"
                  className="group grid gap-6 border-b border-ink/15 py-8 transition-colors md:grid-cols-[60px_1fr_auto] md:items-center md:py-10"
                >
                  <span className="grid size-11 place-items-center border border-ink/15 text-green transition-colors group-hover:border-green">
                    <Mail size={17} />
                  </span>

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                      E-posta
                    </span>

                    <p className="mt-2 break-all text-[clamp(1.5rem,6vw,2.7rem)] font-medium tracking-[-.045em]">
                      info@tamis.com.tr
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="hidden text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green md:block"
                  />
                </a>

                {/* PHONE */}

                <a
                  href="tel:+903123940135"
                  className="group grid gap-6 border-b border-ink/15 py-8 transition-colors md:grid-cols-[60px_1fr_auto] md:items-center md:py-10"
                >
                  <span className="grid size-11 place-items-center border border-ink/15 text-green transition-colors group-hover:border-green">
                    <Phone size={17} />
                  </span>

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                      Telefon
                    </span>

                    <p className="mt-2 text-[clamp(1.5rem,6vw,2.7rem)] font-medium tracking-[-.045em]">
                      +90 312 394 01 35
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="hidden text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green md:block"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          LOCATION
      ======================================== */}

      <section className="border-t border-ink/12 py-20 md:py-32">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.45fr_1.55fr] lg:gap-24">
              <div>
                <p className="eyebrow">
                  02 / Konum
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 text-green">
                  <MapPin size={17} />

                  <span className="text-[9px] font-bold uppercase tracking-[.18em]">
                    Ankara · Türkiye
                  </span>
                </div>

                <address className="mt-8 max-w-5xl not-italic text-[clamp(2.6rem,8vw,5rem)] font-medium leading-[.98] tracking-[-.055em]">
                  Saray Mah.
                  <br />
                  50. Cad. 17/C
                  <br />

                  <span className="text-green">
                    Kahramankazan, Ankara
                  </span>

                  <span className="mt-6 block text-sm font-semibold uppercase tracking-[.14em] text-ink/35">
                    Türkiye · 06980
                  </span>
                </address>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          MAP
      ======================================== */}

      <section className="bg-white">
        <motion.div
          {...reveal}
          className="px-3 pb-3 md:px-6 md:pb-6"
        >
          <div className="relative mx-auto h-[480px] max-w-[1700px] overflow-hidden bg-mist md:h-[680px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24435.68836080939!2d32.598189!3d40.042811!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x14d33fa5d77d715f%3A0xa5434c7219f8c8de!2zVEFNxLBT!5e0!3m2!1str!2str!4v1789760539689!5m2!1str!2str"
              title="TAMİS Teknoloji — Kahramankazan, Ankara"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            <div className="pointer-events-none absolute left-4 top-4 bg-paper/95 px-4 py-3 backdrop-blur-md md:left-6 md:top-6 md:px-5 md:py-4">
              <span className="text-[9px] font-bold uppercase tracking-[.18em] text-green">
                TAMİS Teknoloji
              </span>

              <p className="mt-1 text-xs font-medium text-ink/55">
                Kahramankazan · Ankara
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}