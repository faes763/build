'use client'
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Popover, Transition, Tab } from "@headlessui/react";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Sprite } from "@/components/image/sprite";
import CompoundPopup from "@/components/calculation/compound-popup";
import { useCompoundPopup } from "@/store/toggle-store";
import dynamic from "next/dynamic";
import { montserrat } from "../fonts";
import { chunkArray } from "@/utils";
import Pagination from "@/components/pagination";
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
]

interface workListType {
    name: string;
    price: string;
}

export default function Calculation() {
    const [page,setPage] = useState(1);
    const [content, setContent] = useState("");
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    const [targets, setTargets] = useState<string[]>([]);
    const [works,setWorks] = useState<workListType[]>(testWorks);
    const [reduceTarget,setReduceTarget] = useState<string[][]>([[]]);

    useEffect(()=>{
        const reduce = chunkArray(targets,5)
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
                <input className="w-full max-w-sm bg-grey-lg py-1 px-2 rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 border" placeholder="Введите название комнаты"/>
                <DesktopMenu activeCategories={activeCategories} setActiveCategories={setActiveCategories}/>
                <PhomeMenu activeCategories={activeCategories} setActiveCategories={setActiveCategories}/>
                <div className="flex justify-between gap-5 max-xl:flex-col">
                    <div className="flex flex-col gap-y-5 w-full">
                        <h1 className="text-big">Желаемая цель</h1>
                        <AddTargets setTargets={setTargets} targets={targets}/>
                        <div className="flex max-w-lg  flex-wrap gap-5 p-5">
                            {chunkArray(targets,5)[page-1].map((el,index)=>(
                                <Target text={el} currentIndex={index} setTarget={setTargets} key={el+index}/>
                            ))}
                        </div>
                        <div className="flex justify-start">
                            <Pagination onPageChange={setPage} currentPage={page} totalPageCount={reduceTarget.length}/>
                        </div>
                        <div>
                            <button className="rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 px-6 py-2 border" onClick={open}>Выбрать состав</button>
                        </div>
                        <ClassicCKEditor 
                            data={"Более детально опишите текущее состояние и желаемый результат. Добавьте фото и видео для точного формирования цены исполнителя."}
                            onChange={onCKChange}
                        />
                    </div>
                    <div className="w-full">
                        <h1 className="text-big">Список работ</h1>
                        <div className={` flex flex-col gap-y-5`}>
                            {works.map((work,index)=>(
                                <div className="flex flex-col gap-y-2 rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 px-6 py-2 border" key={work.name+index}>
                                    <p>{work.name}</p>
                                    <p className="text-right">Стомость - {work.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
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
                    <Tab.List className="flex space-x-1 rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 gap-x-1 px-6 py-2 max-sm:px-2 border">
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
                                    console.log('yess');
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
                                        className="justify-center bg-main-black flex gap-x-2 py-2 px-4 rounded-3xl items-center text-white"
                                    >Добавить</button>
                                </div>
                                
                                {/* <Image 
                                    src={category.image} height={150} width={150}
                                    className="w-48 h-48" alt={"next"}
                                /> */}
                            </Tab.Panel>
                        ))}
                        </Tab.Panels>
                    </Tab.Group>
                    </div>
                    
                </div>
    )
}

function Category({
    name,
    text,
    image,
    activeCategories,
    setActiveCategories
}: {
    name: string;
    text: string;
    image:string;
    activeCategories: string[];
    setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>;
})  {
    const active = activeCategories.includes(name);
    return(
        <div 
            onClick={() => {
                if (active) {
                    setActiveCategories((prev) =>
                        prev.filter((category) => category !== name)
                    );
                } else {
                    setActiveCategories((prev) => [...prev, name]);
                }
            }}
            className={clsx(
                "card min-h-[375px]  transition-all duration-500 relative flex items-end cursor-pointer flex-col justify-between w-[300px] shadow-lg ring-1 ring-black ring-opacity-5 p-4 border rounded-3xl",
                active && "flipped",
                
            )}
        >   
            <div className="flex flex-col gap-y-2 hover:scale-90 transition-all duration-500">
                <h1 className={clsx("text-3xl font-bold transition-all",active && "back")}>{name}</h1>
                <Transition
                    show={!active}
                    as={Fragment}
                    enter="ease-out transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <p>{text}</p>   
                </Transition>
            </div>
            
            <Transition
                show={active}
                as={Fragment}
                enter="ease-out transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="back w-full h-full">
                    <Image src={image} height={350} width={250} className="absolute inset-0 w-full h-full" alt={"next"}/>
                </div>
            </Transition>
            
            <XMarkIcon className={clsx(!active && " rotate-[135deg]"," transition-all w-10 h-10")}/>
        </div>
    )
}

const validationSchemas = Yup.object().shape({
    target: Yup.string()
        .min(4, "Target must be at least 4 characters")
        .max(100,"The target is to support no more than 100 characters.")
        .required("Target is required"),
});

function AddTargets({
    targets,
    setTargets
}:{
    targets:string[];
    setTargets: React.Dispatch<React.SetStateAction<string[]>>;
}) {
    const formik = useFormik({
    initialValues: {
        target: ""
    },
    validationSchema: validationSchemas,
    onSubmit: (values) => {
        if(targets.length < 20) setTargets((prev)=>[...prev,values.target])
        else alert("Целей может быть не больше 20!")
        console.log(values.target);
    },
    }); 
    const ref = useRef<HTMLInputElement | null>(null);
    return (
        <Popover className="relative">
        {({ open,close }) => (
        <>  
            <Popover.Button
                className={'flex items-center gap-x-5 z-10 relative shadow-md ring-1 ring-black ring-opacity-5 px-6 py-2 max-sm:text-sm max-sm:px-4 rounded-3xl'}
            >
                Выберите цель ремонта
                <ChevronDownIcon
                    className={clsx("h-4 w-4  transition-all ", open && 'rotate-180 transform')}
                />
                <Sprite onClick={()=>setTargets([])} name={"trash"} className={"w-6 h-6"}/>

            </Popover.Button>
            
            <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel
                    className="absolute z-10 max-w-md w-full my-2"
                >
                    <div className="backdrop-blur bg-slate-200/[0.50] fixed inset-0 rounded-2xl"></div>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="relative p-4 flex flex-col gap-y-2">
                        <XMarkIcon onClick={()=>close()} className="w-6 h-6 ml-auto cursor-pointer"/>
                        <input
                            name="target"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.target}
                            ref={ref}
                            className="w-full max-w-sm bg-transparent py-1 px-2 rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 border" 
                            placeholder="Введите цель ремонта" autoFocus
                        />
                         {formik.touched.target && formik.errors.target ? (
                            <div>{formik.errors.target}</div>
                        ) : null}
                        <button 
                            type="submit"
                            className="justify-center bg-main-black flex gap-x-2 py-2 px-4 rounded-3xl items-center text-white"
                        >Добавить</button>
                    </form>
                 
                </Popover.Panel>
              
            </Transition>
        </>
        )}
    </Popover>
    )
}
function Target({
    text,
    currentIndex,
    setTarget,
}:{
    text:string
    currentIndex: number,
    setTarget: React.Dispatch<React.SetStateAction<string[]>>
}) {
    const close = ()=> {
        setTarget(prev=>prev.filter((_, index) => index !== currentIndex));
    }
    const [show,setShow] = useState(false);
    return (
        <div className="flex gap-x-5 max-w-lg">
            <p onClick={()=>setShow(prev=>!prev)} className="max-w-md cursor-pointer break-words">
                {show ? text : text.length >= 23 ?  text.slice(0,20) + '...' : text}
            </p>
            <XMarkIcon onClick={close} className="w-6 h-6 cursor-pointer"/>
        </div>
    )
}
