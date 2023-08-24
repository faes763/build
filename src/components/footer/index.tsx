import Link from "next/link";
import { Sprite } from "../image/sprite";

export default function Footer() {
    return (
        <footer id="connection" className="relative shadow-t-lg ring-1 ring-black ring-opacity-5">
            <nav className="container flex items-center justify-between relative py-5" >
                <Link href="/" className=" text-2xl font-semibold cursor-pointer">©Buildassistent</Link>
                <ul className="flex gap-x-5">
                    <li><Link href={"/"} >Главная</Link></li>
                    <li><Link href={"/"}>Блог</Link></li>
                    <li><Link href={"/"}>Политика конфиденциальности</Link></li>
                    <li><Link href={"/"}>Пользовательское соглашение</Link></li>
                    <li><Link href={"/"}>Рассчёт</Link></li>
                    <li><Link href={"/"}>Строители</Link></li>
                </ul>
                <div className="flex gap-x-5 items-center">
                    <a href=""><Sprite name={"vk"} className={"h-6 w-6"} /></a>
                    <a href=""><Sprite name={"telegram"} className={"h-6 w-6"} /></a>
                </div>
            </nav>
        </footer>
    )
}