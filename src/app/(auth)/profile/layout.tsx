'use client'
import { Sprite } from "@/components/image/sprite"
import { MyDropdown } from "@/components/profile/menu"
import clsx from "clsx"
import Link from "next/link"

import { usePathname } from "next/navigation"
const navLinks = [
    {
      name: "Главная",
      href: '/profile',
      sprite: "home",
    },
    {
      name: "Предложения",
      href: '/profile/offer',
      sprite: "offer",
    },
    {
      name: "История",
      href: '/profile/history',
      sprite: "history",
    },
    {
      name: "Данные",
      href: '/profile/field',
      sprite: "field",
    },
    {
      name: "Настройки",
      href: '/profile/setting',
      sprite: "setting",
    },
    {
      name: "Уведомления",
      href: '/profile/notification',
      sprite: "notification",
    },
    {
      name: "Блоги",
      href: '/profile/blog',
      sprite: "blog",
    },
]

export interface navLinkType {
  name: string;
  href: string;
  sprite: string;
}

export default function ProfileLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  const pathname = usePathname();
  
  return (
      <main className="flex flex-col gap-y-10 py-5">
        <div className="container flex flex-col gap-y-5">
            <div className="flex  md:justify-between justify-center items-center ">
                <button className="hidden md:block bg-main-black py-2 px-4 rounded-3xl text-white"><Link href={"/calculation"}>Оформить заказ</Link></button>
                <div className="lg:hidden">
                  <MyDropdown nav={navLinks}/>
                </div>
                <a className="hidden md:block text-[#4281E0] underline" href="#">Баланс 14 124 124 ₽</a>
            </div>
            <nav className="hidden lg:block">
                <ul className="lg:flex  gap-x-2 justify-between">
                    {navLinks.map((link:navLinkType) => (
                      <li className="" key={link.name}>
                          <Link
                          className={clsx("flex items-center gap-x-2",pathname === link.href && "underline")}
                          href={link.href}
                          >
                          <Sprite name={link.sprite} className={"w-8 h-8"}/>
                          {link.name}
                          </Link>
                      </li>
                    ))}
                </ul>
                
            </nav>
            {children}
        </div>
      </main>
    )
}

