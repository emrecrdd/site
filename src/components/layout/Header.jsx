import {useEffect,useState} from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Menu,X,ArrowUpRight,ChevronDown} from 'lucide-react';
import {nav} from '../../data/navigation';

export default function Header(){
 const [open,setOpen]=useState(false); const [mega,setMega]=useState(null); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const fn=()=>setScrolled(scrollY>12);addEventListener('scroll',fn);fn();return()=>removeEventListener('scroll',fn)},[]);
 return <>
 <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled?'border-ink/10 bg-paper/95 shadow-[0_8px_30px_rgba(23,33,29,.04)] backdrop-blur-xl':'border-ink/10 bg-paper/90 backdrop-blur-md'}`} onMouseLeave={()=>setMega(null)}>
  <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-5 md:px-10 xl:px-16">
   <Link to="/" className="flex items-center gap-3" aria-label="TAMİS Teknoloji ana sayfa"><span className="grid size-10 place-items-center bg-green text-[11px] font-black text-white">T</span><span><b className="block text-[20px] leading-none tracking-[.17em]">TAMİS</b><small className="mt-1 block text-[8px] uppercase tracking-[.3em] text-ink/50">Teknoloji</small></span></Link>
   <nav className="hidden h-full items-center gap-1 xl:flex">{nav.map((x,i)=><div key={x.to} className="flex h-full items-center" onMouseEnter={()=>setMega(i)}><NavLink to={x.to} className="flex items-center gap-1.5 px-3 text-[10px] font-bold uppercase tracking-[.12em] text-ink/62 transition hover:text-green">{x.label}<ChevronDown size={12}/></NavLink></div>)}<Link to="/iletisim" className="ml-3 inline-flex items-center gap-2 bg-green px-5 py-3.5 text-[10px] font-bold uppercase tracking-[.16em] text-white">İletişim <ArrowUpRight size={14}/></Link></nav>
   <button className="xl:hidden" onClick={()=>setOpen(!open)} aria-label="Menü">{open?<X/>:<Menu/>}</button>
  </div>
  {mega!==null&&<div className="hidden border-t border-ink/10 bg-paper xl:block"><div className="mx-auto grid max-w-[1600px] grid-cols-[.7fr_1fr_.8fr] gap-16 px-16 py-10"><div><span className="eyebrow">0{mega+1} / Navigasyon</span><h3 className="mt-4 text-4xl font-medium tracking-[-.05em]">{nav[mega].label}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-ink/50">TAMİS'in teknoloji, mühendislik ve kurumsal yaklaşımını keşfedin.</p></div><div className="grid content-start grid-cols-2 gap-x-10">{nav[mega].children.map(([label,to])=><Link key={to} to={to} onClick={()=>setMega(null)} className="group flex items-center justify-between border-b border-ink/15 py-4 text-sm font-semibold"><span>{label}</span><ArrowUpRight size={15} className="opacity-35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"/></Link>)}</div><div className="media-placeholder min-h-44"><span>FEATURED MEDIA</span><small>1600 × 900</small></div></div></div>}
 </header>
 {open&&<div className="fixed inset-0 z-40 overflow-y-auto bg-paper px-6 pb-10 pt-28 xl:hidden">{nav.map((x,i)=><div key={x.to} className="border-b border-ink/15 py-5"><Link onClick={()=>setOpen(false)} to={x.to} className="flex items-center justify-between text-2xl font-semibold tracking-[-.03em]"><span>{x.label}</span><span className="text-xs text-ink/30">0{i+1}</span></Link><div className="mt-3 grid gap-2">{x.children.slice(0,3).map(([label,to])=><Link onClick={()=>setOpen(false)} key={to} to={to} className="text-sm text-ink/50">{label}</Link>)}</div></div>)}</div>}
 </>
}
