```jsx
import { Hero } from "../components/ui/PageKit";
import Container from "../components/ui/Container";
import { ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    label: "Adres",
    value:
      "Saray Mah. 50.Cad. 17/C Kahramankazan, Ankara/Türkiye 06980",
  },
  {
    label: "Telefon",
    value: "+90 312 394 01 35",
    href: "tel:+903123940135",
  },
  {
    label: "E-posta",
    value: "info@tamis.com.tr",
    href: "mailto:info@tamis.com.tr",
  },
];

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <Hero
        eyebrow="İletişim"
        title="Bizimle"
        accent="iletişime geçin"
        copy="Kurumsal iletişim ve genel bilgi talepleri için TAMİS Teknoloji ile iletişime geçebilirsiniz."
        media="TAMİS / ANKARA"
        mediaSrc="/media/real/iletisim.png"
        mediaFit="contain"
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">
                Genel Merkez
              </p>

              <h2 className="mt-7 text-5xl font-medium leading-[.94] tracking-[-.055em] md:text-6xl">
                Ankara
                <br />
                <span className="text-green">
                  Türkiye
                </span>
              </h2>
            </div>

            <div className="min-w-0 lg:col-span-8">
              <div className="grid border-t rule md:grid-cols-3">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="min-w-0 border-b rule py-7 md:border-b-0 md:border-r md:px-7 md:py-6 last:md:border-r-0"
                  >
                    <p className="eyebrow">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-5 inline-flex max-w-full items-start gap-2 break-words text-lg font-medium transition-colors hover:text-green"
                      >
                        <span className="min-w-0 break-words">
                          {item.value}
                        </span>

                        <ArrowUpRight
                          size={13}
                          className="mt-1 shrink-0"
                        />
                      </a>
                    ) : (
                      <p className="mt-5 max-w-sm text-base leading-7 text-ink/70">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 overflow-hidden border rule">
            <iframe
              title="TAMİS Teknoloji konum"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24435.68836080939!2d32.598189!3d40.042811!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x14d33fa5d77d715f%3A0xa5434c7219f8c8de!2zVEFNxLBT!5e0!3m2!1str!2str!4v1789760539689!5m2!1str!2str"
              width="100%"
              height="520"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block w-full"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
```
