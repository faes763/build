'use client'
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useRef, useState } from "react";
import { Sprite } from "../image/sprite";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchemas = Yup.object().shape({
    target: Yup.string()
        .min(4, "Target must be at least 4 characters")
        .max(100,"The target is to support no more than 100 characters.")
        .required("Target is required"),
});

export function AddTargets({
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
                            className="bg-main-black py-2 px-4 rounded-3xl text-white"
                        >Добавить</button>
                    </form>
                 
                </Popover.Panel>
              
            </Transition>
        </>
        )}
    </Popover>
    )
}


export function Target({
    text,
    currentIndex,
    setTarget,
    setPage,
    reduceMap
}:{
    text:string
    currentIndex: number,
    setTarget: React.Dispatch<React.SetStateAction<string[]>>
    setPage: React.Dispatch<React.SetStateAction<number>>,
    reduceMap: string[]
}) {
    const close = ()=> {
        if(reduceMap.length==1) {
            setPage((prev)=>{
                if(prev>1) {
                    return prev-1;
                }
                return prev;
            })
        }
        setTarget(prev=>prev.filter((_, index) => index !== currentIndex));
    }
    const [show,setShow] = useState(false);

    return (
        <div className="flex gap-x-5 max-w-lg">
            <p onClick={()=>setShow(prev=>!prev)} className="max-w-md cursor-pointer break-words max-sm:break-all">
                {show ? text : text.length >= 23 ?  text.slice(0,20) + '...' : text}
            </p>
            <XMarkIcon onClick={close} className="w-6 h-6 cursor-pointer"/>
        </div>
    )
}
