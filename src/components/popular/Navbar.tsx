
import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import DarkModeSwitch from '../DarkModeSwitch';
import Search from '../Search';

const Navbar = () => {
  return (
    
    <nav className='fixed w-full p-3 shadow-lg rounded-xl bg-white/80 ring-1 ring-black/5 lg:px-8 dark:ring-white/5 dark:bg-black/80 dark:text-white'>
        <div className='flex items-center justify-between '>
            <div className='flex items-center space-x-2'>
                <div>
                <a href="" className='text-3xl font-bebas-neue lg:text-5xl'>EVERYONE</a>
                </div>
                <div className='hidden space-x-3 text-lg font-semibold lg:pl-8 lg:block'>
                <a href="">Beranda</a>
                <a href="">Acara TV</a>
                <a href="">Film</a>
                <a href="/new&popular">Baru & Populer</a>
                <a href="">Daftar Saya</a>
                <a href="">Telusuri Menurut Bahasa</a>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Search/>
                <div>
                    <a><DarkModeSwitch/></a>
                </div>
                <div>
                    <button className='text-3xl lg:hidden'><MdOutlineMenu/></button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar