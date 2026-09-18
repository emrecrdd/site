import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MoveRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const caps = [
  [
    "01",
    "Savunma Sistemleri",
    "Sistem seviyesi mühendislik, entegrasyon ve doğrulama yaklaşımı.",
    "SAVUNMA",
  ],
  [
    "02",
    "Elektronik Teknolojiler",
    "Gömülü sistemler, kontrol elektroniği ve elektronik tasarım yetkinlikleri.",
    "ELEKTRONİK",
  ],
  [
    "03",
    "Otonom Sistemler",
    "Algılama, karar ve kontrol katmanlarını bir araya getiren platform teknolojileri.",
    "OTONOM",
  ],
  [
    "04",
    "Yazılım & Yapay Zekâ",
    "Kritik sistemler için güvenilir yazılım ve veri odaklı çözümler.",
    "YAZILIM",
  ],
];

const process = [
  "Araştırma",
  "Tasarım",
  "Prototip",
  "Doğrulama",
  "Entegrasyon",
];

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
    amount: 0.18,
  },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="relative border-b border-ink/12 pt-[82px]">
        <Container className="grid lg:min-h-[calc(100svh-82px)] lg:grid-cols-[.78fr_1.22fr] lg:gap-12 lg:py-10">
          <motion.div
            {...reveal}
            className="flex min-w-0 flex-col py-8 md:py-12 lg:justify-between lg:py-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 shrink-0 bg-green" />

              <span className="eyebrow text-green">
                Türkiye · İleri Teknoloji
              </span>
            </div>

            <div className="py-14 md:py-20 lg:py-8">
              <p className="mb-5 text-xs font-semibold text-green md:text-sm">
                TAMİS Teknoloji
              </p>

              <h1 className="max-w-[760px] text-[clamp(3.6rem,16vw,5.8rem)] font-semibold leading-[.84] tracking-[-.07em] lg:text-[clamp(5rem,7.4vw,8.5rem)]">
                Fikirden
                <br />
                sisteme.
              </h1>

              <p className="mt-7 max-w-[540px] text-base leading-7 text-ink/58 md:text-lg md:leading-8">
                Savunma, elektronik ve ileri teknoloji alanlarında yüksek
                katma değerli sistemler geliştiriyoruz.
              </p>

              <div className="mt-8">
                <Link to="/yetkinlikler" className="btn-primary">
                  Yetkinlikleri keşfet
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-ink/40 lg:flex">
              <ArrowDown size={14} />
              Keşfetmek için kaydır
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative -mx-5 min-w-0 md:-mx-10 lg:mx-0"
          >
            <div className="media-placeholder hero-media h-full">
              <span>HERO PHOTO / FILM</span>

              <small>
                Desktop 16:9 · Mobile 4:5
                <br />
                Ürün / tesis / mühendislik ana görseli
              </small>

              <div className="media-code">MEDIA 01</div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          MANIFESTO
      ======================================== */}

      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"
          >
            <div className="min-w-0">
              <p className="eyebrow">01 / TAMİS</p>

              <div className="media-placeholder mt-8 aspect-[4/5] w-full md:mt-10 md:max-w-sm">
                <span>ENGINEERING PHOTO</span>
                <small>4:5 portrait</small>

                <div className="media-code">
                  MEDIA
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:pt-20">
              <h2 className="max-w-5xl text-[clamp(2.7rem,11vw,4.2rem)] font-medium leading-[1.02] tracking-[-.055em] md:text-7xl">
                Teknolojiyi yalnızca kullanmıyoruz.{" "}
                <span className="text-green">
                  Geliştiriyoruz.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-ink/55 md:mt-9">
                Araştırma, tasarım, prototipleme, doğrulama ve sistem
                entegrasyonunu aynı teknoloji vizyonunun parçaları olarak ele
                alan bütünleşik bir mühendislik yaklaşımı.
              </p>

              <Link
                to="/kurumsal"
                className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em] md:mt-9"
              >
                Kurumsal yaklaşım
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CAPABILITIES
      ======================================== */}

      <section className="border-y border-ink/12 py-20 md:py-32">
        <Container>
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <div className="min-w-0">
              <p className="eyebrow">
                02 / Yetkinlikler
              </p>

              <h2 className="mt-4 text-[clamp(2.6rem,11vw,4rem)] font-semibold leading-[.98] tracking-[-.05em] md:text-6xl">
                Teknoloji alanları
              </h2>
            </div>

            <Link
              className="hidden items-center gap-3 text-xs font-bold uppercase tracking-[.15em] md:flex"
              to="/yetkinlikler"
            >
              Tümünü gör
              <MoveRight size={17} />
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-14">
            <div>
              {caps.map(([number, title, description]) => (
                <motion.div
                  {...reveal}
                  key={number}
                  className="group grid min-w-0 gap-3 border-t border-ink/18 py-7 md:grid-cols-[55px_1fr]"
                >
                  <span className="text-xs font-bold text-green">
                    {number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-2xl font-medium leading-tight tracking-[-.035em] md:text-3xl">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-ink/50">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}

              <Link
                className="mt-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.15em] md:hidden"
                to="/yetkinlikler"
              >
                Tümünü gör
                <MoveRight size={17} />
              </Link>
            </div>

            <div className="media-placeholder aspect-[4/5] min-h-0 lg:sticky lg:top-28 lg:aspect-auto lg:min-h-[560px]">
              <span>CAPABILITY PHOTO</span>

              <small>
                Mobile 4:5 · Desktop 16:10
                <br />
                Yetkinlik görsel alanı
              </small>

              <div className="media-code">
                MEDIA 02
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================
          FEATURED PRODUCT
      ======================================== */}

      <section className="bg-[#e9eee9] py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"
          >
            <div className="min-w-0">
              <p className="eyebrow">
                03 / Öne çıkan sistem
              </p>

              <h2 className="mt-5 max-w-xl text-[clamp(2.7rem,11vw,4rem)] font-semibold leading-[.98] tracking-[-.05em] md:text-6xl">
                Ürün vitrini için hazır.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-ink/52">
                Gerçek ürün ve kamuya açık bilgiler hazır olduğunda bu alan
                TAMİS'in öne çıkan sistemini güçlü bir ürün görseli ile
                sunacak.
              </p>

              <Link
                to="/urunler"
                className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.15em]"
              >
                Ürünleri incele
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/10] md:min-h-[420px]">
              <span>FEATURED PRODUCT</span>

              <small>
                Ürün renderı veya stüdyo çekimi
              </small>

              <div className="media-code">
                PRODUCT 01
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          ENGINEERING PROCESS
      ======================================== */}

      <section className="bg-white py-20 md:py-36">
        <Container>
          <p className="eyebrow">
            04 / Mühendislik süreci
          </p>

          <div className="mt-10 grid border-y border-ink/15 md:mt-12 md:grid-cols-5">
            {process.map((item, index) => (
              <motion.div
                {...reveal}
                key={item}
                className="grid grid-cols-[50px_1fr] border-b border-ink/15 py-7 last:border-b-0 md:block md:border-b-0 md:border-r md:px-6 md:py-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-xs font-bold text-green">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-xl font-medium tracking-[-.03em] md:mt-16">
                    {item}
                  </h3>

                  <p className="mt-3 max-w-sm text-xs leading-6 text-ink/45">
                    Sistem yaşam döngüsünün birbirini besleyen mühendislik
                    aşaması.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================
          R&D
      ======================================== */}

      <section className="py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className="media-placeholder aspect-[4/5] min-h-0 lg:min-h-[560px]">
              <span>R&D / LAB PHOTO</span>

              <small>
                Laboratuvar · mühendis · prototip
              </small>

              <div className="media-code">
                MEDIA 03
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center lg:pl-6">
              <p className="eyebrow">
                05 / Araştırma & Geliştirme
              </p>

              <h2 className="mt-5 text-[clamp(3rem,13vw,5rem)] font-medium leading-[.95] tracking-[-.055em] md:text-7xl">
                Yarının
                <br />
                gereksinimleri için.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-ink/55 md:mt-8">
                Bugünün ihtiyaçlarını karşılamanın ötesinde, gelecekte ihtiyaç
                duyulacak teknolojileri bugünden geliştirmeyi hedefleyen uzun
                vadeli bir yaklaşım.
              </p>

              <Link
                to="/ar-ge"
                className="mt-8 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em] md:mt-9"
              >
                Ar-Ge yaklaşımı
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CORPORATE
      ======================================== */}

      <section className="overflow-hidden bg-white py-20 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16"
          >
            <div className="min-w-0">
              <p className="eyebrow">
                06 / Kurumsal
              </p>

              <h2 className="mt-5 max-w-2xl text-[clamp(2.6rem,11vw,4.2rem)] font-semibold leading-[.96] tracking-[-.055em] lg:text-6xl">
                Mühendislik odağında büyüyen teknoloji şirketi.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-ink/52">
                Kurumsal fotoğraf, tesis ve ekip içerikleri hazır olduğunda bu
                bölüm TAMİS'in ölçeğini ve çalışma kültürünü anlatacak.
              </p>

              <Link
                to="/kurumsal"
                className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
              >
                TAMİS'i tanıyın
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="-mx-5 min-w-0 md:mx-0">
              <div className="media-placeholder aspect-[4/5] md:aspect-[16/10]">
                <span>FACILITY / TEAM PHOTO</span>

                <small>
                  Mobile 4:5 · Desktop 16:10
                </small>

                <div className="media-code">
                  MEDIA 04
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          CONTACT CTA
      ======================================== */}

      <section className="px-3 pb-3 md:px-6 md:pb-6">
        <div className="overflow-hidden bg-green text-white">
          <Container className="py-16 md:py-28">
            <p className="eyebrow text-white/50">
              07 / İletişim
            </p>

            <div className="mt-8 flex min-w-0 flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-4xl text-[clamp(3rem,13vw,5rem)] font-medium leading-[.94] tracking-[-.055em] md:text-8xl">
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
          </Container>
        </div>
      </section>
    </main>
  );
}