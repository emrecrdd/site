import { Hero, Statement, DarkBand, Cards } from "../components/ui/PageKit";
import Container from "../components/ui/Container";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const items = [
  { id:"cnc", title:"CNC Talaşlı İmalat", copy:"CNC dik işleme, CNC tornalama ve üniversal tornalama altyapısıyla hassas parça imalatı." },
  { id:"prototipleme", title:"Tasarım & Prototipleme", copy:"Teknik ihtiyaçların tasarım çalışmalarından fiziksel prototipe ve üretilebilir çözüme taşınması." },
  { id:"derin-delme", title:"Derin Delme", copy:"4000 mm × 800 mm üniversal tornalama altyapısıyla çelik karot derin delme kabiliyeti." },
  { id:"pres", title:"Hidrolik Pres", copy:"160 ton hidrolik pres kapasitesiyle üretim süreçlerini destekleyen şekillendirme altyapısı." },
];
const materials=["4140 çelik","8620 çelik","1040 çelik","CK45 çelik","Hardox 450–500","7000 seri alüminyum","316 paslanmaz çelik"];

export default function Capabilities(){return <main>
  <Hero eyebrow="Yetkinlikler" title="Üretilebilir" accent="çözümler." copy="TAMİS, talaşlı imalat ile tasarım ve prototipleme kabiliyetlerini aynı üretim yaklaşımı içinde buluşturur." media="MANUFACTURING / CAPABILITIES" />
  <Statement eyebrow="Üretim Yaklaşımı" title="Teknik ihtiyaçtan" accent="fiziksel çıktıya." copy="İmalat ve prototipleme süreçlerinde hedef; teknik gereksinimi uygulanabilir, ölçülebilir ve üretilebilir bir sonuca dönüştürmektir." />
  <section className="border-y rule bg-paper py-20 md:py-28"><Container><Cards items={items}/></Container></section>
  <section id="malzemeler" className="bg-white py-24 md:py-28"><Container><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="eyebrow">İşlenen Hammaddeler</p><h2 className="mt-8 text-5xl font-medium leading-[.92] tracking-[-.055em]">Farklı malzemeler.<br/><span className="text-green">Tek üretim disiplini.</span></h2></div><div className="lg:col-span-8"><div className="grid border-t rule sm:grid-cols-2">{materials.map(m=><div key={m} className="border-b rule py-5 text-lg font-medium sm:px-6">{m}</div>)}</div><p className="mt-6 text-xs leading-6 text-ink/40">Malzeme listesi şirket tarafından paylaşılan güncel üretim bilgilerine dayanmaktadır.</p></div></div></Container></section>
  <DarkBand eyebrow="Üretim Altyapısı" title="Kabiliyetin arkasında makine parkı."><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><p className="max-w-2xl text-base leading-8 text-white/58">CNC dik işleme, tornalama, derin delme ve hidrolik pres altyapısının kapasite detaylarını üretim altyapısı sayfasında inceleyebilirsiniz.</p><Link to="/uretim-altyapisi" className="btn btn-light shrink-0">Altyapıyı incele <ArrowUpRight size={13}/></Link></div></DarkBand>
</main>}
