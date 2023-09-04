'use client'
import { motion } from "framer-motion";
import { Sprite } from "../image/sprite";
import { montserrat } from "@/app/fonts";
import { StatusAuthentication, useAuthorizationStore } from "@/store/authorization-store";
import { useBurger, useConnectPopup, useProfile } from "@/store/toggle-store";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import circle from "bundle-text:/circle.svg";
import circleRings from "bundle-text:/svg/circle-rings.svg";
export default function Start() {
    return (
        <section>
            
            <div className="container">
                <motion.h1 variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className="text-big">
                    Начните прямо сейчас!
                </motion.h1>
                <div className={`${montserrat.className} flex justify-center gap-x-10 max-lg:flex-wrap`}>
                    <div className="flex flex-col items-center gap-y-1">
                        <Sprite name={"manager"} className={"w-32 h-32"}/>
                        <h1 className="font-bold text-2xl">Заказчик</h1>
                        <StatusButton className="bg-main-black text-white py-2 px-6 rounded-3xl">
                            Зарегистрироваться!
                        </StatusButton>
                    </div>
                    <div className="flex flex-col items-center gap-y-1">
                        <Sprite name={"builder"} className={"w-32 h-32"}/>
                        <h1 className="font-bold text-2xl">Исполнитель</h1>
                        <StatusButton className="shadow-lg ring-1 ring-black ring-opacity-5 border py-2 px-6 rounded-3xl">
                            Создать профиль!
                        </StatusButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
function StatusButton({className,children}:{className:string,children: React.ReactNode}) {
    const status = useAuthorizationStore(state => state.status);
    const {changeOpen,isOpen} = useConnectPopup();
    const burger = useBurger();
    const profile = useProfile();
  
    return (
        <button className={className}
        onClick={()=>{
            if(status == StatusAuthentication.NOT_AUTHENTICATION) {
                changeOpen(!isOpen);
                burger.close();
            } 
            if(status == StatusAuthentication.AUTHENTICATION)  {
                burger.open();
                profile.open();
            }
            
        }}>
            {children}
        </button>
    )
}