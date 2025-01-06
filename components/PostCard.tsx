import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function PostCard( {post} : {post : IPost}) {
    return (
        <>
            <div>
                <Card>
                    <CardHeader>
                        <Image src={"/"}
                        alt={post.title}
                        width={500} height={400}></Image>
                        <CardTitle>{
                    post.title}</CardTitle>
                        <CardDescription>{post.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p></p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}