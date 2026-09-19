import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import Container from "../components/ui/Container";
import { reveal } from "../components/ui/PageKit";

const caps = [
  [
    "Savunma Sistemleri",
    "Sistem seviyesi mühendislik, entegrasyon ve doğrulama yaklaşımı.",
    "/yetkinlikler#savunma",
  ],
  [
    "Elektronik Teknolojiler",
    "Gömülü sistemler, kontrol elektroniği ve elektronik tasarım.",
    "/yetkinlikler#elektronik",
  ],
  [
    "Otonom Sistemler",
    "Algılama, karar ve kontrol katmanlarını bir araya getiren platformlar.",
    "/yetkinlikler#otonom",
  ],
  [
    "Yazılım & Yapay Zekâ",
    "Kritik sistemler için güvenilir yazılım ve veri odaklı çözümler.",
    "/yetkinlikler#yazilim",
  ],
];

const process = [
  {
    title: "Araştırma",
    copy: "Problemi ve teknoloji alanını anlamak.",
  },
  {
    title: "Tasarım",
    copy: "Gereksinimleri sistem mimarisine dönüştürmek.",
  },
  {
    title: "Prototip",
    copy: "Yaklaşımı erken aşamada fiziksel olarak sınamak.",
  },
  {
    title: "Doğrulama",
    copy: "Tasarımı ölçmek, test etmek ve geliştirmek.",
  },
  {
    title: "Entegrasyon",
    copy: "Alt sistemleri çalışan bir bütün haline getirmek.",
  },
];

