'use client'
import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { StatusAuthentication, useAuthorizationStore } from '@/store/authorization-store'
 
export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const auth = useAuthorizationStore();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      auth.set("",StatusAuthentication.AUTHENTICATION)
    } else {
      auth.set("",StatusAuthentication.NOT_AUTHENTICATION)

    }
  }, [pathname])
 
  return null
}

export function AnimatedNumber({ value, inView }: { value: number, inView: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1000 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [motionValue, value, inView]);

  useEffect(() => {
    const onChange = (latest: number) => {
      if (ref.current) ref.current.textContent = (+latest.toFixed(0)).toLocaleString();
    };
    const unsubscribe = springValue.onChange(onChange);
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.span
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { y: 0, opacity: 1 } }}
      initial="hidden" animate="visible"
      ref={ref}
    >
      {value.toLocaleString()}
    </motion.span>);
}