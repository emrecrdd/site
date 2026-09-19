import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "../components/ui/Container";
import { reveal } from "../components/ui/PageKit";

const capabilities = [
  ["CNC Talaşlı İmalat", "Hassas parça üretimine yönelik CNC dik işleme ve tornalama kabiliyeti.", "/yetkinlikler#cnc"],
  ["Tasarım & Prototipleme", "Teknik ihtiyaçların tasarımdan fiziksel prototipe taşınması.", "/yetkinlikler#prototipleme"],
  ["Savunma & Havacılık Ar-Ge", "Savunma ve havacılık odağında Ar-Ge ve prototip geliştirme yaklaşımı.", "/ar-ge"],
];

const capacities = [
  ["1000 × 600", "CNC dik işleme"],
  ["1000 mm × 10 inç", "CNC tornalama"],
  ["4000 × 800 mm", "Üniversal tornalama / derin delme"],
  ["160 ton", "Hidrolik pres"],
];

export default function Home() {
  return <main className="overflow-hidden">
    <section className="pt-[84px]">
      <Container className="grid min-h-[calc(100svh-84px)] min-w-0 lg:grid-cols-12">
        <motion.div {...reveal} className="flex min-w-0 flex-col justify-between py-9 lg:col-span-5 lg:pr-12">
          <p className="eyebrow text-green">Savunma & Havacılık · Ankara</p>
          <div className="py-14 md:py-16">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[.17em] text-green">TAMİS Teknoloji · 1987</p>
            <h1 className="display">Hassas üretim.<br/><span className="text-green">İleri mühendislik.</span></h1>
            <p className="copy mt-9 max-w-lg border-t rule pt-7">TAMİS Teknoloji; savunma ve havacılık odağında CNC talaşlı imalat, tasarım, prototipleme ve Ar-Ge kabiliyetlerini bir araya getirir.</p>
            <Link to="/yetkinlikler" className="btn mt-8">Yetkinlikleri keşfet <ArrowUpRight size={13}/></Link>
          </div>
          <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.18em] text-ink/30"><ArrowDown size={12}/> Keşfetmek için kaydır</div>
        </motion.div>
        <motion.div {...reveal} className="media relative min-h-[440px] min-w-0 overflow-hidden md:min-h-[540px] lg:col-span-7 lg:min-h-0">
          <video src="/media/real/uretim.mp4" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
          <span className="media-label !text-white">TAMİS / ÜRETİM</span>
        </motion.div>
      </Container>
    </section>

    <section className="bg-white py-24 md:py-32">
      <Container><motion.div {...reveal} className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><p className="eyebrow">Yetkinlikler</p></div><div className="lg:col-span-9"><h2 className="title">Tasarımın üretimle<br/><span className="text-green">buluştuğu nokta.</span></h2><p className="copy mt-9 max-w-2xl border-t rule pt-7">Teknik ihtiyaçları üretilebilir çözümlere dönüştürmeye odaklanan mühendislik ve imalat kabiliyetleri.</p></div></motion.div></Container>
    </section>

    <section className="border-y rule bg-paper"><Container><div className="grid lg:grid-cols-3">{capabilities.map(([title,copy,to])=><Link key={title} to={to} className="group min-w-0 border-b rule p-8 lg:border-b-0 lg:border-r md:p-10"><h3 className="text-3xl font-medium tracking-[-.045em]">{title}</h3><p className="mt-5 text-sm leading-7 text-ink/50">{copy}</p><ArrowUpRight size={16} className="mt-8 text-ink/30 transition-colors group-hover:text-green"/></Link>)}</div></Container></section>

    <section className="technical-grid bg-green py-24 text-white md:py-32"><Container><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/45">Üretim Altyapısı</p><h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.055em] md:text-6xl">Ölçülebilir<br/><span className="text-white/40">üretim gücü.</span></h2><Link to="/uretim-altyapisi" className="btn btn-light mt-9">Makine parkı <ArrowUpRight size={13}/></Link></div><div className="lg:col-span-8 lg:border-l lg:border-white/15 lg:pl-12"><div className="grid md:grid-cols-2">{capacities.map(([value,title])=><div key={title} className="border-b border-white/15 py-7 md:p-8"><p className="text-3xl font-medium tracking-[-.04em]">{value}</p><p className="mt-3 text-sm text-white/45">{title}</p></div>)}</div></div></div></Container></section>

    <section className="bg-white py-24 md:py-32"><Container><div className="grid gap-12 lg:grid-cols-12 lg:items-center"><div className="media min-h-[440px] lg:col-span-6"><img src="/media/real/cnc-isleme.jpeg" alt="TAMİS üretim sahasında talaşlı imalat işlemi" className="absolute inset-0 h-full w-full object-cover"/></div><div className="lg:col-span-6 lg:pl-8"><p className="eyebrow">Savunma & Havacılık</p><h2 className="mt-8 title">Ar-Ge'den<br/><span className="text-green">prototipe.</span></h2><p className="copy mt-8 max-w-xl">Savunma ve havacılık odağındaki geliştirme çalışmalarını tasarım, prototipleme ve üretim kabiliyetleriyle destekliyoruz.</p><p className="mt-5 max-w-xl text-sm leading-7 text-ink/42">Proje ve ürün detayları, ilgili gizlilik gereksinimleri doğrultusunda kamuya açık kurumsal iletişimde paylaşılmamaktadır.</p><Link to="/ar-ge" className="btn mt-8">Ar-Ge yaklaşımı <ArrowUpRight size={13}/></Link></div></div></Container></section>

    <section className="border-t rule py-24 md:py-32"><Container><div className="grid gap-12 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-5"><p className="eyebrow">Kurumsal</p><h2 className="mt-8 title">1987'den<br/><span className="text-green">bugüne.</span></h2><p className="copy mt-8">Ankara merkezli TAMİS, geçmiş kuşaklardan gelen sanayi tecrübesini sürekli Ar-Ge çalışmaları ve üretim kabiliyetleriyle geliştiren bir aile şirketidir.</p><Link to="/kurumsal" className="btn mt-8">TAMİS'i tanıyın <ArrowUpRight size={13}/></Link></div><div className="media min-h-[420px] lg:col-span-7"><img src="/media/real/universal-torna.jpeg" alt="TAMİS üretim altyapısından üniversal tornalama detayı" className="absolute inset-0 h-full w-full object-cover"/></div></div></Container></section>
  </main>;
}
