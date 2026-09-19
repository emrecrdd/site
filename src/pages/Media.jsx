import { Hero, Statement, DarkBand } from "../components/ui/PageKit";
import Container from "../components/ui/Container";
export default function Media(){return <main>
 <Hero eyebrow="Medya" title="TAMİS'ten" accent="gelişmeler." copy="Kurumsal duyurular, üretim ve Ar-Ge gelişmeleri ile yayınlanabilir dokümanlar bu alanda paylaşılacaktır." media="MEDIA / TAMİS"/>
 <Statement eyebrow="Kurumsal Medya" title="Doğrulanmış içerik." accent="Doğru kaynak." copy="Henüz kamuya açık doğrulanmış haber veya basın içeriği eklenmedi. Yeni içerikler oluştukça bu sayfa güncellenecektir."/>
 <section className="py-24"><Container><div className="media aspect-video"><video src="/media/real/uretim.mp4" controls playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover"/><span className="media-label !text-white">TAMİS / ÜRETİM</span></div></Container></section>
 <DarkBand eyebrow="Medya İlkesi" title="Gizlilik sınırları içinde şeffaf iletişim."><p className="max-w-3xl text-base leading-8 text-white/58">Savunma sanayiine yönelik proje ve ürün detayları kamuya açık içeriklerde paylaşılmaz; kurumsal iletişim, yayınlanmasına izin verilen bilgiler üzerinden yürütülür.</p></DarkBand>
 <section id="dokumanlar" className="bg-white py-24"><Container><p className="eyebrow">Dokümanlar</p><div className="mt-10 border-t rule"><div className="flex flex-col gap-2 border-b rule py-6 sm:flex-row sm:items-center sm:justify-between"><span className="font-medium">Kurumsal dokümanlar</span><span className="text-xs text-ink/35">Yayınlanabilir doküman eklendiğinde burada sunulacaktır.</span></div></div></Container></section>
 </main>}