const systemLayers = [
  "Algılama & Veri",
  "Elektronik & Kontrol",
  "Yazılım & Otonomi",
  "Sistem Entegrasyonu",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}

      <section className="pt-[84px]">
        <Container className="grid min-h-[calc(100svh-84px)] lg:grid-cols-12">
          <motion.div
            {...reveal}
            className="flex flex-col justify-between py-9 lg:col-span-5 lg:pr-12"
          >
            <div>
              <p className="eyebrow text-green">
                Türkiye · İleri Teknoloji
              </p>
            </div>

            <div className="py-16">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[.17em] text-green">
                TAMİS Teknoloji
              </p>

              <h1 className="display">
                Fikirden
                <br />
                <span className="text-green">
                  sisteme.
                </span>
              </h1>

              <p className="copy mt-9 max-w-lg border-t rule pt-7">
                Savunma, elektronik ve ileri teknoloji
                alanlarında yüksek katma değerli sistemler
                geliştiriyoruz.
              </p>

              <Link
                to="/yetkinlikler"
                className="btn mt-8"
              >
                Yetkinlikleri keşfet
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.18em] text-ink/30">
              <ArrowDown size={12} />
              Keşfetmek için kaydır
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="media relative min-h-[420px] min-w-0 w-full max-w-full overflow-hidden md:min-h-[520px] lg:col-span-7 lg:min-h-0"
          >
            <img
              src="/media/home/hero/home-hero.png"
              alt="Hassas metal işleme ve CNC üretim detayı"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
            
          </motion.div>
        </Container>
      </section>

      {/* YAKLAŞIM */}

      <section className="bg-white py-24 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Yaklaşım
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Teknolojiyi yalnızca
                <br />
                kullanmıyoruz.{" "}
                <span className="text-green">
                  Geliştiriyoruz.
                </span>
              </h2>

              <p className="copy mt-10 max-w-2xl border-t rule pt-8">
                Araştırma, tasarım, prototipleme, doğrulama ve
                sistem entegrasyonunu aynı mühendislik
                yaklaşımının parçaları olarak ele alıyoruz.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* YETKİNLİKLER */}

      <section className="border-y rule">
        <Container>
          <div className="grid lg:grid-cols-12">
            <div className="py-16 lg:col-span-4 lg:border-r rule lg:pr-12">
              <p className="eyebrow">
                Yetkinlikler
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.92] tracking-[-.055em]">
                Disiplinler
                <br />
                <span className="text-green">
                  birlikte çalışır.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-8">
              {caps.map(([title, copy, to]) => (
                <Link
                  key={title}
                  to={to}
                  className="group grid gap-4 border-b rule py-7 md:grid-cols-[1fr_auto] md:items-center md:px-8"
                >
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-.04em]">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-ink/45">
                      {copy}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-ink/25 transition-colors group-hover:text-green"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SİSTEM MİMARİSİ */}

      <section className="technical-grid bg-green py-24 text-white md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
                Sistem Mimarisi
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Tek teknoloji değil.
                <br />
                <span className="text-white/40">
                  Bütün sistem.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-white/15 lg:pl-12">
              <div className="grid md:grid-cols-2">
                {systemLayers.map((title) => (
                  <div
                    key={title}
                    className="border-b border-white/15 py-8 md:p-8"
                  >
                    <h3 className="text-2xl">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/48">
                      Birbirinden kopuk bileşenler yerine,
                      birlikte çalışan teknoloji katmanları.
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/teknolojiler"
                className="btn btn-light mt-10"
              >
                Teknoloji alanları
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ÜRÜNLER */}

      <section className="bg-[#e2e7e1] py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                Ürünler
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Mühendislik
                <br />
                <span className="text-green">
                  ürüne dönüşür.
                </span>
              </h2>

              <p className="copy mt-8 max-w-sm">
                Doğrulanmış ürün bilgileri geldiğinde sistem
                aileleri burada güçlü görsel anlatımla
                sunulacak.
              </p>

              <Link
                to="/urunler"
                className="btn mt-8"
              >
                Ürünleri incele
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="media relative aspect-[16/10] min-w-0 overflow-hidden lg:col-span-8">
              <img
                src="/media/home/products/home-product.png"
                alt="TAMİS ürün sistemi"
                className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
                onError={(event) => { event.currentTarget.style.display = "none"; }}
              />
              <span className="media-label">FEATURED SYSTEM / PRODUCT RENDER</span>
            </div>
          </div>
        </Container>
      </section>

      {/* MÜHENDİSLİK */}

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Mühendislik
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Fikirden,
                <br />
                <span className="text-green">
                  doğrulanmış sisteme.
                </span>
              </h2>

              <div className="mt-14 border-t rule">
                {process.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-3 border-b rule py-7 md:grid-cols-12"
                  >
                    <h3 className="text-2xl font-medium md:col-span-5">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-ink/45 md:col-span-7">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AR-GE */}

      <section className="border-y rule py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="media relative aspect-[4/3] min-w-0 overflow-hidden lg:col-span-6">
              <img
                src="/media/home/research/home-research.png"
                alt="Araştırma ve geliştirme çalışması"
                className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
                onError={(event) => { event.currentTarget.style.display = "none"; }}
              />
             
            </div>

            <div className="flex flex-col justify-between lg:col-span-6 lg:pl-8">
              <div>
                <p className="eyebrow">
                  Araştırma &amp; Geliştirme
                </p>

                <h2 className="mt-9 title">
                  Yarının
                  <br />
                  gereksinimleri
                  <br />
                  <span className="text-green">
                    için.
                  </span>
                </h2>
              </div>

              <div className="mt-12 border-t rule pt-7">
                <p className="copy max-w-lg">
                  Bugünün ihtiyaçlarının ötesinde, gelecekte
                  ihtiyaç duyulacak teknolojilere odaklanan
                  uzun vadeli mühendislik yaklaşımı.
                </p>

                <Link
                  to="/ar-ge"
                  className="btn mt-7"
                >
                  Ar-Ge yaklaşımı
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* KURUMSAL */}

      <section className="technical-grid bg-[#e1e5df] py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Kurumsal
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Mühendislik odağında
                <br />
                <span className="text-green">
                  büyüyen teknoloji şirketi.
                </span>
              </h2>

              <div className="media relative mt-12 aspect-[16/7] min-w-0 overflow-hidden">
                <img
                  src="/media/home/corporate/home-corporate.png"
                  alt="Kurumsal mühendislik ve teknoloji ortamı"
                  className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
               
              </div>

              <Link
                to="/kurumsal"
                className="btn mt-8"
              >
                TAMİS'i tanıyın
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}