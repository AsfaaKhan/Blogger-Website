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
                <Card>
                    <CardHeader>
                        <Image
                            src={urlForImage(post.image)}
                            alt="AI for everyone"
                            fill
                            className="object-cover rounded-t"
                        />
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription className=" line-clamp-2">{post.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
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