import { motion } from "framer-motion";
import {
  Cog,
  Cpu,
  Crosshair,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Container from "../components/ui/Container";
import { reveal } from "../components/ui/PageKit";

const principles = [
  {
    icon: Cog,
    title: "Yerli Üretim Yetkinliği",
    copy:
      "Kritik üretim kabiliyetlerini yerli mühendislik, güçlü imalat altyapısı ve sürdürülebilir sanayi tecrübesiyle geliştirmek.",
  },
  {
    icon: Cpu,
    title: "Mühendislik ve Ar-Ge",
    copy:
      "Tasarım, prototipleme ve üretim süreçlerini sürekli Ar-Ge çalışmalarıyla destekleyerek yüksek katma değerli çözümler geliştirmek.",
  },
  {
    icon: Crosshair,
    title: "Hassas Üretim",
    copy:
      "CNC talaşlı imalat ve işleme süreçlerinde ölçüsel hassasiyet, tekrarlanabilirlik ve üretilebilirliği esas almak.",
  },
  {
    icon: ShieldCheck,
    title: "Kalite Güvencesi",
    copy:
      "Üretimin her aşamasını ölçüm, kontrol ve doğrulama süreçleriyle destekleyerek sürdürülebilir kalite standardı oluşturmak.",
  },
  {
    icon: TrendingUp,
    title: "Sürekli Gelişim",
    copy:
      "Makine parkı, teknik yetkinlikler ve üretim süreçlerini değişen sektör ihtiyaçları doğrultusunda sürekli geliştirmek.",
  },
];

const partners = [
  {
    name: "Aslan Makina Savunma",
    logo: "/brand/partners/aslan-makina-savunma.png",
  },
  {
    name: "OPLOG",
    detail: "Robot Tabanlı Lojistik",
    logo: "/brand/partners/oplog.png",
  },
  {
    name: "Admasol Mühendislik",
    logo: "/brand/partners/admasol-muhendislik.png",
  },
  {
    name: "Lapis Teknoloji",
    logo: "/brand/partners/lapis-teknoloji.png",
  },
];

export default function Corporate() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden border-b rule pt-[84px] lg:min-h-[760px]">
        <img
          src="/media/generated/kurumsal-09.jpg"
          alt="TAMİS Teknoloji Ankara üretim tesisi"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/0" />

        <Container className="relative z-10">
          <motion.div
            {...reveal}
            className="flex min-h-[636px] max-w-2xl flex-col justify-center py-16 lg:min-h-[676px]"
          >
            

           

            <p className="mt-10 max-w-xl text-base leading-8 text-ink/70 md:text-lg">
              Ankara merkezli TAMİS, geçmiş kuşaklardan gelen
              sanayi tecrübesini sürekli Ar-Ge çalışmaları ve
              üretim kabiliyetleriyle ileri taşıyan bir aile
              şirketidir.
            </p>

            <div className="mt-10 h-px w-8 bg-ink/60" />

            <p className="micro-label mt-5">
              TAMİS · ANKARA
            </p>
          </motion.div>
        </Container>
      </section>

      {/* HAKKIMIZDA */}
      <section
        id="hakkimizda"
        className="bg-white py-20 md:py-24"
      >
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <p className="eyebrow">
                  Hakkımızda
                </p>

                <span className="h-px w-10 bg-ink/40" />
              </div>

              <h2 className="mt-8 text-5xl font-medium leading-[.94] tracking-[-.055em] md:text-6xl">
                Sanayi tecrübesi
                <br />

                <span className="text-green">
                  Sürekli gelişim
                </span>
              </h2>
            </div>

            <div className="grid gap-8 lg:col-span-7 md:grid-cols-2">
              <div className="border-l rule pl-8">
                <p className="copy">
                  TAMİS, 1987 yılında Ankara'da kurulmuştur.
                  Sanayi faaliyetlerini Ankara Ostim, İvedik ve
                  Kahramankazan'da gerçekleştirmiştir.
                </p>
              </div>

              <div className="border-l rule pl-8">
                <p className="copy">
                  Kuruluşundan ve geçmiş kuşaklardan edindiği
                  tecrübe ve deneyimi, süreklilik içeren Ar-Ge
                  çalışmalarıyla ileri taşıyan bir aile şirketidir.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* MİSYON / VİZYON */}
      <section
        id="vizyon"
        className="border-y rule bg-paper"
      >
        <div className="grid lg:grid-cols-2">

          {/* MİSYON */}
          <motion.article
            {...reveal}
            className="relative min-h-[520px] overflow-hidden"
          >
            <img
              src="/media/generated/kurumsal-misyon.jpg"
              alt="TAMİS hassas üretim"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />

            <div className="relative z-10 flex min-h-[520px] max-w-xl flex-col justify-center px-8 py-14 md:px-14 lg:px-[max(3.5rem,calc((100vw-1440px)/2))]">
              <div className="flex items-center gap-4">
                <p className="eyebrow">
                  Misyonumuz
                </p>

                <span className="h-px w-8 bg-ink/40" />
              </div>

              <h2 className="mt-8 text-4xl font-medium leading-[.95] tracking-[-.05em] md:text-5xl">
                Yerli imkânlarla
                <br />

                <span className="text-green">
                  ileri teknoloji
                </span>
              </h2>

              <p className="copy mt-8 max-w-md">
                Türkiye'nin savunma ve güvenlik ihtiyaçlarına
                ileri teknoloji, yerli üretim kabiliyeti ve
                sürdürülebilir mühendislik yaklaşımıyla cevap vermek.
              </p>
            </div>
          </motion.article>

          {/* VİZYON */}
          <motion.article
            {...reveal}
            className="relative min-h-[520px] overflow-hidden border-t rule lg:border-l lg:border-t-0"
          >
            <img
              src="/media/generated/kurumsal-vizyon.jpg"
              alt="TAMİS hassas işlenmiş parça"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/25" />

            <div className="relative z-10 flex min-h-[520px] max-w-xl flex-col justify-center px-8 py-14 md:px-14">
              <div className="flex items-center gap-4">
                <p className="eyebrow">
                  Vizyonumuz
                </p>

                <span className="h-px w-8 bg-ink/40" />
              </div>

              <h2 className="mt-8 text-4xl font-medium leading-[.95] tracking-[-.05em] md:text-5xl">
                Kritik teknolojilerde
                <br />

                <span className="text-green">
                  bağımsızlık
                </span>
              </h2>

              <p className="copy mt-8 max-w-md">
                Savunma sanayiinde küresel ölçekte tanınan,
                teknoloji ihracatı gerçekleştiren ve kritik
                teknolojilerde yerli kabiliyetler geliştiren bir
                teknoloji şirketi olmak.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ÜRETİM YAKLAŞIMI */}
      <section className="technical-grid relative overflow-hidden bg-green py-20 text-white md:py-24">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-14 lg:grid-cols-12 lg:items-center"
          >
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/55">
                  Üretim Yaklaşımımız
                </p>

                <span className="h-px w-10 bg-white/35" />
              </div>

              <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Teknik yetkinlik
                <br />

                <span className="text-white/45">
                  üretim disiplini
                </span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:border-l lg:border-white/20 lg:pl-14">
              <p className="max-w-3xl text-lg leading-8 text-white/75 md:text-xl md:leading-9">
                Mühendislik bilgisini, üretim kabiliyetlerini ve
                kalite kontrol altyapısını aynı süreç içerisinde
                bir araya getirerek savunma ve havacılık sanayiinin
                yüksek hassasiyet gerektiren ihtiyaçlarına yönelik
                çözümler geliştiriyoruz.
              </p>
            </div>

            <div className="hidden lg:col-span-2 lg:block">
              <div className="border-t border-white/30 pt-6">
                <p className="text-[10px] font-bold uppercase leading-7 tracking-[.22em] text-white/65">
                  Tasarım
                  <br />
                  Üretim
                  <br />
                  Kalite
                  <br />
                  Güven
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ÇALIŞMA İLKELERİ */}
      <section
        id="degerler"
        className="bg-white py-20 md:py-28"
      >
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <p className="eyebrow">
                  Çalışma İlkelerimiz
                </p>

                <span className="h-px w-12 bg-ink/40" />
              </div>

              <h2 className="mt-8 text-5xl font-medium leading-[.94] tracking-[-.055em] md:text-6xl">
                Mühendislikten üretime
                <br />

                <span className="text-green">
                  aynı kalite yaklaşımı
                </span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:border-l lg:border-ink/15 lg:pl-12">
              <p className="copy max-w-xl">
                Tasarımdan üretime, ölçümden teslimata kadar tüm
                süreçleri teknik yetkinlik, hassasiyet ve sürekli
                gelişim anlayışıyla yönetiyoruz.
              </p>
            </div>
          </motion.div>

          <div className="mt-14 grid border-l border-t rule md:grid-cols-2 xl:grid-cols-5">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  {...reveal}
                  key={item.title}
                  className="group min-w-0 border-b border-r rule p-7 transition-colors duration-300 hover:bg-paper md:p-8"
                >
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    className="text-green"
                  />

                  <h3 className="mt-8 text-xl font-medium leading-tight tracking-[-.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-ink/55">
                    {item.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ÇALIŞTIĞIMIZ FİRMALAR */}
      <section className="border-t rule bg-paper py-20 md:py-24">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4">
                <p className="eyebrow">
                  Çalıştığımız Firmalar
                </p>

                <span className="h-px w-10 bg-ink/40" />
              </div>

              <h2 className="mt-8 text-5xl font-medium leading-[.92] tracking-[-.055em] md:text-6xl">
                Güçlü
                <br />

                <span className="text-green">
                  iş birlikleri
                </span>
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="grid border-l border-t rule sm:grid-cols-2 xl:grid-cols-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="group relative flex min-h-[180px] items-center justify-center overflow-hidden border-b border-r rule bg-white p-8"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-16 max-w-[78%] object-contain grayscale opacity-65 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />

                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-[10px] font-medium text-ink/40">
                        {partner.name}
                      </p>

                      {partner.detail && (
                        <p className="mt-1 text-[8px] font-bold uppercase tracking-[.14em] text-ink/25">
                          {partner.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* RAKAMLARLA TAMİS */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-24">
        <img
          src="/media/generated/kurumsal-rakamlar.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-ink/65" />

        <Container className="relative z-10">
          <div className="flex items-center gap-4">
            <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/55">
              Rakamlarla TAMİS
            </p>

            <span className="h-px w-10 bg-white/35" />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-white/20 lg:border-r">
              <p className="text-4xl font-medium tracking-[-.05em]">
                1987
              </p>

              <p className="mt-3 text-sm text-white/60">
                Kuruluş Yılı
              </p>
            </div>

            <div className="border-white/20 lg:border-r lg:pl-10">
              <p className="text-4xl font-medium tracking-[-.05em]">
                3
              </p>

              <p className="mt-3 text-sm text-white/60">
                Üretim Lokasyonu
              </p>
            </div>

            <div className="border-white/20 lg:border-r lg:pl-10">
              <p className="text-3xl font-medium tracking-[-.05em]">
                Yüksek
              </p>

              <p className="mt-3 text-sm text-white/60">
                Hassasiyetli Üretim
              </p>
            </div>

            <div className="lg:pl-10">
              <p className="text-3xl font-medium tracking-[-.05em]">
                Sürekli
              </p>

              <p className="mt-3 text-sm text-white/60">
                Teknolojik Gelişim
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}