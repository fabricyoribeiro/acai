import { v4 as uuid } from 'uuid'
import Link from 'next/link'
import Mixin from '../components/Mixin'
import House from '../components/icons/House'
import { useRouter } from 'next/router'

export default function mixin() {
  // const router = useRouter()
  // const {teste} = router.query
  // console.log(teste)

  const router = useRouter()

  var total: any = router.query

  var list: any = []

  function save() {
    var iceList: any = localStorage.getItem('ice_creams')
    iceList = JSON.parse(iceList)
    console.log(iceList)
    const basket_item = {
      iceList: iceList,
      mixinList: list,
      value: total.total,
      custom: true,
      quantity: 1,
      subtotal: 0,
      id: uuid()
    }
    console.log(basket_item)

    if (localStorage.getItem('basket')) {
      console.log('oo')
      const list: any = localStorage.getItem('basket')
      const basket_list: any = JSON.parse(list) || []
      basket_list.push(basket_item)
      localStorage.setItem('basket', JSON.stringify(basket_list))
    } else {
      localStorage.setItem('basket', JSON.stringify([basket_item]))
      console.log('pp')
    }
    console.log(localStorage.getItem('basket'))
  }

  function add(name: string) {
    list.push(name)
    console.log(list)
  }

  function remove(name: string) {
    list = list.filter(function (item: any) {
      return item !== name
    })
    console.log(list)
  }

  return (
    <div className="p-3">
      <Link href="/">
        <House />
      </Link>

      <div className="flex flex-wrap gap-2 mt-10">
        <Mixin name="Mashmelow" urlImage="" add={add} remove={remove} />
        <Mixin name="Jujuba" urlImage="" add={add} remove={remove} />
        <Mixin name="MeM" urlImage="" add={add} remove={remove} />
        <Mixin name="Choc" urlImage="" add={add} remove={remove} />
      </div>

      <div className="fixed bg-[#D2B8EC] font-semibold bottom-0 right-0 flex justify-between items-center w-full py-3 px-3">
        <div className="leading-3 font-bold text-purple">
          <span className="text-xs">TOTAL:</span> <br />
          <span className="text-xl ">R$ {total.total} </span>
        </div>
        <button
          onClick={save}
          className="bg-orchid py-2 px-4 rounded text-white text-xs tracking-widest"
        >
          <Link href="/basket">CONTINUAR</Link>
        </button>
      </div>
    </div>
  )
}
