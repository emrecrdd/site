import { Hero, Statement, DarkBand } from "../components/ui/PageKit";
import Container from "../components/ui/Container";

const machines=[
  ["CNC Dik İşleme","1 adet 4 eksen + 1 adet 3 eksen","1000 × 600 işleme kapasitesi"],
  ["CNC Torna","1 adet · 10 inç","1000 mm × 10 inç"],
  ["Üniversal Torna & Çelik Karot Derin Delme","1 adet · 4 metre","4000 mm × 800 mm"],
  ["Üniversal Torna","1 adet · 1,5 metre","1500 mm × 350 mm"],
  ["Hidrolik Pres","1 adet","160 ton"],
];
export default function Infrastructure(){return <main>
  <Hero eyebrow="Üretim Altyapısı" title="Makine parkı." accent="Ölçülebilir kapasite." copy="TAMİS'in üretim altyapısı CNC dik işleme, CNC ve üniversal tornalama, derin delme ve hidrolik pres kabiliyetlerinden oluşur." media="PRODUCTION / MACHINE PARK"/>
  <Statement eyebrow="Üretim" title="Hassas imalat için" accent="somut altyapı." copy="Farklı parça geometrileri ve üretim ihtiyaçları için dik işleme, tornalama ve tamamlayıcı üretim kabiliyetleri aynı yapı altında çalışır."/>
  <section id="makine-parki" className="bg-white py-24"><Container><p className="eyebrow">Makine Parkı</p><div className="mt-10 border-t rule">{machines.map(([name,type,capacity])=><div key={`${name}-${type}`} className="grid gap-3 border-b rule py-7 md:grid-cols-12 md:items-center"><h3 className="text-2xl font-medium tracking-[-.04em] md:col-span-5">{name}</h3><p className="text-sm text-ink/48 md:col-span-3">{type}</p><p className="text-lg font-medium text-green md:col-span-4 md:text-right">{capacity}</p></div>)}</div></Container></section>
  <section className="py-24"><Container><div className="grid gap-6 md:grid-cols-2"><div className="media min-h-[500px]"><img src="/media/real/universal-torna.jpeg" alt="Üniversal tornalama işlemi" className="absolute inset-0 h-full w-full object-cover"/></div><div className="media min-h-[500px]"><img src="/media/real/islenmis-parca.jpeg" alt="Talaşlı imalat uygulanmış metal parça detayı" className="absolute inset-0 h-full w-full object-cover"/></div></div></Container></section>
  <DarkBand eyebrow="Kalite Kontrol" title="Ölçüm, üretimin parçasıdır."><div id="kalite" className="grid gap-8 md:grid-cols-2"><div className="border-t border-white/20 pt-5"><h3 className="text-2xl">CMM Ölçüm Cihazı</h3><p className="mt-3 text-sm leading-7 text-white/48">Boyutsal kalite kontrol süreçlerini destekleyen koordinat ölçüm altyapısı.</p></div><div className="border-t border-white/20 pt-5"><h3 className="text-2xl">Yüksek Hassasiyetli Ölçüm</h3><p className="mt-3 text-sm leading-7 text-white/48">Üretim sonrası kontrol süreçlerinde kullanılan yüksek hassasiyetli ölçüm ekipmanları.</p></div></div></DarkBand>
</main>}
