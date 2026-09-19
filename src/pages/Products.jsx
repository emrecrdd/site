import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import {
  Hero,
  Statement,
  DarkBand,
} from "../components/ui/PageKit";

import Container from "../components/ui/Container";
import { products } from "../data/products";

export default function Products() {
  return (
    <main>
      <Hero
        eyebrow="Ürünler"
        title="Mühendislik"
        accent="ürüne dönüşür."
        copy="TAMİS ürün ve sistem portföyü için ölçeklenebilir, görsel odaklı ürün mimarisi."
        media="PRODUCT / SYSTEM FAMILY"
      />

      <Statement
        eyebrow="Portföy"
        title="Sistemleri yalnızca göstermiyoruz."
        accent="Mühendisliğini anlatıyoruz."
        copy="Her ürün sayfası; sistemin amacı, mimarisi, kamuya açık kabiliyetleri ve görsel anlatımı için tasarlandı."
      />

      <section
        id="sistemler"
        className="py-24"
      >
        <Container>
          <div className="grid gap-px bg-ink/10 md:grid-cols-2">
            {products.map((product) => (
              <Link
                to={`/urunler/${product.slug}`}
                key={product.slug}
                className="group min-w-0 bg-paper p-5 md:p-8"
              >
                <div className="media aspect-[16/10] min-w-0 overflow-hidden">
                  <span className="media-label">
                    {product.code} / PRODUCT RENDER
                  </span>
                </div>

                <div className="flex justify-between gap-6 pt-7">
                  <div className="min-w-0">
                    <p className="eyebrow">
                      {product.category}
                    </p>

                    <h2 className="mt-3 text-4xl font-medium tracking-[-.05em]">
                      {product.title}
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-ink/48">
                      {product.summary}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-ink/25 transition-colors group-hover:text-green"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <DarkBand
        eyebrow="Teknoloji Platformları"
        title="Ürün ailesinden teknoloji ekosistemine."
      >
        <p
          id="platformlar"
          className="max-w-2xl text-base leading-8 text-white/55"
        >
          Ürün portföyü netleştiğinde sistem aileleri ve ortak
          teknoloji platformları bu mimari altında
          ayrıştırılacak.
        </p>
      </DarkBand>
    </main>
  );
}