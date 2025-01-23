import Link from 'next/link';
import React from 'react'

const Blog = ({ post }) => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 " key={post.id}>
            <div className="p-4 flex flex-col items-center">
                <a href={`/blog/${post.id}`} className="font-semibold text-lg text-blue-500 hover:text-blue-700">
                   <span>{post.id}.</span> {post.title.slice(0, 30)}...
                </a>
                <p className="text-sm text-gray-600 mt-2">{post.body?.slice(0, 100)}...</p>
                <Link href={`/blog/${post.id}`} className='capitalize bg-gray-800 text-white  px-3 py-1 rounded border-gray-400 '>View Details</Link>
            </div>
        </div>
    )
}

export default Blog;
