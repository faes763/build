import { useCompoundPopup } from "@/store/toggle-store";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { FieldConfig, FieldInputProps, FormikErrors, FormikTouched, useFormik } from "formik";
import { Fragment } from "react";
import * as Yup from "yup";

export default function CompoundPopup() {
    const {isOpen,close} = useCompoundPopup();
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
              <Dialog.Panel className="w-full  px-10 max-w-[350px] p-8 transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title
                    as="h3"
                    className=" text-2xl font-bold"
                  >
                    Выбрать состав
                  </Dialog.Title>
                  <XMarkIcon onClick={close} className="w-7 h-7 cursor-pointer"/>
                </div>
                <Compound/>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    )
}



const validationSchema = Yup.object().shape({
    target: Yup.string()
        .min(4, "Символов должно быть не меньше 4")
        .max(100,"Максимум символов 100")
        .required("Введите состав"),
    wallLength: Yup.number().required('Введите длину стен').min(0,"Число должно быть больше 0"),
    wallHeight: Yup.number().required("Введите высоту стен").min(0,"Число должно быть больше 0"),
    windowWidth: Yup.number().required("Введите ширину окон").min(0,"Число должно быть больше 0"),
    windowHeight: Yup.number().required("Введите высоту окон").min(0,"Число должно быть больше 0"),
    windowCount: Yup.number().required("Введите количество окон").min(0,"Число должно быть больше 0"),
    roomArea: Yup.number().required("Введите площадь").min(0,"Число должно быть больше 0"),
  });
  
const initialValues = {
    target: "Стена(ы) с окнами",
    wallLength: "",
    wallHeight: "",
    windowWidth: "",
    windowHeight: "",
    windowCount: "",
    roomArea: "",
};

const targetsArray: {
    label:string;
    id: keyof typeof initialValues
}[] = [
    {
        label: "Длина стены в (м)",
        id: "wallLength"
    },
    {
        label: "Высота стен в (м)",
        id: "wallHeight"
    },
    {
        label: "Ширина окна в (м)",
        id: "windowWidth"
    },
    {
        label: "Высота окна в (м)",
        id: "windowHeight"
    },
    {
        label: "Количество окон",
        id: "windowCount"
    },
    {
        label: "Площадь комнаты в (м²)",
        id: "roomArea"
    },
]

function Compound() {
    const {close} = useCompoundPopup();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            close();
        },
    });     
    
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="relative p-4 flex flex-col gap-y-4"
        >
            <input
                name="target"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.target}
                className="w-full max-w-sm bg-transparent py-1 px-2 rounded-3xl text-lg shadow-lg ring-1 ring-black ring-opacity-5 border" 
                placeholder="Введите состав" autoFocus
            />
            {formik.touched.target && formik.errors.target ? (
                <div>{formik.errors.target}</div>
            ) : null}
        
          
            {targetsArray.map((element)=>(
                <Input key={element.label} label={element.label} id={element.id} formik={formik}/>
            ))}
           
        
            <button  
                type="submit"
                className=" bg-main-black text-white py-2 rounded-3xl"
            >
                Выбрать
                </button>
          
        </form>
    )
}

interface formikType {
    touched: FormikTouched<typeof initialValues>,
    errors: FormikErrors<typeof initialValues>,
    getFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>
    setFieldValue: (
        field: string, value: any, shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<FormikErrors<typeof initialValues>>
}

function Input({
    label,
    id,
    formik,
}:{
    label:  string;
    id: keyof typeof initialValues;
    formik: formikType
}) {
    return (
        <div>
            <div className="flex justify-between">
                <label htmlFor={id}>{label}</label>
                <input
                    className="w-16 border"
                    id={id}
                    type="number"
                    {...formik.getFieldProps(id)} // Добавьте это
                    />
                </div>
               
            {formik.errors[id] && formik.touched[id] ? (
                <div className=" text-red-600">{formik.errors[id]}</div>
            ) : null}
        </div>
    )
}