"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Loader from '@/app/components/Loader';

export default function BlogDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await res.json();
                setPost(data);
            };
            fetchPost();
        }
    }, [id]);

    if (!post) return <Loader/>;

    return (
        <div className="min-h-screen mx-auto  h-screen container flex justify-center items-start flex-col  ">
            <div className='flex justify-center items-center flex-col gap-4 w-[90%] md:w-[60%] mx-auto  '>
                <Link href="/" className='border rounded px-3 py-1 bg-gray-800 text-white my-4'>{"<"} Back to home</Link>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s" alt="" className='w-full h-[300px] object-cover rounded' />
                <div className='text-black capitalize'>
                    <h1 className="text-3xl font-bold capitalize">{post.title}</h1>
                    <p>{post.body}</p>

                </div>

            </div>
        </div>
    );
}
