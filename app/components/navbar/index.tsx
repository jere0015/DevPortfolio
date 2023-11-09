"use client";
import React, { useState } from 'react'
import Link from "next/link"
import NavLink from "./navlink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './menuoverlay';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed mx-auto border border-[#ffffff] top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-90'>
      <div className='flex container lg:py-4flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={"/"} className='text-2xl md:text-5xl font-semibold'>
          Jeremy&apos;s Portfolio
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex-items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-black hover:border-black'>
                <Bars3Icon className='h-5 w-5' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex-items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-black hover:border-black'>
                <XMarkIcon className='h-5 w-5' />
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar