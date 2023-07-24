import Aside from '../components/Aside'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import useProducts from '../core/useStorage'
import Adress from '../components/Adress'
import House from '../components/icons/House'
import BasketIcon from '../components/icons/BasketIcon'
import Item from '../components/Item'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { list } from 'postcss'

export default function Basket() {
  const [basket, setBasket] = useState([])

  // if(localStorage.getItem('basket') !== null) {
  // }

  useEffect(() => {
    const basketList: any = localStorage.getItem('basket')
    const list = JSON.parse(basketList)
    setBasket(list)
    console.log(list)
  }, [])
  console.log(basket)
  // const {products} = useProducts()

  // console.log(products)

  // const products: string | null = localStorage.getItem('list')
  // if (typeof products === 'string') {
  //   var productss = JSON.parse(products)
  // }
  // const list = JSON.parse(products)

  // console.log(productss)

  // const basket: any = localStorage.getItem('basket')
  // console.log(JSON.parse(basket))

  return (
    <div className={`flex flex-col p-3 ${inter.className}`}>
      <nav className="flex w-full justify-between p-2 ">
        <Link href="/">
          <House />
        </Link>

        <div className="flex gap-1">
          <div className="flex flex-col text-xs font-semibold leading-3 text-end">
            <span>Meus pedidos</span>
            <span className="text-[#955900]">3 itens</span>
          </div>
          <BasketIcon color="#331C43" />
        </div>
      </nav>

      <div className="mt-8  flex flex-col gap-3">
        {/* <Item />
        <Item />
        <Item />
        <Item /> */}

        {basket.map((item: any) => (
          <Item key={0} {...item} />
        ))}
      </div>

      <div className="flex flex-row justify-between  mt-12 mb-4">
        <div className="font-semibold leading-4 text-[#331c43da]">
          <h2 className="text-xs">TOTAL</h2>
          <span>R$ 60,00</span>
        </div>
        <button className="bg-orchid py-2 h-fit px-6 rounded text-white text-xs font-semibold">
          <Link href="/adress">CONTINUAR</Link>
        </button>
      </div>
      {/* {
          productss.map((product:any) => (
            <div key={product.id}>{product.name}</div>
          ))
        }         */}
    </div>
  )
}
