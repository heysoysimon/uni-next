import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout
      pagina = "inicio">
        <div>
        <header className={styles.header}>
              
              <Slider></Slider>
     {/*   ¡<div>
        <div className="mt-64"> 
          <h1 className='text-white uppercase text-left  font-medium text-5xl'> universidad nacional</h1>
        </div>
       </div> */}
        </header>
        <main>

          {/* falta acomodar estos div para que se vean  responsive  */}
          <div className=' flex flex-col md:flex-row p-4'>
              <div className='basis-1/2  md:basis-1/3 py.1 my-4 md:mx-2  bg-blue-500'>
                <a href='#'> <Image src="/1.jpg"  className="hover:bg-gray-100 cursor-pointer" alt='categorias' width={300} height={300}></Image> informacion</a></div>
              <div className='basis-1/2  md:basis-1/3 py.1 my-4 md:mx-2  bg-blue-500'>
                <a href='#'> <Image src="/1.jpg"  className="hover:bg-gray-100 cursor-pointer" alt='categorias' width={300} height={300}></Image> informacion</a></div>
              <div className='basis-1/2  md:basis-1/3 py.1 my-4 md:mx-2  bg-blue-500'>
                <a href='#'> <Image src="/1.jpg"  className="hover:bg-gray-100 cursor-pointer" alt='categorias' width={300} height={300}></Image> informacion</a></div>
              <div className='basis-1/2  md:basis-1/3 py.1 my-4 md:mx-2  bg-blue-500'>
                <a href='#'> <Image src="/1.jpg"  className="hover:bg-gray-100 cursor-pointer" alt='categorias' width={300} height={300}></Image> informacion</a></div>
          </div>
        </main>
        </div>
      </Layout>
    </>
  )
}
