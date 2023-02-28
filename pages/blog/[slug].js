import React from 'react'
import fs from 'fs'
import path from 'path'
import {marked}   from 'marked'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'

const PostPage = ({frontmatter: {title, category, date, cover_image, author}, content, slug}) => {
  return (
   <Layout title={title}>
    <Link href='/blog'>Go Back</Link>
    <div className='w-full px-10 py-6 bg-gray-900 rounded-lg shadow-md mt-6'>
        <div className='flex justify-between items-center mt-4'>
            <h1 className='text-5xl mb-7'>{title}</h1>
            <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='' className='w-full rounded' />
        <div className='flex justify-between items-center p-2 my-8'>
            <h4>{author}</h4>
            <h4>{date}</h4>
        </div>

        <div className='blog-text mt-2'>
            <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </div>

    </div>
   </Layout>
  )
}

export default PostPage

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data:frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            content,
            slug,
        },
    }
}