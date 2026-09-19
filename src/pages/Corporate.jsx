import {
  Hero,
  Statement,
  DarkBand,
  Cards,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";

export default function Corporate() {
  const items = [
    {
      title: "Mühendislik disiplini",
      copy: "Kararları ölçülebilir gereksinimler ve doğrulama yaklaşımıyla ele almak.",
    },
    {
      title: "Sürekli gelişim",
      copy: "Bilgiyi, yöntemi ve sistemi sürekli iyileştirmek.",
    },
    {
      title: "Sorumluluk",
      copy: "Teknik ve kurumsal kararların etkisini gözetmek.",
    },
    {
      title: "Uzun vadeli yaklaşım",
      copy: "Geçici çözümler yerine sürdürülebilir teknoloji yetkinliği oluşturmak.",
    },
  ];

  return (
    <main>
      <Hero
        eyebrow="Kurumsal"
        title="Teknolojiye"
        accent="mühendislik perspektifi."
        copy="TAMİS, araştırma ve mühendisliği çalışan sistemlere dönüştürmeye odaklanan bir teknoloji şirketidir."
        media="CORPORATE / FACILITY"
      />

      <Statement
        eyebrow="Hakkımızda"
        title="Fikirleri, çalışan"
        accent="sistemlere dönüştürmek."
        copy="Kurumsal anlatımızı; araştırma, tasarım, prototipleme, doğrulama ve entegrasyon ekseninde kuruyoruz. Şirkete ait doğrulanmış tarihçe ve organizasyon bilgileri geldiğinde bu yapı gerçek içerikle tamamlanacak."
      />

      <section
        id="vizyon"
        className="py-24"
      >
        <Container>
          <h2 className="title">
            Bugünü çözmek.
            <br />

            <span className="text-green">
              Yarını geliştirmek.
            </span>
          </h2>

          <div className="media mt-12 aspect-[16/7]">
            <span className="media-label">
              VISION / ENGINEERING CULTURE
            </span>
          </div>
        </Container>
      </section>

      <DarkBand
        eyebrow="Mühendislik yaklaşımı"
        title="Sistemin tamamını düşünmek."
      >
        <p className="max-w-2xl text-base leading-8 text-white/58">
          Disiplinler arası çalışma, gereksinim yönetimi,
          doğrulama ve entegrasyonu aynı mühendislik zincirinin
          parçaları olarak ele alan bir yaklaşım.
        </p>
      </DarkBand>

      <section
        id="kalite"
        className="bg-white py-24"
      >
        <Container>
          <p className="eyebrow">
            İlkeler
          </p>

          <div className="mt-10">
            <Cards items={items} />
          </div>
        </Container>
      </section>
    </main>
  );
}