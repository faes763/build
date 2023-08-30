'use client'
import React, { Fragment, useRef, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import clsx from "clsx";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Popover, Transition, Tab } from "@headlessui/react";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Sprite } from "@/components/image/sprite";
import CompoundPopup from "./compound-popup";
import { useCompoundPopup } from "@/store/toggle-store";

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


export default function Calculation() {
    const [content, setContent] = useState("");
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    const [targets, setTargets] = useState<string[]>([]);
    const {open} = useCompoundPopup();
    console.log(activeCategories);
    return (
        <main>
            <div className="container flex flex-col gap-y-5 py-5">
                <h1 className="text-big">Детальное описание объекта</h1>
                <p>Выберите название комнаты и ремонтируемую её часть.</p>
                <input className="w-full max-w-sm bg-grey-lg py-1 px-2 rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 border" placeholder="Введите название комнаты"/>
                <div className="xl:flex hidden justify-between gap-x-5">
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
                <div className="xl:hidden">
                    <div className="flex flex-col w-full">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {categories.map((category,idx) => (
                            <Tab as={Fragment}>
                            {({ selected }) => (
                              <button
                                onClick={()=>{
                                    console.log(selected);
                                }}
                                className={
                                    clsx(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                                    activeCategories.includes(category.name) && "underline underline-offset-2"
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
                            key={idx}
                            className={clsx(
                                'flex gap-x-5 p-5 my-5 rounded-3xl border cursor-pointer',
                            )}
                            >
                                    <div className="flex flex-col gap-y-5 items-start">
                                        <p>{category.description}</p>
                                        <button 
                                            className="justify-center bg-main-black flex gap-x-2 py-2 px-4 rounded-3xl items-center text-white"
                                        >Добавить</button>
                                    </div>
                                   
                                    <Image 
                                        src={category.image} height={150} width={150}
                                        className="w-48 h-48" alt={"next"}
                                    />
                            </Tab.Panel>
                        ))}
                        </Tab.Panels>
                    </Tab.Group>
                    </div>
                    
                </div>
                <div className="flex justify-between gap-5">
                    <div className="flex flex-col">
                        <h1 className="text-big">Желаемая цель</h1>
                        <AddTargets setTargets={setTargets} targets={targets}/>
                        <div className="flex max-w-lg flex-wrap gap-5 p-5">
                            {targets.map((el,index)=>(
                                <Target text={el} currentIndex={index} setTarget={setTargets} key={el+index}/>
                            ))}
                        </div>
                        <div>
                            <button className="rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 px-6 py-2 border" onClick={open}>Выбрать состав</button>
                        </div>
                        
                    </div>
                    <div>
                        <h1 className="text-big">Список работ</h1>
                    </div>
                </div>
                    
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Описание и дополнительные комментарии к ожидаемому результату</p>"
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
            <CompoundPopup/>
        </main>
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
                "card min-h-[375px] transition-all duration-500 relative flex items-end cursor-pointer flex-col justify-between w-[300px] shadow-lg ring-1 ring-black ring-opacity-5 p-4 border rounded-3xl"
                ,active && "flipped"
            )}
        >   
            <div className="flex flex-col gap-y-2">
                <h1 className={clsx("text-3xl font-bold transition-all",active && "back")}>{name}</h1>
                <Transition
                    show={!active}
                    as={Fragment}
                    enter="ease-out transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <h1>{text}</h1>   
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
                className={'flex items-center gap-x-5 z-10 relative shadow-md ring-1 ring-black ring-opacity-5 px-6 py-2 rounded-3xl'}
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
