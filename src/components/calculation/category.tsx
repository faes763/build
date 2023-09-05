'use client'
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import clsx from "clsx";
import Image from "next/image";

export function Category({
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