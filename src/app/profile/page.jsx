// import React from 'react'
// import { redirect } from 'next/navigation';
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import Header from '../components/Header';
// import Blog from '../components/Blog';
// import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";



// const page = async () => {
//     const session = await getKindeServerSession();
//     const user = await session?.getUser();
//     console.log(user)

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json()
//     return (
//         <div>
//             <Header />
//             <h1>Welcome to My Blog</h1>
//             {user ? <p>Logged in as {user?.email}</p> : <p>Not logged in</p>}
//             {user ? <p>userId: {user?.id}</p> : <p>Not logged in</p>}

//             <p>username:{user?.given_name}</p>
//             {user?.picture && <img src={user?.picture} />}
//         </div>
//     )
// }

// export default page


import React from 'react';
import { redirect } from 'next/navigation';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Header from '../components/Header';
import Blog from '../components/Blog';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = async () => {
    const session = await getKindeServerSession();
    const user = await session?.getUser();
    console.log(user);

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Header />
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Blog</h1>
                {user ? (
                    <div className="mb-4">

                        {user?.picture && (
                            <img
                                src={user?.picture}
                                alt="User Profile"
                                className="w-24 h-24 rounded-full mt-4"
                            />
                        )}
                        <p className="text-lg text-gray-700">Logged in as: <span className="font-semibold text-blue-600">{user?.email}</span></p>
                        <p className="text-lg text-gray-700">User ID: <span className="font-semibold text-blue-600">{user?.id}</span></p>
                        <p className="text-lg text-gray-700">Username: <span className="font-semibold text-blue-600">{user?.given_name || 'Guest'}</span></p>
                       
                    </div>
                ) : (
                    <p className="text-lg text-gray-500">Not logged in</p>
                )}

               
            </div>
        </div>
    );
};

export default page;