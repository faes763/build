'use client'
import { Sprite } from "@/components/image/sprite"
import { MyDropdown } from "@/components/profile/menu"
import { Tab } from "@headlessui/react"
import clsx from "clsx"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { Fragment } from "react";

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
];
const phoneMainLinks = [
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
    name: "Настройки",
    href: '/profile/setting',
    sprite: "setting",
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
            <div className="flex justify-between  items-center ">
                <button className=" bg-main-black py-2 px-4 rounded-3xl text-white"><Link href={"/calculation"}>Оформить заказ</Link></button>
                <a className=" text-[#4281E0] underline" href="#">Баланс 14 124 124 ₽</a>
            </div>
            
            <nav>
              <DesktopNavigation pathname={pathname}/>
              <PhoneNavigantion pathname={pathname}/>
            </nav>
            {children}
        </div>
      </main>
    )
}

function DesktopNavigation({
  pathname
}:{
  pathname:string
}) {
  return (
    <ul 
      className={clsx(
        "flex  mx-5   rounded-3xl gap-2 justify-between",
        "max-xl:fixed lg:left-0 max-xl:flex-col lg:top-1/2 max-xl:-translate-y-1/2 max-xl:p-5 max-xl:border",
        "max-xl:hidden"
      )}
    >
      <div className="xl:hidden backdrop-blur bg-slate-200/[0.50] absolute inset-0 rounded-2xl"></div>
      {navLinks.map((link:navLinkType) => (
        <li className="" key={link.name}>
            <Link
            className={clsx("flex relative items-center gap-x-2",pathname === link.href && "underline")}
            href={link.href}
            >
            <Sprite name={link.sprite} className={"w-8 h-8"}/>
            {link.name}
            </Link>
        </li>
      ))}
    </ul>
  )
}

function PhoneNavigantion({
  pathname
}:{
  pathname:string
}) {
  // главная
  // предложения
  // история
  // настройки
  // блоги
  return(
    <div className="xl:hidden fixed flex justify-center bottom-0 left-0 w-full">
       <div className="backdrop-blur bg-slate-200/[0.50] absolute inset-0 rounded-t-2xl"></div>
       <Tab.Group>
        <Tab.List className="flex space-x-1 media rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 gap-x-1 px-6 py-2 max-sm:px-2 border">
            {phoneMainLinks.map((link:navLinkType,idx) => (
                <Tab key={link.name+idx} as={Fragment}>
                  <Link
                    className={clsx("flex relative items-center gap-x-2",pathname === link.href && "underline")}
                    href={link.href}
                  >
                  <Sprite name={link.sprite} className={"w-6 h-6"}/>
                  {link.name}
                  </Link>
                </Tab>
            ))}
            <Tab className={'relative'} as={"div"}>
              <MyDropdown nav={navLinks}></MyDropdown>
            </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
