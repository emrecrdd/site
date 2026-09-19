import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import { reveal } from "../components/ui/PageKit";

const developmentFlow = [
  {
    title: "Teknik İhtiyaç",
    copy: "Geliştirme sürecinin başlangıcında kullanım ihtiyacı, üretilebilirlik ve teknik gereksinimler birlikte ele alınır.",
  },
  {
    title: "Tasarım",
    copy: "Teknik yaklaşım, fiziksel üretime aktarılabilecek bir çözüm yapısına dönüştürülür.",
  },
  {
    title: "Prototipleme",
    copy: "Geliştirilen tasarımın fiziksel karşılığı üretilerek mühendislik yaklaşımı somutlaştırılır.",
  },
  {
    title: "Hassas İmalat",
    copy: "Prototip ve parça üretimi, TAMİS'in CNC işleme ve tornalama altyapısıyla desteklenir.",
  },
];

export default function Research() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="border-b rule pt-[84px]">
        <Container className="grid min-w-0 lg:min-h-[82svh] lg:grid-cols-12">
          <motion.div
            {...reveal}
            className="flex min-w-0 flex-col justify-between py-10 lg:col-span-6 lg:py-14 lg:pr-14"
          >
            <div className="flex items-center justify-between gap-6">
              <p className="eyebrow text-green">Ar-Ge</p>

              <p className="hidden text-[9px] font-bold uppercase tracking-[.2em] text-ink/30 sm:block">
                Savunma &amp; Havacılık
              </p>
            </div>

            <div className="py-14 md:py-20">
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[.18em] text-green">
                Araştırma · Geliştirme · Prototipleme
              </p>

              <h1 className="text-[clamp(3.6rem,7vw,7.8rem)] font-medium leading-[.82] tracking-[-.07em]">
                Fikirden
                <br />
                <span className="text-green">fiziksel çıktıya.</span>
              </h1>

              <p className="copy mt-10 max-w-xl border-t rule pt-7">
                TAMİS; savunma ve havacılık odağındaki Ar-Ge çalışmalarını
                tasarım, prototipleme ve hassas üretim kabiliyetleriyle
                destekler.
              </p>
            </div>

            <p className="max-w-md text-xs leading-6 text-ink/35">
              Ankara · 1987'den bugüne mühendislik ve üretim tecrübesi
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            className="media relative min-h-[480px] min-w-0 overflow-hidden lg:col-span-6 lg:min-h-0"
          >
            <img
              src="/media/real/islenmis-parca.jpeg"
              alt="TAMİS tarafından işlenmiş metal parça"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white md:p-8">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/55">
                  Engineering / R&amp;D
                </p>
                <p className="mt-2 text-lg font-medium">
                  Tasarım · Prototipleme · Üretim
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* AR-GE YAKLAŞIMI */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">Ar-Ge Yaklaşımı</p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title max-w-4xl">
                Mühendislik yalnızca
                <br />
                <span className="text-green">
                  tasarım masasında kalmaz.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t rule pt-8 md:grid-cols-2">
                <p className="copy max-w-xl">
                  Geliştirme çalışmalarında teknik ihtiyacın üretilebilir
                  bir yapıya dönüştürülmesini ve fiziksel prototiple
                  desteklenmesini esas alıyoruz.
                </p>

                <p className="text-sm leading-7 text-ink/48">
                  Tasarım ile üretim arasındaki bağ; CNC talaşlı imalat,
                  tornalama ve prototipleme kabiliyetlerinin geliştirme
                  sürecine doğrudan dahil edilmesiyle güçlenir.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* GELİŞTİRME ZİNCİRİ */}
      <section className="border-y rule bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12">
            <div className="border-b rule py-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
              <p className="eyebrow text-green">Geliştirme Zinciri</p>

              <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Teknik ihtiyaçtan
                <br />
                <span className="text-green">üretime.</span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-ink/48">
                Tasarım ve üretim kabiliyetlerinin aynı geliştirme
                yaklaşımında buluşması, fiziksel çıktıya giden süreci
                destekler.
              </p>
            </div>

            <div className="lg:col-span-8 lg:pl-12">
              {developmentFlow.map((item, index) => (
                <motion.div
                  {...reveal}
                  key={item.title}
                  className="grid gap-5 border-b rule py-9 md:grid-cols-12 md:items-start"
                >
                  <div className="md:col-span-2">
                    <span className="text-xs font-bold tabular-nums text-green">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-[-.04em] md:col-span-4 md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-ink/48 md:col-span-6">
                    {item.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ÜRETİMLE BAĞLANTI */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            <motion.div
              {...reveal}
              className="media relative min-h-[520px] overflow-hidden lg:col-span-7"
            >
              <img
                src="/media/real/cnc-isleme.jpeg"
                alt="TAMİS CNC talaşlı imalat süreci"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <span className="media-label !text-white">
                PROTOTYPING / MANUFACTURING
              </span>
            </motion.div>

            <motion.div
              {...reveal}
              className="flex flex-col justify-between border-t rule pt-8 lg:col-span-5 lg:ml-5"
            >
              <div>
                <p className="eyebrow">Üretimle Entegrasyon</p>

                <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                  Prototipten
                  <br />
                  <span className="text-green">imalata.</span>
                </h2>

                <p className="copy mt-8 max-w-lg">
                  Ar-Ge ve prototipleme çalışmalarının fiziksel üretim
                  aşaması, TAMİS'in talaşlı imalat altyapısıyla desteklenir.
                </p>

                <p className="mt-6 max-w-lg text-sm leading-7 text-ink/48">
                  CNC dik işleme, CNC tornalama, üniversal tornalama ve
                  derin delme kabiliyetleri; farklı üretim ihtiyaçlarının
                  aynı teknik yapı içerisinde ele alınmasına imkân verir.
                </p>
              </div>

              <Link
                to="/uretim-altyapisi"
                className="btn mt-10 self-start"
              >
                Üretim altyapısını incele
                <ArrowUpRight size={13} />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SAVUNMA & HAVACILIK */}
      <section className="technical-grid bg-green py-24 text-white md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-14 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
                Savunma &amp; Havacılık
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Üretim gücü.
                <br />
                <span className="text-white/40">
                  Mühendislik odağı.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-white/15 lg:pl-14">
              <p className="max-w-3xl text-xl leading-9 text-white/72 md:text-2xl md:leading-10">
                Tasarım, prototipleme ve hassas üretim kabiliyetlerini
                savunma ve havacılık sektörlerine yönelik mühendislik
                çalışmalarında bir araya getiriyoruz.
              </p>

              <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-3">
                {[
                  ["Tasarım", "Üretilebilir çözüm geliştirme"],
                  ["Prototipleme", "Fiziksel çıktı geliştirme"],
                  ["İmalat", "CNC talaşlı üretim"],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="bg-green px-0 py-7 sm:px-6"
                  >
                    <p className="text-lg font-medium">{title}</p>
                    <p className="mt-3 text-xs leading-6 text-white/42">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}