'use client'
import Image from "next/image";
import Pagination from "../pagination";
import { useState } from "react";
import { motion } from "framer-motion";

interface review {
    postId: number,
    id: number
    name:string
    email:string
    body:string
}
export default function Review({data}:{data:review[][]}) {
    const [page,setPage] = useState(1);

    return (
        <>
            <motion.h1 variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className="text-big">
                Отзывы клиентов
            </motion.h1>
            <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-5 flex-wrap justify-center">
                {data[page-1].map((review,index)=>(
                <motion.div 
                    variants={{hidden: { opacity: 0,x:  0},visible: {  x: 0, opacity: 1 }}}
                    initial="hidden" animate="visible"
                    className="flex w-[200px] gap-x-2 items-center shadow-lg ring-1 ring-black ring-opacity-5 p-4 rounded-3xl" 
                    key={review.id}
                >
                    <Image className=" rounded-xl py-2" width={50} height={50} src={"/images/leroy.png"} alt={"img"}/>
                    <p className="truncate">{review.body}</p>
                </motion.div>
                ))}
            </div>
            
            <Pagination onPageChange={setPage} currentPage={page} totalPageCount={data.length}/>

        </div>
        </>
        
       
    )
}