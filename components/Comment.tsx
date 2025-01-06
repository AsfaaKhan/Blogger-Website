"use client"

import { useState } from "react";
interface Comment {
    id: string;
    author: string;
    text: string;
}

// interface CommentSectionProps {
//     postId: string;
// }

export default function Comment() {
    const [comment, setComments] = useState<Comment[]>([])
    const [newComment, setNewComments] = useState('')
    const [authorName, setAuthorName] = useState('')



    const handleAddComment = () => {
        if (newComment.trim() && authorName.trim()) {
            const newCommentObj: Comment = {
                id: new Date().toISOString(),
                author: authorName,
                text: newComment,
            };
            setComments([...comment, newCommentObj])
            setNewComments('');
            setAuthorName('');
        };
    };


    return (
        <div className="mt-8  flex flex-col justify-center items-center">
            <div>
                <h1 className="text-2xl font-semibold">Comment Your Thoughts</h1>
            </div>


            <div className="p-10 container mt-20 mb-20 flex  flex-col justify-center items-center shadow-lg border w-[300px] sm:w-[500px] md:w-[800px] rounded-md lg:w-[900px] ">
                <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your Name ..."
                    className="w-full mb-2 border-[1px] p-5 focus:ring-2 focus:outline-none rounded-md" />

                <input type="text" value={newComment} onChange={(e) => setNewComments(e.target.value)}
                    placeholder="Your  Comment ..."
                    className="w-full mb-2 border-[1px] p-5 focus:ring-2 focus:outline-none rounded-md" />

                <button onClick={handleAddComment} className="mt-4 border-[1px] text-black py-2 px-5 rounded-lg shadow-md  hover:text-white    hover:bg-blue-950">
                    {
                        'Submit'
                    }

                </button>
            </div>

            <div className="mt-4 mb-10 ">
                <div>
                    <h1 className="font-bold pb-4  underline text-2xl ">Comments:</h1>
                </div>
                {comment.length > 0 ? (
                    comment.map((comment) => (
                        <form key={comment.id} >
                            <div className="flex gap-4  ">
                                <h1>{comment.author}:</h1>
                                <h1> {comment.text}</h1>

                            </div>
                        </form>

                    ))
                ) : (
                    <p className="text-slate-800 py-4 ">No Comments Yet</p>
                )}
            </div>
        </div>
    )
}