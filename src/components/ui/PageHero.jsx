import { motion } from 'framer-motion';
import Container from './Container';
import { reveal } from './SectionIntro';

export default function PageHero({code,eyebrow,title,accent,copy,media='EDITORIAL / ENGINEERING',meta='TAMİS TECHNOLOGY'}){
 return <section className="page-hero">
  <Container className="grid lg:grid-cols-12 lg:gap-12">
   <motion.div {...reveal} className="flex min-h-[66vh] flex-col justify-between py-12 lg:col-span-7 lg:py-16">
    <div className="section-kicker"><span>{code}</span><span>{eyebrow}</span></div>
    <div className="mt-24 lg:mt-32"><p className="micro-label mb-6">{meta}</p><h1 className="display-hero">{title}<br/><span className="text-green">{accent}</span></h1>{copy&&<p className="mt-8 max-w-xl border-t border-ink/15 pt-6 text-base leading-8 text-ink/52">{copy}</p>}</div>
   </motion.div>
   <motion.div {...reveal} className="-mx-5 border-t border-ink/12 md:-mx-10 lg:col-span-5 lg:mx-0 lg:border-l lg:border-t-0 lg:pl-12">
    <div className="media-surface h-full min-h-[430px] lg:min-h-[66vh]"><div><span>{media}</span><small>Public media placeholder · 4:5 / 16:9</small></div><b>{code} / MEDIA</b></div>
   </motion.div>
  </Container>
 </section>
}
