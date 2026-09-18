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

const process = [
  {
    number: "01",
    title: "Araştırma",
    description:
      "Teknolojik eğilimleri, teknik gereksinimleri ve çözüm alternatiflerini sistematik biçimde değerlendiriyoruz.",
  },
  {
    number: "02",
    title: "Tasarım",
    description:
      "Gereksinimleri uygulanabilir sistem mimarilerine ve mühendislik çözümlerine dönüştürüyoruz.",
  },
  {
    number: "03",
    title: "Prototip",
    description:
      "Teknik yaklaşımı erken aşamada sınamak ve geliştirmek için prototipleme süreçlerinden yararlanıyoruz.",
  },
  {
    number: "04",
    title: "Doğrulama",
    description:
      "Geliştirilen çözümleri tanımlanan gereksinimler ve çalışma koşulları doğrultusunda değerlendiriyoruz.",
  },
  {
    number: "05",
    title: "Entegrasyon",
    description:
      "Farklı alt sistemleri ortak mimari içerisinde bir araya getirerek sistem seviyesinde bütünlük sağlıyoruz.",
  },
];

const engineeringPrinciples = [
  ["Gereksinim", "Sistemin ne yapması gerektiğini doğru tanımlamak."],
  ["Mimari", "Teknik bileşenleri ortak bir yapı içerisinde kurgulamak."],
  ["Entegrasyon", "Farklı disiplinleri birlikte çalışan bir sisteme dönüştürmek."],
  ["Doğrulama", "Ortaya çıkan çözümün gereksinimleri karşıladığını değerlendirmek."],
];

