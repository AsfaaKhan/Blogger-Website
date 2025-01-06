
import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import Comment from '@/components/Comment'
import { Button } from "@/components/ui/button"


const Contact = () => {
    return (
        <div>
            <Container>
                <div className=" flex flex-col justify-center first-letter: gap-5  mt-36">
                    <div className=" text-center py-4 my-4">
                        <h1 className='text-4xl font-bold mt-10'>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                
                <div className="flex flex-col justify-center  md:flex-row  gap-5 md:gap-28 mt-5   ">
                    <div className="flex justify-center items-center text">
                        <Image src="/images/5.jpg" alt="Contact Us" height={500} width={400} />
                    </div>
                    <div className=" " >
                        <div className="mb-3 flex flex-col gap-2">
                            <label htmlFor="exampleForm" className="font-bold text-xl ">Full Name : </label>
                            <input type="text" className="border-[1px] rounded-md  p-4" id="exampleForm" placeholder="John Smith" />
                        </div>
                        <div className="mb-3 flex flex-col gap-2">
                            <label htmlFor="exampleForm" className="font-bold text-xl ">Email: </label>
                            <input type="text" className="border-[1px] rounded-md  p-4" id="exampleForm" placeholder="name12@gmail.com" />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <label htmlFor="" className=" font-bold text-xl ">Write Message : </label>
                            <textarea className="flex justify-center text-slate-400 border-[1px]  " id="exampleFormControlTextarea1" rows={5}>Your message...</textarea>
                        </div>
                        <Button
                            variant="outline">
                            Send
                        </Button>
                    </div>
                </div>
            </Container>
            <Comment />
        </div>
    )
}

export default Contact