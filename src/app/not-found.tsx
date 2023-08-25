'use client'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { montserrat } from './fonts';
 
export default function NotFound() {
  const router = useRouter();

  return (
    <>
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={()=>router.back()}>
      <Transition.Child
        as={Fragment}
        enter="ease-out transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="backdrop-blur bg-black/[0.50]  improve-performance fixed inset-0" />
      </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full py-10 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="leading-6 text-gray-900 text-3xl font-bold mb-4"
                >
                Страница не найдена
                </Dialog.Title>
                <div className={`${montserrat.className} mt-2`}>
                  <p className="text-sm text-gray-500">
                    Кажется, вы попали на несуществующую страницу.
                  </p>
                  <p className="text-sm text-gray-500">
                  Нажмите на кнопку или пустую область чтобы вернуться на главную страницу

                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={()=>router.back()}
                  >
                    Перейти
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
  )
}