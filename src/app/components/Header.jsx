import React from 'react'
import { redirect } from 'next/navigation';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Header = async({children}) => {

    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
      redirect("/login")
    }
  return 
}

export default Header