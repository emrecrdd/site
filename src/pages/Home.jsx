import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    number: "01",
    code: "DEFENCE",
    title: "Savunma Sistemleri",
    description:
      "Sistem seviyesi mühendislik, entegrasyon ve doğrulama yaklaşımı.",
    to: "/yetkinlikler#savunma",
  },
  {
    number: "02",
    code: "ELECTRONICS",
    title: "Elektronik Teknolojiler",
    description:
      "Gömülü sistemler, kontrol elektroniği ve elektronik tasarım yetkinlikleri.",
    to: "/yetkinlikler#elektronik",
  },
  {
    number: "03",
    code: "AUTONOMY",
    title: "Otonom Sistemler",
    description:
      "Algılama, karar ve kontrol katmanlarını bir araya getiren platform teknolojileri.",
    to: "/yetkinlikler#otonom",
  },
  {
    number: "04",
    code: "SOFTWARE",
    title: "Yazılım & Yapay Zekâ",
    description:
      "Kritik sistemler için güvenilir yazılım ve veri odaklı çözümler.",
    to: "/yetkinlikler#yazilim",
  },
];

const process = [
  {
    number: "01",
    title: "Araştırma",
    description: "Problemi ve teknoloji alanını anlamak.",
  },
  {
    number: "02",
    title: "Tasarım",
    description: "Gereksinimleri sistem mimarisine dönüştürmek.",
  },
  {
    number: "03",
    title: "Prototip",
    description: "Yaklaşımı erken aşamada fiziksel olarak sınamak.",
  },
  {
    number: "04",
    title: "Doğrulama",
    description: "Tasarımı ölçmek, test etmek ve geliştirmek.",
  },
  {
    number: "05",
    title: "Entegrasyon",
    description: "Alt sistemleri çalışan bir bütün haline getirmek.",
  },
];

/* =========================================================
   MOTION
========================================================= */

const reveal = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.16,
  },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
};

