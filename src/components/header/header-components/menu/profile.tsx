
import { Sprite } from "@/components/image/sprite";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ProfileInfo from "../profile-info";
import { StatusAuthentication, useAuthorizationStore } from "@/store/authorization-store";
import { useConnectPopup } from "@/store/toggle-store";

export default function Profile() {
    // const {status} = useAuthorizationStore();
    return (
        <>
        <Popover className="relative">
            {({ open }) => (
            <>
                
                <Popover.Button
                    className={'flex items-center'}
                >
                    <Sprite name={"account"} className={"w-8 h-8 text-black"}/>
                </Popover.Button>
               
                <Popover.Overlay className="fixed inset-0 " />
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
                        className="absolute -left-24 z-[9] mt-5 w-screen max-w-[350px] -translate-x-1/2 transform px-4"
                    >
                        <div>
                            
                        </div>
                        <ProfileInfo/>
                    </Popover.Panel>
                  
                </Transition>
            </>
            )}
        </Popover>
        </>
    )
}