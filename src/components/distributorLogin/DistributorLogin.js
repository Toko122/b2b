import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { TbLock } from "react-icons/tb";

const DistributorLogin = () => {
  return (
    <div class="flex h-[700px] w-full">
    <div class="w-full hidden md:inline-block">
        <img class="h-full" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" alt="leftSideImage" />
    </div>

    <div class="w-full flex flex-col items-center justify-center lg:mr-60">

        <form class="md:w-96 w-80 flex flex-col items-center justify-center">
            <h2 class="text-4xl text-gray-900 font-medium">Distributor</h2>
            <p class="text-sm text-gray-500/90 mt-3">Welcome back! Please sign in to continue</p>


            <div class="flex items-center w-full bg-transparent mt-4 border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <MdEmail className='text-gray-500'/>
                <input type="email" placeholder="Email" class="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />                 
            </div>

            <div class="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <TbLock className='text-gray-500'/>
                <input type="password" placeholder="Password" class="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
            </div>

            <div class="w-full flex items-center justify-between mt-8 text-gray-500/80">
                <div class="flex items-center gap-2">
                    <input class="h-5" type="checkbox" id="checkbox" />
                    <label class="text-sm" for="checkbox">Remember me</label>
                </div>
                <Link to='/' class="text-sm underline text-indigo-500" >Forgot password?</Link>
            </div>

            <button type="submit" class="mt-8 cursor-pointer w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                Login
            </button>
            <p class="text-gray-500/90 text-sm mt-4">Don’t have an account? <Link to='/reselerSignUp' class="text-indigo-400 hover:underline text-indigo-500">Sign up</Link></p>
        </form>
    </div>
</div>
  )
}

export default DistributorLogin
