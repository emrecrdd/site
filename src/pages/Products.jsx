import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
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

export default function Products() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="border-b border-ink/12 pt-[82px]">
        <Container className="py-16 md:py-24 lg:py-32">
          <motion.div {...reveal}>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-green" />
              <span className="eyebrow text-green">
                TAMİS / Ürünler
              </span>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <h1 className="max-w-5xl text-[clamp(4rem,15vw,7rem)] font-semibold leading-[.82] tracking-[-.075em] lg:text-[clamp(6rem,9vw,10rem)]">
                Mühendislik
                <br />
                ürüne
                <br />
                <span className="text-green">dönüşür.</span>
              </h1>

              <div className="max-w-lg lg:pb-3">
                <p className="text-base leading-8 text-ink/55 md:text-lg">
                  Araştırma, tasarım ve sistem mühendisliği çalışmalarımızı
                  fiziksel ve dijital teknoloji sistemlerine dönüştürüyoruz.
                </p>

                <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-ink/40">
                  <MoveRight size={15} />
                  Sistemler & teknoloji platformları
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-32">
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20"
          >
            <p className="eyebrow">01 / Portföy</p>

            <div>
              <h2 className="max-w-5xl text-[clamp(2.8rem,10vw,4.7rem)] font-medium leading-[.98] tracking-[-.055em]">
                Sistem seviyesinde
                <br />
                <span className="text-green">
                  teknoloji geliştirme.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-ink/55">
                TAMİS ürün portföyü; farklı mühendislik disiplinlerinin ortak
                bir sistem mimarisi altında bir araya geldiği teknoloji
                çözümlerini sunmak üzere yapılandırılmaktadır.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SYSTEM FAMILIES */}
      <section
        id="sistemler"
        className="scroll-mt-24 border-y border-ink/12 py-20 md:py-32"
      >
        <Container>
          <motion.div {...reveal}>
            <div className="mb-12 flex items-end justify-between md:mb-16">
              <div>
                <p className="eyebrow">
                  02 / Sistem Aileleri
                </p>

                <h2 className="mt-5 text-[clamp(2.8rem,10vw,4.5rem)] font-medium leading-[.96] tracking-[-.055em]">
                  Ürün portföyü.
                </h2>
              </div>

              <span className="hidden text-[9px] font-bold uppercase tracking-[.18em] text-ink/35 md:block">
                TAMİS / SYSTEMS
              </span>
            </div>

            <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
              {products.map((product, index) => (
                <motion.article
                  {...reveal}
                  key={product.slug}
                  className="group min-w-0"
                >
                  <Link to={`/urunler/${product.slug}`}>
                    <div className="media-placeholder aspect-[4/5] min-h-0 overflow-hidden md:aspect-[16/11]">
                      <span>PRODUCT / SYSTEM</span>

                      <small>
                        Ürün renderı veya ürün fotoğrafı
                      </small>

                      <div className="media-code">
                        {product.code}
                      </div>
                    </div>

                    <div className="border-b border-ink/15 py-6">
                      <div className="flex items-center justify-between gap-5">
                        <span className="text-[9px] font-bold uppercase tracking-[.18em] text-green">
                          {product.category}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>

                      <div className="mt-4 flex items-start justify-between gap-6">
                        <div>
                          <h3 className="text-2xl font-medium tracking-[-.04em] md:text-3xl">
                            {product.title}
                          </h3>

                          <p className="mt-3 max-w-lg text-sm leading-7 text-ink/50">
                            {product.summary}
                          </p>
                        </div>

                        <span className="text-[10px] font-bold text-ink/30">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PLATFORMS */}
      <section
        id="platformlar"
        className="scroll-mt-24 bg-green py-20 text-white md:py-36"
      >
        <Container>
          <motion.div
            {...reveal}
            className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"
          >
            <p className="eyebrow text-white/45">
              03 / Teknoloji Platformları
            </p>

            <div>
              <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-medium leading-[.94] tracking-[-.06em]">
                Tek bir ürünün ötesinde
                <br />
                <span className="text-white/45">
                  teknoloji altyapısı.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
                Geliştirilen temel teknolojilerin farklı sistem ve
                gereksinimlere uyarlanabilmesini sağlayan ortak mühendislik
                altyapıları oluşturmayı hedefliyoruz.
              </p>

              <Link
                to="/teknolojiler"
                className="mt-10 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-xs font-bold uppercase tracking-[.15em]"
              >
                Teknoloji alanları
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PRODUCT PHILOSOPHY */}
      <section className="bg-white py-20 md:py-32">
        <Container>
          <motion.div {...reveal}>
            <p className="eyebrow">
              04 / Ürün yaklaşımı
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              {[
                [
                  "01",
                  "Gereksinim",
                  "Sistemin gerçek çalışma koşullarını ve teknik gereksinimlerini anlamak.",
                ],
                [
                  "02",
                  "Mimari",
                  "Farklı mühendislik disiplinlerini ortak sistem mimarisi içerisinde birleştirmek.",
                ],
                [
                  "03",
                  "Doğrulama",
                  "Geliştirilen çözümü sistem seviyesinde test etmek ve doğrulamak.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border-t border-ink/15 pt-6"
                >
                  <span className="text-xs font-bold text-green">
                    {number}
                  </span>

                  <h3 className="mt-14 text-2xl font-medium tracking-[-.04em]">
                    {title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-ink/50">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="px-3 pb-3 md:px-6 md:pb-6">
        <div className="bg-[#e9eee9]">
          <Container className="py-16 md:py-28">
            <motion.div
              {...reveal}
              className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p className="eyebrow">
                  05 / Ar-Ge
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,12vw,5rem)] font-medium leading-[.94] tracking-[-.055em] md:text-7xl">
                  Ürünün arkasındaki
                  <br />
                  mühendislik.
                </h2>
              </div>

              <Link
                to="/ar-ge"
                className="inline-flex w-fit shrink-0 items-center gap-3 border border-ink/25 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] transition hover:bg-green hover:text-white"
              >
                Ar-Ge
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </Container>
        </div>
      </section>
    </main>
  );
}