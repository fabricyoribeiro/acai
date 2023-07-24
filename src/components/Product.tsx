import Image from 'next/image'
import { Plus } from 'phosphor-react'

interface ProductProps {
  id: string
  name: string
  value: string
  description: string
  urlImage: string
  selectProduct?: (id: string) => void
}

export default function Product(props: ProductProps) {
  return (
    <div className="w-60  p-3 rounded text-center text-purple bg-[#F6EEFF]">
      <span className="font-semibold ">Milkshake</span>
      <div className="w-full h-36 rounded overflow-hidden">
        <Image src={props.urlImage} alt="" width={300} height={1} />
      </div>
      <p className="text-sm font-medium text-left my-2 leading-4">
        {props.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">R$ {props.value},00</span>
        <button
          className="bg-orchid h-9 w-9 rounded-full flex items-center justify-center"
          onClick={() => props.selectProduct?.(props.id)}
        >
          <Plus className="text-white " />
        </button>
      </div>
    </div>
  )
}
