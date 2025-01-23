

import Image from "next/image";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
    const session = await getKindeServerSession();
    const user = await session?.getUser();
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    
    return (
        <nav className="flex flex-wrap items-center justify-between  py-4 sticky top-0 left-0 px-10 bg-blue-500 shadow-md">
            <Link href="/" className="flex items-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {!user &&<Link href="/" className="text-lg text-white px-2  hover:underline">Home</Link>}
                {!user&& <LoginLink
                    className="text-lg border px-4 py-2 rounded text-white hover:bg-blue-100"
                    // postLoginRedirectURL="/login"
                >
                    Login
                </LoginLink>}

                {user  &&(
                    <>
                        {/* <Link href="/" className="text-lg text-gray-700">User: {user?.email || 'Guest'}</Link> */}
                    <Link href="/profile" className="text-lg  border px-3 bg-[teal] text-white rounded  capitalize  cursor-pointer">
                           {user?.username || user?.family_name || user?.given_name}
                        </Link>
                        <Link href="/profile" className="text-lg text-gray-700 capitalize  cursor-pointer">
                            profile
                        </Link>
                        <LogoutLink className="text-lg text-red-500 hover:underline cursor-pointer">Log out</LogoutLink>
                    </>
                )}
            </div>
        </nav>
    );
}
