import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const capabilities = [
  ["01","Savunma Sistemleri","Sistem mühendisliği, entegrasyon ve doğrulama.","/yetkinlikler#savunma"],
  ["02","Elektronik Teknolojiler","Gömülü sistemler, kontrol ve elektronik tasarım.","/yetkinlikler#elektronik"],
  ["03","Otonom Sistemler","Algılama, karar ve kontrol katmanları.","/yetkinlikler#otonom"],
  ["04","Yazılım & Yapay Zekâ","Kritik sistemler için güvenilir yazılım.","/yetkinlikler#yazilim"],
];
const process = ["Araştırma","Tasarım","Prototip","Doğrulama","Entegrasyon"];
const reveal = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.14}, transition:{duration:.72,ease:[.16,1,.3,1]} };
const imageReveal = { initial:{opacity:0,scale:.98}, whileInView:{opacity:1,scale:1}, viewport:{once:true,amount:.12}, transition:{duration:.9,ease:[.16,1,.3,1]} };

function Label({children}){return <div className="flex items-center gap-3"><span className="h-px w-8 bg-green"/><span className="eyebrow">{children}</span></div>}
function Media({title,sub,code,className=""}){return <div className={`media-placeholder ${className}`}><span>{title}</span><small>{sub}</small><div className="media-code">{code}</div></div>}

