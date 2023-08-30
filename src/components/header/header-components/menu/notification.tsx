import { montserrat } from "@/app/fonts";
import { Sprite } from "@/components/image/sprite";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function Notification() {
    const array = [
        {
            name:"Олег новосёлов",
            time: '5мин назад',
        },
        {
            name:"Олег новосёлов",
            time: '5мин назад',
        },
        {
            name:"Олег новосёлов",
            time: '5мин назад',
        },
        {
            name:"Олег новосёлов",
            time: '5мин назад',
        },
        {
            name:"Олег новосёлов",
            time: '5мин назад',
        },
    ]
    return (
        <>
        <Popover className="relative">
            {({ close }) => (
            <>
                <Popover.Button
                    className={'flex items-center'}
                >
                    <Sprite name={"bell"} className={"w-8 h-8 text-black"}/>
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 " />
            
                <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute left-1/3 xl:-left-10 z-10 mt-5  w-screen max-w-[350px] -translate-x-1/2 transform px-4">
                        <div className="overflow-hidden rounded-2xl flex flex-col bg-white gap-y-2 shadow-lg ring-1 ring-black ring-opacity-5 p-4">
                        <XMarkIcon onClick={()=>close()} className="w-6 h-6 ml-auto cursor-pointer"/>
                        <div className="flex items-center justify-between">
                                <span>Уведомление</span>
                                <div className="flex items-center gap-x-2">
                                    <Sprite name={"settings"} className={"h-5 w-5 cursor-pointer"}/>
                                    <span>Читать</span>
                                </div>
                            </div>
                            <div className={`${montserrat.className} text-xs flex flex-col gap-y-5`}>
                                {array.map((card,index)=>(
                                    <div key={card.name+index} className="">
                                        <div className="flex justify-between mb-3">
                                            <p>{card.name}</p>
                                            <p>{card.time}</p>
                                        </div>
                                        <button className="bg-main-black py-[5px] px-3 rounded-3xl text-white">Узнать больше</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
        </>
    )
}