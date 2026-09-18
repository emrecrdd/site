import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  FileText,
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

const mediaCategories = [
  {
    number: "01",
    title: "Kurumsal Gelişmeler",
    description:
      "TAMİS Teknoloji'nin kurumsal gelişmeleri ve kamuya açık duyuruları için içerik alanı.",
  },
  {
    number: "02",
    title: "Teknoloji & Ar-Ge",
    description:
      "Araştırma, teknoloji geliştirme ve mühendislik çalışmalarına ilişkin yayınlar için içerik alanı.",
  },
  {
    number: "03",
    title: "Ürün & Sistemler",
    description:
      "Kamuya açık ürün, sistem ve teknoloji platformu gelişmeleri için içerik alanı.",
  },
];

const documents = [
  {
    type: "Kurumsal",
    title: "Kurumsal Tanıtım",
    meta: "PDF / İçerik hazırlanıyor",
  },
  {
    type: "Ürünler",
    title: "Ürün & Sistem Kataloğu",
    meta: "PDF / İçerik hazırlanıyor",
  },
  {
    type: "Basın",
    title: "Basın Kiti",
    meta: "ZIP / İçerik hazırlanıyor",
  },
];

export default function Media() {
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
                Medya / Haberler & Yayınlar
              </span>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <h1 className="max-w-6xl text-[clamp(4rem,15vw,7rem)] font-semibold leading-[.82] tracking-[-.075em] lg:text-[clamp(6rem,9vw,10rem)]">
                Gelişmeleri
                <br />
                <span className="text-green">paylaşıyoruz.</span>
              </h1>

              <div className="max-w-lg lg:pb-3">
                <p className="text-base leading-8 text-ink/55 md:text-lg">
                  TAMİS Teknoloji'ye ilişkin kurumsal gelişmeler,
                  teknoloji çalışmaları, yayınlar ve kamuya açık
                  materyaller için merkezi iletişim alanı.
                </p>

                <a
                  href="#basin"
                  className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
                >
                  Basın odası
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          FEATURED STORY
      ======================================== */}

      <section className="bg-white py-20 md:py-32">
        <Container>
          <motion.div {...reveal}>
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="eyebrow">
                  01 / Öne Çıkan
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.95] tracking-[-.06em]">
                  TAMİS'ten
                  <br />
                  <span className="text-green">
                    gelişmeler.
                  </span>
                </h2>
              </div>

              <span className="hidden text-[9px] font-bold uppercase tracking-[.18em] text-ink/35 md:block">
                MEDIA / 001
              </span>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
              <div className="media-placeholder aspect-[4/3] min-h-0 md:aspect-[16/9]">
                <span>FEATURED STORY</span>

                <small>
                  Haber / kurumsal gelişme görseli
                  <br />
                  16:9
                </small>

                <div className="media-code">
                  MEDIA 01
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.17em] text-green">
                    <span>Kurumsal</span>
                    <span className="size-1 rounded-full bg-green/30" />
                    <span>İçerik hazırlanıyor</span>
                  </div>

                  <h3 className="mt-6 text-3xl font-medium leading-[1.05] tracking-[-.045em] md:text-5xl">
                    Güncel gelişmeler burada yayınlanacak.
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-ink/55 md:text-base md:leading-8">
                    TAMİS Teknoloji'nin doğrulanmış kurumsal ve
                    teknolojik gelişmeleri hazır olduğunda bu alan
                    güncel haber akışının ana vitrini olacak.
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-3 border-t border-ink/15 pt-5 text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                  <MoveRight size={14} />
                  TAMİS / MEDIA
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          NEWS ARCHITECTURE
      ======================================== */}

      <section className="border-y border-ink/12 py-20 md:py-32">
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
              <div>
                <p className="eyebrow">
                  02 / Haberler
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.96] tracking-[-.055em]">
                  Teknoloji,
                  <br />
                  mühendislik ve
                  <br />
                  <span className="text-green">
                    kurumsal gündem.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-ink/55">
                  Haber altyapısı farklı içerik türlerinin düzenli ve
                  ölçeklenebilir biçimde yayınlanabileceği şekilde
                  kurgulandı.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-ink/15 md:grid-cols-3">
              {mediaCategories.map((item) => (
                <div
                  key={item.number}
                  className="group border-b border-ink/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-green">
                      {item.number}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                    />
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-ink/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          PRESS ROOM
      ======================================== */}

      <section
        id="basin"
        className="scroll-mt-[90px] bg-green py-20 text-white md:py-36"
      >
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
              <p className="eyebrow text-white/45">
                03 / Basın Odası
              </p>

              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                  Doğru bilgi.
                  <br />
                  <span className="text-white/45">
                    Tek merkez.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
                  Basın ve medya kuruluşları için kamuya açık kurumsal
                  bilgiler, görsel materyaller ve iletişim kaynakları bu
                  bölümde sunulacak.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-y border-white/20 md:mt-20 md:grid-cols-3">
              {[
                ["01", "Kurumsal Bilgiler"],
                ["02", "Görsel Materyaller"],
                ["03", "Basın İletişimi"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                >
                  <span className="text-xs font-bold text-white/40">
                    {number}
                  </span>

                  <h3 className="mt-12 text-2xl font-medium tracking-[-.04em]">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    İçerik hazırlanıyor.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          DOCUMENTS
      ======================================== */}

      <section
        id="dokumanlar"
        className="scroll-mt-[90px] bg-white py-20 md:py-36"
      >
        <Container>
          <motion.div {...reveal}>
            <div className="grid gap-10 lg:grid-cols-[.6fr_1.4fr] lg:gap-20">
              <p className="eyebrow">
                04 / Dokümanlar
              </p>

              <div>
                <h2 className="max-w-4xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.95] tracking-[-.055em]">
                  Kurumsal
                  <br />
                  <span className="text-green">
                    kaynak merkezi.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-ink/55">
                  Kurumsal tanıtım dosyaları, ürün katalogları ve
                  kamuya açık yayınlar hazır olduğunda bu alandan
                  erişilebilir olacak.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-ink/15">
              {documents.map((document, index) => (
                <div
                  key={document.title}
                  className="group grid gap-5 border-b border-ink/15 py-7 transition-colors duration-300 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8"
                >
                  <div className="flex size-12 items-center justify-center border border-ink/15 transition-colors duration-300 group-hover:border-green group-hover:text-green">
                    <FileText size={18} />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[.17em] text-green">
                        0{index + 1}
                      </span>

                      <span className="text-[9px] font-bold uppercase tracking-[.17em] text-ink/35">
                        {document.type}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-medium tracking-[-.035em] md:text-2xl">
                      {document.title}
                    </h3>

                    <p className="mt-2 text-xs text-ink/40">
                      {document.meta}
                    </p>
                  </div>

                  <div
                    className="inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[.15em] text-ink/30"
                    aria-disabled="true"
                  >
                    Hazırlanıyor
                    <Download size={15} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          MEDIA CONTACT
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
                  05 / İletişim
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,12vw,5rem)] font-medium leading-[.94] tracking-[-.055em] md:text-7xl">
                  Basın ve
                  <br />
                  kurumsal iletişim.
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