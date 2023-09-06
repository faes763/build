import { montserrat } from "@/app/fonts";
import { Sprite } from "@/components/image/sprite";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSpring, animated } from "react-spring";
import Languages from "./menu/language";
import Profile from "./menu/profile";
import Notification from "./menu/notification";
import { useBurger, useConnectPopup } from "@/store/toggle-store";
import ProfileInfo from "./profile-info";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { LoadingButton } from "@/components/buttons/loading-button";
import { StatusAuthentication, useAuthorizationStore } from "@/store/authorization-store";
import { MainMenu } from "..";


const Burger = () => {
    const {isOpen,open,close}=useBurger();
    console.log(isOpen);
    const first = useSpring({
        transform: isOpen
          ? "translate(5px, 32px) rotate(-45deg)"
          : "translate(2px, 7px) rotate(0deg)"
    });
    const second = useSpring({
        transform: isOpen
        ? "translate(10px, 4px) rotate(45deg)"
        : "translate(2px, 19px) rotate(0deg)"
    });
    const third = useSpring({
        transform: isOpen
        ? "translate(5px, 32px) rotate(-45deg)"
        : "translate(2px, 31px) rotate(0deg)"
    });
  return (
    <>
        <Popover className={'relative'}>
            <>
                <Popover.Button
                    onClick={()=>isOpen ? close(): open()}
                    className={'flex items-center relative z-10 '}
                >
                    
                    <svg
                        className=" fill-main-black outline-none"
                        width="40"
                        height="32"
                        viewBox="0 0 44 44"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <animated.rect width="40" height="4" rx="2" style={first} />
                        <animated.rect width="40" height="4" rx="2" style={second} />
                        <animated.rect width="40" height="4" rx="2" style={third} />
                    </svg>
                </Popover.Button>

                
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
                        as="nav" 
                        className={'absolute max-md:h-full md:px-4 max-md:fixed max-md:inset-0 z-10 mt-5 w-screen md:max-w-[350px] md:-translate-x-[85%] transform xl:px-4'}
                        // className="=   max-w -translate-x-1/2 transform "
                    >
                            <div className={`${montserrat.className} bg-white font-semibold  rounded-2xl flex flex-col gap-y-2 max-md:h-full shadow-lg ring-1 ring-black ring-opacity-5 p-4 max-sm:p-2`}>
                                <XMarkIcon onClick={close} className="w-6 h-6 ml-auto cursor-pointer"/>
                                <Popover.Group 
                                    className={'flex justify-evenly'}
                                >
                                   <MainMenu/>
                                </Popover.Group>
                                <ul className="text-sm flex flex-wrap gap-x-5 gap-y-4 justify-between p-4">
                                    <li onClick={close}><Link href={"/"}>Главная</Link></li>
                                    <li onClick={close}><Link href={"/#about"}>О нас</Link></li>
                                    <li onClick={close}><Link href={"#connection"}>Связь с нами</Link></li>
                                    <li onClick={close}><Link href={"/blog"}>Блог</Link></li>
                                    <li onClick={close}><Link href={"/calculation"}>Рассчёт</Link></li>
                                    <li onClick={close}><Link href={"/"}>Строители</Link></li>
                                </ul>
                                
                                <StatusButton/>
                            </div>
                       
                        
                         
                    </Popover.Panel>
                  
                </Transition>
            </>
            

        {isOpen && <div onClick={close} className="backdrop-blur bg-black/[0.50] fixed inset-0" />}
        </Popover>
    </>
           
  );
};

export default Burger;
function StatusButton() {
    const status = useAuthorizationStore(state => state.status);
    const {changeOpen,isOpen} = useConnectPopup();
    const {close}=useBurger();

    if(status == StatusAuthentication.LOADING) return(
    <LoadingButton
        btnClasses=" flex items-center justify-center bg-main-black text-white rounded-3xl shadow-btn p-2 outline-0 duration-200 ease-out"
        svgClasses="animate-spin w-5 h-5"
    />)
    if(status == StatusAuthentication.AUTHENTICATION) return (
        <ProfileInfo menu={true}/>
    )
    if(status == StatusAuthentication.NOT_AUTHENTICATION) return (
        <button className=" bg-main-black text-white rounded-3xl py-2" 
        onClick={()=>{
            changeOpen(!isOpen);
            close();
        }}>
            Войти
        </button>
    )
}