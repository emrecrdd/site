import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const reveal = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
};

const principles = [
  {
    number: "01",
    title: "Mühendislik disiplini",
    description:
      "Teknoloji geliştirme süreçlerini sistematik, ölçülebilir ve sürdürülebilir bir mühendislik yaklaşımıyla ele alıyoruz.",
  },
  {
    number: "02",
    title: "Sürekli gelişim",
    description:
      "Bilgi birikimimizi, yöntemlerimizi ve teknik yetkinliklerimizi sürekli geliştirmeyi temel çalışma prensiplerimizden biri olarak görüyoruz.",
  },
  {
    number: "03",
    title: "Sorumluluk",
    description:
      "Üstlendiğimiz çalışmalarda kalite, güvenilirlik ve profesyonel sorumluluk anlayışını sürecin ayrılmaz bir parçası olarak değerlendiriyoruz.",
  },
  {
    number: "04",
    title: "Uzun vadeli yaklaşım",
    description:
      "Kısa vadeli çözümler yerine sürdürülebilir teknik kabiliyet ve kalıcı mühendislik değeri oluşturmayı hedefliyoruz.",
  },
];

const engineering = [
  "Araştırma",
  "Tasarım",
  "Prototip",
  "Doğrulama",
  "Entegrasyon",
];

