import {
  useParams,
  Link,
} from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import { products } from "../data/products";
import Container from "../components/ui/Container";

export default function ProductDetail() {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <main className="min-h-screen pt-40">
        <Container>
          <h1 className="title">
            Ürün bulunamadı.
          </h1>

          <Link
            to="/urunler"
            className="btn mt-8"
          >
            <ArrowLeft size={13} />
            Ürünlere dön
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}

      <section className="min-w-0 pt-[84px]">
        <Container className="grid min-w-0 lg:min-h-[76svh] lg:grid-cols-12">
          <div className="flex min-w-0 flex-col justify-between py-12 lg:col-span-5 lg:pr-12">
            <div>
              <Link
                to="/urunler"
                className="eyebrow"
              >
                ← Ürünler
              </Link>

              <p className="eyebrow mt-12 text-green">
                {product.category} / {product.code}
              </p>
            </div>

            <div className="mt-16 min-w-0 lg:mt-0">
              <h1 className="display max-w-full">
                {product.title}
                <span className="text-green">
                  .
                </span>
              </h1>

              <p className="copy mt-8 border-t rule pt-7">
                {product.summary}
              </p>
            </div>
          </div>

          <div className="media relative min-h-[420px] min-w-0 w-full max-w-full overflow-hidden md:min-h-[480px] lg:col-span-7 lg:min-h-0">
            <span className="media-label">
              {product.code} / HERO PRODUCT RENDER
            </span>
          </div>
        </Container>
      </section>

      {/* SİSTEM GENEL BAKIŞ */}

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">
                Sistem Genel Bakış
              </p>
            </div>

            <div className="min-w-0 lg:col-span-9">
              <h2 className="title">
                Sistem anlatımı için
                <br />

                <span className="text-green">
                  hazır mimari.
                </span>
              </h2>

              <p className="copy mt-9 max-w-2xl">
                {product.description}
              </p>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                <div className="media aspect-[4/3] min-w-0 overflow-hidden">
                  <span className="media-label">
                    DETAIL / SYSTEM
                  </span>
                </div>

                <div className="media aspect-[4/3] min-w-0 overflow-hidden">
                  <span className="media-label">
                    DETAIL / ENGINEERING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TEKNİK VERİ */}

      <section className="technical-grid bg-green py-20 text-white">
        <Container>
          <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
            Kamuya Açık Teknik Veri
          </p>

          <h2 className="mt-7 max-w-5xl text-5xl font-medium tracking-[-.055em]">
            Doğrulanmış veriler
            <br />

            <span className="text-white/40">
              geldiğinde yayınlanacak.
            </span>
          </h2>
        </Container>
      </section>
    </main>
  );
}