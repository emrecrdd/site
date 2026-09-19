import { Hero, Statement, DarkBand, Cards } from "../components/ui/PageKit";
import Container from "../components/ui/Container";
const principles=[
 {title:"Teknik Merak",copy:"Üretim ve mühendislik problemlerine öğrenme isteğiyle yaklaşmak."},
 {title:"Sorumluluk",copy:"Üretilen işin kalitesini ve teknik sonucunu sahiplenmek."},
 {title:"Birlikte Üretmek",copy:"Tasarım, üretim ve Ar-Ge bilgisini ortak hedefte buluşturmak."},
 {title:"Sürekli Gelişim",copy:"Bilgiyi, yöntemi ve üretim yetkinliğini ileri taşımak."},
];
export default function Careers(){return <main>
 <Hero eyebrow="Kariyer" title="Üreten ekibin" accent="bir parçası olun." copy="TAMİS, çalışanlarının yetkinliğini ve motivasyonunu kurumsal gelişimin temel unsurlarından biri olarak görür." media="CAREERS / TAMİS"/>
 <Statement eyebrow="Çalışma Kültürü" title="Mühendislik," accent="üretimle güçlenir." copy="Savunma ve havacılık odağındaki çalışmalarımızda teknik merak, sorumluluk ve birlikte üretme kültürünü önemsiyoruz."/>
 <section className="py-24"><Container><Cards items={principles}/></Container></section>
 <DarkBand eyebrow="Alanlar" title="Tasarım. İmalat. Ar-Ge."><p className="max-w-2xl text-base leading-8 text-white/55">CNC talaşlı imalat, tasarım ve prototipleme ile Ar-Ge çalışmalarının kesiştiği bir üretim ortamı.</p></DarkBand>
 <section id="pozisyonlar" className="bg-white py-24"><Container><p className="eyebrow">Açık Pozisyonlar</p><h2 className="mt-8 title">Güncel ilanlar<br/><span className="text-green">burada yayınlanacak.</span></h2><p className="copy mt-8 max-w-xl">Şu anda kamuya açık doğrulanmış bir pozisyon bilgisi bulunmuyor.</p></Container></section>
 </main>}
