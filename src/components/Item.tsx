import Image from 'next/image'
import { Minus, MinusCircle, PlusCircle, Trash } from 'phosphor-react'
import useStorage from '../core/useStorage'
import { useState } from 'react';

// interface ItemProps {
//   name?: string
//   value?: string
//   quantity?: number
//   total: number
//   urlImage?: string
// }

export default function Item(data:any) {
  console.log(data)

  const [quantity, setQuantity] = useState(data.quantity)
  // const [subtotal, setSubtotal] = useState(data.subtotal)

  const {updateSubtotal, add} = useStorage()
  updateSubtotal(data.id, quantity, data.value)
  return ( 
    <div className="bg-[#F6EEFF] w-[300px] mx-auto  text-[#331C43] flex gap-2 p-2 rounded-md">
      <div className="w-[45%] h-32 rounded overflow-hidden">
        <Image
          alt=""
          height={1}
          width={500}
          src="https://i.postimg.cc/02DB3gc9/copo-acai.jpg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl">{data.custom? 'Personalizado' : 'Hamburguer'}</h1>
        <span className="font-semibold">R$ {data.value }</span>
        <div className="flex items-center gap-2">
          <MinusCircle className="text-xl" />
          <span className="bg-[#cacaca] text-sm px-3 rounded-md">{quantity}</span>
          <PlusCircle 
            onClick={()=> {
              add(data.id)
              setQuantity(quantity+1)
            }} className="text-xl" />
          <Trash className="text-xl text-red-700" />
        </div>
        <div className="flex gap-2">
          <h2>Subtotal</h2>
          <span className="font-semibold">R$ {+data.value * quantity}</span>
        </div>
      </div>
    </div>
  )
}
