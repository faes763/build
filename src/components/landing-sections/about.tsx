'use client'
import { montserrat } from "@/app/fonts";
import clsx from "clsx";
import {  useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion";
import { Sprite } from "@/components/image/sprite";
import { Parallax } from "react-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { Fade } from 'react-awesome-reveal';
const text = [
    "Мы представляем уникальную экосистему, которая поможет вам сделать ремонт в любом месте - будь то дом, квартира или дача. Забудьте о поиске подходящего исполнителя и трате времени на переговоры.",
    "Теперь все просто: вы заходите на наш сайт и оставляете запрос о том, какой ремонт вам необходим. Ваш запрос отправляется на аукцион, где предприниматели смогут ознакомиться с ним и предложить свою денежную оценку выполнения работ.",
    "Вы получаете возможность ознакомиться с предложениями разных исполнителей и выбрать того, кто лучше всего соответствует вашим требованиям. После выбора вы заключаете договор и начинаете воплощать свои идеи в жизнь.",
    "Наша экосистема обеспечивает прозрачность и конкуренцию, что позволяет вам получить наилучший результат по наилучшей цене. Мы гарантируем качество и надежность работы исполнителей, чтобы ваш ремонт прошел без проблем и задержек.",
    "Присоединяйтесь к нашей экосистеме и сделайте ремонт проще и удобнее! Мы гарантируем высокое качество работы и удовлетворение ваших потребностей."
]

const textInfo = [
    "Наш сервис предлагает удобную и простую платформу, которая значительно экономит ваше время при поиске исполнителя для ремонта. Вам больше не нужно тратить дни на обзвон различных специалистов и организаций. Просто оставьте запрос на нашем сайте, и предложения от опытных предпринимателей придут к вам.",
    "Кроме того, наша экосистема гарантирует быстрое решение. После того, как вы выбрали подходящего исполнителя, вы можете заключить договор и приступить к работе немедленно. Больше нет необходимости ждать недели или месяцы, чтобы начать ремонт.",
    "Мы также придаем большое значение безопасности. Все наши исполнители проходят проверку и имеют положительные отзывы от предыдущих клиентов. Мы гарантируем, что ваш ремонт будет выполнен профессионально и безопасно."
]
const random = Math.floor(Math.random() * (1000 - 1) + 1);
export default function About() {
    const [newYear,setYear] = useState(false);
    useEffect(()=>{
        const currentDate = new Date();
        if (currentDate.getMonth() === 11 && currentDate.getDate() >= 25) {
            console.log("Неделя до Нового года!");
        }
    })
    const [currentPage,set] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        //   set(currentPage => (currentPage < text.length - 1 ? currentPage + 1 : 0));
        }, 4000);
      
        return () => clearInterval(interval);
      }, [currentPage]);
    
    return (
        <section >
            <div className="container flex flex-col gap-y-5">
            
                <motion.h1 variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className="text-big">Что мы представляем</motion.h1>
                <div className="w-full relative max-sm:px-4 flex gap-x-10 shadow-md ring-1 ring-black ring-opacity-5 p-10 rounded-3xl my-5 max-xl:flex-col-reverse max-xl:items-center max-xl:gap-y-5">
                {newYear && 
                <div className="aurora">
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                </div>
                }
                
                
                    <div className="flex flex-col gap-y-5 overflow-hidden ">
                      
                        <Fade 
                            key={currentPage}
                            triggerOnce
                            direction="left"
                        >
                            <p className={`${montserrat.className} max-sm:text-sm  min-h-[150px] xl:max-w-2xl max-md:max-w-md max-sm:min-h-[200px] max-sm:max-w-xs`}>{text[currentPage]}</p>
                        </Fade> 
                        
                        
                        <div className="flex gap-x-5">
                            {text.map((element,index)=>(
                                 <div
                                 onClick={() => set(index)}
                                 className={clsx(
                                   "cursor-pointer relative bg-grey-lg md:w-24 max-sm:w-full  w-16 h-4 rounded-xl text-animate",
                                   index <= currentPage && "after:bg-grey-sh after:w-full"
                                 )}
                                 key={element + index}
                               ></div>
                            ))}
                        </div>
                        <div className="flex gap-x-5 ">
                            <button className="border border-grey-sh py-2 px-5 rounded-2xl" onClick={()=>currentPage > 0 && set(prev=>prev-1)}>Назад</button>
                            <button onClick={()=>currentPage < text.length-1 ? set(prev=>prev+1) : set(0)}>Вперёд</button>
                        </div>
                       
                    </div>
                    <iframe
                    className="rounded-2xl max-md:max-w-md max-sm:max-w-full max-sm:h-[200px]"
                    width="600" height="300" src="https://www.youtube.com/embed/51pIvUzP84o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                
                <div className="flex flex-col gap-y-5 ">
                    <Info 
                        text={textInfo[0]} 
                        name={"easy"} title="Удобный сервис"
                    />
                    <Info 
                        text={textInfo[1]} 
                        name={"fast"} title="Скорость и экономия времени" reverse={true}
                    />
                    <Info 
                        text={textInfo[2]}
                        name={"security"} title={"Безопасность"}
                    />
                </div>
                <div className="shadow-md ring-1 ring-black ring-opacity-5 py-4 px-10 rounded-2xl">
                    <Parallax bgImage={`/svg/title.svg`} strength={75}>
                        <div className={"h-24 text-black"}/>
                    </Parallax>
                </div>
            </div>
        </section>
    )
}
{/* <motion.a variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className=" font-bold text-2xl">Не откладывайте ремонт в долгий ящик, присоединяйтесь к нам сегодня и начните преображение вашего жилья уже сейчас!</motion.a> */}

function Info({text,title,name,reverse}:{text:string,title:string,name:string,reverse?:boolean}) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    
    return (
        <div className={clsx(
            "flex justify-between flex-wrap overflow-hidden  shadow-md ring-1 ring-black ring-opacity-5 py-4 px-10 rounded-2xl max-sm:px-4",
            reverse && 'flex-row-reverse')}>
            
            <div className={clsx("max-w-[450px]",reverse && "text-right")}>
                <motion.h1 
                    ref={ref} variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}} 
                    initial="hidden" animate={isInView ? "visible" : 'hidden'} className="text-big"
                >{title}</motion.h1>
                
                <Fade direction={reverse?"right":"left"}>
                <motion.p
                    className="max-sm:text-sm"
                    variants={{hidden: { opacity: 0,x: 20},visible: {  x: 0, opacity: 1 }}}
                    initial="hidden" animate={isInView ? "visible" : 'hidden'}
                >{text}</motion.p>
                </Fade>
                
            </div>
            <motion.div 
                className=" max-xl:hidden"
                variants={{hidden: { opacity: 0,x: 20},visible: {  x: 0, opacity: 1 }}}
                initial="hidden" animate={isInView ? "visible" : 'hidden'}
            >
                <Sprite name={name} className={"w-64 h-64 text-black"}/>
            </motion.div>
            <motion.div 
                className={clsx('max-md:mx-auto xl:hidden')}
                variants={{hidden: { opacity: 0,x: 20},visible: {  x: 0, opacity: 1 }}}
                initial="hidden" animate={isInView ? "visible" : 'hidden'}
            > 
                <Parallax bgImage={`/svg/${name}.svg`} strength={250}>
                    <div className={"w-64 h-64 text-black"}/>
                </Parallax>
                
            </motion.div>
        </div>
    )
}
