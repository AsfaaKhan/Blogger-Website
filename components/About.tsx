import Link from "next/link"
import Image from "next/image"
import { Dancing_Script } from "next/font/google"

const Font2 = Dancing_Script({
    subsets: ["latin"],
    weight: ['700', '600', '500', '400']
})
import { Roboto_Mono } from "next/font/google"
import Container from "./Container"

const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400','500','600','700']
}
)

export default function About() {
    return (
        <Container>
        <div className=" my-16 flex flex-col justify-center items-center ">
            <h1 className={`${Font2.className} border-b-2 font-bold text-8xl`}>
                About
            </h1>
            <div className=" my-16  container  flex flex-col justify-center items-center md:flex-row gap-10 md:justify-between ">
            
            <div className=" flex flex-col gap-5 justify-center items-center">
                <div>
                    <h1 className={`${Font.className} font-bold text-4xl sm:text-5xl ms:text-6xl `}>
                        - My Blog
                    </h1>
                </div>
                <div className=" flex justify-center items-center">
                    <p className="w-[300px] md:w-[500px] ">
                        {` Welcome to my corner of the digital world! This blog is dedicated to the fascinating and ever-evolving fields of Web Development, Programming, Artificial Intelligence, Design, and more. I share insights, tutorials, tips, and inspiration across a range of topics that I’m passionate about. Here's what you'll find on my blog`}
                    </p>
                </div>
                <div className="flex gap-5  ">
                    <Link href={'/aboutPage'} className={`${Font2.className} border-[1px] border-blue-950 text-2xl sm:text-4xl  text-black hover:text-blue-950 hover:border-none hover:border-blue-950 p-3 rounded-full hover:ring-2 shadow-lg`}>
                        About more
                    </Link>
                    <Link href={'/blogPage'} className={`${Font2.className} border-[1px] border-blue-950 text-2xl sm:text-4xl  text-black hover:text-blue-950 hover:border-none hover:border-blue-950 p-3 rounded-full hover:ring-2 shadow-lg`}>
                        See Blogs
                    </Link>
                </div>
            </div>

            {/* Image */}
            <div>
                <Image src={"/images/6.jpg"} alt="image" width={500} height={500}></Image>
            </div>

        </div>
        </div>
        </Container>

    )
}