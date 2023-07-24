import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
    {...props}
      className="p-3 bg-[#F6EEFF] w-full  rounded"
      type="text"
    />
  )
}
