import { motion, useInView } from "framer-motion";
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Fragment, useRef, useState } from "react";
import clsx from "clsx";
import { montserrat } from "@/app/fonts";

const questions = [
    {
        question: "Как это всё устроенно? В чём для меня выгода?",
        answer: "Наш сервис предлагает удобную и простую платформу для поиска исполнителя для ремонта. Вам больше не нужно тратить время на обзвон различных специалистов и организаций. Просто оставьте запрос на нашем сайте, и предложения от опытных предпринимателей придут к вам. Это экономит ваше время и упрощает процесс поиска исполнителя."
    },
    {
        question: "Даёт ли Buildassistant гарантии на работу исполнителей?",
        answer: "Мы гарантируем безопасность и качество работы исполнителей. Все наши исполнители проходят проверку и имеют положительные отзывы от предыдущих клиентов. Мы также предоставляем гарантии на работу исполнителей, чтобы вы могли быть уверены в качестве и надежности."
    },
    {
        question: "На что опираться при выборе исполнителя?",
        answer: "При выборе исполнителя вы можете опираться на его рейтинг, отзывы от предыдущих клиентов и его опыт работы. Мы предоставляем подробные профили исполнителей, где вы можете ознакомиться с их портфолио и информацией о них. Вы также можете задавать им вопросы или просить дополнительные материалы для принятия решения"
    },
    {
        question: "Почему искать исполнителя на Buildassistant — лучше?",
        answer: "Поиск исполнителя на нашем сайте лучше, потому что мы предлагаем удобную и надежную платформу для поиска. Мы гарантируем безопасность и качество работы исполнителей, а также экономим ваше время. Вы можете быстро и удобно найти подходящего исполнителя и приступить к работе немедленно."
    },
    {
        question: "С чего начать?",
        answer: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки."
    },
]


export default function Question() {
    return (
        <section>
            <div className="container flex flex-col gap-y-5">
                <motion.h1 
                variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  
                initial="hidden" animate="visible" className="text-big">
                    Часто задаваемые вопросы
                </motion.h1>
                <div className={` flex flex-col gap-y-5 `}>
                    {questions.map((question)=>(
                        <Exposure key={question.question} question={question.question} answer={question.answer}/>
                    ))}
                </div>
            </div>
                
        </section>
    )
}


function Exposure({question,answer}:{question:string,answer:string}) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    console.log(isInView);
    return (
        <motion.div 
            ref={ref} variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}} 
            initial="hidden" animate={isInView ? "visible" : 'hidden'}
        >
            <Disclosure>
                {({ open }) => (
                <div className="px-5 py-1 border  rounded-3xl">
                  
                    <Disclosure.Button className="py-2 flex items-center gap-4 w-full">
                        <h1 className="font-semibold tracking-widest">{question}</h1>
                        <ChevronUpIcon
                            className={clsx(
                                open && "rotate-180 transform",
                                "h-5 w-5 text-sky-600 transition-transform duration-[300ms]"
                            )}
                        />
                    </Disclosure.Button>
                   
                    <Transition
                        enter="ease-out duration-150"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                    <Disclosure.Panel className={`${montserrat.className} py-5`}>
                        {answer}
                    </Disclosure.Panel>
                    </Transition>
                    
                </div>
                )}
            </Disclosure>
        </motion.div>
        
    )
}