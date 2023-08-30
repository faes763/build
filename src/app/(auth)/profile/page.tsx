import { Sprite } from "@/components/image/sprite";


export default function Home() {
  
  return (
    <div className="flex justify-center py-9">
      <div className="flex flex-col gap-y-4 border p-10 w-full max-w-md shadow-md ring-1 ring-black ring-opacity-5 rounded-3xl">
        <div className="flex gap-x-2 items-center">
          {/* <Image className="rounded-full" height={75} width={75} src={"/next.svg"} alt={"avatar"}/> */}
          <Sprite name={"account"} className={"w-10 h-10"}/>
          <h1 className="text-2xl">Олег Новосёлов</h1>
        </div>
        <table>
          <tbody className="flex flex-col gap-y-4">
            <tr className="flex gap-x-3">
              <td><Sprite name={"phone"} className={"w-5 h-5"}/></td>
              <td>faesf</td>
            </tr>
            <tr className="flex gap-x-3">
              <td><Sprite name={"email"} className={"w-5 h-5"}/></td>
              <td>faesf</td>
            </tr>
            <tr className="flex gap-x-3">
              <td><Sprite name={"account"} className={"w-5 h-5"}/></td>
              <td>faesf</td>
            </tr>
            <tr className="flex gap-x-3">
              <td><Sprite name={"age"} className={"w-5 h-5"}/></td>
              <td>faesf</td>
            </tr>
            <tr className="flex gap-x-3"> 
              <td><Sprite name={"passport"} className={"w-5 h-5"}/></td>
              <td>faesf</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
