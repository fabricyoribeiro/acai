import { Poppins } from 'next/font/google'
import Input from '../components/Input'
import Link from 'next/link'
import House from '../components/icons/House'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Adress() {
  return (
    <div
      className={`w-full max-w-sm h-fit p-3 text-purple  ${poppins.className}`}
    >
      <Link href="/">
        <House />
      </Link>

      <h1 className="mt-8 text-3xl font-semibold">Estamos quase lá</h1>
      <p className="text-base font-medium my-6">
        Preencha as informações abaixo para finalizar seu pedido
      </p>
      <form action="" className="flex flex-col gap-3">
        <Input placeholder="Endereço" name="adress" id="adress" />
        <Input
          placeholder="Ponto de referência"
          name="reference"
          id="reference"
        />
        <div className="flex gap-3">
          <div className="w-[40%]">
            <Input placeholder="Número" name="number" id="number" />
          </div>
          <select
            className="p-3 bg-[#F6EEFF] w-full  rounded text-gray-400"
            name="Forma de pagamento"
            id=""
          >
            <option value="">Forma de pagamento</option>
            <option value="pix">Pix</option>
          </select>
        </div>
        <textarea
          placeholder="Observações"
          name=""
          id=""
          className="w-full h-24 bg-[#F6EEFF] p-3"
        />
      </form>

      <div className="mt-16">
        <div className="flex justify-between items-end font-semibold opacity-80">
          <span className="text-xs">TOTAL:</span>
          <span className="text-sm">R$ 60,00</span>
        </div>
        <button className="bg-orchid text-xs text-white p-2 w-full rounded ">
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  )
}
