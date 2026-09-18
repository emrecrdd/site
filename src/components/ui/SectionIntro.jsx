import { motion } from 'framer-motion';

export const reveal = {
  initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.14},
  transition:{duration:.72,ease:[.16,1,.3,1]}
};

export function SectionIntro({index,label,title,copy,dark=false}){
  return <motion.div {...reveal} className="grid gap-8 lg:grid-cols-12">
    <div className="lg:col-span-3"><div className="section-kicker"><span>{index}</span><span>{label}</span></div></div>
    <div className="lg:col-span-9"><h2 className={`display-section ${dark?'text-white':''}`}>{title}</h2>{copy&&<p className={`mt-7 max-w-2xl text-base leading-8 ${dark?'text-white/55':'text-ink/52'}`}>{copy}</p>}</div>
  </motion.div>
}
