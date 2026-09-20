import { motion } from "framer-motion";

import {
  Hero,
  reveal,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";

export default function Media() {
  return (
    <main className="overflow-hidden">
      <Hero
        eyebrow="Medya"
        title="Üretimden"
        accent="görüntüler"
        copy="TAMİS'in üretim altyapısı, talaşlı imalat çalışmaları ve üretim sahasından seçili görüntüler."
        media="TAMİS / ÜRETİM"
        videoSrc="/media/real/uretim.mp4"
      />

      {/* MEDYA GİRİŞ */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow text-green">
                Üretim Sahası
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title max-w-5xl">
                Makine
                <br />
                <span className="text-green">
                  malzeme ve üretim
                </span>
              </h2>

              <div className="mt-10 border-t rule pt-7">
                <p className="copy max-w-2xl">
                  CNC talaşlı imalat ve üniversal tornalama
                  çalışmalarından üretim detayları
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ANA GÖRSEL */}
      <section className="bg-paper pb-5">
        <Container>
          <motion.div
            {...reveal}
            className="media relative min-h-[500px] overflow-hidden md:min-h-[720px]"
          >
            <img
              src="/media/generated/kurumsal-10.jpg"
              alt="TAMİS üretim sahasında talaşlı imalat"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="media-shade" />

            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-6 p-6 text-white md:p-9">
              <div>
                <p className="micro-label !text-white/55">
                  TAMİS / ÜRETİM
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-.045em] md:text-5xl">
                  CNC Talaşlı İmalat
                </h2>
              </div>

              <p className="micro-label hidden !text-white/55 md:block">
                ANKARA / TÜRKİYE
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* İKİLİ GÖRSEL */}
      <section className="bg-paper pb-24 md:pb-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-12">
            <motion.div
              {...reveal}
              className="media relative min-h-[430px] overflow-hidden md:col-span-7 md:min-h-[620px]"
            >
              <img
                src="/media/generated/kurumsal-01.jpg"
                alt="TAMİS üretim sahasında üniversal tornalama"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="media-shade" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-8">
                <p className="micro-label !text-white/55">
                  ÜRETİM / TORNALAMA
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-[-.045em] md:text-4xl">
                  Üniversal Tornalama
                </h3>
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              className="flex min-h-[430px] flex-col md:col-span-5 md:min-h-[620px]"
            >
              <div className="media relative min-h-0 flex-1 overflow-hidden">
                <img
                  src="/media/generated/kurumsal-03.jpg"
                  alt="TAMİS talaşlı imalat üretim detayı"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="media-shade" />

                <span className="media-label !text-white">
                  İMALAT / DETAY
                </span>
              </div>

              <div className="bg-green p-7 text-white md:p-9">
                <p className="micro-label !text-white/45">
                  Talaşlı İmalat
                </p>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                  Çelik, alüminyum ve yüksek dayanımlı malzeme
                  gruplarında üretim kabiliyeti
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* VİDEO */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="mb-12 grid gap-8 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Üretim Videosu
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Üretim
                <br />
                <span className="text-green">
                  sahasından
                </span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative aspect-video w-full overflow-hidden bg-ink"
          >
            <video
              src="/media/real/uretim.mp4"
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />

            <span className="media-label !text-white">
              TAMİS / ÜRETİM
            </span>
          </motion.div>
        </Container>
      </section>

      {/* KAPANIŞ */}
      <section className="border-t rule bg-paper py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-green">
                TAMİS Teknoloji
              </p>

              <h2 className="mt-5 text-3xl font-medium tracking-[-.045em] md:text-5xl">
                Ankara'dan üretim
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-ink/50">
              CNC talaşlı imalat, tasarım ve prototipleme ile
              savunma ve havacılık odaklı Ar-Ge
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}