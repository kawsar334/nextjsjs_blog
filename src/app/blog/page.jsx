import Blog from "@/components/Blog";

import Header from '../components/Header';


export default async function BlogPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Blog Page</h1>
            <Header />

            <ul className="flex justify-center items-center flex-wrap  gap-2">
                {posts.map((post) => (

                    <Blog post={post} />
                ))}
            </ul>
        </div>
    );
}
