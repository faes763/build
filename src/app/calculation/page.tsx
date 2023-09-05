'use client'
import React, { Fragment, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Tab } from "@headlessui/react";
import CompoundPopup from "@/components/calculation/compound-popup";
import { useCompoundPopup } from "@/store/toggle-store";
import dynamic from "next/dynamic";
import { chunkArray } from "@/utils";
import Pagination from "@/components/pagination";
import { AddTargets, Target } from "@/components/calculation/targets";
import { Category } from "@/components/calculation/category";

const ClassicCKEditor = dynamic(
    () => import("@/components/calculation/editor"),
    { ssr: false }
);


const categories = [
    {
        name: "Стена",
        description: "Структурный элемент в архитектуре и строительстве, создающий внешний периметр здания или помещения в виде вертикальной ограждающей конструкции, отделяющей помещение от окружающего пространства или соседних комнат.",
        image: "/images/calculation/wall.jpg"
    },
    {
        name: "Электрика",
        description: "Совокупность различных работ по электрообеспечению жилых, производственных и иных помещений, а также по монтажу бытовых электроприборов",
        image: "/images/calculation/electric.jpg"
    },
    {
        name: "Сантехника",
        description: "Ряд технических средств, относящихся к водоснабжению, водоотведению, теплоснабжению, вентиляции и т. д.",
        image: "/images/calculation/sink.jpg"
    },
    {
        name: "Потолок",
        description: "Нижняя часть ограждающей конструкции, ограничивающая помещение сверху. Потолок может быть непосредственно нижней частью перекрытия или покрытия, либо подвесным — образованным особыми конструктивными элементами. ",
        image: "/images/calculation/ceiling.jpg"
    },
    {
        name: "Пол",
        description: "Конструкция, включающая конструктивные слои различного функционального назначения, выполненные из различных строительных материалов по грунтовому основанию или плите перекрытия.",
        image: "/images/calculation/floor.jpg"
    },
]

const testWorks = [
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    {
        name: "Грунтовка стен (nan) | Объём - 984,0 м2 | Цена - 50,0",
        price: "49200₽"
    },
    
]

interface workListType {
    name: string;
    price: string;
}


export default function Calculation() {
    const [page,setPage] = useState(1);
    const [content, setContent] = useState<string>("");
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    const [targets, setTargets] = useState<string[]>([]);
    const [works,setWorks] = useState<workListType[]>(testWorks);
    const [reduceTarget,setReduceTarget] = useState<string[][]>([[]]);

    useEffect(()=>{
        const reduce = chunkArray(targets,7)
        setReduceTarget(reduce);
    },[targets])

    const {open} = useCompoundPopup();
    
    const onCKChange = useCallback((value: any) => {
        console.log("CK Change");
        console.log("value", value);
      }, []);
    return (
        <main>
            <div className="container flex flex-col gap-y-5 py-5">
                <h1 className="text-big">Детальное описание объекта</h1>
                <p>Выберите название комнаты и ремонтируемую её часть.</p>
                <input 
                    required
                    onChange={(e)=>setContent(e.target.value as string)}
                    className="w-full max-w-sm bg-grey-lg py-1 px-2 rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 border" 
                    placeholder="Введите название комнаты"
                />
                <DesktopMenu activeCategories={activeCategories} setActiveCategories={setActiveCategories}/>
                <PhomeMenu activeCategories={activeCategories} setActiveCategories={setActiveCategories}/>
                <div className="flex justify-between gap-5 max-xl:flex-col">
                    <div className="flex flex-col gap-y-5 w-full">
                        <h1 className="text-big">Желаемая цель</h1>
                        <AddTargets setTargets={setTargets} targets={targets}/>
                        <div className="flex max-w-lg  flex-wrap gap-5 p-5">
                            {reduceTarget.length != 0 && reduceTarget[page-1].map((el,index)=>(
                                <Target setPage={setPage} text={el} currentIndex={page>1?index+((page-1)*5):index} reduceMap={reduceTarget[page-1]} setTarget={setTargets} key={el+index}/>
                            ))}
                        </div>
                        <div className="flex justify-start">
                            <Pagination onPageChange={setPage} currentPage={page} totalPageCount={reduceTarget.length}/>
                        </div>
                        <div>
                            <button className="rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 px-6 py-2 border" onClick={open}>Выбрать состав</button>
                        </div>
                        <div className=" max-h-60 overflow-y-scroll mt-5">
                        <ClassicCKEditor 
                            data={"Более детально опишите текущее состояние и желаемый результат. Добавьте фото и видео для точного формирования цены исполнителя."}
                            onChange={onCKChange}
                        />
                        </div>
                        
                    </div>
                    <div className="w-full">
                        <h1 className="text-big">Список работ</h1>
                        <div className={`snap-y snap-mandatory  md:max-h-[500px] max-h-[300px] overflow-y-scroll p-5 px-2 flex flex-col gap-y-5`}>
                            {works.map((work,index)=>(
                                <div 
                                    key={work.name+index}
                                    className="flex snap-start flex-col gap-y-2 rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 px-6 py-2 border" 
                                >
                                    <p>{work.name}</p>
                                    <p className="text-right">Стомость - {work.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=" ml-auto">
                    <button className=" bg-main-black  py-2 px-4 rounded-3xl text-white">Оформить заказ</button>
                </div>
            </div>
            <CompoundPopup/>
        </main>
    )
}

function DesktopMenu({
    activeCategories,
    setActiveCategories
}:{
    activeCategories: string[]
    setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>
}) {
    return(
    <div className="2xl:flex hidden justify-between gap-x-5">
        {categories.map((category)=>(
            <Category
                key={category.name}
                name={category.name}
                text={category.description}
                image={category.image}
                activeCategories={activeCategories}
                setActiveCategories={setActiveCategories}
            />
        ))}
    </div>
    )
}

function PhomeMenu({
    activeCategories,
    setActiveCategories
}:{
    activeCategories: string[]
    setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>
}) {
    return (
        <div className="2xl:hidden">
            <div className="flex flex-col w-full">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 media rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 gap-x-1 px-6 py-2 max-sm:px-2 border">
                        {categories.map((category,idx) => (
                            <Tab key={category.description} as={Fragment}>
                                {({ selected }) => (
                                <button
                                    className={
                                        clsx(
                                        'w-full rounded-3xl py-2.5 text-xs font-medium leading-5 ',
                                        activeCategories.includes(category.name) && " sm:bg-main-black sm:text-white underline underline-offset-2"
                                        )
                                    }
                                >
                                    {category.name}
                                </button>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                        {categories.map((category, idx) => (
                            <Tab.Panel
                                onClick={()=>{
                                    if (activeCategories.includes(category.name)) {
                                        setActiveCategories((prev) =>
                                        prev.filter((categoryItem) => categoryItem !== category.name)
                                    );
                                    } else {
                                        setActiveCategories((prev) => [...prev, category.name]);
                                    }
                                }}
                                key={category.name+idx}
                                className={clsx(
                                    'flex gap-x-5 p-5 my-5 rounded-3xl border cursor-pointer',
                                )}
                            >
                                <div className="flex flex-col gap-y-5 items-start">
                                    <div>
                                        <p className="font-bold">{category.name}</p>
                                        <p className="max-sm:text-sm">{category.description}</p>
                                    </div>
                                    
                                    <button 
                                        className=" bg-main-black py-2 px-4 rounded-3xl  text-white"
                                    >{activeCategories.includes(category.name)?"Удалить":"Добавить"}</button>
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}





