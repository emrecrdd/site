import { motion } from "framer-motion";
import { ArrowUpRight, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const reveal = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center overflow-hidden pt-[82px]">
      <Container className="py-16 md:py-24">
        <motion.div {...reveal}>
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-green" />

            <span className="eyebrow text-green">
              404 / Sayfa Bulunamadı
            </span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <span className="block text-[clamp(7rem,28vw,18rem)] font-semibold leading-[.72] tracking-[-.09em] text-green">
                404
              </span>

              <h1 className="mt-10 max-w-4xl text-[clamp(3rem,10vw,5rem)] font-medium leading-[.95] tracking-[-.06em]">
                Aradığınız sayfa
                <br />
                <span className="text-green">
                  burada değil.
                </span>
              </h1>
            </div>

            <div className="max-w-lg lg:pb-2">
              <p className="text-base leading-8 text-ink/55">
                Sayfa kaldırılmış, adresi değiştirilmiş veya bağlantı
                hatalı olabilir. TAMİS Teknoloji ana sayfasına dönerek
                devam edebilirsiniz.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="btn-primary"
                >
                  <MoveLeft size={15} />
                  Ana sayfaya dön
                </Link>

                <Link
                  to="/iletisim"
                  className="btn-secondary"
                >
                  İletişim
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-ink/15 pt-5 md:mt-24">
            <div className="flex flex-col gap-3 text-[9px] font-bold uppercase tracking-[.18em] text-ink/35 sm:flex-row sm:items-center sm:justify-between">
              <span>TAMİS Teknoloji</span>
              <span>Error / 404</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}