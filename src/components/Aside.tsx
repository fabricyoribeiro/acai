import {IceCream} from 'phosphor-icons';
import Ice from './icons/Ice';
import Hamburguer from './icons/Hamburguer';
import Beer from './icons/Beer';
// import {Baske} from 'phosphor-react'

import { Inter } from 'next/font/google'
import Link from 'next/link';
import Basket from '../pages/basket';
import BasketIcon from './icons/BasketIcon';
const inter = Inter({ subsets: ['latin'] })

export default function Aside(){
  return (

    <aside className='fixed bg-[#69468C] right-0 bottom-0 left-0  h-16 text-white text-xl flex justify-center items-center'>
      <ul className='flex gap-6'>
        <li><Link href='/' ><Ice/></Link></li>
        <li><Link  href='' ><Hamburguer /></Link></li>
        <li><Link href=''><Beer /></Link></li>
      </ul>
    </aside>
    // <aside className={`bg-[#331C43] fixed right-0 bottom-0 left-0  h-16 text-white text-xl  tracking-wider flex  items-center flex-col pt-12 ${inter.className}`}>
    //   <div className='flex flex-col items-start ' >
    //     <Link href='/basket' className='flex items-center gap-4'>
    //       <BasketIcon />
    //       <span>CESTA</span>
    //     </Link>
    //     <div className='mt-48 flex flex-col gap-5'>
    //       <Link href='/' className='flex items-center gap-4'> <Ice  />  <span>SORVETES</span></Link >
    //       <Link href='' className='flex items-center gap-4 '> <Hamburguer  /> <span>HAMBURGUERES</span></Link >
    //       <Link href='' className='flex items-center gap-4 '> <Beer /> <span>BEBIDAS</span></Link >
    //     </div>
    //   </div>
    // </aside>
  )
}