import {PortableTextComponents} from '@portabletext/react'
import { Dancing_Script } from 'next/font/google'

const Font2 = Dancing_Script({
    subsets: ["latin"],
    weight: ['700', '600', '500', '400']
})

import { Roboto_Mono } from "next/font/google"

const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400','500','600','700']
}
)

export const Components :PortableTextComponents= {
    block:{
        h1:({children}) =><h1 className={`${Font2} text-4xl font-bold text-blue-950 py-2`}>{children}</h1>,
        h2:({children}) =><h2 className={`${Font} text-blue-950 text-3xl font-bold py-2 `}>{children}</h2>,
        h3:({children})=><h3 className={`${Font} text-3xl py-4 text-blue-900 `}>{children}</h3>,
        h5:({children}) =><h5 className={`${Font} text-3xl font-bold `}>{children}</h5>    
    },
    list:{
        bullet:({children}) =><li className='list-none list-inside ml-6 py-3 '>{children}</li>,
        
    },
    marks:{
        strong:({children})=><
        strong className='italic'>{children}</strong>,
        em:({children})=>
        <em className='text-gray-700'>{children}</em>
    }

}