import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import { products } from "../data/products";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
};

export default function ProductDetail() {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <main className="pt-[82px]">
        <Container className="flex min-h-[70vh] flex-col justify-center py-20">
          <p className="eyebrow">
            TAMİS / Ürünler
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-.055em] md:text-7xl">
            Ürün bulunamadı.
          </h1>

          <Link
            to="/urunler"
            className="mt-10 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]"
          >
            <ArrowLeft size={15} />
            Ürünlere dön
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="border-b border-ink/12 pt-[82px]">
        <Container>
          <div className="grid lg:min-h-[720px] lg:grid-cols-[.75fr_1.25fr]">
            <motion.div
              {...reveal}
              className="flex min-w-0 flex-col justify-between py-14 lg:py-20 lg:pr-16"
            >
              <div>
                <Link
                  to="/urunler"
                  className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-ink/45"
                >
                  <ArrowLeft size={14} />
                  Ürünler
                </Link>

                <p className="eyebrow mt-16 text-green">
                  {product.category}
                </p>

                <h1 className="mt-6 text-[clamp(4rem,15vw,6rem)] font-semibold leading-[.86] tracking-[-.07em] lg:text-[clamp(5rem,7vw,8rem)]">
                  {product.title}
                </h1>

                <p className="mt-8 max-w-lg text-base leading-8 text-ink/55">
                  {product.summary}
                </p>
              </div>

              <div className="mt-16 flex items-center justify-between border-t border-ink/15 pt-5">
                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-ink/35">
                  {product.code}
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-green">
                  TAMİS
                </span>
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              className="-mx-5 min-w-0 md:-mx-10 lg:mx-0"
            >
              <div className="media-placeholder h-full min-h-[520px] lg:min-h-[720px]">
                <span>PRODUCT HERO</span>

                <small>
                  Ürün renderı / stüdyo çekimi
                </small>

                <div className="media-code">
                  {product.code}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-36">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20"
          >
            <p className="eyebrow">
              01 / Genel Bakış
            </p>

            <div>
              <h2 className="max-w-4xl text-[clamp(2.8rem,10vw,4.7rem)] font-medium leading-[.98] tracking-[-.055em]">
                Sistem hakkında.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-ink/55">
                {product.description}
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* DETAIL MEDIA */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.div {...reveal}>
            <div className="media-placeholder aspect-[4/5] min-h-0 md:aspect-[16/8]">
              <span>PRODUCT DETAIL / ENGINEERING</span>

              <small>
                Detay görseli · sistem mimarisi · ürün fotoğrafı
              </small>

              <div className="media-code">
                DETAIL 01
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PUBLIC TECH DATA */}
      <section className="bg-green py-20 text-white md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"
          >
            <p className="eyebrow text-white/45">
              02 / Teknik Bilgiler
            </p>

            <div>
              <h2 className="max-w-4xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.95] tracking-[-.055em]">
                Kamuya açık
                <br />
                <span className="text-white/45">
                  teknik veriler.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/60">
                Ürüne ait yayınlanabilir teknik bilgiler kesinleştiğinde
                performans, boyut, mimari ve ilgili diğer özellikler bu
                bölümde sunulacaktır.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <motion.div
            {...reveal}
            className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="eyebrow">
                03 / TAMİS
              </p>

              <h2 className="mt-5 text-[clamp(2.8rem,10vw,4.5rem)] font-medium leading-[.96] tracking-[-.055em]">
                Sistem hakkında
                <br />
                iletişime geçin.
              </h2>
            </div>

            <Link
              to="/iletisim"
              className="inline-flex w-fit items-center gap-3 border border-ink/25 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] transition hover:bg-green hover:text-white"
            >
              İletişim
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}