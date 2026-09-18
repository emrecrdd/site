import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
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

const capabilities = [
  {
    id: "savunma",
    number: "01",
    title: "Savunma Sistemleri",
    short: "Sistem seviyesi mühendislik",
    description:
      "Karmaşık gereksinimlerin analizinden sistem mimarisine, entegrasyondan doğrulamaya uzanan bütünleşik bir mühendislik yaklaşımı.",
    media: "DEFENCE / SYSTEM",
    code: "CAP 01",
  },
  {
    id: "elektronik",
    number: "02",
    title: "Elektronik Teknolojiler",
    short: "Elektronik tasarım & kontrol",
    description:
      "Elektronik ve gömülü sistem teknolojilerini, geliştirilen sistemlerin gereksinimleri doğrultusunda bütüncül bir tasarım anlayışıyla ele alıyoruz.",
    media: "ELECTRONICS / DETAIL",
    code: "CAP 02",
  },
  {
    id: "otonom",
    number: "03",
    title: "Otonom Sistemler",
    short: "Algılama · karar · kontrol",
    description:
      "Algılama, karar verme ve kontrol katmanlarının birlikte çalıştığı yeni nesil sistem teknolojileri üzerine mühendislik yaklaşımı geliştiriyoruz.",
    media: "AUTONOMOUS / PLATFORM",
    code: "CAP 03",
  },
  {
    id: "yazilim",
    number: "04",
    title: "Yazılım & Yapay Zekâ",
    short: "Dijital sistem teknolojileri",
    description:
      "Yazılımı sistem mimarisinin temel bileşenlerinden biri olarak ele alıyor; veri, algoritma ve mühendislik süreçlerini aynı yapı içerisinde değerlendiriyoruz.",
    media: "SOFTWARE / AI",
    code: "CAP 04",
  },
];

export default function Capabilities() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="border-b border-ink/12 pt-[82px]">
        <Container className="py-16 md:py-24 lg:py-32">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-green" />
              <span className="eyebrow text-green">
                TAMİS / Yetkinlikler
              </span>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <h1 className="max-w-5xl text-[clamp(4rem,15vw,7rem)] font-semibold leading-[.82] tracking-[-.075em] lg:text-[clamp(6rem,9vw,10rem)]">
                Disiplinler
                <br />
                birlikte
                <br />
                <span className="text-green">çalışır.</span>
              </h1>

              <div className="max-w-lg lg:pb-3">
                <p className="text-base leading-8 text-ink/55 md:text-lg">
                  Farklı mühendislik alanlarını birbirinden bağımsız
                  yetkinlikler olarak değil, aynı sistemin birlikte çalışan
                  parçaları olarak ele alıyoruz.
                </p>

                <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-ink/40">
                  <MoveRight size={15} />
                  Sistem odaklı mühendislik
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20"
          >
            <p className="eyebrow">01 / Yaklaşım</p>

            <div>
              <h2 className="max-w-5xl text-[clamp(2.8rem,10vw,4.7rem)] font-medium leading-[.98] tracking-[-.055em]">
                Teknolojiden önce
                <br />
                <span className="text-green">
                  problemi anlamak.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2 md:gap-12">
                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Mühendislik çalışmalarımızın başlangıç noktasını sistemin
                  gereksinimlerini, çalışma koşullarını ve teknik sınırlarını
                  doğru biçimde anlamak oluşturur.
                </p>

                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Tasarım kararlarını elektronik, yazılım, mekanik ve sistem
                  seviyesindeki ihtiyaçların birbirleriyle ilişkisini dikkate
                  alan bütünleşik bir perspektifle değerlendiriyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CAPABILITY SECTIONS */}
      <section className="border-y border-ink/12">
        {capabilities.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className={`scroll-mt-24 border-b border-ink/12 last:border-b-0 ${
              index % 2 === 1 ? "bg-white" : ""
            }`}
          >
            <Container className="py-20 md:py-32">
              <motion.div
                {...reveal}
                className="grid gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <div
                  className={`min-w-0 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-ink/15 pb-5">
                    <span className="text-xs font-bold text-green">
                      {item.number}
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                      {item.short}
                    </span>
                  </div>

                  <h2 className="mt-10 max-w-2xl text-[clamp(3rem,11vw,5rem)] font-medium leading-[.94] tracking-[-.06em] md:text-7xl">
                    {item.title}
                  </h2>

                  <p className="mt-8 max-w-xl text-base leading-8 text-ink/55">
                    {item.description}
                  </p>

                  <div className="mt-12 border-t border-ink/15 pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                      TAMİS / {item.code}
                    </span>
                  </div>
                </div>

                <div
                  className={`min-w-0 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10] lg:aspect-[4/5]">
                    <span>{item.media}</span>

                    <small>
                      Teknoloji / sistem / mühendislik görseli
                    </small>

                    <div className="media-code">
                      {item.code}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Container>
          </div>
        ))}
      </section>

      {/* SYSTEM ENGINEERING */}
      <section className="bg-green py-20 text-white md:py-36">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <p className="eyebrow text-white/45">
                06 / Sistem yaklaşımı
              </p>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                  Yetkinlik değil,
                  <br />
                  <span className="text-white/45">
                    bütünleşik sistem.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
                  Bir sistemin başarısını tek bir teknoloji alanının değil,
                  farklı mühendislik disiplinlerinin doğru mimari içerisinde
                  birlikte çalışmasının belirlediğine inanıyoruz.
                </p>

                <Link
                  to="/ar-ge#muhendislik"
                  className="mt-10 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-xs font-bold uppercase tracking-[.15em]"
                >
                  Sistem mühendisliği
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="px-3 py-3 md:px-6 md:py-6">
        <div className="bg-white">
          <Container className="py-16 md:py-28">
            <motion.div
              {...reveal}
              className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p className="eyebrow">
                  07 / Teknoloji
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,12vw,5rem)] font-medium leading-[.94] tracking-[-.055em] md:text-7xl">
                  Teknolojinin
                  <br />
                  arkasındaki araştırma.
                </h2>
              </div>

              <Link
                to="/ar-ge"
                className="inline-flex w-fit shrink-0 items-center gap-3 border border-ink/25 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] transition hover:bg-green hover:text-white"
              >
                Ar-Ge
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </Container>
        </div>
      </section>
    </main>
  );
}