const imageReveal = {
  initial: {
    opacity: 0,
    scale: 0.985,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
  viewport: {
    once: true,
    amount: 0.12,
  },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1],
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b border-ink/12 pt-[82px]">
        <Container className="grid lg:min-h-[calc(100svh-82px)] lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* HERO CONTENT */}

          <motion.div
            {...reveal}
            className="relative flex min-w-0 flex-col py-9 md:py-12 lg:col-span-5 lg:justify-between lg:py-10"
          >
            {/* TOP */}

            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-green" />

                <span className="eyebrow text-green">
                  Türkiye · İleri Teknoloji
                </span>
              </div>

              <span className="hidden text-[9px] font-bold uppercase tracking-[.18em] text-ink/25 md:block">
                TAMİS / 01
              </span>
            </div>

            {/* MAIN */}

            <div className="py-16 md:py-20 lg:py-12">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[.17em] text-green">
                TAMİS Teknoloji
              </p>

              <h1 className="max-w-[720px] text-[clamp(4rem,16vw,6.4rem)] font-medium leading-[.82] tracking-[-.075em] lg:text-[clamp(5rem,7.2vw,8.3rem)]">
                Fikirden
                <br />
                <span className="text-green">sisteme.</span>
              </h1>

              <div className="mt-9 border-t border-ink/15 pt-7 md:mt-11">
                <p className="max-w-[500px] text-base leading-8 text-ink/55 md:text-[17px]">
                  Savunma, elektronik ve ileri teknoloji alanlarında yüksek
                  katma değerli sistemler geliştiriyoruz.
                </p>

                <Link
                  to="/yetkinlikler"
                  className="group mt-8 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.16em]"
                >
                  Yetkinlikleri keşfet

                  <span className="grid size-9 place-items-center border border-ink/20 transition-all duration-300 group-hover:border-green group-hover:bg-green group-hover:text-white">
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </div>

            {/* BOTTOM */}

            <div className="hidden items-center justify-between border-t border-ink/12 pt-5 lg:flex">
              <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                <ArrowDown size={13} strokeWidth={1.6} />
                Keşfetmek için kaydır
              </div>

              <span className="text-[8px] font-bold uppercase tracking-[.18em] text-ink/25">
                01 — 07
              </span>
            </div>
          </motion.div>

          {/* HERO MEDIA */}

          <motion.div
            {...imageReveal}
            className="relative -mx-5 min-w-0 md:-mx-10 lg:col-span-7 lg:mx-0 lg:border-l lg:border-ink/12 lg:pl-10 xl:pl-14"
          >
            <div className="media-placeholder hero-media h-full">
              <span>HERO PHOTO / FILM</span>

              <small>
                Desktop 16:9 · Mobile 4:5
                <br />
                Ürün / tesis / mühendislik ana görseli
              </small>

              <div className="absolute left-5 top-5 z-[2] border border-green/20 bg-paper/80 px-3 py-2 backdrop-blur-md">
                <span className="text-[8px] font-bold uppercase tracking-[.18em] text-green">
                  Engineering / Technology
                </span>
              </div>

              <div className="media-code">
                MEDIA 01
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          MANIFESTO
      ===================================================== */}

      <section className="bg-white py-20 md:py-32 lg:py-40">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-14 lg:grid-cols-12 lg:gap-10"
          >
            {/* LEFT */}

            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-green" />
                <p className="eyebrow">01 / TAMİS</p>
              </div>

              <p className="mt-6 max-w-[220px] text-xs leading-6 text-ink/42">
                Teknoloji geliştirme yaklaşımı
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-9">
              <h2 className="max-w-[1100px] text-[clamp(3rem,8vw,6.8rem)] font-medium leading-[.94] tracking-[-.065em]">
                Teknolojiyi yalnızca
                <br className="hidden md:block" /> kullanmıyoruz.{" "}
                <span className="text-green">
                  Geliştiriyoruz.
                </span>
              </h2>

              <div className="mt-12 grid gap-10 border-t border-ink/15 pt-8 md:grid-cols-2 md:gap-16">
                <p className="max-w-xl text-base leading-8 text-ink/55">
                  Araştırma, tasarım, prototipleme, doğrulama ve sistem
                  entegrasyonunu aynı teknoloji vizyonunun parçaları olarak ele
                  alan bütünleşik bir mühendislik yaklaşımı.
                </p>

                <div className="flex md:justify-end">
                  <Link
                    to="/kurumsal"
                    className="group inline-flex h-fit items-center gap-3 border-b border-ink/30 pb-2 text-[10px] font-bold uppercase tracking-[.16em] transition-colors hover:border-green hover:text-green"
                  >
                    Kurumsal yaklaşım

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="border-y border-ink/12 bg-paper py-20 md:py-28 lg:py-36">
        <Container>
          {/* HEADING */}

          <motion.div
            {...reveal}
            className="grid gap-8 border-b border-ink/15 pb-10 md:pb-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">
                02 / Yetkinlikler
              </p>
            </div>

            <div className="flex items-end justify-between gap-10 lg:col-span-9">
              <h2 className="text-[clamp(2.8rem,7vw,5.8rem)] font-medium leading-[.92] tracking-[-.06em]">
                Disiplinler
                <br />
                birlikte çalışır.
              </h2>

              <Link
                to="/yetkinlikler"
                className="group hidden items-center gap-3 pb-2 text-[10px] font-bold uppercase tracking-[.16em] md:flex"
              >
                Tüm yetkinlikler
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* CONTENT */}

          <div className="grid lg:grid-cols-12">
            {/* CAPABILITY LIST */}

            <div className="lg:col-span-7 lg:pr-12 xl:pr-16">
              {capabilities.map((item) => (
                <motion.div
                  {...reveal}
                  key={item.number}
                >
                  <Link
                    to={item.to}
                    className="group relative grid gap-4 border-b border-ink/15 py-8 md:grid-cols-[55px_1fr_auto] md:items-start md:py-9"
                  >
                    <span className="text-[10px] font-bold tracking-[.16em] text-green">
                      {item.number}
                    </span>

                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-[.18em] text-ink/30">
                        {item.code}
                      </span>

                      <h3 className="mt-2 text-[clamp(1.55rem,4vw,2.25rem)] font-medium leading-tight tracking-[-.04em] transition-transform duration-300 group-hover:translate-x-1">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-ink/48">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      className="hidden text-ink/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green md:block"
                    />

                    <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-green transition-transform duration-500 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/yetkinlikler"
                className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] md:hidden"
              >
                Tüm yetkinlikler
                <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* MEDIA */}

            <motion.div
              {...imageReveal}
              className="mt-12 lg:col-span-5 lg:mt-0 lg:border-l lg:border-ink/12 lg:pl-12 xl:pl-16"
            >
              <div className="media-placeholder aspect-[4/5] min-h-0 lg:sticky lg:top-28 lg:min-h-[610px]">
                <span>CAPABILITY PHOTO</span>

                <small>
                  Mühendislik / sistem / teknoloji
                  <br />
                  Mobile 4:5
                </small>

                <div className="media-code">
                  MEDIA 02
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FEATURED SYSTEM
      ===================================================== */}

      <section className="bg-[#e7ebe6] py-20 md:py-28 lg:py-36">
        <Container>
          <motion.div {...reveal}>
            {/* TOP */}

            <div className="grid gap-8 border-b border-ink/15 pb-9 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="eyebrow">
                  03 / Ürünler
                </p>
              </div>

              <div className="flex items-end justify-between gap-10 lg:col-span-9">
                <h2 className="max-w-4xl text-[clamp(3rem,7vw,6rem)] font-medium leading-[.92] tracking-[-.06em]">
                  Mühendislik
                  <br />
                  <span className="text-green">
                    ürüne dönüşür.
                  </span>
                </h2>

                <span className="hidden text-[9px] font-bold uppercase tracking-[.18em] text-ink/30 md:block">
                  Product / System
                </span>
              </div>
            </div>

            {/* FEATURE */}

            <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col justify-between lg:col-span-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[.18em] text-green">
                    Öne çıkan sistem
                  </span>

                  <h3 className="mt-5 max-w-sm text-4xl font-medium leading-[.98] tracking-[-.05em] md:text-5xl">
                    Ürün vitrini için hazır.
                  </h3>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-ink/50">
                    Doğrulanmış ürün bilgileri hazır olduğunda bu alan TAMİS'in
                    öne çıkan sistemini güçlü bir ürün görseliyle sunacak.
                  </p>
                </div>

                <Link
                  to="/urunler"
                  className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-ink/30 pb-2 text-[10px] font-bold uppercase tracking-[.16em] transition-colors hover:border-green hover:text-green"
                >
                  Ürünleri incele

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <motion.div
                {...imageReveal}
                className="lg:col-span-8"
              >
                <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/9] md:min-h-[500px]">
                  <span>FEATURED SYSTEM</span>

                  <small>
                    Ürün renderı / stüdyo çekimi
                    <br />
                    Desktop 16:9
                  </small>

                  <div className="absolute left-5 top-5 z-[2]">
                    <span className="text-[8px] font-bold uppercase tracking-[.18em] text-green/60">
                      TAMİS / PRODUCT
                    </span>
                  </div>

                  <div className="media-code">
                    PRODUCT 01
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          ENGINEERING PROCESS
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-8 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">
                04 / Mühendislik Süreci
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                Fikirden,
                <br />
                <span className="text-green">
                  doğrulanmış sisteme.
                </span>
              </h2>
            </div>
          </motion.div>

          <div className="mt-14 border-t border-ink/15 md:mt-20">
            {process.map((item) => (
              <motion.div
                {...reveal}
                key={item.number}
                className="group grid gap-5 border-b border-ink/15 py-7 md:grid-cols-12 md:items-center md:py-9"
              >
                <div className="md:col-span-3">
                  <span className="text-[10px] font-bold tracking-[.18em] text-green">
                    {item.number}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-2xl font-medium tracking-[-.04em] md:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between gap-8 md:col-span-5">
                  <p className="max-w-sm text-sm leading-7 text-ink/45">
                    {item.description}
                  </p>

                  <span className="hidden h-px w-8 bg-ink/15 transition-all duration-500 group-hover:w-14 group-hover:bg-green md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          R&D
      ===================================================== */}

      <section className="border-y border-ink/12 bg-paper py-20 md:py-28 lg:py-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* MEDIA */}

            <motion.div
              {...imageReveal}
              className="lg:col-span-6"
            >
              <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[5/4] lg:min-h-[620px] lg:aspect-auto">
                <span>R&amp;D / LAB PHOTO</span>

                <small>
                  Laboratuvar · mühendis · prototip
                </small>

                <div className="media-code">
                  MEDIA 03
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              {...reveal}
              className="flex flex-col justify-between lg:col-span-6 lg:py-4"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-green" />

                  <p className="eyebrow">
                    05 / Araştırma &amp; Geliştirme
                  </p>
                </div>

                <h2 className="mt-10 text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-[.88] tracking-[-.065em]">
                  Yarının
                  <br />
                  gereksinimleri
                  <br />
                  <span className="text-green">
                    için.
                  </span>
                </h2>
              </div>

              <div className="mt-14 border-t border-ink/15 pt-8 lg:mt-20">
                <p className="max-w-lg text-base leading-8 text-ink/52">
                  Bugünün ihtiyaçlarını karşılamanın ötesinde, gelecekte ihtiyaç
                  duyulacak teknolojileri bugünden geliştirmeyi hedefleyen uzun
                  vadeli bir yaklaşım.
                </p>

                <Link
                  to="/ar-ge"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-[10px] font-bold uppercase tracking-[.16em] transition-colors hover:border-green hover:text-green"
                >
                  Ar-Ge yaklaşımı

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CORPORATE
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12"
          >
            {/* LABEL */}

            <div className="lg:col-span-3">
              <p className="eyebrow">
                06 / Kurumsal
              </p>
            </div>

            {/* CONTENT */}

            <div className="lg:col-span-9">
              <div className="grid gap-10 md:grid-cols-[1.15fr_.85fr] md:items-end">
                <h2 className="max-w-4xl text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[.93] tracking-[-.06em]">
                  Mühendislik
                  <br />
                  odağında büyüyen
                  <br />
                  <span className="text-green">
                    teknoloji şirketi.
                  </span>
                </h2>

                <div className="md:pb-2">
                  <p className="max-w-sm text-sm leading-7 text-ink/50">
                    Kurumsal fotoğraf, tesis ve ekip içerikleri hazır olduğunda
                    bu bölüm TAMİS'in yapısını ve çalışma yaklaşımını
                    destekleyecek.
                  </p>

                  <Link
                    to="/kurumsal"
                    className="group mt-7 inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-[10px] font-bold uppercase tracking-[.16em] transition-colors hover:border-green hover:text-green"
                  >
                    TAMİS'i tanıyın

                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>

              <motion.div
                {...imageReveal}
                className="mt-12"
              >
                <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/7] md:min-h-[470px]">
                  <span>FACILITY / TEAM PHOTO</span>

                  <small>
                    Tesis / ekip / çalışma ortamı
                    <br />
                    Wide editorial image
                  </small>

                  <div className="media-code">
                    MEDIA 04
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT / PRE-FOOTER
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-ink/12 bg-[#e5e8e3]">
        {/* DECORATIVE TECH GRID */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(24,62,50,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,62,50,.07) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <Container className="relative">
          <motion.div
            {...reveal}
            className="grid min-h-[500px] py-16 md:min-h-[600px] md:py-20 lg:grid-cols-12 lg:items-stretch lg:py-0"
          >
            {/* LEFT */}

            <div className="flex flex-col justify-between lg:col-span-3 lg:border-r lg:border-ink/15 lg:py-20 lg:pr-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-green" />

                <span className="eyebrow text-green">
                  07 / İletişim
                </span>
              </div>

              <div className="mt-16 hidden lg:block">
                <span className="text-[8px] font-bold uppercase tracking-[.2em] text-ink/30">
                  TAMİS Teknoloji
                </span>

                <div className="mt-4 h-16 w-px bg-green/35" />
              </div>
            </div>

            {/* MAIN CTA */}

            <div className="flex flex-col justify-between pt-16 lg:col-span-9 lg:py-20 lg:pl-14 xl:pl-20">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-ink/35">
                  Bir sonraki adım
                </span>

                <h2 className="mt-7 max-w-[1050px] text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[.86] tracking-[-.07em] text-ink">
                  Geleceğin
                  <br />
                  teknolojisini
                  <br />

                  <span className="text-green">
                    birlikte geliştirelim.
                  </span>
                </h2>
              </div>

              <div className="mt-14 flex flex-col gap-8 border-t border-ink/15 pt-8 md:flex-row md:items-end md:justify-between lg:mt-20">
                <p className="max-w-md text-sm leading-7 text-ink/50">
                  Kurumsal iletişim ve genel bilgi talepleri için TAMİS
                  Teknoloji ile iletişime geçebilirsiniz.
                </p>

                <Link
                  to="/iletisim"
                  className="group flex w-full items-center justify-between border-y border-ink/20 py-5 md:w-auto md:min-w-[260px]"
                >
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-[.18em] text-green">
                      İletişim
                    </span>

                    <span className="mt-1 block text-lg font-medium tracking-[-.035em] text-ink">
                      Bizimle iletişime geçin
                    </span>
                  </div>

                  <div className="ml-8 grid size-11 shrink-0 place-items-center border border-ink/20 transition-all duration-300 group-hover:border-green group-hover:bg-green group-hover:text-white">
                    <ArrowRight
                      size={16}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}