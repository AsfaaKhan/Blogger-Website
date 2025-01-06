
import About from "@/components/About";
import Comment from "@/components/Comment";
import HeroPage from "@/components/HeroPage";



export const revalidate = 10 // seconds

export default async function Home(){

    return(

        <div>
          <HeroPage/>
          <About/>
          <Comment/>
        </div>
    )
}