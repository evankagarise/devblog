import Layout from '@/components/Layout'
import React from 'react'

const about = () => {
  return (
    <Layout title='About DevBlog'>
        <h1 className='text-5xl border-b-4 border-white pb-5 font-bold'>About</h1>

        <div className=' shadow-2xl rounded-lg px-10 py-6 mt-6'>
            <h3 className='text-xl mb-5'>
                Blog for developers. Here you will find tech, guides, and software for developers!

            </h3>
        </div>
    </Layout>
  )
}

export default about