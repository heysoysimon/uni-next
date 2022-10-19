import React, { Children } from 'react'
import Head from 'next/head'
import Menu from './Menu'
import Footer from './Footer'
const Layout = ({children,pagina}) => {
  return (
    <div>
      <Head>
        <title> uer.educ.ve - {pagina}</title>
        <meta name='description' content='Universidad, de estudos recientes '/>
      </Head>
      <Menu></Menu>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
