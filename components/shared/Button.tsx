import { Plus } from 'lucide-react'
import React from 'react'

type Props = {
    icon?: any
    title: string
    style?: string
}

export default function Button({ icon, title, style }: Props) {
    return (
        <div className={`px-5 flex items-center gap-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 font-semibold py-3 rounded-md h-fit ${style}`}>
            {icon && <span className='inline'>
                {icon}
            </span>
            }
           {title}
        </div>)
}
