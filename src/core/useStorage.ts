import { useState } from "react";

export default function useStorage(){
  // const [products, setProducts] = useState<string[]>([])

  function updateSubtotal(id:string, quantity: number, value: number){
    //salvar local
    const subtotal = quantity * value
    var basket:any = localStorage.getItem('basket')
    basket = JSON.parse(basket)

    basket.forEach((element:any) => {
      if(element.id === id){
        element.subtotal = subtotal
      }
    });

    localStorage.setItem('basket', JSON.stringify(basket))

    console.log(basket)
  }
  
  function add(id:string){
    var basket:any = localStorage.getItem('basket')
    basket = JSON.parse(basket)

    basket.forEach((element:any) => {
      if(element.id === id){
        element.quantity += 1
      }
    });

    localStorage.setItem('basket', JSON.stringify(basket))
  }


  return {updateSubtotal, add}
}

//nao necessario