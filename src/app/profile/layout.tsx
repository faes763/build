'use client'
import { Sprite } from "@/components/image/sprite"
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
export default function ProfileLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  const pathname = usePathname();
  return (
      <main className="flex flex-col gap-y-10 py-10">
        <div className="container flex flex-col gap-y-5">
            <div className="flex justify-between items-center ">
                <button className="bg-main-black py-2 px-4 rounded-3xl text-white">Оформить заказ</button>
                <a className="text-[#4281E0] underline" href="#">Баланс 14 124 124 ₽</a>
            </div>
            <nav>
                <ul className="flex gap-x-2 justify-between">
                    {navLinks.map((link) => {
                    const isActive = pathname === link.href
            
                    return (
                    <li className="" key={link.name}>
                        <Link
                        className={clsx("flex items-center gap-x-2",isActive && "underline")}
                        href={link.href}
                        >
                        <Sprite name={link.sprite} className={"w-8 h-8"}/>
                        {link.name}
                        </Link>
                    </li>
                    
                    )
                })}
                </ul>
            </nav>
            {children}
        </div>
      </main>
    )
  }