export default function Research() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="border-b border-ink/12 pt-[82px]">
        <Container>
          <div className="grid lg:min-h-[720px] lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              {...reveal}
              className="flex min-w-0 flex-col justify-between py-14 md:py-20 lg:py-24 lg:pr-16 xl:pr-24"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-green" />

                  <span className="eyebrow text-green">
                    TAMİS / Araştırma & Geliştirme
                  </span>
                </div>

                <h1 className="mt-10 max-w-4xl text-[clamp(3.8rem,15vw,6rem)] font-semibold leading-[.84] tracking-[-.07em] lg:text-[clamp(5rem,7vw,8rem)]">
                  Geleceği
                  <br />
                  bugünden
                  <br />
                  <span className="text-green">geliştirmek.</span>
                </h1>

                <p className="mt-9 max-w-xl text-base leading-8 text-ink/55 md:text-lg">
                  Araştırmayı, yeni teknolojilerin izlenmesinin ötesinde;
                  mühendislik bilgisini sistematik biçimde yeni çözümlere
                  dönüştüren sürekli bir geliştirme süreci olarak ele alıyoruz.
                </p>
              </div>

              <div className="mt-16 hidden items-center justify-between border-t border-ink/15 pt-5 lg:flex">
                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                  RESEARCH / ENGINEERING
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-green">
                  TAMİS
                </span>
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              className="-mx-5 min-w-0 md:-mx-10 lg:mx-0"
            >
              <div className="media-placeholder h-full min-h-[500px] lg:min-h-[720px]">
                <span>R&D / ENGINEERING</span>

                <small>
                  Laboratuvar · prototip · mühendislik
                  <br />
                  Ana Ar-Ge görseli
                </small>

                <div className="media-code">R&D 01</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* RESEARCH APPROACH */}
      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-20"
          >
            <div>
              <p className="eyebrow">01 / Ar-Ge yaklaşımı</p>
            </div>

            <div className="min-w-0">
              <h2 className="max-w-5xl text-[clamp(2.8rem,10vw,4.7rem)] font-medium leading-[.98] tracking-[-.055em]">
                Bilgiyi,
                <br />
                <span className="text-green">
                  mühendislik değerine
                </span>{" "}
                dönüştürmek.
              </h2>

              <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2 md:gap-12">
                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Ar-Ge çalışmalarını mevcut teknolojilerin uygulanmasının
                  ötesinde, yeni teknik yaklaşımların araştırıldığı ve
                  mühendislik çözümlerine dönüştürüldüğü bir süreç olarak
                  değerlendiriyoruz.
                </p>

                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Araştırma, prototipleme ve doğrulama faaliyetlerinin birbirini
                  beslediği bu yapı, teknik belirsizliğin kontrollü biçimde
                  azaltılmasını ve geliştirilen yaklaşımın olgunlaştırılmasını
                  amaçlar.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-y border-ink/12 py-20 md:py-36">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <p className="eyebrow">
                02 / Geliştirme süreci
              </p>

              <h2 className="max-w-5xl text-[clamp(3rem,11vw,5rem)] font-medium leading-[.95] tracking-[-.06em]">
                Fikirden,
                <br />
                <span className="text-green">
                  doğrulanmış sisteme.
                </span>
              </h2>
            </div>

            <div className="mt-14 border-t border-ink/15 md:mt-20">
              {process.map((item) => (
                <motion.div
                  {...reveal}
                  key={item.number}
                  className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[90px_.75fr_1.25fr] md:items-start md:py-9"
                >
                  <span className="text-xs font-bold text-green">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-medium tracking-[-.035em] md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-ink/50">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SYSTEM ENGINEERING */}
      <section
        id="muhendislik"
        className="scroll-mt-24 bg-green py-20 text-white md:py-36"
      >
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <div>
                <p className="eyebrow text-white/45">
                  03 / Sistem Mühendisliği
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                  Parçaları değil,
                  <br />
                  <span className="text-white/45">
                    sistemin tamamını düşünmek.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
                  Sistem mühendisliği yaklaşımı; gereksinimlerin, alt
                  sistemlerin ve farklı mühendislik disiplinlerinin ürün yaşam
                  döngüsü boyunca ortak bir teknik çerçevede yönetilmesini
                  sağlar.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-y border-white/20 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
              {engineeringPrinciples.map(([title, description], index) => (
                <div
                  key={title}
                  className="border-b border-white/15 py-8 md:border-r md:px-6 md:odd:border-r md:even:border-r-0 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
                >
                  <span className="text-xs font-bold text-white/40">
                    0{index + 1}
                  </span>

                  <h3 className="mt-12 text-2xl font-medium tracking-[-.04em]">
                    {title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PROTOTYPING */}
      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-20"
          >
            <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10] lg:aspect-[4/5]">
              <span>PROTOTYPE / TEST</span>

              <small>
                Prototip · test · doğrulama
              </small>

              <div className="media-code">R&D 02</div>
            </div>

            <div className="flex min-w-0 flex-col justify-center">
              <p className="eyebrow">
                04 / Prototipleme
              </p>

              <h2 className="mt-6 max-w-3xl text-[clamp(3rem,11vw,5rem)] font-medium leading-[.95] tracking-[-.06em]">
                Erken dene.
                <br />
                <span className="text-green">
                  Ölç. Geliştir.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-ink/55">
                Prototipleme, tasarım kararlarını erken aşamada değerlendirmek,
                teknik riskleri görmek ve geliştirilen yaklaşımı gerçek
                sonuçlarla beslemek için mühendislik sürecinin temel
                araçlarından biridir.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-y border-ink/12 py-20 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"
          >
            <p className="eyebrow">
              05 / Teknoloji
            </p>

            <div>
              <h2 className="max-w-5xl text-[clamp(3rem,11vw,5rem)] font-medium leading-[.95] tracking-[-.06em]">
                Araştırmadan
                <br />
                <span className="text-green">
                  teknoloji yetkinliğine.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-ink/55">
                Ar-Ge çalışmalarından elde edilen bilgi birikiminin yalnızca
                tek bir projede kalmasını değil, gelecekte geliştirilecek
                sistemlere aktarılabilen kalıcı bir teknoloji yetkinliğine
                dönüşmesini hedefliyoruz.
              </p>

              <Link
                to="/teknolojiler"
                className="mt-10 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
              >
                Teknoloji alanları
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="px-3 py-3 md:px-6 md:py-6">
        <div className="bg-[#e9eee9]">
          <Container className="py-16 md:py-28">
            <motion.div
              {...reveal}
              className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p className="eyebrow">
                  06 / Yetkinlikler
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,12vw,5rem)] font-medium leading-[.94] tracking-[-.055em] md:text-7xl">
                  Mühendislik
                  <br />
                  disiplinlerini keşfedin.
                </h2>
              </div>

              <Link
                to="/yetkinlikler"
                className="inline-flex w-fit shrink-0 items-center gap-3 border border-ink/25 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] transition hover:bg-green hover:text-white"
              >
                Yetkinlikler
                <MoveRight size={16} />
              </Link>
            </motion.div>
          </Container>
        </div>
      </section>
    </main>
  );
}