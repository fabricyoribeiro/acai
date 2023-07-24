import { useEffect, useState } from 'react'
import Aside from '../components/Aside'

import { Inter, Averia_Sans_Libre } from 'next/font/google'
import Product from '../components/Product'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Sans_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

import useProducts from '../core/useStorage'
import data from '../core/db'
import BasketIcon from '../components/icons/BasketIcon'
import CreateIceCream from '../components/CreateIceCream'

export default function Home() {
  const [scroll, setScroll] = useState<number>()

  // const [selected, setSelected] = useState<[]>([])

  // const {setProducts} = useProducts()

  // var products = data
  var products: any = []

  function select(id: string) {
    //fazer busca na base e depois adiciona no array
    const product: any = data.find(product => product.id === id)
    products.push({ ...product, custom: false, quantity: 1, subtotal: 0 })

    console.log(products)
    save()
  }

  function save() {
    // onsole.log(iceList)
    // const basket_item = {
    //   iceList: iceList,
    //   mixinList: list,
    //   value: total.total,
    //   custom: true
    // }
    // console.log(basket_item)

    if (localStorage.getItem('basket')) {
      console.log('oo')
      const list: any = localStorage.getItem('basket')
      const basket_list: any = JSON.parse(list) || []
      const new_basket_list: any = basket_list.concat(products)
      localStorage.setItem('basket', JSON.stringify(new_basket_list))
    } else {
      localStorage.setItem('basket', JSON.stringify(products))
      console.log('pp')
    }
    console.log(localStorage.getItem('basket'))
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  }

  return (
    <div className={`flex ${inter.className}`}>
      <Aside />
      <div className=" flex-1 flex flex-col items-center justify-center overflow-y-auto   ">
        <div
          className={`flex justify-between items-center fixed px-3 w-full h-14 top-0 bg-[#D2B8EC] ${
            scroll ? 'shadow-lg' : ''
          } `}
        >
          <span>AçaiMania</span>
          {/* <div className="flex flex-col  ">
            <span className={`${averia.className} text-3xl  `}>
              SORVETES
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="153"
                height="13"
                viewBox="0 0 193 13"
                fill="none"
              >
                <path
                  d="M32.8436 2.03292C82.3419 5.85497 132.278 6.02008 181.905 6.83992C185.048 6.89185 194.395 6.27793 191.283 5.83058C180.104 4.22374 168.595 3.6613 157.345 2.79106C110.803 -0.809116 62.6805 2.68177 16.2543 6.634C11.4821 7.04025 -2.79977 7.78208 1.97146 8.19951C14.5199 9.29735 27.0683 10.3952 39.6167 11.493"
                  stroke="#69468C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div> */}
          <button className="bg-orchid py-[2px] px-2 rounded-lg">
            <Link href="/basket">
              <BasketIcon color="#fff" />
            </Link>
          </button>
        </div>

        <div className="flex flex-wrap gap-5 justify-center mt-20 mb-20 w-[90%] ">
          <CreateIceCream />
          {data.map(product => (
            <Product
              key={product.id}
              id={product.id}
              description={product.description}
              name={product.name}
              value={product.value}
              urlImage={product.urlImage}
              selectProduct={select}
            />
          ))}
          {/* <button className=" bg-orchid text-white text-sm py-2 px-2 pl-4 rounded-l-full shadow-button-shadow fixed bottom-20 right-0">
            <Link href="/" onClick={save}>
              Crie seu sorvete
            </Link>
          </button> */}
        </div>
        {/*salvar localmente*/}
      </div>
    </div>
  )
}
