'use client'

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";




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
                    <Image width={200} height={200} src={"/images/leroy.png"} alt={"Leroy Merlen"}/>
                    <Image width={200} height={200} src={"/images/leroy.png"} alt={"Leroy Merlen"}/>
                    <Image width={200} height={200} src={"/images/leroy.png"} alt={"Leroy Merlen"}/>
                    <Image width={200} height={200} src={"/images/leroy.png"} alt={"Leroy Merlen"}/>
                    <Image width={200} height={200} src={"/images/leroy.png"} alt={"Leroy Merlen"}/>
                </motion.div>
            </div>

        </section>
    )
}