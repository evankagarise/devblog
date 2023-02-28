import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import Link from 'next/link'
import Post from '@/components/Post'
import { sortByDate } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  return (
      
      <div className='bg-gray-900 w-full pb-10'>
             <Layout>
            <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>
            <div className='pb-2 grid md:grid md:grid-cols-2 lg:grid-cols-3 bg-gray-900 w-full'>
             
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
            <Link href='/blog'>
                <span className='block text-center border border-gray-500 text-gray-300 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-600 focus:outline-none focus:shadow-otline w-[1080px]'>
                    All Posts
                </span>
            </Link>
        </Layout>
        </div>
        
  )
}

export async function getStaticProps() {

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
      const slug = filename.replace('.md', '')

      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

      const {data:frontmatter} = matter(markdownWithMeta)

      return {
          slug, frontmatter
      }

  })


  return {
      props: {
          posts: posts.sort(sortByDate).slice(0, 6)
      },
  }
      
}