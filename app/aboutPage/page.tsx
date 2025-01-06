import Image from "next/image"
import { Dancing_Script } from "next/font/google"
import Comment from "@/components/Comment"

const Font2 = Dancing_Script({
    subsets: ["latin"],
    weight: ['700', '600', '500', '400']
})
import { Roboto_Mono } from "next/font/google"
import Container from "@/components/Container"

const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700']
}
)


export default function About() {
    return (
        <Container>
            <div className=" my-16  flex flex-col justify-center items-center ">
                <h1 className={`${Font2.className} mt-20 border-b-2 font-bold text-8xl`}>
                    About
                </h1>

                {/* Section 1 */}
                <div className=" my-16  container  flex flex-col justify-center items-center md:flex-row gap-10 md:justify-between ">
                    <div className=" flex flex-col gap-5 justify-center items-center">
                        <div>
                            <h1 className={`${Font.className} font-bold text-center text-4xl sm:text-5xl`}>
                                - About Blog
                            </h1>
                        </div>
                        <div className=" flex justify-center items-center">
                            <p className="w-[300px] md:w-[500px] ">
                                {` Welcome to my corner of the digital world! This blog is dedicated to the fascinating and ever-evolving fields of Web Development, Programming, Artificial Intelligence, Design, and more. I share insights, tutorials, tips, and inspiration across a range of topics that I’m passionate about. Here's what you'll find on my blog`}
                            </p>
                        </div>

                    </div>

                    {/* Image */}
                    <div>
                        <Image src={"/images/4.jpg"} alt="image" width={500} height={500}></Image>
                    </div>

                </div>


                {/* Section 2 */}
                <div className=" my-16  container  flex flex-col-reverse justify-center items-center md:flex-row gap-10 md:justify-between ">


                    {/* Image */}
                    <div>
                        <Image src={"/images/6.jpg"} alt="image" width={500} height={500}></Image>
                    </div>

                    {/* Content */}
                    <div className=" flex flex-col gap-5 justify-center items-center">
                        <div>
                            <h1 className={`${Font.className} font-bold text-center text-4xl sm:text-5xl`}>
                                - About blog
                            </h1>
                        </div>
                        <div className=" flex justify-center items-center">
                            <p className="w-[300px] md:w-[500px] ">
                                {` I explore the worlds of web development, programming, AI, robotics, and design. I cover a broad range of topics, from the basics of HTML & CSS and TypeScript to advanced concepts in Python and AI. Whether you're looking to learn new programming skills, dive into the latest trends in machine learning, or explore the intersection of AI and robotics, you'll find helpful tutorials, insights, and practical tips here. My aim is to make these complex topics accessible to both beginners and experienced professionals.`}
                            </p>
                        </div>

                    </div>

                </div>

                {/* Section 3 */}
                <div className=" my-16  container  flex flex-col justify-center items-center md:flex-row gap-10 md:justify-between ">
                    <div className=" flex flex-col gap-5 justify-center text-center items-center">
                        <div>
                            <h1 className={`${Font.className} font-bold text-center text-4xl sm:text-5xl`}>
                                - About Blog
                            </h1>
                        </div>
                        <div className=" flex justify-center items-center">
                            <p className="w-[300px] md:w-[500px] ">
                                {` In addition to coding, I also dive into the creative side of tech, with posts on emoji design, logo creation, and typography. I share my passion for how design enhances user experience and brand identity. Whether you're a developer looking to sharpen your design skills or a designer exploring the technical side, this blog provides resources to help you grow. From building interactive websites to crafting compelling visual identities, my goal is to inspire and equip you with the tools you need to succeed in both coding and design.`}
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <Image src={"/images/7.jpg"} alt="image" width={500} height={500}></Image>
                    </div>
                </div>
                <Comment />
            </div>
        </Container>
    )
}