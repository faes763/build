import { montserrat } from "@/app/fonts";
import { Sprite } from "@/components/image/sprite";
import clsx from "clsx";
import Link from "next/link";

export default function ProfileInfo({menu}:{menu?:boolean}) {
    //  shadow-lg ring-1 ring-black ring-opacity-5
    return (
        <>
            <div className={`${montserrat.className}`}>
                <div className={clsx("p-4  bg-white font-semibold overflow-hidden rounded-2xl flex flex-col gap-y-4",!menu && "shadow-lg ring-1 ring-black ring-opacity-5")}>
                    <div className="flex flex-col gap-y-2">
                        <div>
                            <p className=" text-[#6B7280]">Баланс</p>
                            <h1 className="font-bold">1255.33 ₽</h1>
                        </div>
                        <hr/>
                        <div>
                            <p className=" text-[#6B7280]">Количество ремонтов</p>
                            <h1 className="font-bold">10</h1>
                        </div>
                        <hr/>
                        <div>
                            <p className=" text-[#6B7280]">Количество заказов</p>
                            <h1 className="font-bold">12</h1>
                        </div>
                        <hr/>
                        <div>
                            <p className="text-[#6B7280]">Новых предложений</p>
                            <h1 className="font-bold">5</h1>
                        </div>
                        <hr/>
                    </div>
                    
                    <div className="flex gap-x-4 justify-between font-semibold">
                        <Link href={"/"}>
                            <button className="w-full justify-center border border-black flex gap-x-2 py-2 px-4 rounded-3xl items-center">
                                <Sprite name={"disconnect"} className={"h-4 w-4"}/>
                                Выйти
                            </button>
                        </Link>
                        <Link href={"/profile"}>
                            <button className="w-full justify-center bg-main-black flex gap-x-2 py-2 px-4 rounded-3xl items-center text-white">
                                <Sprite name={"enter"} className={"h-4 w-4 "}/>
                                Профиль
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}