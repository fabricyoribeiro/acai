import Link from 'next/link'
import Aside from '../components/Aside'
import IceCream from '../components/IceCream'
import House from '../components/icons/House'
import { useState } from 'react'
import data from '../core/db'

export default function Create() {
  const [total, setTotal] = useState<number>(0)
  const [list, setList] = useState<any[]>([])
  // var list: any[] = []
  var tot = 0

  function sum(){
    list.forEach(item => tot += item.quantity)
    const array = list.filter(item => item.quantity !== 0)
    setList(array)
    setTotal((tot / 1000)*30)
  }

  function save(){
    localStorage.setItem('ice_creams', JSON.stringify(list))
  }

  function add(quantity: number, name: string) {
    const itemExist = list.find(item => item.name === name)
    if (itemExist) {
      list.forEach((item, index) => {
        if (item.name === name) {
          list[index].quantity = quantity
        }
      })
    }else{
      list.push({ name, quantity})
    }

    // var tot = 0
    // list.forEach(item => tot += item.quantity)
    // setTotal(total + tot)
    // console.log(tot)
    sum()
    console.log(list)
  }

  return (
    <div className="p-3">
      <Link href="/">
        <House />
      </Link>

      <div className="flex gap-2 flex-wrap mt-10 mb-16">
        <IceCream name="Chocolate" urlImage="" quantity={add} />
        <IceCream name="morango" urlImage="" quantity={add} />
        <IceCream name="açaí" urlImage="" quantity={add} />
        <IceCream name="leite" urlImage="" quantity={add} />

        {/* {data.map(ice => (
          <IceCream name={ice.name} urlImage={ice.urlImage} quantity={add} />
        ))} */}
      </div>

      <div></div>

      <div className="fixed bg-[#D2B8EC] font-semibold bottom-0 right-0 flex justify-between items-center w-full py-3 px-3">
        <div className="leading-3 font-bold text-purple">
          <span className="text-xs">TOTAL:</span> <br />
          <span className="text-xl ">R$ {total}</span>
        </div>
        <button onClick={save} className="bg-orchid py-2 px-4 rounded text-white text-xs tracking-widest">
          <Link href={{pathname: '/mixin', query: {total}}}  >CONTINUAR</Link>
        </button>
      </div>
      {/* <Aside /> */}
    </div>
  )
}
