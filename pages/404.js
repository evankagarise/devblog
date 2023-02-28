import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
   <Layout title="Page not found">
    <div className='flex flex-col items-center mt-20'>
        <h1 className='text-5xl font-bold text-gray-700'>Error 404</h1>
    </div>
   </Layout>
  )
}

export default NotFoundPage