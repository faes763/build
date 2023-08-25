import { motion } from "framer-motion";
import Image from "next/image";
import Pagination from "../pagination";
import { useState } from "react";


const reviews = [
    [
    {
        text: "faes",
        image: "/images/leroy.png"
    },
    {
        text: "Всё супер",
        image: "/images/leroy.png"
    },
    {
        text: "Всё отлично",
        image: "/images/leroy.png"
    },
    {
        text: "Всё норм",
        image: "/images/leroy.png"
    },
    {
        text: "Мне нравится",
        image: "/images/leroy.png"
    },
    {
        text: "Мне нравится",
        image: "/images/leroy.png"
    },
    ],
    [
        {
            text: "faes",
            image: "/images/leroy.png"
        },
        {
            text: "Всё супер",
            image: "/images/leroy.png"
        },
        {
            text: "Всё отлично",
            image: "/images/leroy.png"
        },
        {
            text: "Всё норм",
            image: "/images/leroy.png"
        },
        {
            text: "Мне нравится",
            image: "/images/leroy.png"
        },
        {
            text: "Мне нравится",
            image: "/images/leroy.png"
        },
        ],
        [
            {
                text: "faes",
                image: "/images/leroy.png"
            },
            {
                text: "Всё супер",
                image: "/images/leroy.png"
            },
            {
                text: "Всё отлично",
                image: "/images/leroy.png"
            },
            {
                text: "Всё норм",
                image: "/images/leroy.png"
            },
            {
                text: "Мне нравится",
                image: "/images/leroy.png"
            },
            {
                text: "Мне нравится",
                image: "/images/leroy.png"
            },
            ],
            [
                {
                    text: "faes",
                    image: "/images/leroy.png"
                },
                {
                    text: "Всё супер",
                    image: "/images/leroy.png"
                },
                {
                    text: "Всё отлично",
                    image: "/images/leroy.png"
                },
                {
                    text: "Всё норм",
                    image: "/images/leroy.png"
                },
                {
                    text: "Мне нравится",
                    image: "/images/leroy.png"
                },
                {
                    text: "Мне нравится",
                    image: "/images/leroy.png"
                },
                ],
                [
                    {
                        text: "faes",
                        image: "/images/leroy.png"
                    },
                    {
                        text: "Всё супер",
                        image: "/images/leroy.png"
                    },
                    {
                        text: "Всё отлично",
                        image: "/images/leroy.png"
                    },
                    {
                        text: "Всё норм",
                        image: "/images/leroy.png"
                    },
                    {
                        text: "Мне нравится",
                        image: "/images/leroy.png"
                    },
                    {
                        text: "Мне нравится",
                        image: "/images/leroy.png"
                    },
                    ],
                    [
                        {
                            text: "faes",
                            image: "/images/leroy.png"
                        },
                        {
                            text: "Всё супер",
                            image: "/images/leroy.png"
                        },
                        {
                            text: "Всё отлично",
                            image: "/images/leroy.png"
                        },
                        {
                            text: "Всё норм",
                            image: "/images/leroy.png"
                        },
                        {
                            text: "Мне нравится",
                            image: "/images/leroy.png"
                        },
                        {
                            text: "Мне нравится",
                            image: "/images/leroy.png"
                        },
                        ],
                        [
                            {
                                text: "faes",
                                image: "/images/leroy.png"
                            },
                            {
                                text: "Всё супер",
                                image: "/images/leroy.png"
                            },
                            {
                                text: "Всё отлично",
                                image: "/images/leroy.png"
                            },
                            {
                                text: "Всё норм",
                                image: "/images/leroy.png"
                            },
                            {
                                text: "Мне нравится",
                                image: "/images/leroy.png"
                            },
                            {
                                text: "Мне нравится",
                                image: "/images/leroy.png"
                            },
                            ],
                            [
                                {
                                    text: "faes",
                                    image: "/images/leroy.png"
                                },
                                {
                                    text: "Всё супер",
                                    image: "/images/leroy.png"
                                },
                                {
                                    text: "Всё отлично",
                                    image: "/images/leroy.png"
                                },
                                {
                                    text: "Всё норм",
                                    image: "/images/leroy.png"
                                },
                                {
                                    text: "Мне нравится",
                                    image: "/images/leroy.png"
                                },
                                {
                                    text: "Мне нравится",
                                    image: "/images/leroy.png"
                                },
                                ],
    [
    {
        text: "get",
        image: "/images/leroy.png"
    },
    {
        text: "Всё супер",
        image: "/images/leroy.png"
    },
    {
        text: "Всё отлично",
        image: "/images/leroy.png"
    },
    {
        text: "Всё норм",
        image: "/images/leroy.png"
    },
    {
        text: "Мне нравится",
        image: "/images/leroy.png"
    },
    {
        text: "Мне нравится",
        image: "/images/leroy.png"
    },
    ],
    [
    {
        text: "Всё классfffffffffffffffffffffffffffffff",
        image: "/images/leroy.png"
    },
    {
        text: "Всё супер",
        image: "/images/leroy.png"
    },
    {
        text: "Всё отлично",
        image: "/images/leroy.png"
    },
    {
        text: "Всё норм",
        image: "/images/leroy.png"
    },
    {
        text: "Мне нравится",
        image: "/images/leroy.png"
    },
    {
        text: "Мне нравится",
        image: "/images/leroy.png"
    },
    ]
    
]

export default function Review() {
    const [page,setPage] = useState(1);
    return (
        <section>
            <div className="container flex flex-col gap-y-5">
                <motion.h1 variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className="text-big">
                    Отзывы клиентов
                </motion.h1>
                <div className="flex flex-col gap-y-5">
                    <div className="flex items-center gap-x-5 justify-between">
                        {reviews[page-1].map((review,index)=>(
                            <motion.div 
                                variants={{hidden: { opacity: 0,x:  0},visible: {  x: 0, opacity: 1 }}}
                                initial="hidden" animate="visible"
                                className="flex w-[200px] gap-x-2 items-center shadow-lg ring-1 ring-black ring-opacity-5 p-4 rounded-3xl" 
                                key={review.text+index+page}
                            >
                                <Image className=" rounded-xl py-2" width={50} height={50} src={review.image} alt={"img"}/>
                                <p className="truncate">{review.text}</p>
                            </motion.div>
                        ))}
                    </div>
                    <Pagination onPageChange={setPage} currentPage={page} totalPageCount={reviews.length}/>
                </div>
            </div>
        </section>
    )
}