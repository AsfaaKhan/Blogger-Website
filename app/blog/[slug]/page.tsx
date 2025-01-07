import { Components } from "@/components/CustomComponents";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Comment from "@/components/Comment";
import Container from "@/components/Container";


export const revalidate = 10 //seconds


export default async function page({ params: { slug } }: { params: { slug: string } }) {

  const post = await client.fetch
    (`*[_type=='post' && slug.current == "${slug}" ] {
  title,summary,image,content,
    author->{bio,image,name}
}`);


  return (
    <Container>
    <article className="mt-32 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-purple-950 dark:text-white">
        {post.title}
      </h1>

      {/* Read Time And Published Date */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">

        <div className="flex flex-col gap-1">
          <h3 className="italic text-xs xs:text-sm sm:text-base text-black/80 dark:text-white/80"> {post.author.name} </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-black/80 dark:text-white/80">{post.author.bio}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className=" flex flex-col lg:flex-row lg:justify-between gap-8 ">
        <Image
          src={urlForImage(post.image)}
          width={600}
          height={600}
          alt="AI for everyone"
          className="rounded "
        />
        {/* Blog Summary Section */}
        <section className=" flex flex-col justify-center gap-5">

          {/* Summary */}
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-blue-950">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-black/80 dark:text-white/80">
            {post.summary}
          </p>

          {/* Author Section (Name,Image & Bio) */}
          <section className=" flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">

            <Image
            src={urlForImage(post.author.image)}
              width={200}
              height={200}
              alt="author"
              className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"/>

            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-black dark:text-white">{post.author.name}</h3>
              <p className="italic text-xs xs:text-sm sm:text-base text-black/80 dark:text-white/80">
                {post.author.bio}
              </p>
            </div>
          </section>
        </section>
      </div>

      {/* Main Body of Blog */}
      <section className="text-lg mt-2 leading-normal text-black/80 dark:text-white/80">
        <PortableText value={post.content} components={Components} />
      </section>

      {/* Comment */}
      <Comment />
    </article>
    </Container>
  );
}