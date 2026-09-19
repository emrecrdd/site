import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import Container from "../components/ui/Container";
import { reveal } from "../components/ui/PageKit";

const capabilities = [
  {
    title: "CNC Talaşlı İmalat",
    copy: "CNC işleme ve tornalama altyapısıyla hassas parça imalatı.",
    to: "/yetkinlikler#cnc",
  },
  {
    title: "Tasarım & Prototipleme",
    copy: "Teknik ihtiyaçların tasarımdan fiziksel prototipe taşınması.",
    to: "/yetkinlikler#prototipleme",
  },
  {
    title: "Savunma Sanayii Ar-Ge",
    copy: "Savunma sanayiine yönelik Ar-Ge ve prototip çalışmalarının yürütülmesi.",
    to: "/ar-ge",
  },
];

const machines = [
  {
    value: "4 Eksen",
    title: "CNC Dik İşleme",
  },
  {
    value: "3 Eksen",
    title: "CNC Dik İşleme",
  },
  {
    value: "10 İnç",
    title: "CNC Torna",
  },
  {
    value: "4 Metre",
    title: "Metal Karot Delici Üniversal Torna",
  },
  {
    value: "1,5 Metre",
    title: "Üniversal Torna",
  },
  {
    value: "160 Ton",
    title: "Pres",
  },
];

