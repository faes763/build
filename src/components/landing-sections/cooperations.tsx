'use client'

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

const coop = [
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
    {
        image: '/images/leroy.png',
        alt: 'Leroy Merlen'
    },
]

export default function Cooperation() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section>
            <div className="container flex flex-col gap-y-5">
                <motion.h1 variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className="text-big">
                    С кем мы сотрудничаем
                </motion.h1>
                <motion.div 
                variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}} 
                initial="hidden" animate={isInView ? "visible" : 'hidden'}
                ref={ref} className="flex justify-between">
                    <Marquee className="flex gap-x-5">
                    {coop.map((coop,index)=>(
                        <Image key={coop.image + index} width={200} height={200} src={coop.image} alt={coop.alt}/>
                    ))}
                    </Marquee>
                    
                </motion.div>
            </div>

        </section>
    )
}