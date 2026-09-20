import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Hero,
  DarkBand,
  Cards,
  reveal,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";

const values = [
  {
    kicker: "Yaklaşım",
    title: "Teknolojik Üstünlük",
    copy: "Ar-Ge ve inovasyonu faaliyetlerin merkezinde tutmak",
  },
  {
    kicker: "Yaklaşım",
    title: "Güvenilirlik ve Kalite",
    copy: "Uluslararası standartlarda, hatasız ve uzun ömürlü sistemler üretmek",
  },
  {
    kicker: "Yaklaşım",
    title: "Dürüstlük ve Sorumluluk",
    copy: "Tüm paydaşlara karşı şeffaf, etik ve hesap verebilir olmak",
  },
  {
    kicker: "Yaklaşım",
    title: "İnsan Odaklılık",
    copy: "Çalışanların yetkinliğini ve motivasyonunu en değerli sermaye olarak görmek",
  },
];

export default function Careers() {
  return (
    <main className="overflow-hidden">
      <Hero
        eyebrow="Kariyer"
        title="Birlikte"
        accent="üretmek"
        copy="TAMİS, çalışanlarının yetkinliğini ve motivasyonunu en değerli sermayesi olarak görür."
        media="TAMİS / KARİYER"
        mediaSrc="/media/generated/kurumsal-07.jpg"
      />

      {/* KARİYER YAKLAŞIMI */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow text-green">
                TAMİS'te Kariyer
              </p>
            </div>

            <div className="min-w-0 lg:col-span-9">
              <h2 className="title max-w-5xl">
                Mühendislik bilgisi
                <br />
                <span className="text-green">
                  üretim tecrübesiyle buluşur
                </span>
              </h2>

              <div className="mt-12 grid gap-8 border-t rule pt-8 md:grid-cols-2 md:gap-14">
                <p className="copy max-w-xl">
                  TAMİS'in çalışma yapısı; tasarım, prototipleme,
                  talaşlı imalat ve Ar-Ge kabiliyetlerini aynı
                  mühendislik yaklaşımında bir araya getirir.
                </p>

                <p className="copy max-w-xl">
                  İnsan odaklı yaklaşımımız; çalışanların
                  yetkinliğini, gelişimini ve üretime sunduğu
                  katkıyı kurumsal yapının önemli bir parçası
                  olarak ele alır.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ÜRETİM ORTAMI */}
      <section className="bg-paper py-6 md:py-8">
        <Container>
          <div className="grid gap-5 lg:grid-cols-12">
            <motion.div
              {...reveal}
              className="media relative min-h-[420px] overflow-hidden lg:col-span-7 lg:min-h-[620px]"
            >
              <img
                src="/media/generated/kurumsal-06.jpg"
                alt="TAMİS üretim sahası"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="media-shade" />

              <span className="media-label !text-white">
                TAMİS / ÜRETİM
              </span>
            </motion.div>

            <motion.div
              {...reveal}
              className="flex min-h-[420px] flex-col justify-between bg-green p-8 text-white md:p-12 lg:col-span-5 lg:min-h-[620px]"
            >
              <div>
                <p className="micro-label !text-white/45">
                  Çalışma Alanı
                </p>

                <h2 className="mt-8 text-[clamp(2.8rem,5vw,5.4rem)] font-medium leading-[.9] tracking-[-.06em]">
                  Tasarım
                  <br />
                  Prototipleme
                  <br />
                  Üretim
                  <br />
                  Ar-Ge
                </h2>
              </div>

              <p className="max-w-md border-t border-white/20 pt-7 text-sm leading-7 text-white/60">
                Teknik bilginin fiziksel üretim kabiliyetiyle
                buluştuğu mühendislik ortamı
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* DEĞERLER */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="mb-14 grid gap-8 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Değerlerimiz
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="title">
                Çalışma kültürünün
                <br />
                <span className="text-green">
                  temel yaklaşımı
                </span>
              </h2>
            </div>
          </motion.div>

          <Cards items={values} />
        </Container>
      </section>

      {/* KARİYER İLETİŞİM */}
      <DarkBand
        eyebrow="Kariyer"
        title="TAMİS'in bir parçası olun"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="max-w-2xl text-base leading-8 text-white/60">
              Kariyer ve çalışma olanakları hakkında TAMİS ile
              iletişime geçebilirsiniz.
            </p>
          </div>

          <Link
            to="/iletisim"
            className="btn btn-light shrink-0"
          >
            İletişime geçin
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </DarkBand>
    </main>
  );
}