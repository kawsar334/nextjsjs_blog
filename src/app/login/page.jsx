import React from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen  gap-6 bg-white '>
          <LoginLink className='border px-10 py-2 rounded bg-blue-500 text-white'>Sign in</LoginLink>
          
    </div>
  )
}

export default Login

