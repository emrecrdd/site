import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "../components/ui/Container";
import { reveal } from "../components/ui/PageKit";

const capabilities = [
  {
    k: "Üretim",
    t: "CNC Talaşlı İmalat",
    c: "Dik işleme, CNC ve üniversal tornalama ile hassas parça üretimi.",
    to: "/yetkinlikler#cnc",
  },
  {
    k: "Mühendislik",
    t: "Tasarım & Prototipleme",
    c: "Teknik ihtiyacın tasarımdan fiziksel prototipe ve üretilebilir çözüme taşınması.",
    to: "/yetkinlikler#prototipleme",
  },
  {
    k: "Geliştirme",
    t: "Savunma & Havacılık Ar-Ge",
    c: "Üretim kabiliyetleriyle desteklenen Ar-Ge ve prototip geliştirme çalışmaları.",
    to: "/ar-ge",
  },
];

const capacities = [
  ["1000 × 600", "CNC dik işleme"],
  ["1000 mm × 10 inç", "CNC tornalama"],
  ["4000 × 800 mm", "Tornalama & derin delme"],
  ["1500 × 350 mm", "Üniversal tornalama"],
  ["160 ton", "Hidrolik pres"],
];

const materials = [
  "4140",
  "8620",
  "1040",
  "CK45",
  "Hardox 450–500",
  "7000 Seri Alüminyum",
  "316 Paslanmaz",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="pt-[84px]">
        <Container className="grid min-h-[calc(100svh-84px)] min-w-0 lg:grid-cols-12">
          <motion.div
            {...reveal}
            className="flex min-w-0 flex-col justify-between py-9 lg:col-span-6 lg:pr-14"
          >
            <div className="flex items-center justify-between gap-5">
              <p className="eyebrow text-green">
                Savunma & Havacılık
              </p>

              <p className="micro-label hidden sm:block">
                Ankara · 1987
              </p>
            </div>

            <div className="py-14 lg:py-16">
              <h1 className="max-w-[760px] text-[clamp(3.35rem,6.25vw,7.35rem)] font-medium leading-[.84] tracking-[-.072em]">
                Hassas üretim
                <br />
                <span className="text-green">
                  İleri mühendislik
                </span>
              </h1>

              <p className="copy mt-9 max-w-xl border-t rule pt-7">
                CNC talaşlı imalat, tasarım ve prototipleme
                kabiliyetlerini savunma ve havacılık odaklı
                mühendislik çalışmalarıyla bir araya getiriyoruz.
              </p>

              <Link
                to="/yetkinlikler"
                className="btn mt-8"
              >
                Yetkinlikleri keşfet
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="flex items-center gap-3 micro-label">
              <ArrowDown size={12} />
              Üretim kabiliyetlerini keşfet
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="media min-h-[500px] lg:col-span-6 lg:min-h-0"
          >
            <video
              src="/media/real/uretim.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="media-shade" />

            <span className="media-label !text-white">
              TAMİS / ÜRETİM
            </span>
          </motion.div>
        </Container>
      </section>

      {/* YETKİNLİKLER */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">Yetkinlikler</p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Mühendislik
                <br />
                <span className="text-green">
                  üretimle tamamlanır
                </span>
              </h2>

              <p className="copy mt-9 max-w-2xl border-t rule pt-7">
                Tasarım kararından işlenmiş parçaya kadar,
                üretilebilirlik odağını koruyan bütünleşik bir
                yaklaşım.
              </p>
            </div>
          </motion.div>

          <div className="mt-16 border-t rule">
            {capabilities.map((item) => (
              <Link
                key={item.t}
                to={item.to}
                className="group grid gap-5 border-b rule py-8 md:grid-cols-12 md:items-center"
              >
                <p className="micro-label text-green md:col-span-2">
                  {item.k}
                </p>

                <h3 className="text-3xl font-medium tracking-[-.045em] md:col-span-4 md:text-4xl">
                  {item.t}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-ink/50 md:col-span-5">
                  {item.c}
                </p>

                <ArrowUpRight
                  className="text-ink/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green md:justify-self-end"
                  size={18}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ÜRETİM ALTYAPISI */}
      <section className="technical-grid bg-green py-24 text-white md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="micro-label !text-white/45">
                Üretim Altyapısı
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Rakamlarla
                <br />
                <span className="text-white/40">
                  üretim gücü
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
                Dik işleme, tornalama, derin delme ve pres
                altyapısı tek üretim disiplini altında.
              </p>

              <Link
                to="/uretim-altyapisi"
                className="btn btn-light mt-9"
              >
                Makine parkı
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-white/15 lg:pl-12">
              <div className="grid sm:grid-cols-2">
                {capacities.map(([value, label], index) => (
                  <div
                    key={label}
                    className={`border-b border-white/15 py-8 sm:p-8 ${
                      index % 2 === 0 ? "sm:border-r" : ""
                    }`}
                  >
                    <p className="text-[clamp(2rem,3.5vw,3.6rem)] font-medium tracking-[-.055em]">
                      {value}
                    </p>

                    <p className="data-label">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MALZEME KABİLİYETİ */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
            <div className="media min-h-[520px] lg:col-span-7">
              <img
                src="/media/real/cnc-isleme.jpeg"
                alt="TAMİS CNC talaşlı imalat"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="media-shade" />

              <span className="media-label !text-white">
                CNC / TALAŞLI İMALAT
              </span>
            </div>

            <div className="flex flex-col justify-between lg:col-span-5 lg:pl-8">
              <div>
                <p className="eyebrow">
                  Malzeme Kabiliyeti
                </p>

                <h2 className="mt-8 text-5xl font-medium leading-[.92] tracking-[-.055em] md:text-6xl">
                  Zorlu malzemeler
                  <br />
                  <span className="text-green">
                    Hassas sonuçlar
                  </span>
                </h2>
              </div>

              <div className="mt-12 border-t rule">
                {materials.map((material) => (
                  <div
                    key={material}
                    className="flex items-center justify-between gap-6 border-b rule py-4"
                  >
                    <span className="text-lg font-medium">
                      {material}
                    </span>

                    <span className="micro-label text-right">
                      İşlenen hammadde
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* KALİTE KONTROL */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="border-t rule pt-8">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow text-green">
                  Kalite Kontrol
                </p>

                <h2 className="mt-8 max-w-4xl text-5xl font-medium leading-[.9] tracking-[-.06em] md:text-7xl">
                  Hassas üretim
                  <br />
                  <span className="text-green">
                    hassas ölçümle tamamlanır
                  </span>
                </h2>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="max-w-xl text-base leading-8 text-ink/52">
                  TAMİS'in kalite kontrol altyapısında CMM ölçüm
                  cihazı ve yüksek hassasiyetli ölçüm ekipmanları
                  yer alır.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-y rule md:grid-cols-2">
              <div className="py-9 md:border-r md:pr-12">
                <p className="micro-label text-green">
                  CMM Ölçüm
                </p>

                <h3 className="mt-5 text-3xl font-medium tracking-[-.045em] md:text-4xl">
                  Koordinat ölçüm teknolojisi
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-ink/48">
                  Boyutsal kontroller için kullanılan koordinat
                  ölçüm altyapısı.
                </p>
              </div>

              <div className="py-9 md:pl-12">
                <p className="micro-label text-green">
                  Hassas Ölçüm
                </p>

                <h3 className="mt-5 text-3xl font-medium tracking-[-.045em] md:text-4xl">
                  Üretim sonrası kontrol
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-ink/48">
                  Üretim sonrası kontrollerde kullanılan yüksek
                  hassasiyetli ölçüm ekipmanları.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* KURUMSAL */}
      <section className="border-t rule py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">Kurumsal</p>

              <h2 className="mt-8 title">
                1987'den
                <br />
                <span className="text-green">
                  bugüne
                </span>
              </h2>

              <p className="copy mt-8">
                Ankara merkezli TAMİS, geçmiş kuşaklardan gelen
                sanayi tecrübesini üretim ve sürekli Ar-Ge
                çalışmalarıyla ileri taşıyan bir aile şirketidir.
              </p>

              <Link
                to="/kurumsal"
                className="btn mt-8"
              >
                TAMİS'i tanıyın
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="media min-h-[500px] lg:col-span-7">
              <img
                src="/media/real/universal-torna.jpeg"
                alt="TAMİS üniversal tornalama altyapısı"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="media-shade" />

              <span className="media-label !text-white">
                TAMİS / 1987
              </span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}