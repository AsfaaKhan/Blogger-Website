
import Comment from "@/components/Comment";
import HeroPage from "@/components/HeroPage";


export const revalidate = 10 // seconds

export default async function BlogPage(){

    return(

        <div>
          <HeroPage/>
          <BlogPage/>
          <Comment/>
        </div>
    )
}