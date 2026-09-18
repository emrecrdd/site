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

const technologies = [
  {
    number: "01",
    title: "Elektronik Sistemler",
    label: "ELECTRONICS",
    description:
      "Elektronik tasarım, gömülü sistemler ve kontrol teknolojilerini sistem gereksinimleriyle birlikte ele alan mühendislik yaklaşımı.",
    media: "ELECTRONICS / EMBEDDED",
  },
  {
    number: "02",
    title: "Algılama & Veri",
    label: "SENSING / DATA",
    description:
      "Fiziksel ortamdan elde edilen verinin algılanması, işlenmesi ve sistem karar süreçlerine aktarılmasına yönelik teknoloji çalışmaları.",
    media: "SENSING / DATA",
  },
  {
    number: "03",
    title: "Otonomi & Kontrol",
    label: "AUTONOMY",
    description:
      "Algılama, karar ve kontrol katmanlarını ortak bir sistem mimarisi içerisinde bir araya getiren teknoloji yaklaşımı.",
    media: "AUTONOMY / CONTROL",
  },
  {
    number: "04",
    title: "Yazılım Sistemleri",
    label: "SOFTWARE",
    description:
      "Sistem davranışını yöneten yazılım katmanlarını güvenilirlik, sürdürülebilirlik ve bütünleşik mimari perspektifiyle ele alan çalışmalar.",
    media: "SOFTWARE / SYSTEM",
  },
];

export default function Technologies() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="border-b border-ink/12 pt-[82px]">
        <Container className="py-16 md:py-24 lg:py-32">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-green" />

              <span className="eyebrow text-green">
                Teknoloji & Ar-Ge / Teknoloji Alanları
              </span>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <h1 className="max-w-6xl text-[clamp(4rem,15vw,7rem)] font-semibold leading-[.82] tracking-[-.075em] lg:text-[clamp(6rem,9vw,10rem)]">
                Teknolojiyi
                <br />
                sisteme
                <br />
                <span className="text-green">dönüştürmek.</span>
              </h1>

              <div className="max-w-lg lg:pb-3">
                <p className="text-base leading-8 text-ink/55 md:text-lg">
                  Farklı teknoloji alanlarında oluşan bilgi birikimini,
                  sistem seviyesinde çalışan mühendislik çözümlerine
                  dönüştürmeyi hedefliyoruz.
                </p>

                <Link
                  to="/ar-ge"
                  className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
                >
                  Ar-Ge yaklaşımı
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* TECHNOLOGY STATEMENT */}
      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-20"
          >
            <p className="eyebrow">
              01 / Teknoloji yaklaşımı
            </p>

            <div>
              <h2 className="max-w-5xl text-[clamp(2.8rem,10vw,4.8rem)] font-medium leading-[.98] tracking-[-.055em]">
                Teknoloji tek başına
                <br />
                <span className="text-green">
                  amaç değildir.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2 md:gap-12">
                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Teknolojik yetkinliği, gerçek sistem gereksinimlerini
                  karşılayan mühendislik çözümlerinin temel yapı taşlarından
                  biri olarak değerlendiriyoruz.
                </p>

                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Araştırmadan elde edilen bilgi birikiminin farklı projelere,
                  ürünlere ve sistem mimarilerine aktarılabilir olmasını
                  hedefleyen sürdürülebilir bir teknoloji yaklaşımı
                  benimsiyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* TECHNOLOGY AREAS */}
      <section className="border-y border-ink/12">
        {technologies.map((technology, index) => (
          <div
            key={technology.number}
            className={`border-b border-ink/12 last:border-b-0 ${
              index % 2 === 1 ? "bg-white" : ""
            }`}
          >
            <Container className="py-20 md:py-32">
              <motion.div
                {...reveal}
                className="grid gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <div
                  className={`flex min-w-0 flex-col justify-between ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-ink/15 pb-5">
                      <span className="text-xs font-bold text-green">
                        {technology.number}
                      </span>

                      <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                        {technology.label}
                      </span>
                    </div>

                    <h2 className="mt-10 max-w-2xl text-[clamp(3rem,11vw,5rem)] font-medium leading-[.94] tracking-[-.06em] md:text-7xl">
                      {technology.title}
                    </h2>

                    <p className="mt-8 max-w-xl text-base leading-8 text-ink/55">
                      {technology.description}
                    </p>
                  </div>

                  <div className="mt-14 flex items-center gap-3 border-t border-ink/15 pt-5 text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                    <MoveRight size={14} />
                    TAMİS / TECHNOLOGY
                  </div>
                </div>

                <div
                  className={`min-w-0 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10] lg:aspect-[4/5]">
                    <span>{technology.media}</span>

                    <small>
                      Teknoloji / laboratuvar / mühendislik
                    </small>

                    <div className="media-code">
                      TECH {technology.number}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Container>
          </div>
        ))}
      </section>

      {/* CONNECTION */}
      <section className="bg-green py-20 text-white md:py-36">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <p className="eyebrow text-white/45">
                06 / Teknoloji yaşam döngüsü
              </p>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                  Araştır.
                  <br />
                  Geliştir.
                  <br />
                  <span className="text-white/45">
                    Sisteme aktar.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
                  Teknoloji geliştirme çalışmalarını araştırma, prototipleme,
                  doğrulama ve sistem entegrasyonu ile devam eden ortak bir
                  mühendislik yaşam döngüsünün parçası olarak görüyoruz.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-y border-white/20 md:mt-20 md:grid-cols-4">
              {[
                ["01", "Araştırma"],
                ["02", "Geliştirme"],
                ["03", "Doğrulama"],
                ["04", "Sistem"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="border-b border-white/15 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
                >
                  <span className="text-xs font-bold text-white/40">
                    {number}
                  </span>

                  <h3 className="mt-10 text-2xl font-medium tracking-[-.04em]">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* R&D CONNECTION */}
      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-20"
          >
            <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10]">
              <span>TECHNOLOGY / R&D</span>

              <small>
                Araştırma · geliştirme · prototip
              </small>

              <div className="media-code">
                TECH 05
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center">
              <p className="eyebrow">
                07 / Araştırma & Geliştirme
              </p>

              <h2 className="mt-6 max-w-3xl text-[clamp(3rem,11vw,5rem)] font-medium leading-[.95] tracking-[-.06em]">
                Teknolojinin
                <br />
                <span className="text-green">
                  başlangıç noktası.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-ink/55">
                Teknoloji yetkinliklerinin gelişimini Ar-Ge faaliyetleriyle
                beslenen sürekli bir öğrenme ve mühendislik süreci olarak ele
                alıyoruz.
              </p>

              <Link
                to="/ar-ge"
                className="mt-9 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
              >
                Ar-Ge'yi keşfet
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="px-3 pb-3 md:px-6 md:pb-6">
        <div className="bg-[#e9eee9]">
          <Container className="py-16 md:py-28">
            <motion.div
              {...reveal}
              className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p className="eyebrow">
                  08 / Sistemler
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,12vw,5rem)] font-medium leading-[.94] tracking-[-.055em] md:text-7xl">
                  Teknolojinin
                  <br />
                  ürüne dönüştüğü yer.
                </h2>
              </div>

              <Link
                to="/urunler"
                className="inline-flex w-fit shrink-0 items-center gap-3 border border-ink/25 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] transition hover:bg-green hover:text-white"
              >
                Ürünler
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </Container>
        </div>
      </section>
    </main>
  );
}