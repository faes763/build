import { jost, montserrat } from "@/app/fonts";
import { Sprite } from "@/components/image/sprite";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Fragment } from "react";

export default function Languages() {
    return (
        <>
        <Popover className="relative">
            {({ open,close }) => (
            <>
                <Popover.Button
                    className={'flex items-center'}
                >
                    <Sprite name={"translate"} className={"w-8 h-8 text-black"}/>
                    <ChevronDownIcon
                        className={clsx("h-4 w-4  transition-all ", open && 'rotate-180 transform')}
                    />
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-5  w-screen max-w-[250px] -translate-x-1/2 transform px-4">
                        <div className={`${montserrat.className} overflow-hidden bg-white rounded-2xl flex flex-col gap-y-2 shadow-lg ring-1 ring-black ring-opacity-5 p-4`}>
                            <div className="flex justify-between">
                                <h1 className={`${jost.className} font-bold`}>Languages</h1>
                                <XMarkIcon onClick={()=>close()} className="w-6 h-6 ml-auto cursor-pointer"/>
                            </div>
                            <hr/>
                            <h1>Russian</h1>
                            <h1>England</h1>
                            <h1>German</h1>
                            <h1>Ukrainian</h1>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
        </>
    )
}