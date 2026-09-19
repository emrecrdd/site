import {
  Hero,
  Statement,
  DarkBand,
  Cards,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";

export default function Corporate() {
  const values = [
    {
      title: "Milli ve Yerli Üretim",
      copy: "Stratejik bağımsızlık için yerli tasarım ve üretim kapasitesini sürekli geliştirmek.",
    },
    {
      title: "Teknolojik Üstünlük",
      copy: "Ar-Ge ve inovasyonu her faaliyetimizin merkezine koymak.",
    },
    {
      title: "Güvenilirlik ve Kalite",
      copy: "Uluslararası standartlarda, hatasız ve uzun ömürlü sistemler üretmek.",
    },
    {
      title: "Dürüstlük ve Sorumluluk",
      copy: "Tüm paydaşlarımıza karşı şeffaf, etik ve hesap verebilir olmak.",
    },
    {
      title: "İnsan Odaklılık",
      copy: "Çalışanlarımızın yetkinliğini ve motivasyonunu en değerli sermayemiz olarak görmek.",
    },
  ];

  return (
    <main>
      {/* HERO */}

      <Hero
        eyebrow="Kurumsal"
        title="Güvenilir teknoloji."
        accent="Güçlü mühendislik."
        copy="TAMİS, Türkiye'nin savunma sanayiinde güvenilir ve yenilikçi çözümler sunmak amacıyla yüksek teknoloji ürünleri ve sistemleri geliştiren bir teknoloji şirketidir."
        media="CORPORATE / FACILITY"
      />

      {/* HAKKIMIZDA */}

      <Statement
        eyebrow="Hakkımızda"
        title="1987'den bugüne"
        accent="mühendislik tecrübesi."
        copy="TAMİS, Ankara merkezli bir şirket olarak 1987 yılında kurulmuştur. Sanayi yapılanmasını Ankara Ostim, İvedik ve Kahramankazan'da gerçekleştiren şirket; kuruluşundan ve geçmiş kuşaklardan edindiği tecrübe ve deneyimi, süreklilik gösteren Ar-Ge çalışmalarıyla ileri seviyeye taşımayı hedefleyen bir aile şirketidir."
      />

      {/* KURUMSAL */}

      <section className="border-t rule bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Kurumsal
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Savunma sanayiinde
                <br />

                <span className="text-green">
                  teknoloji odağı.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t rule pt-8 lg:grid-cols-2">
                <p className="copy">
                  TAMİS, Türkiye'nin savunma sanayiinde güvenilir
                  ve yenilikçi çözümler sunan kuruluşlarından
                  biridir. Ulusal güvenlik ihtiyaçlarına yönelik
                  yüksek teknoloji ürünleri ve sistemleri
                  geliştirerek Türkiye'nin savunma kapasitesine
                  katkı sağlamayı temel misyonu olarak
                  benimsemektedir.
                </p>

                <p className="copy">
                  Şirketimiz; kara, hava, deniz ve ileri
                  mühendislik yeteneklerini, yerli ve milli üretim
                  anlayışını ve uluslararası standartlara uygun
                  kalite yaklaşımını bir araya getirerek faaliyet
                  göstermektedir. Ar-Ge odaklı yaklaşımımız,
                  mühendislik kadromuz ve stratejik iş
                  birliklerimizle yüksek performans ve
                  güvenilirlik sunan çözümler geliştirmeyi
                  amaçlamaktayız.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MİSYON */}

      <DarkBand
        eyebrow="Misyonumuz"
        title="İleri teknoloji. Yerli imkânlar. Sürdürülebilir yaklaşım."
      >
        <p className="max-w-3xl text-base leading-8 text-white/60 md:text-lg">
          Türkiye'nin savunma ve güvenlik ihtiyaçlarına en ileri
          teknolojiyle, yerli imkânlarla ve sürdürülebilir bir
          yaklaşımla cevap vermek.
        </p>
      </DarkBand>

      {/* VİZYON */}

      <section
        id="vizyon"
        className="py-24 md:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Vizyonumuz
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Kritik teknolojilerde
                <br />

                <span className="text-green">
                  bağımsızlık.
                </span>
              </h2>

              <p className="copy mt-10 max-w-3xl border-t rule pt-8">
                Savunma sanayiinde global ölçekte tanınan,
                teknoloji ihracatı yapan ve kritik teknolojilerde
                bağımsızlığı sağlayan bir teknoloji şirketi olmak.
              </p>

              <div className="media mt-12 aspect-[16/7]">
                <span className="media-label">
                  VISION / ENGINEERING CULTURE
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TEMEL DEĞERLER */}

      <section
        id="kalite"
        className="bg-white py-24 md:py-32"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Temel Değerlerimiz
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Teknoloji kadar
                <br />

                <span className="text-green">
                  değerlerimiz de belirleyici.
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-14">
            <Cards items={values} />
          </div>
        </Container>
      </section>

      {/* KAPANIŞ */}

      <section className="technical-grid bg-green py-20 text-white md:py-28">
        <Container>
          <div className="max-w-5xl">
            <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
              TAMİS Teknoloji
            </p>

            <h2 className="mt-8 text-[clamp(2.5rem,9vw,6.5rem)] font-medium leading-[.9] tracking-[-.055em] md:tracking-[-.065em]">
              Güven.
              <br />
              Süreklilik.
              <br />

              <span className="text-white/40">
                Stratejik üstünlük.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl border-t border-white/15 pt-8 text-base leading-8 text-white/60">
              TAMİS olarak yalnızca ürün ve sistem değil; aynı
              zamanda güven, süreklilik ve stratejik üstünlük
              sunuyoruz. Türkiye'nin savunma sanayiinde yarınları
              bugünden inşa etmeye kararlıyız.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}