export default function Corporate() {
  return (
    <main className="overflow-hidden">
      {/* ========================================
          HERO
      ======================================== */}

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
                    01 / Kurumsal
                  </span>
                </div>

                <h1 className="mt-10 max-w-3xl text-[clamp(3.8rem,15vw,6rem)] font-semibold leading-[0.84] tracking-[-0.07em] lg:text-[clamp(5rem,7vw,8rem)]">
                  Teknolojiye
                  <br />
                  mühendislik
                  <br />
                  <span className="text-green">perspektifi.</span>
                </h1>

                <p className="mt-9 max-w-xl text-base leading-8 text-ink/55 md:text-lg">
                  TAMİS Teknoloji; araştırma, mühendislik ve teknoloji geliştirme
                  çalışmalarını bütünleşik bir yaklaşım içerisinde ele alan bir
                  teknoloji şirketidir.
                </p>
              </div>

              <div className="mt-16 hidden items-center justify-between border-t border-ink/15 pt-5 lg:flex">
                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                  TAMİS / CORPORATE
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-green">
                  Türkiye
                </span>
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              className="-mx-5 min-w-0 md:-mx-10 lg:mx-0"
            >
              <div className="media-placeholder h-full min-h-[480px] lg:min-h-[720px]">
                <span>CORPORATE / ENGINEERING</span>

                <small>
                  Tesis · ekip · mühendislik
                  <br />
                  Desktop 4:5 / 16:10
                </small>

                <div className="media-code">
                  MEDIA C01
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========================================
          HAKKIMIZDA
      ======================================== */}

      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20"
          >
            <div>
              <p className="eyebrow">
                02 / Hakkımızda
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="max-w-5xl text-[clamp(2.7rem,10vw,4.5rem)] font-medium leading-[1] tracking-[-.055em] md:text-7xl">
                Fikirleri,
                <br />
                <span className="text-green">
                  çalışan sistemlere
                </span>{" "}
                dönüştürmek.
              </h2>

              <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2 md:gap-12">
                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  TAMİS, teknoloji geliştirme sürecini yalnızca bir ürün ortaya
                  çıkarma faaliyeti olarak değil; araştırmadan tasarıma,
                  prototiplemeden doğrulamaya uzanan bütünsel bir mühendislik
                  süreci olarak ele alır.
                </p>

                <p className="text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                  Farklı mühendislik disiplinlerinin birlikte çalıştığı bu
                  yaklaşım; teknik gereksinimlerin anlaşılması, çözümün
                  geliştirilmesi ve sistem seviyesinde bütünleştirilmesi üzerine
                  kuruludur.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          VİZYON & YAKLAŞIM
      ======================================== */}

      <section
        id="vizyon"
        className="scroll-mt-24 border-y border-ink/12 py-20 md:py-36"
      >
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
          >
            <div className="min-w-0">
              <p className="eyebrow">
                03 / Vizyon & Yaklaşım
              </p>

              <h2 className="mt-6 max-w-3xl text-[clamp(3rem,12vw,5rem)] font-medium leading-[0.94] tracking-[-0.06em] md:text-7xl">
                Bugünü çözmek.
                <br />
                <span className="text-green">
                  Yarını geliştirmek.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-ink/55">
                Teknolojik gelişimi yalnızca mevcut ihtiyaçlara cevap vermek
                olarak değil, gelecekte ortaya çıkacak gereksinimlere bugünden
                hazırlanmak olarak görüyoruz.
              </p>

              <Link
                to="/ar-ge"
                className="mt-9 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
              >
                Ar-Ge yaklaşımı
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10] lg:aspect-[4/5]">
              <span>VISION / TECHNOLOGY</span>

              <small>
                Mühendislik · teknoloji · gelecek
              </small>

              <div className="media-code">
                MEDIA C02
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          ENGINEERING APPROACH
      ======================================== */}

      <section className="bg-green py-20 text-white md:py-36">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <p className="eyebrow text-white/45">
                04 / Mühendislik yaklaşımı
              </p>

              <h2 className="max-w-5xl text-[clamp(2.8rem,10vw,5rem)] font-medium leading-[0.96] tracking-[-0.055em]">
                Bir sistem, birbirinden bağımsız parçaların değil,
                <span className="text-white/45">
                  {" "}
                  birlikte çalışan disiplinlerin sonucudur.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid border-y border-white/20 md:mt-20 md:grid-cols-5">
              {engineering.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[55px_1fr] border-b border-white/15 py-7 last:border-b-0 md:block md:border-b-0 md:border-r md:px-5 md:py-8 md:first:pl-0 md:last:border-r-0"
                >
                  <span className="text-xs font-bold text-white/45">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-.03em] md:mt-20">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                to="/yetkinlikler"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.15em]"
              >
                Yetkinlikleri incele
                <MoveRight size={17} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          QUALITY & ETHICS
      ======================================== */}

      <section
        id="kalite"
        className="scroll-mt-24 bg-white py-20 md:py-36"
      >
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div>
                <p className="eyebrow">
                  05 / Kalite & Etik
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-[clamp(2.8rem,10vw,4.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">
                  Mühendislik kadar
                  <br />
                  <span className="text-green">
                    yaklaşım da önemlidir.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-ink/55">
                  Çalışma biçimimizi teknik disiplin, sürekli gelişim,
                  sorumluluk ve uzun vadeli değer üretme anlayışı üzerine
                  kuruyoruz.
                </p>
              </div>
            </div>

            <div className="mt-14 border-t border-ink/15 md:mt-20">
              {principles.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[90px_.8fr_1.2fr] md:items-start md:py-9"
                >
                  <span className="text-xs font-bold text-green">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-medium tracking-[-.03em] md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-ink/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CORPORATE MEDIA
      ======================================== */}

      <section className="border-t border-ink/12 py-20 md:py-32">
        <Container>
          <motion.div {...reveal}>
            <div className="mb-10 flex items-end justify-between md:mb-14">
              <div>
                <p className="eyebrow">
                  06 / TAMİS
                </p>

                <h2 className="mt-5 text-[clamp(2.7rem,10vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.055em]">
                  Mühendisliğin
                  <br />
                  gerçekleştiği yer.
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.35fr_.65fr]">
              <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10]">
                <span>FACILITY / TEAM</span>

                <small>
                  Ana kurumsal fotoğraf
                </small>

                <div className="media-code">
                  MEDIA C03
                </div>
              </div>

              <div className="media-placeholder aspect-[4/5] min-h-0">
                <span>ENGINEERING DETAIL</span>

                <small>
                  Mühendislik detay fotoğrafı
                </small>

                <div className="media-code">
                  MEDIA C04
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CONTACT
      ======================================== */}

      <section className="px-3 pb-3 md:px-6 md:pb-6">
        <div className="overflow-hidden bg-green text-white">
          <Container className="py-16 md:py-28">
            <motion.div {...reveal}>
              <p className="eyebrow text-white/50">
                07 / İletişim
              </p>

              <div className="mt-8 flex min-w-0 flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-4xl text-[clamp(3rem,13vw,5rem)] font-medium leading-[0.94] tracking-[-0.055em] md:text-8xl">
                  Geleceğin teknolojisini birlikte geliştirelim.
                </h2>

                <Link
                  to="/iletisim"
                  className="inline-flex w-fit shrink-0 items-center gap-3 border border-white/35 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] transition hover:bg-white hover:text-green"
                >
                  İletişim
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </Container>
        </div>
      </section>
    </main>
  );
}