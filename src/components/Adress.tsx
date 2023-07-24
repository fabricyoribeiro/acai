import Input from './Input'
import { Poppins } from 'next/font/google'
const poppins = Poppins({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export default function Adress() {
  return (
    <div className={`w-full max-w-sm h-fit p-6 bg-[#ffffff34] ${poppins.className}`}>
      <h1 className='text-3xl font-semibold'>Estamos quase lá</h1>
      <p className='text-base font-medium my-6'>Preencha as informações abaixo para finalizar seu pedido</p>
      <form action="" className='flex flex-col gap-3'>
        <Input placeholder="Endereço" name="adress" id="adress" />
        <Input
          placeholder="Ponto de referência"
          name="reference"
          id="reference"
        />
        <div className="flex gap-3">
          <div className='w-[40%]'>
            <Input placeholder="Número" name="number" id="number"  />
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
        <textarea placeholder='Observações' name="" id="" className="w-full h-24 bg-[#F6EEFF] p-3" />
      </form>
    </div>
  )
}
