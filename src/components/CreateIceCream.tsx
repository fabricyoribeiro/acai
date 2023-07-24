import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'phosphor-react'

export default function CreateIceCream() {
  return (
    <div className="w-60  p-3 rounded text-center text-purple bg-[#F6EEFF]">
      <span className="font-semibold ">Personalizado</span>
      <div className="w-full h-36 rounded overflow-hidden">
        {/* <Image src="" alt="" width={300} height={1} /> */}
      </div>
      <p className="text-sm font-medium text-left my-2 leading-4">Monte seu sorvete com seus saborores preferidos</p>
      <button className=" bg-orchid text-white text-sm py-2 px-4  rounded-full  ">
        <Link href="/create">
          Criar sorvete
        </Link>
      </button>
    </div>
  )
}
