
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

export const reveal = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.14,
  },
  transition: {
    duration: 0.72,
    ease: [0.16, 1, 0.3, 1],
  },
};

export function Hero({
  eyebrow,
  title,
  accent,
  copy,
  media,
  mediaSrc,
  videoSrc,
  mediaFit = "cover",
}) {
  return (
    <section className="border-b rule pt-[84px]">
      <Container className="grid min-w-0 lg:min-h-[78svh] lg:grid-cols-12">
        <motion.div
          {...reveal}
          className="flex min-w-0 flex-col justify-between py-10 lg:col-span-6 lg:py-14 lg:pr-14"
        >
          <p className="eyebrow text-green">
            {eyebrow}
          </p>

          <div className="py-14 lg:py-20">
            <h1 className="display-page">
              {title}

              {accent && (
                <>
                  <br />
                  <span className="text-green">
                    {accent}
                  </span>
                </>
              )}
            </h1>

            {copy && (
              <p className="copy mt-9 max-w-xl border-t rule pt-7">
                {copy}
              </p>
            )}
          </div>

          <p className="micro-label">
            TAMİS · Ankara · 1987
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          className="media relative min-h-[420px] min-w-0 w-full max-w-full overflow-hidden lg:col-span-6 lg:min-h-0 lg:border-y-0 lg:border-r-0"
        >
          {videoSrc && (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

        {!videoSrc && mediaSrc && (
  <img
    src={mediaSrc}
    alt=""
    className={
      mediaFit === "contain"
        ? "relative block h-auto w-full object-contain"
        : "absolute inset-0 h-full w-full object-cover"
    }
  />
)}

          {(videoSrc || mediaSrc) && (
            <div className="media-shade" />
          )}

          {media && (
            <span className="media-label !text-white">
              {media}
            </span>
          )}
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
    <section className="bg-white py-20 md:py-28">
      <Container>
        <motion.div
          {...reveal}
          className="grid gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-3">
            <p className="eyebrow">
              {eyebrow}
            </p>
          </div>

          <div className="min-w-0 lg:col-span-9">
            <h2 className="title">
              {title}

              {accent && (
                <>
                  <br />
                  <span className="text-green">
                    {accent}
                  </span>
                </>
              )}
            </h2>

            <div className="mt-10 grid gap-8 border-t rule pt-7 md:grid-cols-2">
              <p className="copy max-w-xl">
                {copy}
              </p>

              {link && to && (
                <div className="md:text-right">
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
    <section className="technical-grid bg-green py-20 text-white md:py-28">
      <Container>
        <motion.div {...reveal}>
          {eyebrow && (
            <p className="micro-label !text-white/45">
              {eyebrow}
            </p>
          )}

          <h2 className="dark-title mt-8">
            {title}
          </h2>

          {children && (
            <div className="mt-12 border-t border-white/15 pt-8">
              {children}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

export function Cards({ items = [] }) {
  return (
    <div className="grid border-l border-t rule md:grid-cols-2">
      {items.map((item) => (
        <motion.article
          {...reveal}
          key={item.id || item.title}
          id={item.id}
          className="group min-w-0 scroll-mt-[110px] border-b border-r rule p-7 md:p-9 lg:p-11"
        >
          {item.kicker && (
            <p className="micro-label text-green">
              {item.kicker}
            </p>
          )}

          <h3
            className={`text-[clamp(1.8rem,3vw,2.8rem)] font-medium leading-[.98] tracking-[-.05em] ${
              item.kicker ? "mt-8" : ""
            }`}
          >
            {item.title}
          </h3>

          {item.copy && (
            <p className="mt-5 max-w-md text-sm leading-7 text-ink/52">
              {item.copy}
            </p>
          )}
        </motion.article>
      ))}
    </div>
  );
}

