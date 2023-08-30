
import { Sprite } from "@/components/image/sprite";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ProfileInfo from "../profile-info";
import { useProfile } from "@/store/toggle-store";

export default function Profile() {
    const {isOpen,close,open} = useProfile();
    return (
        <>
        <Popover className="relative">
            <>
                <Popover.Button
                    onClick={()=>isOpen ? close(): open()}
                    className={'flex items-center z-10 relative'}
                >
                    <Sprite name={"account"} className={"w-8 h-8 text-black"}/>
                </Popover.Button>
                {isOpen && <div onClick={close} className="backdrop-blur bg-black/[0.50] fixed inset-0" />}
                <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel 
                        className="absolute  z-10 mt-5 w-screen max-w-[350px] -translate-x-[85%] transform xl:px-4"
                    >
                        <ProfileInfo/>
                    </Popover.Panel>
                  
                </Transition>
            </>
            
        </Popover>
        </>
    )
}