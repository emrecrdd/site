import {
  Hero,
  Statement,
  DarkBand,
  Cards,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";

const items = [
  {
    id: "savunma",
    title: "Savunma Sistemleri",
    copy: "Sistem seviyesi mühendislik, entegrasyon ve doğrulama yaklaşımı.",
  },
  {
    id: "elektronik",
    title: "Elektronik Teknolojiler",
    copy: "Gömülü sistemler, kontrol elektroniği ve elektronik tasarım yetkinlikleri.",
  },
  {
    id: "otonom",
    title: "Otonom Sistemler",
    copy: "Algılama, karar ve kontrol katmanlarını bir araya getiren platform teknolojileri.",
  },
  {
    id: "yazilim",
    title: "Yazılım & Yapay Zekâ",
    copy: "Kritik sistemler için güvenilir yazılım ve veri odaklı çözümler.",
  },
];

export default function Capabilities() {
  return (
    <main>
      <Hero
        eyebrow="Yetkinlikler"
        title="Disiplinler"
        accent="birlikte çalışır."
        copy="Karmaşık teknoloji problemlerini tek bir uzmanlık alanına indirgemeden, sistem seviyesinde ele alıyoruz."
        media="CAPABILITIES / ENGINEERING"
      />

      <Statement
        eyebrow="Yaklaşım"
        title="Teknolojiden önce"
        accent="problemi anlamak."
        copy="Gereksinim, mimari, alt sistemler ve doğrulama zincirini birlikte düşünmek; geliştirme sürecinin temelini oluşturur."
      />

      <section className="border-y rule bg-paper py-20">
        <Container>
          <Cards items={items} />
        </Container>
      </section>

      <DarkBand
        eyebrow="Sistem mühendisliği"
        title="Alt sistemlerden çalışan bütüne."
      >
        <p className="max-w-2xl text-base leading-8 text-white/58">
          Elektronik, yazılım, kontrol ve mekanik katmanların
          birlikte doğrulanabildiği sistem yaklaşımı.
        </p>
      </DarkBand>
    </main>
  );
}