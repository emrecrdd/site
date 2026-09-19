import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import { Hero, Cards, reveal } from "../components/ui/PageKit";

const values = [
  {
    title: "Milli ve Yerli Üretim",
    copy: "Stratejik bağımsızlık için yerli tasarım ve üretim kapasitesini sürekli geliştirmek",
  },
  {
    title: "Teknolojik Üstünlük",
    copy: "Ar-Ge ve inovasyonu faaliyetlerin merkezinde tutmak",
  },
  {
    title: "Güvenilirlik ve Kalite",
    copy: "Uluslararası standartlarda, güvenilir ve uzun ömürlü sistemler üretmek",
  },
  {
    title: "Dürüstlük ve Sorumluluk",
    copy: "Tüm paydaşlara karşı şeffaf, etik ve hesap verebilir olmak",
  },
  {
    title: "İnsan Odaklılık",
    copy: "Çalışanların yetkinliğini ve motivasyonunu en değerli sermaye olarak görmek",
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
    <main className="overflow-hidden">
      <Hero
        eyebrow="Kurumsal"
        title="1987'den"
        accent="bugüne"
        copy="Ankara merkezli TAMİS, geçmiş kuşaklardan gelen sanayi tecrübesini sürekli Ar-Ge çalışmaları ve üretim kabiliyetleriyle ileri taşıyan bir aile şirketidir."
        media="TAMİS / ANKARA"
        mediaSrc="/media/real/universal-torna.jpeg"
      />

      {/* HAKKIMIZDA */}
      <section
        id="hakkimizda"
        className="bg-white py-24 md:py-32"
      >
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Hakkımızda
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Sanayi tecrübesi
                <br />
                <span className="text-green">
                  Sürekli gelişim
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t rule pt-8 md:grid-cols-2">
                <p className="copy">
                  TAMİS, 1987 yılında Ankara'da kurulmuştur.
                  Sanayi faaliyetlerini Ankara Ostim, İvedik ve
                  Kahramankazan'da gerçekleştirmiştir.
                </p>

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

      {/* MİSYON & VİZYON */}
      <section
        id="vizyon"
        className="bg-paper py-24 md:py-32"
      >
        <Container>
          <div className="grid gap-px bg-ink/10 lg:grid-cols-2">
            <motion.div
              {...reveal}
              className="bg-paper p-8 md:p-12"
            >
              <p className="eyebrow">
                Misyonumuz
              </p>

              <h2 className="mt-8 text-4xl font-medium tracking-[-.05em] md:text-5xl">
                Yerli imkânlarla
                <br />
                <span className="text-green">
                  ileri teknoloji
                </span>
              </h2>

              <p className="copy mt-8">
                Türkiye'nin savunma ve güvenlik ihtiyaçlarına
                en ileri teknolojiyle, yerli imkânlarla ve
                sürdürülebilir bir yaklaşımla cevap vermek
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              className="bg-paper p-8 md:p-12"
            >
              <p className="eyebrow">
                Vizyonumuz
              </p>

              <h2 className="mt-8 text-4xl font-medium tracking-[-.05em] md:text-5xl">
                Kritik teknolojilerde
                <br />
                <span className="text-green">
                  bağımsızlık
                </span>
              </h2>

              <p className="copy mt-8">
                Savunma sanayiinde global ölçekte tanınan,
                teknoloji ihracatı yapan ve kritik teknolojilerde
                bağımsızlığı sağlayan bir teknoloji şirketi olmak
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* KURUMSAL YAKLAŞIM */}
      <section className="technical-grid bg-green py-24 text-white md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-14 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
                Kurumsal Yaklaşım
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">
                Güven ve
                <br />
                <span className="text-white/45">
                  süreklilik
                </span>
              </h2>
            </div>

            <div className="flex items-center lg:col-span-8 lg:border-l lg:border-white/15 lg:pl-14">
              <p className="max-w-3xl text-xl leading-9 text-white/70 md:text-2xl md:leading-10">
                Yerli ve milli üretim anlayışını, Ar-Ge odağını
                ve kalite yaklaşımını savunma ve havacılık
                alanındaki mühendislik hedefleriyle bir araya
                getiriyoruz
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* TEMEL DEĞERLER */}
      <section
        id="degerler"
        className="bg-white py-24 md:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Temel Değerlerimiz
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Aynı anlayış
                <br />
                <span className="text-green">
                  her aşamada
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-14">
            <Cards items={values} />
          </div>
        </Container>
      </section>

      {/* ÇALIŞTIĞIMIZ FİRMALAR */}
      <section className="border-t rule bg-paper py-24 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <p className="eyebrow">
                Çalıştığımız Firmalar
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.92] tracking-[-.055em] md:text-6xl">
                Güçlü
                <br />
                <span className="text-green">
                  iş birlikleri
                </span>
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="grid border-l border-t rule sm:grid-cols-2">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="group relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-r rule bg-white p-10 md:min-h-[260px]"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-20 max-w-[72%] object-contain grayscale opacity-70 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />

                    <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-5">
                      <p className="text-xs font-medium text-ink/45">
                        {partner.name}
                      </p>

                      {partner.detail && (
                        <p className="text-right text-[9px] font-bold uppercase tracking-[.14em] text-ink/30">
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
    </main>
  );
}