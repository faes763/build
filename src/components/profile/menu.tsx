import { navLinkType } from '@/app/(auth)/profile/layout'
import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Sprite } from '../image/sprite'

export function MyDropdown({
    nav
}:{
   nav:navLinkType[] 
}) {
  const pathname = usePathname();
  return (
    <Menu>
      <Menu.Button className={'flex items-center gap-x-2 text-2xl relative'}>
        ...
        <ChevronDownIcon className='w-5 h-5'/>
      </Menu.Button>
      <Menu.Items className={'flex flex-col -translate-y-full  transform absolute border  gap-y-2 max-w-xs top-0 p-5 rounded-2xl right-0'}>
      <div className="backdrop-blur bg-slate-200/[0.50] absolute inset-0 rounded-2xl"></div>
      {nav.map((link,index)=>(
        <Menu.Item key={link.name+index}>
          <Link
              className={clsx(pathname === link.href && "underline",'relative flex items-center gap-2')}
              href={link.href}
          >
            <Sprite name={link.sprite} className={'w-5 h-5'}/>
            {link.name}
          </Link>
        </Menu.Item>
        ))}
        <Menu.Item>
          <Link
              className={'md:hidden relative bg-main-black text-white text-center rounded-2xl py-1'}
              href={`/calculation`}
          >
            Оформить заказ
          </Link>
          
        </Menu.Item>
        <Menu.Item>
          <Link
              className={'md:hidden  text-[#4281E0] underline relative text-center'}
              href={`/calculation`}
          >
            Баланс 14 124 124 ₽
          </Link>
          
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}