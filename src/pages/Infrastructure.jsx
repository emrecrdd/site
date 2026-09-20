import {
  Hero,
  Statement,
  DarkBand,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";

const machines = [
  {
    name: "CNC Dik İşleme",
    type: "4 eksen + 3 eksen",
    capacity: "1000 × 600",
  },
  {
    name: "CNC Torna",
    type: "10 inç",
    capacity: "1000 mm × 10 inç",
  },
  {
    name: "Üniversal Torna & Çelik Karot Derin Delme",
    type: "4 metre",
    capacity: "4000 × 800 mm",
  },
  {
    name: "Üniversal Torna",
    type: "1,5 metre",
    capacity: "1500 × 350 mm",
  },
  {
    name: "Hidrolik Pres",
    type: "Hidrolik",
    capacity: "160 ton",
  },
];

export default function Infrastructure() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <Hero
        eyebrow="Üretim Altyapısı"
        title="Makine parkı"
        accent="Ölçülebilir kapasite"
        copy="CNC dik işleme, CNC ve üniversal tornalama, çelik karot derin delme ve hidrolik pres altyapısı."
        media="TAMİS / ÜRETİM"
        videoSrc="/media/real/uretim.mp4"
      />

      {/* ÜRETİM */}
      <Statement
        eyebrow="Üretim"
        title="Hassas imalat için"
        accent="somut altyapı"
        copy="Farklı parça geometrileri ve üretim ihtiyaçları için işleme, tornalama, derin delme ve pres kabiliyetleri aynı üretim yapısında buluşur."
      />

      {/* MAKİNE PARKI */}
      <section
        id="makine-parki"
        className="scroll-mt-[110px] bg-white py-24 md:py-32"
      >
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">
                Makine Parkı
              </p>

              <h2 className="mt-7 text-5xl font-medium leading-[.94] tracking-[-.055em] md:text-6xl">
                Üretim
                <br />
                <span className="text-green">
                  kapasitesi
                </span>
              </h2>
            </div>

            <p className="micro-label hidden md:block">
              TAMİS / ÜRETİM
            </p>
          </div>

          <div className="mt-14 border-t rule">
            {machines.map((machine) => (
              <div
                key={machine.name + machine.type}
                className="grid gap-4 border-b rule py-7 md:grid-cols-12 md:items-center md:py-8"
              >
                <h3 className="text-2xl font-medium tracking-[-.04em] md:col-span-5 md:text-3xl">
                  {machine.name}
                </h3>

                <p className="micro-label md:col-span-3">
                  {machine.type}
                </p>

                <p className="text-2xl font-medium tracking-[-.04em] text-green md:col-span-4 md:text-right md:text-3xl">
                  {machine.capacity}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GERÇEK ÜRETİM GÖRSELLERİ */}
      <section className="bg-paper py-24 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="media relative min-h-[420px] overflow-hidden md:min-h-[560px]">
              <img
                src="/media/generated/kurumsal-08.jpg"
                alt="TAMİS üretim sahasında üniversal tornalama"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="media-shade" />

              <span className="media-label !text-white">
                ÜNİVERSAL TORNALAMA
              </span>
            </div>

            <div className="media relative min-h-[420px] overflow-hidden md:min-h-[560px]">
              <img
                src="/media/generated/kurumsal-12.jpg"
                alt="TAMİS talaşlı imalat üretim detayı"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="media-shade" />

              <span className="media-label !text-white">
                TALAŞLI İMALAT
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* KALİTE KONTROL */}
      <DarkBand
        eyebrow="Kalite Kontrol"
        title="Hassas üretim hassas ölçümle tamamlanır"
      >
        <div
          id="kalite"
          className="grid scroll-mt-[110px] gap-10 md:grid-cols-2 md:gap-16"
        >
          <div className="border-t border-white/20 pt-7">
            <p className="micro-label !text-white/45">
              Koordinat Ölçüm
            </p>

            <h3 className="mt-5 text-3xl font-medium tracking-[-.04em] md:text-4xl">
              CMM Ölçüm
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Boyutsal kontroller için kullanılan koordinat ölçüm
              altyapısı
            </p>
          </div>

          <div className="border-t border-white/20 pt-7">
            <p className="micro-label !text-white/45">
              Hassas Kontrol
            </p>

            <h3 className="mt-5 text-3xl font-medium tracking-[-.04em] md:text-4xl">
              Hassas Ölçüm
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Üretim sonrası kontrollerde kullanılan yüksek
              hassasiyetli ölçüm ekipmanları
            </p>
          </div>
        </div>
      </DarkBand>
    </main>
  );
}