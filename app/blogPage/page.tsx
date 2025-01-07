import PostCard from "@/components/PostCard"
import { client } from "@/sanity/lib/client";
import { Dancing_Script } from "next/font/google"
import Comment from "@/components/Comment";
import Container from "@/components/Container";

const Font2 = Dancing_Script({
  subsets: ["latin"],
  weight: ['700', '600', '500', '400']
})

export const revalidate = 10 // seconds

export default async function BlogPage(){

    const query = `
        *[_type == "post"]{
  title,image,summary,
    "slug": slug.current
}`

const posts : IPost[] =  await client.fetch(query)

// console.log( posts);



    return(

        <div>
             <Container>
        {/* Blogs */}
        <main className="flex min-h-screen flex-col my-5 mt-32">
          <h1 className={`text-4xl font-bold text-bolg mb-5    text-center text-blue-950 dark:text-white sm:text-5xl lg:text-8xl underline ${Font2.className}`}>
         {` "Explore These Interesting Topics"`} 
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
              posts.map((post: IPost) => (
                <PostCard post={post} key={post.slug} />
              ))
            }
          </section>
        </main>

        {/* Comment */}
        <Comment />
      </Container>
        </div>
    )
}