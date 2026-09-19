import { Hero, Statement, DarkBand, Cards } from "../components/ui/PageKit";
import Container from "../components/ui/Container";

const values=[
  {title:"Milli ve Yerli Üretim",copy:"Stratejik bağımsızlık için yerli tasarım ve üretim kapasitesini sürekli geliştirmek."},
  {title:"Teknolojik Üstünlük",copy:"Ar-Ge ve inovasyonu faaliyetlerin merkezinde tutmak."},
  {title:"Güvenilirlik ve Kalite",copy:"Uluslararası standartları hedefleyen, güvenilir ve uzun ömürlü sistemler üretmek."},
  {title:"Dürüstlük ve Sorumluluk",copy:"Tüm paydaşlara karşı şeffaf, etik ve hesap verebilir olmak."},
  {title:"İnsan Odaklılık",copy:"Çalışanların yetkinliğini ve motivasyonunu en değerli sermaye olarak görmek."},
];
export default function Corporate(){return <main>
  <Hero eyebrow="Kurumsal" title="1987'den" accent="bugüne." copy="Ankara merkezli TAMİS, geçmiş kuşaklardan gelen sanayi tecrübesini sürekli Ar-Ge çalışmalarıyla geliştiren bir aile şirketidir." media="TAMİS / PRODUCTION" mediaSrc="/media/real/universal-torna.jpeg"/>
  <section id="hakkimizda"><Statement eyebrow="Hakkımızda" title="Sanayi tecrübesi." accent="Sürekli gelişim." copy="TAMİS 1987 yılında Ankara'da kurulmuştur. Şirket, sanayi faaliyetlerini Ostim, İvedik ve Kahramankazan'da gerçekleştirmiş; kuruluşundan ve geçmiş kuşaklardan edindiği deneyimi sürekli Ar-Ge çalışmalarıyla ileri taşımayı hedeflemiştir."/></section>
  <section id="vizyon" className="py-24 md:py-32"><Container><div className="grid gap-12 lg:grid-cols-2"><div className="border-t rule pt-7"><p className="eyebrow">Misyonumuz</p><h2 className="mt-7 text-4xl font-medium tracking-[-.05em]">Yerli imkânlarla<br/><span className="text-green">ileri teknoloji.</span></h2><p className="copy mt-7">Türkiye'nin savunma ve güvenlik ihtiyaçlarına ileri teknoloji, yerli imkânlar ve sürdürülebilir bir yaklaşımla cevap vermek.</p></div><div className="border-t rule pt-7"><p className="eyebrow">Vizyonumuz</p><h2 className="mt-7 text-4xl font-medium tracking-[-.05em]">Kritik teknolojilerde<br/><span className="text-green">bağımsızlık.</span></h2><p className="copy mt-7">Savunma sanayiinde global ölçekte tanınan, teknoloji ihracatı yapan ve kritik teknolojilerde bağımsızlığı sağlayan bir teknoloji şirketi olmak.</p></div></div></Container></section>
  <DarkBand eyebrow="Kurumsal Yaklaşım" title="Güven. Süreklilik. Mühendislik."><p className="max-w-3xl text-base leading-8 text-white/58">TAMİS; yerli ve milli üretim anlayışını, Ar-Ge odağını ve kalite yaklaşımını savunma ve havacılık alanındaki mühendislik hedefleriyle bir araya getirir.</p></DarkBand>
  <section id="degerler" className="bg-white py-24"><Container><p className="eyebrow">Temel Değerlerimiz</p><div className="mt-10"><Cards items={values}/></div></Container></section>
  <section className="border-t rule py-24"><Container><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="eyebrow">Çalıştığımız Firmalar</p><h2 className="mt-8 text-5xl font-medium leading-[.92] tracking-[-.055em]">Güvene dayalı<br/><span className="text-green">iş ilişkileri.</span></h2></div><div className="lg:col-span-8"><div className="grid border-t rule sm:grid-cols-2">{["Aslan Makina Savunma","OPLOG","Admasol Mühendislik","Lapis Teknoloji"].map((name)=><div key={name} className="border-b rule py-6 text-xl font-medium sm:px-6">{name}</div>)}</div><p className="mt-6 text-xs leading-6 text-ink/40">Firma isimleri TAMİS tarafından paylaşılan çalışma bilgilerine göre listelenmiştir.</p></div></div></Container></section>
</main>}
