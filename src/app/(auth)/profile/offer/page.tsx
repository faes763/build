'use client'
import { montserrat } from "@/app/fonts"
import Pagination from "@/components/pagination";
import Image from "next/image"
import { useState } from "react";

const works = [
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт вasesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    [{
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 1
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 2
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт ванной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 3
    },
    {
        image: "/images/leroy.png",
        name: "Ремонт вfaesанной",
        total: "125125",
        description: "это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной, а.....",
        id: 4
    },],
    
]

export default function Home() {
    const [page,setPage] = useState(1);
  
    return (
      <div className="py-5 flex flex-col gap-y-5">
        <div className="flex xl:justify-between justify-center gap-5 flex-wrap">
            {works[page-1].map((work,index)=>(
                <div 
                    key={work.id+index} 
                    className="flex gap-5 p-6 rounded-3xl shadow-md ring-1 ring-black ring-opacity-5 max-md:flex-col max-md:items-center"
                >
                    <Image className="md:w-48 md:h-48 max-w-xs max-h-[320px]" width={200} height={200} src={work.image} alt={work.name}/>
                    <div className="flex flex-col gap-y-2 justify-between  max-w-[400px]">
                        <p className="font-bold">{work.name}</p>
                        <p className={`${montserrat.className}`}>Сумма: {work.total}</p>
                        <p className={`${montserrat.className}`}>{work.description}</p>
                        <button className="bg-main-black py-2 text-white mx-5 rounded-3xl">Откликнуться</button>
                    </div>
                </div>
            ))}
        </div>
        <Pagination  onPageChange={setPage} currentPage={page} totalPageCount={works.length}/>
      </div>
    )
  }
  