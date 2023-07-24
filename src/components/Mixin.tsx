import Image from 'next/image'
import { useState } from 'react'

interface MixinProps {
  name: string
  urlImage: string
  add?: (name: string) => void
  remove?: (name: string) => void
}

export default function Mixin(props: MixinProps) {
  const [addButtonClicked, setAddButtonClicked] = useState(false)

  return (
    <div className="bg-[#F6EEFF] w-fit p-2 rounded-lg relative">
      {/* <div className="absolute -top-0 p-1 rounded-br-xl bg-[#F6EEFF] font-semibold">
        {props.name}
      </div> */}
      <div className="w-32 rounded overflow-hidden ">
        <Image
          src="https://i.postimg.cc/02DB3gc9/copo-acai.jpg"
          width={200}
          height={200}
          alt=""
        />
      </div>

      <p className="text-center my-1 font-semibold">{props.name}</p>

      {addButtonClicked ? (
        <button
          onClick={() => {
            props.remove?.(props.name)
            setAddButtonClicked(false)
          }}
          className="border border-gray-400 w-[80%] block mx-auto text-center  rounded-xl font-semibold"
        >
          remover
        </button>
      ) : (
        <button
          onClick={() => {
            props.add?.(props.name)
            setAddButtonClicked(true)
          }}
          className="border border-gray-400 w-[80%] block mx-auto text-center  rounded-xl font-semibold"
        >
          adicionar
        </button>
      )}
    </div>
  )
}
