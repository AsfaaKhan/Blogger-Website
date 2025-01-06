import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { urlForImage } from "@/sanity/lib/image"
import Link from "next/link"


export default function PostCard({ post }: { post: IPost }) {
    return (
        <>
            <div>
                <Card className="hover:scale-105 transition-transform ease-out duration-700">
                    <CardHeader>
                        <CardTitle className=" flex flex-col justify-center items-center  gap-3">
                            <div>
                                <Image
                                    src={urlForImage(post.image)}
                                    alt="AI for everyone"

                                    width={400}
                                    height={300}
                                    className="object-cover rounded-t"
                                />
                            </div>
                            <div> <h1 className=" bolg ">
                                {post.title}
                            </h1></div>
                        </CardTitle>
                        <CardDescription className=" line-clamp-2">{post.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className=" line-clamp-3">
                        {post.summary}
                    </CardContent>
                    <CardFooter>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="block px-4 py-2  hover:bg-blue-900 text-center bg-blue-950  rounded text-white font-semibold mt-4"
                        >
                            See More ..
                        </Link>
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}