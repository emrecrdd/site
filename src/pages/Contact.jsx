import { motion } from "framer-motion";
import {
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

const contactItems = [
  {
    number: "01",
    label: "Telefon",
    value: "+90 312 394 01 35",
    href: "tel:+903123940135",
    icon: Phone,
  },
  {
    number: "02",
    label: "E-posta",
    value: "info@tamis.com.tr",
    href: "mailto:info@tamis.com.tr",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <main className="overflow-hidden">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="border-b border-ink/12 pt-[82px]">
        <Container className="py-16 md:py-24 lg:py-32">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-green" />

              <span className="eyebrow text-green">
                İletişim / TAMİS Teknoloji
              </span>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <h1 className="max-w-6xl text-[clamp(4rem,15vw,7rem)] font-semibold leading-[.82] tracking-[-.075em] lg:text-[clamp(6rem,9vw,10rem)]">
                İletişime
                <br />
                <span className="text-green">geçelim.</span>
              </h1>

              <div className="max-w-lg lg:pb-3">
                <p className="text-base leading-8 text-ink/55 md:text-lg">
                  Kurumsal iletişim ve genel bilgi talepleriniz için
                  TAMİS Teknoloji ile iletişime geçebilirsiniz.
                </p>

                <a
                  href="mailto:info@tamis.com.tr"
                  className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
                >
                  E-posta gönder
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CONTACT INFORMATION
      ======================================== */}

      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.6fr_1.4fr] lg:gap-20"
          >
            <div>
              <p className="eyebrow">
                01 / İletişim Bilgileri
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.95] tracking-[-.055em]">
                Doğrudan
                <br />
                <span className="text-green">
                  bize ulaşın.
                </span>
              </h2>

              <div className="mt-14 border-t border-ink/15">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.number}
                      href={item.href}
                      className="group grid gap-6 border-b border-ink/15 py-7 md:grid-cols-[70px_1fr_auto] md:items-center"
                    >
                      <div className="flex size-12 items-center justify-center border border-ink/15 transition-all duration-300 group-hover:border-green group-hover:text-green">
                        <Icon size={18} />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-bold uppercase tracking-[.17em] text-green">
                            {item.number}
                          </span>

                          <span className="text-[9px] font-bold uppercase tracking-[.17em] text-ink/35">
                            {item.label}
                          </span>
                        </div>

                        <p className="mt-3 break-words text-xl font-medium tracking-[-.035em] md:text-2xl">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="hidden text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green md:block"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          ADDRESS
      ======================================== */}

      <section className="border-y border-ink/12 py-20 md:py-36">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">
                  02 / Adres
                </p>
              </div>

              <div>
                <div className="flex size-14 items-center justify-center border border-green/20 text-green">
                  <MapPin size={21} />
                </div>

                <h2 className="mt-8 max-w-4xl text-[clamp(2.6rem,9vw,4.5rem)] font-medium leading-[1] tracking-[-.055em]">
                  Saray Mah.
                  <br />
                  50. Cad. 17/C
                  <br />
                  <span className="text-green">
                    Kahramankazan, Ankara
                  </span>
                </h2>

                <p className="mt-8 text-sm font-medium uppercase tracking-[.12em] text-ink/40">
                  Türkiye · 06980
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          MAP
      ======================================== */}

      <section className="bg-white px-3 py-3 md:px-6 md:py-6">
        <motion.div
          {...reveal}
          className="mx-auto max-w-[1700px]"
        >
          <div className="relative min-h-[420px] overflow-hidden bg-mist md:min-h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24435.68836080939!2d32.598189!3d40.042811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33fa5d77d715f%3A0xa5434c7219f8c8de!2zVEFNxLBT!5e0!3m2!1str!2str!4v1789760539689!5m2!1str!2str"
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
          CORPORATE CONTACT
      ======================================== */}

      <section className="bg-green py-20 text-white md:py-32">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <p className="eyebrow text-white/45">
                03 / Kurumsal İletişim
              </p>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                  Doğru konu.
                  <br />
                  <span className="text-white/45">
                    Doğrudan iletişim.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
                  Genel bilgi ve kurumsal iletişim talepleriniz için
                  e-posta veya telefon üzerinden bize ulaşabilirsiniz.
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:info@tamis.com.tr"
                    className="inline-flex min-h-12 items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-green transition-colors hover:bg-transparent hover:text-white"
                  >
                    E-posta gönder
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="tel:+903123940135"
                    className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-white transition-colors hover:border-white"
                  >
                    Bizi arayın
                    <Phone size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          FINAL
      ======================================== */}

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <motion.div
            {...reveal}
            className="flex flex-col gap-8 border-t border-ink/15 pt-8 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="eyebrow">
                TAMİS Teknoloji
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-ink/50">
                Saray Mah. 50. Cad. 17/C
                <br />
                Kahramankazan, Ankara / Türkiye 06980
              </p>
            </div>

            <a
              href="mailto:info@tamis.com.tr"
              className="group inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[.15em]"
            >
              info@tamis.com.tr

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}