import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

export const reveal = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.12,
  },
  transition: {
    duration: 0.65,
    ease: [0.16, 1, 0.3, 1],
  },
};

export function Hero({
  eyebrow,
  title,
  accent,
  copy,
  media = "ENGINEERING / SYSTEM",
  mediaSrc,
  mediaType = "image",
}) {
  return (
    <section className="min-w-0 border-b rule pt-[84px]">
      <Container className="grid min-w-0 lg:min-h-[82svh] lg:grid-cols-12">
        {/* CONTENT */}

        <motion.div
          {...reveal}
          className="flex min-w-0 flex-col justify-between py-10 lg:col-span-7 lg:py-14 lg:pr-12"
        >
          <div>
            <p className="eyebrow text-green">
              {eyebrow}
            </p>
          </div>

          <div className="min-w-0 py-14 sm:py-16">
            <h1 className="display min-w-0 max-w-full">
              {title}
              <br />

              <span className="text-green">
                {accent}
              </span>
            </h1>

            <p className="copy mt-8 max-w-xl border-t rule pt-7 sm:mt-9">
              {copy}
            </p>
          </div>

          <p className="max-w-full text-[8px] font-bold uppercase tracking-[.16em] text-ink/30 sm:text-[9px] sm:tracking-[.18em]">
            Engineering · Technology · R&amp;D
          </p>
        </motion.div>

        {/* MEDIA */}

        <motion.div
          {...reveal}
          className="media relative min-h-[420px] min-w-0 w-full max-w-full overflow-hidden md:min-h-[500px] lg:col-span-5 lg:min-h-0 lg:border-y-0 lg:border-r-0"
        >
          {mediaSrc && mediaType === "video" && (
            <video src={mediaSrc} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
          )}
          {mediaSrc && mediaType !== "video" && (
            <img src={mediaSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
          )}
          {mediaSrc && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />}
          <span className={`media-label ${mediaSrc ? "!text-white" : ""}`}>
            {media}
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

export function Statement({
  eyebrow,
  title,
  accent,
  copy,
  link,
  to,
}) {
  return (
    <section className="min-w-0 bg-white py-20 md:py-32">
      <Container>
        <motion.div
          {...reveal}
          className="grid min-w-0 gap-12 lg:grid-cols-12"
        >
          <div className="min-w-0 lg:col-span-3">
            <p className="eyebrow">
              {eyebrow}
            </p>
          </div>

          <div className="min-w-0 lg:col-span-9">
            <h2 className="title max-w-full">
              {title}
              <br />

              <span className="text-green">
                {accent}
              </span>
            </h2>

            <div className="mt-10 grid min-w-0 gap-8 border-t rule pt-7 md:grid-cols-2">
              <p className="copy min-w-0 max-w-xl">
                {copy}
              </p>

              {link && (
                <div className="min-w-0 md:text-right">
                  <Link
                    className="btn"
                    to={to}
                  >
                    {link}

                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export function DarkBand({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="technical-grid min-w-0 bg-green py-20 text-white md:py-28">
      <Container>
        <motion.div
          {...reveal}
          className="min-w-0"
        >
          <p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">
            {eyebrow}
          </p>

          <h2 className="mt-8 max-w-5xl break-words text-[clamp(2.5rem,11vw,7rem)] font-medium leading-[.9] tracking-[-.055em] sm:text-[clamp(3rem,7vw,7rem)] sm:leading-[.88] sm:tracking-[-.065em]">
            {title}
          </h2>

          <div className="mt-12 min-w-0 border-t border-white/15 pt-8 md:mt-14">
            {children}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export function Cards({ items }) {
  return (
    <div className="grid min-w-0 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          id={item.id}
          className="min-w-0 border-b border-r rule p-7 md:p-9"
        >
          <h3 className="break-words text-2xl font-medium tracking-[-.04em]">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-ink/50">
            {item.copy}
          </p>
        </div>
      ))}
    </div>
  );
}