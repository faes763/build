'use client'
import { montserrat } from "@/app/fonts";
import { motion, useInView } from "framer-motion";
import { AnimatedNumber } from "../utils";
import { useRef } from "react";


const dataStats = [
    "1512",
    "400",
    "5652",
    "3000"
]

export default function Statistic() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section>
            <div className="container flex flex-col gap-y-5">
                <motion.h1 variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className="text-big">
                    Наша статистика
                </motion.h1>
                <div ref={ref} className={`${montserrat.className} flex gap-5 text-2xl text-center flex-wrap max-lg:text-xl`}>
                    <div className=" shadow-md ring-1 ring-black ring-opacity-5 px-6 py-4 max-lg:px-4 max-lg:py-2 rounded-3xl">
                        <AnimatedNumber inView={isInView} value={(+dataStats[0])}/>
                        <motion.p>Ремонтов</motion.p>
                    </div>
                    <div className=" shadow-md ring-1 ring-black ring-opacity-5 px-6 py-4 max-lg:px-4 max-lg:py-2 rounded-3xl">
                        <AnimatedNumber inView={isInView} value={(+dataStats[1])}/>
                        <motion.p>Компаний</motion.p>
                    </div>
                    <div className=" shadow-md ring-1 ring-black ring-opacity-5 px-6 py-4 max-lg:px-4 max-lg:py-2 rounded-3xl">
                        <AnimatedNumber inView={isInView} value={(+dataStats[2])}/>
                        <motion.p>Авторизаций</motion.p>
                    </div>
                    <div className=" shadow-md ring-1 ring-black ring-opacity-5 px-6 py-4 max-lg:px-4 max-lg:py-2 rounded-3xl">
                        <AnimatedNumber inView={isInView} value={(+dataStats[3])}/>
                        <motion.p>Отзывов</motion.p>
                    </div>
                </div>
            </div>

        </section>
    )
}