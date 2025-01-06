import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer(){
    return(
      <footer className="bg-gray-50">

            <div className="container mx-auto flex  flex-col justify-center items-center py-12">

                <div className="flex-flex-row justify-center items-center  ">
                <div className=" flex gap-2 ">
                        <Link className="text-slate-500 hover:text-blue-950 justify-center items-center hover:underline text-xl flex gap-2 " href="/"> Home </Link>
                        <Link className="text-slate-500 justify-center items-center hover:text-blue-950 hover:underline text-xl  flex gap-2" href="/aboutPage"> About</Link>
                        <Link className="text-slate-500 hover:text-blue-950 justify-center items-center  hover:underline text-xl  flex gap-2" href="/blogPage"> Blogs</Link>
                        <Link className="text-slate-500 justify-center items-center  hover:text-blue-950 hover:underline text-xl  flex gap-2" href="/contactPage"> Contact</Link>
                    </div>
                </div>
                
                <div className="py-5">
                    <div className="flex gap-6 justify-center ">
                        
                        <Link href={"https://github.com/AsfaaKhan"}>
                        <FaGithub size={30} className="text-black" />
                        </Link>

                        <Link href={"https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}  ><FaLinkedin size={30} className="text-blue-800" />
                        </Link>

                        <Link href={"https://x.com/KhanAsfaa?s=08"}>
                        <FaSquareXTwitter size={30} className="text-slate-900" />
                        </Link>
                    </div>

                    <p className="py-5 text-gray-400 ">Copyright &copy;2024 All right reserved</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
      </footer>
    )
}