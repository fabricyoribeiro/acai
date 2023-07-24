import Image from 'next/image'
import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'

interface IceProps {
  name: string
  urlImage: string
  quantity?: (quantity: number, name:string) => void
}

export default function IceCream(props: IceProps) {
  const [quantity, setQuantity] = useState<number>(0)
  const [buttonAddClicked, setButtonAddClicked] = useState(false)

  useEffect(()=> {
    props.quantity?.(quantity, props.name)
  }, [quantity])

  return (
    <div className="bg-[#F6EEFF] w-fit p-2 rounded-lg relative">
      <div className="absolute -top-0 p-1 rounded-br-xl bg-[#F6EEFF] font-semibold">
        {props.name}
      </div>
      <div className="w-32 rounded overflow-hidden ">
        <Image
          src="https://i.postimg.cc/02DB3gc9/copo-acai.jpg"
          width={200}
          height={200}
          alt=""
        />
      </div>

      {buttonAddClicked && quantity >= 0 ? (
        <div className="border border-gray-400 w-[80%] mx-auto text-center mt-2 rounded-xl font-semibold flex justify-center items-center gap-3">
          <button
            onClick={() => {
              if(quantity === 0){
                setButtonAddClicked(false)
              }else{
                setQuantity(quantity - 50)
              }
            }}
            className="font-extrabold"
          >
            -
          </button>
          <span>{quantity}g</span>
          <button onClick={() => { setQuantity(quantity+50)}} className="font-extrabold">+</button>
        </div>
      ) : (
        <button
          onClick={() => { 
            setButtonAddClicked(true)
            setQuantity(quantity+50)
            // props.quantity?.(quantity, props.name)
          }}
          className="border border-gray-400 w-[80%] block mx-auto text-center mt-2 rounded-xl font-semibold"
        >
          adicionar
        </button>
      )}
    </div>
  )
}
