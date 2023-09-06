'use client'
import { Sprite } from "@/components/image/sprite";
import Languages from "./header-components/menu/language";
import Notification from "./header-components/menu/notification";
import Profile from "./header-components/menu/profile";
import Burger from "./header-components/burger";
import Link from "next/link";
import { useBurger, useConnectPopup, useGeoPopup, useProfile } from "@/store/toggle-store";
import ConnectWalletPopup from "./header-components/connect-popup";
import { StatusAuthentication, useAuthorizationStore } from "@/store/authorization-store";
import { LoadingButton } from "../buttons/loading-button";
import { GeoPopup } from "./header-components/menu/geoPopup";

export default function Header() {

    return (
        <header className=" sticky top-0 left-0 right-0 w-full z-20 stabilization">
            <div className="absolute top-0 left-0 w-full h-full bg-white/[0.75] backdrop-blur-[5px] -z-10 shadow-md ring-1 ring-black ring-opacity-5"/>
            <nav className="container flex justify-between py-5 items-center relative">
                <Link href="/" className=" text-2xl font-semibold cursor-pointer">Buildassistent</Link>
                <ul className="hidden xl:flex gap-x-10 ">
                    <li><Link href={"/"}>Главная</Link></li>
                    <li><Link href={"/#about"}>О нас</Link></li>
                    <li><Link href={"#connection"}>Связь с нами</Link></li>
                    <li><Link href={"/blog"}>Блог</Link></li>
                    <li><Link href={"/calculation"}>Рассчёт</Link></li>
                    <li><Link href={"/"}>Строители</Link></li>
                </ul>
                <div>
                    <div className="hidden xl:flex items-center gap-x-5">
                        <MainMenu/>
                        <StatusButton/>
                    </div>
                    <div className="block xl:hidden">
                        <Burger/>
                    </div>
                </div>
            </nav>
            <ConnectWalletPopup/>
            <GeoPopup/>
        </header>
    )
}

function StatusButton() {
    const status = useAuthorizationStore(state => state.status);
    const {changeOpen} = useConnectPopup();
    const {isOpen} = useProfile();
    if(status == StatusAuthentication.LOADING) return(
    <LoadingButton
        btnClasses=" flex items-center justify-center bg-main-black text-white rounded-3xl shadow-btn p-2 outline-0 duration-200 ease-out"
        svgClasses="animate-spin w-5 h-5"
    />)
    if(status == StatusAuthentication.AUTHENTICATION) return (
        <Profile/>
    )
    if(status == StatusAuthentication.NOT_AUTHENTICATION) return (
        <button onClick={()=>{
            const {isOpen} = useConnectPopup.getState();
            changeOpen(!isOpen)
        }}>
            <Sprite name={"account"} className={"w-8 h-8 text-black"}/>
        </button>
    )
}
export function MainMenu() {
    const geoPopup = useGeoPopup()
    const {close}=useBurger();
    return (
        <>
            <Languages/>
            <Notification/>
            <div onClick={()=>{
                geoPopup.open();
                close();
            }}>
                <Sprite name={"geo"} className={"w-8 h-8 text-black"}/>
            </div>
        </>
    )
}