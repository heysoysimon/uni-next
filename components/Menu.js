import React from 'react'
import Link from 'next/link'
const Menu = () => {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
   
    <Link href="/"><span class="cursor-pointer font-semibold text-xl tracking-tight">Universidad</span></Link>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-blue-100 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <Link href="/uni">
      <a class="block mx-4 mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4">
        La Universidad
      </a>
      </Link>
      <Link href="/oferta" >
      <a  class="block mx-4 mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4">
        Oferta Academica
      </a>
      </Link>
      <Link href="/admiciones">
      <a href="#responsive-header" class="block mx-4 mt-4  lg:inline-block lg:mt-0 text-white hover:text-black">
        Admiciones
      </a>
      </Link>
      <Link href='/bases'>
      <a href="#responsive-header" class="block  mx-4  mt-4 lg:inline-block lg:mt-0 text-white hover:text-black">
        Bases y Convenios
      </a>
      </Link>
    <Link href="/contacto">
    <a href="#responsive-header" class="block mx-4 mt-4 lg:inline-block lg:mt-0 text-white hover:text-black">
        Contacto
      </a>
    </Link>
  <Link href="/preguntas">
    <a href="#responsive-header" class="block mx-4 mt-4 lg:inline-block lg:mt-0 text-white hover:text-black">
        Preguntas Frecuentes
      </a>
  </Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Menu