export default function Home(){
 return <main className="overflow-hidden">
  <section className="relative min-h-[100svh] border-b border-ink/10 pt-[82px]">
   <Container className="grid min-h-[calc(100svh-82px)] lg:grid-cols-12">
    <motion.div {...reveal} className="relative z-10 flex flex-col justify-between py-10 lg:col-span-5 lg:pr-12 xl:pr-16">
     <div className="flex items-center justify-between"><Label>Türkiye · İleri Teknoloji</Label><span className="technical-code">TAMİS / 001</span></div>
     <div className="py-16 lg:py-10">
      <p className="mb-6 text-[10px] font-extrabold uppercase tracking-[.2em] text-green">TAMİS Teknoloji</p>
      <h1 className="display-hero">Fikirden<br/><span className="text-green">sisteme.</span></h1>
      <div className="mt-10 max-w-lg border-t border-ink/15 pt-7">
       <p className="text-[16px] leading-8 text-ink/55 md:text-[18px]">Savunma, elektronik ve ileri teknoloji alanlarında yüksek katma değerli sistemler geliştiren mühendislik şirketi.</p>
       <Link to="/yetkinlikler" className="premium-link mt-8">Yetkinlikleri keşfet <span className="premium-link-icon"><ArrowUpRight size={14}/></span></Link>
      </div>
     </div>
     <div className="hidden items-center gap-3 border-t border-ink/10 pt-5 text-[9px] font-bold uppercase tracking-[.18em] text-ink/35 lg:flex"><ArrowDown size={13}/> Mühendislik yaklaşımını keşfet</div>
    </motion.div>
    <motion.div {...imageReveal} className="relative -mx-5 md:-mx-10 lg:col-span-7 lg:mx-0 lg:border-l lg:border-ink/10 lg:pl-10 xl:pl-14">
     <Media title="TAMİS / HERO VISUAL" sub="Ürün · tesis · mühendislik / Desktop 16:9 · Mobile 4:5" code="MEDIA / 001" className="hero-media h-full"/>
     <div className="absolute bottom-5 left-5 z-[3] bg-paper/90 px-4 py-3 backdrop-blur md:left-14"><span className="technical-code text-green">ENGINEERING / TECHNOLOGY / R&D</span></div>
    </motion.div>
   </Container>
  </section>

  <section className="bg-white py-24 md:py-36 lg:py-44"><Container><motion.div {...reveal} className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><Label>01 / Yaklaşım</Label></div><div className="lg:col-span-9"><h2 className="display-section max-w-[1100px]">Teknolojiyi yalnızca kullanmıyoruz. <span className="text-green">Geliştiriyoruz.</span></h2><div className="mt-12 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-2"><p className="max-w-xl text-base leading-8 text-ink/55">Araştırma, tasarım, prototipleme, doğrulama ve sistem entegrasyonunu tek bir mühendislik disiplini altında ele alıyoruz.</p><div className="md:text-right"><Link to="/kurumsal" className="text-link">Kurumsal yaklaşım <ArrowUpRight size={13}/></Link></div></div></div></motion.div></Container></section>

  <section className="bg-paper py-24 md:py-32"><Container><motion.div {...reveal} className="grid gap-8 border-b border-ink/15 pb-10 lg:grid-cols-12"><div className="lg:col-span-3"><Label>02 / Yetkinlikler</Label></div><div className="lg:col-span-9"><h2 className="display-section">Disiplinler<br/>birlikte çalışır.</h2></div></motion.div><div className="grid lg:grid-cols-12"><div className="lg:col-span-7 lg:pr-12">{capabilities.map(([n,t,d,to])=><motion.div {...reveal} key={n}><Link to={to} className="capability-row group"><span className="technical-code text-green">{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight className="capability-arrow" size={17}/></Link></motion.div>)}</div><motion.div {...imageReveal} className="mt-12 lg:col-span-5 lg:mt-0 lg:border-l lg:border-ink/10 lg:pl-12"><Media title="CAPABILITY / ENGINEERING" sub="Sistem · elektronik · laboratuvar" code="MEDIA / 002" className="aspect-[4/5] lg:sticky lg:top-28 lg:min-h-[650px]"/></motion.div></div></Container></section>

  <section className="relative overflow-hidden bg-green py-24 text-white md:py-32 lg:py-40"><div className="technical-grid-dark absolute inset-0"/><Container className="relative"><motion.div {...reveal} className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><div className="flex items-center gap-3"><span className="h-px w-8 bg-white/50"/><span className="eyebrow !text-white/45">03 / Sistem Mimarisi</span></div></div><div className="lg:col-span-9"><p className="display-section max-w-5xl">Tek bir parçayı değil,<br/><span className="text-white/40">çalışan bütünü tasarlamak.</span></p><div className="mt-14 grid border-t border-white/15 md:grid-cols-4">{["Algılama","Elektronik","Yazılım","Entegrasyon"].map((x,i)=><div key={x} className="border-b border-white/15 py-7 md:border-b-0 md:border-r md:px-6 first:pl-0 last:border-r-0"><span className="technical-code !text-white/30">0{i+1}</span><p className="mt-5 text-xl font-medium tracking-[-.03em]">{x}</p></div>)}</div><Link to="/teknolojiler" className="mt-10 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em]">Teknoloji alanları <ArrowRight size={14}/></Link></div></motion.div></Container></section>

  <section className="bg-[#e5e9e4] py-24 md:py-32"><Container><motion.div {...reveal} className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-3"><Label>04 / Ürünler</Label></div><div className="lg:col-span-9"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="display-section">Mühendislik<br/><span className="text-green">ürüne dönüşür.</span></h2><Link to="/urunler" className="text-link">Ürün portföyü <ArrowUpRight size={13}/></Link></div><motion.div {...imageReveal} className="mt-12"><Media title="FEATURED SYSTEM / PRODUCT" sub="Doğrulanmış ürün içeriği geldiğinde ana ürün vitrini" code="PRODUCT / 001" className="aspect-[4/5] md:aspect-[16/7] md:min-h-[520px]"/></motion.div></div></motion.div></Container></section>

  <section className="bg-white py-24 md:py-32"><Container><motion.div {...reveal} className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-3"><Label>05 / Süreç</Label></div><div className="lg:col-span-9"><h2 className="display-section">Fikirden,<br/><span className="text-green">doğrulanmış sisteme.</span></h2></div></motion.div><div className="mt-16 border-t border-ink/15">{process.map((x,i)=><motion.div {...reveal} key={x} className="process-row"><span className="technical-code text-green">0{i+1}</span><h3>{x}</h3><span className="hidden h-px w-10 bg-ink/15 md:block"/></motion.div>)}</div></Container></section>

  <section className="bg-paper py-24 md:py-32"><Container><div className="grid gap-12 lg:grid-cols-12"><motion.div {...imageReveal} className="lg:col-span-6"><Media title="R&D / LABORATORY" sub="Laboratuvar · prototip · test" code="MEDIA / 003" className="aspect-[4/5] md:aspect-[5/4] lg:min-h-[650px]"/></motion.div><motion.div {...reveal} className="flex flex-col justify-between lg:col-span-6 lg:pl-8"><div><Label>06 / Araştırma & Geliştirme</Label><h2 className="display-section mt-10">Yarının<br/>gereksinimleri<br/><span className="text-green">için.</span></h2></div><div className="mt-14 border-t border-ink/15 pt-8"><p className="max-w-lg text-base leading-8 text-ink/55">Gelecekte ihtiyaç duyulacak teknolojileri bugünden araştıran, prototipleyen ve sistem seviyesinde doğrulayan uzun vadeli yaklaşım.</p><Link to="/ar-ge" className="text-link mt-8">Ar-Ge yaklaşımı <ArrowUpRight size={13}/></Link></div></motion.div></div></Container></section>

  <section className="relative bg-[#e2e6e1] py-24 md:py-32"><div className="technical-grid absolute inset-0"/><Container className="relative"><motion.div {...reveal} className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><Label>07 / Kurumsal</Label><p className="mt-6 max-w-[220px] text-xs leading-6 text-ink/40">Mühendislik odağında büyüyen teknoloji şirketi.</p></div><div className="lg:col-span-9"><div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end"><h2 className="display-section">TAMİS'i<br/><span className="text-green">yakından tanıyın.</span></h2><div><p className="text-sm leading-7 text-ink/50">Şirket yapısı, çalışma yaklaşımı, vizyon ve kurumsal ilkeler.</p><Link to="/kurumsal" className="text-link mt-7">Kurumsal <ArrowUpRight size={13}/></Link></div></div><motion.div {...imageReveal} className="mt-12"><Media title="FACILITY / TEAM" sub="Tesis · ekip · çalışma ortamı" code="MEDIA / 004" className="aspect-[4/5] md:aspect-[16/7] md:min-h-[470px]"/></motion.div></div></motion.div></Container></section>
 </main>
}