const process = [
  {
    title: "İhtiyacın Tanımlanması",
    copy: "Teknik gereksinimlerin ve üretim ihtiyacının belirlenmesi.",
  },
  {
    title: "Tasarım",
    copy: "Gereksinimlerin üretilebilir bir tasarıma dönüştürülmesi.",
  },
  {
    title: "Prototipleme",
    copy: "Tasarımın fiziksel prototip üzerinden geliştirilmesi.",
  },
  {
    title: "İmalat",
    copy: "Parçaların uygun üretim ve işleme yöntemleriyle imal edilmesi.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}

      <section className="pt-[84px]">
        <Container className="grid min-h-[calc(100svh-84px)] min-w-0 lg:grid-cols-12">
          <motion.div
            {...reveal}
            className="flex min-w-0 flex-col justify-between py-9 lg:col-span-5 lg:pr-12"
          >
            <div>
              <p className="eyebrow text-green">
                Ankara · 1987'den Bugüne
              </p>
            </div>

            <div className="py-16">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[.17em] text-green">
                TAMİS Teknoloji
              </p>

              <h1 className="display max-w-full">
                Hassas imalattan
                <br />

                <span className="text-green">
                  prototipe.
                </span>
              </h1>

              <p className="copy mt-9 max-w-lg border-t rule pt-7">
                TAMİS; CNC talaşlı imalat, tasarım ve
                prototipleme alanlarında faaliyet gösteren,
                savunma sanayiine yönelik Ar-Ge ve prototip
                çalışmaları gerçekleştiren Ankara merkezli bir
                sanayi ve teknoloji şirketidir.
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
              alt="CNC talaşlı imalat ve hassas metal işleme"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
          </motion.div>
        </Container>
      </section>

      {/* NE YAPIYORUZ */}

      <section className="bg-white py-24 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid min-w-0 gap-12 lg:grid-cols-12"
          >
            <div className="min-w-0 lg:col-span-3">
              <p className="eyebrow">
                Ne Yapıyoruz?
              </p>
            </div>

            <div className="min-w-0 lg:col-span-9">
              <h2 className="title max-w-full">
                Tasarımdan
                <br />

                <span className="text-green">
                  üretime.
                </span>
              </h2>

              <p className="copy mt-10 max-w-2xl border-t rule pt-8">
                Tasarım ve prototipleme çalışmalarını CNC talaşlı
                imalat kabiliyetleriyle bir araya getiriyor;
                savunma sanayiine yönelik Ar-Ge ve prototip
                çalışmalarını üretim altyapımızla destekliyoruz.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* YETKİNLİKLER */}

      <section className="border-y rule">
        <Container>
          <div className="grid min-w-0 lg:grid-cols-12">
            <div className="min-w-0 py-16 lg:col-span-4 lg:border-r rule lg:pr-12">
              <p className="eyebrow">
                Yetkinlikler
              </p>

              <h2 className="mt-8 break-words text-5xl font-medium leading-[.92] tracking-[-.055em]">
                Mühendislik
                <br />

                <span className="text-green">
                  üretimle buluşur.
                </span>
              </h2>
            </div>

            <div className="min-w-0 lg:col-span-8">
              {capabilities.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group grid min-w-0 gap-4 border-b rule py-7 md:grid-cols-[1fr_auto] md:items-center md:px-8"
                >
                  <div className="min-w-0">
                    <h3 className="break-words text-2xl font-medium tracking-[-.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-ink/45">
                      {item.copy}
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

      {/* ÜRETİM ALTYAPISI */}

      <section className="technical-grid bg-green py-24 text-white md:py-32">
        <Container>
          <div className="grid min-w-0 gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-4">
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
                Üretim Altyapısı
              </p>

              <h2 className="mt-8 break-words text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Makine
                <br />

                <span className="text-white/40">
                  parkımız.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/55">
                CNC işleme, tornalama ve pres operasyonlarını
                destekleyen üretim altyapısı.
              </p>
            </div>

            <div className="min-w-0 lg:col-span-8 lg:border-l lg:border-white/15 lg:pl-12">
              <div className="grid min-w-0 md:grid-cols-2">
                {machines.map((machine) => (
                  <div
                    key={`${machine.value}-${machine.title}`}
                    className="min-w-0 border-b border-white/15 py-8 md:p-8"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/40">
                      {machine.value}
                    </p>

                    <h3 className="mt-3 break-words text-2xl font-medium tracking-[-.035em]">
                      {machine.title}
                    </h3>
                  </div>
                ))}
              </div>

              <Link
                to="/yetkinlikler"
                className="btn btn-light mt-10"
              >
                Üretim yetkinlikleri
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SAVUNMA SANAYİİ */}

      <section className="bg-[#e2e7e1] py-24 md:py-32">
        <Container>
          <div className="grid min-w-0 gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-4">
              <p className="eyebrow">
                Savunma Sanayii
              </p>

              <h2 className="mt-8 break-words text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Ar-Ge'den
                <br />

                <span className="text-green">
                  prototipe.
                </span>
              </h2>
            </div>

            <div className="min-w-0 lg:col-span-8">
              <p className="copy max-w-2xl">
                TAMİS, savunma sanayiine yönelik Ar-Ge ve
                prototip çalışmalarını; tasarım, prototipleme ve
                CNC talaşlı imalat kabiliyetleriyle
                desteklemektedir.
              </p>

              <div className="mt-10 border-t rule pt-8">
                <p className="max-w-xl text-sm leading-7 text-ink/50">
                  Proje ve ürün detaylarının gizlilik
                  gereksinimleri doğrultusunda, kamuya açık
                  kurumsal iletişimde üretim ve mühendislik
                  yetkinlikleri esas alınmaktadır.
                </p>

                <Link
                  to="/ar-ge"
                  className="btn mt-8"
                >
                  Ar-Ge yaklaşımı
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TASARIMDAN İMALATA */}

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid min-w-0 gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-3">
              <p className="eyebrow">
                Çalışma Yaklaşımı
              </p>
            </div>

            <div className="min-w-0 lg:col-span-9">
              <h2 className="title max-w-full">
                Tasarımdan,
                <br />

                <span className="text-green">
                  imalata.
                </span>
              </h2>

              <div className="mt-14 border-t rule">
                {process.map((item) => (
                  <div
                    key={item.title}
                    className="grid min-w-0 gap-3 border-b rule py-7 md:grid-cols-12"
                  >
                    <h3 className="break-words text-2xl font-medium md:col-span-5">
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
          <div className="grid min-w-0 gap-12 lg:grid-cols-12">
            <div className="media relative aspect-[4/3] min-w-0 overflow-hidden lg:col-span-6">
              <img
                src="/media/home/research/home-research.png"
                alt="Ar-Ge ve prototipleme çalışması"
                className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="flex min-w-0 flex-col justify-between lg:col-span-6 lg:pl-8">
              <div>
                <p className="eyebrow">
                  Araştırma &amp; Geliştirme
                </p>

                <h2 className="title mt-9 max-w-full">
                  Savunma sanayii için
                  <br />

                  <span className="text-green">
                    Ar-Ge ve prototip.
                  </span>
                </h2>
              </div>

              <div className="mt-12 border-t rule pt-7">
                <p className="copy max-w-lg">
                  Savunma sanayiine yönelik Ar-Ge ve prototip
                  çalışmalarını tasarım ve üretim
                  kabiliyetlerimizle birlikte ele alıyoruz.
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
          <div className="grid min-w-0 gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-3">
              <p className="eyebrow">
                1987'den Bugüne
              </p>
            </div>

            <div className="min-w-0 lg:col-span-9">
              <h2 className="title max-w-full">
                Tecrübeden
                <br />

                <span className="text-green">
                  geleceğin üretimine.
                </span>
              </h2>

              <p className="copy mt-9 max-w-2xl">
                Ankara merkezli TAMİS, 1987'den bu yana edindiği
                üretim tecrübesini Ar-Ge, tasarım,
                prototipleme ve talaşlı imalat kabiliyetleriyle
                geliştirmektedir.
              </p>

              <div className="media relative mt-12 aspect-[16/7] min-w-0 overflow-hidden">
                <img
                  src="/media/home/corporate/home-corporate.png"
                  alt="TAMİS kurumsal teknoloji ve üretim yaklaşımı"
                  className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
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