import { Dancing_Script } from "next/font/google"
import Link from "next/link"
const Font2 = Dancing_Script({
    subsets: ["latin"],
    weight: ['700', '600', '500', '400']
})

import { Roboto_Mono } from "next/font/google"

const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700']
}
)
export default function HeroPage() {

    return (
      <div>
        <div className="bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center h-[50vh] md:h-[80vh] lg:h-[100vh] mt-20  flex flex-col justify-center items-center md:items-end  border-[2px] border-b-black ">
          <div className="flex flex-col cursor-pointer rounded-full p-10 justify-start items-center text-center gap-5 ">
            <h1 className={`text-4xl sm:text-6xl md:text-7xl     lg:text-8xl ${Font.className}`}>Blogger Arena</h1>
            
            <Link href={'/blogPage'} className={`${Font2.className} font-bold text-3xl sm:text-4xl md:text-6xl text-slate-900 hover:text-blue-950 hover:border-blue-950 p-3 rounded-full hover:ring-2 shadow-md hover:shadow-lg`}>
                        Blog posts
                    </Link>
            
          </div>
        </div>
      </div>
    );
  };