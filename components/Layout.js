import React from 'react'
import Head from 'next/head'
import Header from './Header'

function Layout({title, keywords, description, children}) {
  return (
    <div className='bg-gray-900 pb-2 '>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <link rel="icon" href='/favicon.ico' />
        </Head>
        <Header />
        <main className='container mx-auto my-7 bg-gray-900 text-white'>
            
            {children}
            </main>
    </div>
  )
}
Layout.defautProps = {
    title: "blog post",
    keywords: 'programming',
    description: 'dev blog post'
}

export default Layout