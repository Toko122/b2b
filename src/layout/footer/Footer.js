import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
    <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div class="md:max-w-96">
        <div className="font-semibold italic text-[28px] w-fit text-black md:text-1xl lg:text-3xl cursor-pointer">
              <Link to="/">electric</Link>
            </div>
            <p class="mt-6 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <div class="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
                <ul class="text-sm space-y-2">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                    <li><Link to="/">Privacy policy</Link></li>
                </ul>
            </div>
            <div>
                <h2 class="font-semibold mb-5 text-gray-800">Get in touch</h2>
                <div class="text-sm space-y-2">
                    <p>+1-212-456-7890</p>
                    <p>contact@example.com</p>
                </div>
            </div>
        </div>
    </div>
    <p class="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © Company name. All Right Reserved.
    </p>
</footer>
  )
}

export default Footer
