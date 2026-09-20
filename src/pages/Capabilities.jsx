import {
  Hero,
  Statement,
  DarkBand,
  Cards,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    id: "cnc",
    kicker: "Hassas İmalat",
    title: "CNC Talaşlı İmalat",
    copy: "4 eksen ve 3 eksen CNC dik işleme, CNC tornalama ve üniversal tornalama altyapısıyla hassas parça imalatı.",
  },
  {
    id: "prototipleme",
    kicker: "Mühendislik",
    title: "Tasarım & Prototipleme",
    copy: "Teknik ihtiyaçların tasarım çalışmalarından fiziksel prototipe ve üretilebilir çözüme taşınması.",
  },
  {
    id: "derin-delme",
    kicker: "4000 × 800 mm",
    title: "Çelik Karot Derin Delme",
    copy: "4 metre üniversal torna altyapısıyla çelik karot derin delme kabiliyeti.",
  },
  {
    id: "pres",
    kicker: "160 ton",
    title: "Hidrolik Pres",
    copy: "160 ton hidrolik pres kapasitesiyle üretim süreçlerini destekleyen pres altyapısı.",
  },
];

const materials = [
  "4140 Çelik",
  "8620 Çelik",
  "1040 Çelik",
  "CK45 Çelik",
  "Hardox 450–500",
  "7000 Seri Alüminyum",
  "316 Paslanmaz Çelik",
];

export default function Capabilities() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <Hero
        eyebrow="Yetkinlikler"
        title="Üretilebilir"
        accent="çözümler"
        copy="TAMİS, talaşlı imalat ile tasarım ve prototipleme kabiliyetlerini hassas üretim odağında bir araya getirir."
        media="ÜRETİM / YETKİNLİKLER"
        mediaSrc="/media/generated/kurumsal-02.jpg"
      />

      {/* ÜRETİM YAKLAŞIMI */}
      <Statement
        eyebrow="Üretim Yaklaşımı"
        title="Teknik ihtiyaçtan"
        accent="fiziksel çıktıya"
        copy="Tasarım, prototipleme ve imalat; birbirinden kopuk adımlar değil, üretilebilir sonuca ulaşan tek bir mühendislik zinciridir."
      />

      {/* TEMEL YETKİNLİKLER */}
      <section className="border-y rule bg-paper py-20 md:py-28">
        <Container>
          <Cards items={items} />
        </Container>
      </section>

      {/* İŞLENEN HAMMADDELER */}
      <section
        id="malzemeler"
        className="scroll-mt-[110px] bg-white py-24 md:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                İşlenen Hammaddeler
              </p>

              <h2 className="mt-8 text-5xl font-medium leading-[.92] tracking-[-.055em] md:text-6xl">
                Malzeme çeşitliliği
                <br />
                <span className="text-green">
                  üretim kabiliyeti
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-ink/48">
                Çelik, alüminyum ve yüksek dayanımlı malzeme
                gruplarında talaşlı imalat kabiliyeti
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t rule">
                {materials.map((material) => (
                  <div
                    key={material}
                    className="group flex min-h-[76px] items-center justify-between gap-6 border-b rule py-5"
                  >
                    <span className="text-xl font-medium tracking-[-.025em] md:text-2xl">
                      {material}
                    </span>

                    <span className="micro-label opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      İşlenen Hammadde
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ÜRETİM ALTYAPISI */}
      <DarkBand
        eyebrow="Üretim Altyapısı"
        title="Kabiliyet altyapıyla güçlenir"
      >
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl text-base leading-8 text-white/58">
            Makine parkı; CNC dik işleme, tornalama, derin delme
            ve hidrolik pres kabiliyetlerini ölçülebilir üretim
            kapasitesiyle bir araya getirir
          </p>

          <Link
            to="/uretim-altyapisi"
            className="btn btn-light shrink-0"
          >
            Altyapıyı incele
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </DarkBand>
    </main>
  );
}