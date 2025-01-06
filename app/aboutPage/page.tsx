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
                                {` This blog provides strategies for maintaining motivation during challenging periods. It includes tips like setting small goals, practicing mindfulness, leaning on support systems, and focusing on progress instead of perfection. The message is clear: resilience and small steps forward can help you overcome any obstacle.`}
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
                                {`This blog explains why soft skills like communication, teamwork, and problem-solving are vital for success in the tech industry. It delves into how these skills complement technical expertise, improve workplace dynamics, and enhance career growth opportunities.
                                This blog lists and reviews top self-learning platforms and tools for 2025, such as Coursera, Udemy, and AI-powered learning apps. It also offers tips on how to use these resources effectively to upskill in various fields and emphasizes the importance of self-directed learning in today’s fast-paced world.

`}
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
                                {` This blog provides strategies for maintaining motivation during challenging periods. It includes tips like setting small goals, practicing mindfulness, leaning on support systems, and focusing on progress instead of perfection. The message is clear: resilience and small steps forward can help you overcome any obstacle.`}
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