'use client'

import { LoadingButton } from "@/components/buttons/loading-button";
import { StatusAuthentication, useAuthorizationStore } from "@/store/authorization-store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const auth = useAuthorizationStore(); 
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [authorization,setAuthorization] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem('token');
        if(!token) {
          auth.set("",StatusAuthentication.AUTHENTICATION);
          setAuthorization(true);
        } else {
          auth.set("",StatusAuthentication.NOT_AUTHENTICATION);
          router.push('/');
          setAuthorization(false);
        }
    
      }, [pathname, searchParams])
    
    if(!authorization) return (
    <div className="fixed inset-0 flex justify-center items-center">
        <LoadingButton
            btnClasses=" flex items-center justify-center bg-main-black text-white rounded-full shadow-btn p-2 outline-0 duration-200 ease-out"
            svgClasses="animate-spin w-10 h-10"
        />
    </div>)
    else return <>
        {children}
    </>
}