import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MoveRight,
} from "lucide-react";
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

const principles = [
  {
    number: "01",
    title: "Merak",
    description:
      "Sorular sormayı, araştırmayı ve farklı çözüm yollarını keşfetmeyi mühendislik sürecinin doğal bir parçası olarak görüyoruz.",
  },
  {
    number: "02",
    title: "Sorumluluk",
    description:
      "Üstlenilen işin yalnızca kendi parçasını değil, ortaya çıkan sistem üzerindeki etkisini de düşünmeyi önemsiyoruz.",
  },
  {
    number: "03",
    title: "Birlikte Üretmek",
    description:
      "Farklı mühendislik disiplinlerinin aynı problem üzerinde birlikte çalışabildiği bir üretim yaklaşımını benimsiyoruz.",
  },
  {
    number: "04",
    title: "Gelişim",
    description:
      "Teknik yetkinliğin sürekli öğrenme, deneme ve deneyimle geliştiğine inanıyoruz.",
  },
];

const disciplines = [
  "Elektronik",
  "Gömülü Sistemler",
  "Yazılım",
  "Kontrol",
  "Otonomi",
  "Sistem Mühendisliği",
];

export default function Careers() {
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
                Kariyer / TAMİS'te Kariyer
              </span>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <h1 className="max-w-6xl text-[clamp(4rem,15vw,7rem)] font-semibold leading-[.82] tracking-[-.075em] lg:text-[clamp(6rem,9vw,10rem)]">
                Geleceği
                <br />
                <span className="text-green">birlikte</span>
                <br />
                geliştir.
              </h1>

              <div className="max-w-lg lg:pb-3">
                <p className="text-base leading-8 text-ink/55 md:text-lg">
                  Karmaşık problemlere mühendislik perspektifiyle
                  yaklaşan, öğrenmekten ve üretmekten güç alan
                  yeteneklerle birlikte çalışmayı önemsiyoruz.
                </p>

                <a
                  href="#pozisyonlar"
                  className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
                >
                  Açık pozisyonlar
                  <ArrowDown size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CAREER VISUAL
      ======================================== */}

      <section className="bg-white py-3 md:p-6">
        <motion.div
          {...reveal}
          className="mx-auto max-w-[1700px]"
        >
          <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/7]">
            <span>PEOPLE / ENGINEERING</span>

            <small>
              Ekip · mühendislik · çalışma ortamı
              <br />
              geniş kurumsal fotoğraf
            </small>

            <div className="media-code">
              CAREER 01
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================
          CULTURE
      ======================================== */}

      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-20"
          >
            <p className="eyebrow">
              01 / Çalışma Kültürü
            </p>

            <div>
              <h2 className="max-w-5xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.96] tracking-[-.055em]">
                İyi mühendislik,
                <br />
                <span className="text-green">
                  iyi insanlarla başlar.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2 md:gap-12">
                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  TAMİS'te farklı disiplinlerden insanların ortak bir
                  mühendislik problemi etrafında fikir üretebildiği ve
                  birbirinden öğrenebildiği bir çalışma yaklaşımı
                  hedefliyoruz.
                </p>

                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Teknik derinliğin yanında iletişim, sorumluluk ve
                  sistemin bütününü görebilme becerisini de mühendislik
                  kültürünün önemli parçaları olarak değerlendiriyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          PRINCIPLES
      ======================================== */}

      <section className="border-y border-ink/12 py-20 md:py-36">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
              <p className="eyebrow">
                02 / Yaklaşım
              </p>

              <h2 className="max-w-5xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.96] tracking-[-.055em]">
                Birlikte çalışırken
                <br />
                <span className="text-green">
                  önemsediklerimiz.
                </span>
              </h2>
            </div>

            <div className="mt-16 grid border-t border-ink/15 md:grid-cols-2 xl:grid-cols-4">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="group border-b border-ink/15 py-8 md:border-r md:px-8 md:nth-[2n]:border-r-0 xl:border-b-0 xl:nth-[2n]:border-r xl:last:border-r-0 xl:first:pl-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-green">
                      {principle.number}
                    </span>

                    <span className="size-1.5 rounded-full bg-green/25 transition-transform duration-300 group-hover:scale-[1.8]" />
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-.04em]">
                    {principle.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-ink/50">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          ENGINEERING DISCIPLINES
      ======================================== */}

      <section className="bg-green py-20 text-white md:py-36">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <p className="eyebrow text-white/45">
                03 / Disiplinler
              </p>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                  Farklı uzmanlıklar.
                  <br />
                  <span className="text-white/45">
                    Ortak hedef.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
                  Teknoloji geliştirme süreci farklı mühendislik
                  disiplinlerinin aynı sistem üzerinde birlikte
                  çalışmasını gerektirir.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-white/20 md:mt-20">
              {disciplines.map((discipline, index) => (
                <div
                  key={discipline}
                  className="group grid grid-cols-[50px_1fr_auto] items-center border-b border-white/15 py-6 md:grid-cols-[100px_1fr_auto] md:py-7"
                >
                  <span className="text-[10px] font-bold text-white/35">
                    0{index + 1}
                  </span>

                  <h3 className="text-xl font-medium tracking-[-.035em] md:text-3xl">
                    {discipline}
                  </h3>

                  <MoveRight
                    size={18}
                    className="text-white/25 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          DEVELOPMENT
      ======================================== */}

      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <div className="flex min-w-0 flex-col justify-center">
              <p className="eyebrow">
                04 / Gelişim
              </p>

              <h2 className="mt-6 max-w-3xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.95] tracking-[-.055em]">
                Öğren.
                <br />
                Üret.
                <br />
                <span className="text-green">
                  Geliştir.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-ink/55">
                Mühendislik gelişimini yalnızca teorik bilgiyle değil;
                araştırma, tasarım, prototipleme, test ve gerçek sistem
                problemleri üzerinde çalışma süreciyle birlikte ele
                alıyoruz.
              </p>

              <Link
                to="/ar-ge"
                className="mt-9 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
              >
                Ar-Ge yaklaşımımız
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10] lg:aspect-[4/5]">
              <span>ENGINEERING / DEVELOPMENT</span>

              <small>
                Mühendislik ekibi · laboratuvar · geliştirme
              </small>

              <div className="media-code">
                CAREER 02
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          OPEN POSITIONS
      ======================================== */}

      <section
        id="pozisyonlar"
        className="scroll-mt-[90px] border-t border-ink/12 py-20 md:py-36"
      >
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">
                  05 / Açık Pozisyonlar
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.95] tracking-[-.055em]">
                  Bir sonraki adım
                  <br />
                  <span className="text-green">
                    birlikte olabilir.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-ink/55">
                  Güncel kariyer fırsatları ve başvuru detayları
                  kesinleştiğinde bu bölümde yayınlanacak.
                </p>
              </div>
            </div>

            <div className="mt-16 border-y border-ink/15">
              <div className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-green" />

                    <span className="text-[9px] font-bold uppercase tracking-[.18em] text-green">
                      Kariyer
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-medium tracking-[-.04em] md:text-3xl">
                    Açık pozisyonlar hazırlanıyor.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/50">
                    Aktif ilanlar ve başvuru kanalları doğrulandıktan
                    sonra burada listelenecek.
                  </p>
                </div>

                <span className="w-fit border border-ink/15 px-5 py-3 text-[9px] font-bold uppercase tracking-[.16em] text-ink/35">
                  Yakında
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="px-3 pb-3 md:px-6 md:pb-6">
        <div className="bg-[#e9eee9]">
          <Container className="py-16 md:py-28">
            <motion.div
              {...reveal}
              className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p className="eyebrow">
                  06 / TAMİS
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,12vw,5rem)] font-medium leading-[.94] tracking-[-.055em] md:text-7xl">
                  Birlikte
                  <br />
                  geliştirelim.
                </h2>
              </div>

              <Link
                to="/iletisim"
                className="inline-flex w-fit shrink-0 items-center gap-3 border border-ink/25 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] transition hover:bg-green hover:text-white"
              >
                İletişime geç
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </Container>
        </div>
      </section>
    </main>
  );
}