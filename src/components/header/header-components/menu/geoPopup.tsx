'use client'
import { useGeoPopup } from "@/store/toggle-store";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";


export function GeoPopup() {
  const {isOpen,close} = useGeoPopup();
  const [cities,setCity] = useState<string[]>([]);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const handleFilter = (filterText: string) => {
    const filtered = cities.filter(city =>
      city.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredCities(filtered);
  };
  useEffect(()=>{
  const citiesString = getLocalStorage('cites');
  if(citiesString) {
    const citiesArray = citiesString.split(',');
    console.log(citiesArray);
    setCity(citiesArray)
    setFilteredCities(citiesArray)
  }
  },[])
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in transition-[opacity] duration-150 sm:ease-smoothly-gentle sm:duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop-blur bg-black/[0.50] fixed inset-0 " />
        </Transition.Child>
        <div className="fixed top-[72px] inset-0 w-full overflow-y-auto h-3/4">
          
          <div className="bg-white">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel>
                <div className=" mx-auto" >
                  <div className="sticky bg-white -top-1 z-10 shadow-xl">
                    <div className="container flex items-center justify-between py-5">
                      <input
                        className=" bg-grey-lg py-1 px-2 rounded-3xl text-lg"
                        type="text"
                        placeholder="Фильтр"
                        onChange={(e) => handleFilter(e.target.value)}
                      />
                        <Dialog.Title
                          as="h3"
                          className="leading-6 text-3xl"
                        >
                          Выберите свой город
                        </Dialog.Title>
                        <XMarkIcon onClick={()=>close()} className="w-8 h-8 cursor-pointer"/>
                    </div>
                  </div>
                  
                    <div className="text-big flex flex-wrap gap-10 container shadow-md ring-1 ring-black ring-opacity-5 p-5">
                      {filteredCities.map((city,index)=>(
                        <h1 className=" cursor-pointer" onClick={()=>setLocalStorage("city",city)} key={city+index}>{city}</h1>
                      ))}
                      {filteredCities.length == 0 && <h1>NOT FOUND</h1>}
                    </div>
                  
                  
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}