import { montserrat } from "@/app/fonts";
import { useConnectPopup } from "@/store/toggle-store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { XMarkIcon } from "@heroicons/react/20/solid";
export default function ConnectWalletPopup() {
    const {isOpen,close,registration,set} = useConnectPopup();
    


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
            <div className="backdrop-blur bg-black/[0.50] fixed inset-0" />
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
              <Dialog.Panel className="w-full flex flex-col gap-y-2 max-w-[300px] p-8 transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div>
                  <XMarkIcon onClick={()=>close()} className="w-6 h-6 ml-auto cursor-pointer"/>
                  <Dialog.Title
                    as="h3"
                    className="leading-6 text-center text-3xl  mb-4"
                  >
                    {registration ? "Регистрация" : "Авторизация"}
                  </Dialog.Title>
                </div>
                  <LoginForm/>

                  
                  <span className="text-sm text-center underline">{registration ? "Есть аккаунт" : "Нету аккаунта?"} <a onClick={()=>{set(!registration)}} className=" cursor-pointer text-[#B400A2]">{registration ? "Войти" : "Зарегистрироваться"}</a></span>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    )
}




const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const validationSchemaRegistration = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm Password is required'),
});

const LoginForm = () => {
  const {close,registration} = useConnectPopup();
  const formik = useFormik({
    initialValues: 
    registration ? {
      email: "",
      password: "",
    } : {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registration ? validationSchemaRegistration : validationSchema,
    onSubmit: (values) => {
      console.log(values);
      close()
    },
  });
  

  return (
    <form
      className="flex flex-col gap-y-5"
      onSubmit={formik.handleSubmit}>
      <div>
        <input
          className="w-full bg-grey-lg py-1 px-2 rounded-3xl text-lg"
          placeholder="Электронная почта"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <input
          className="w-full bg-grey-lg py-1 px-2 rounded-3xl text-lg"
          placeholder="Пароль"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      {registration && <div>
        <input
          className="w-full bg-grey-lg py-1 px-2 rounded-3xl text-lg"
          placeholder="Повторите пароль"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
      </div>}
      <button
        className=" bg-main-black text-white py-1 rounded-3xl"
        type="submit"
      >{registration ? "Зарегистрироваться" : "Войти"}</button>
    </form>
  );
};
