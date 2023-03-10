import fs from 'fs'
import path from 'path'
import Layout from '@/components/Layout'
import matter from 'gray-matter'
import Link from 'next/link'
import Post from '@/components/Post'
import { sortByDate } from '@/utils'
import { POSTS_PER_PAGE } from '@/config'
import Pagination from '@/components/Pagination'




export default function BlogPage({posts, numPages, currentPage}) {
    return (
        <div className='bg-gray-900 w-full '>
             <Layout>
                <div className='flex items-center justify-between  gap-11 border-b-4 p-5'>
                    <h1 className='text-5xl font-bold'>Blog</h1>
            <Link href='/blog/category/javascript'><h1 className='bg-gray-800 p-4 cursor-pointer'>Categories</h1></Link>
                </div>
            
            <div className='pb-2 grid md:grid md:grid-cols-2 lg:grid-cols-3 bg-gray-900 w-full'>
             
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
            <Pagination currentPage={currentPage} numPages={numPages} />
            
        </Layout>
        </div>
       
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

    let paths = []

    for(let i = 1; i <= numPages; i++) {
        paths.push({
            params: {page_index: i.toString()}
        })
    }
    return {
        paths, fallback: false,
    }
}

export async function getStaticProps({params}) {

    const page = parseInt((params && params.page_index || 1))

    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

        const {data:frontmatter} = matter(markdownWithMeta)

        return {
            slug, frontmatter
        }

    })

    const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
    const pageIndex = page - 1
    const orderedPosts = posts.sort(sortByDate).slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) *  POSTS_PER_PAGE)

    return {
        props: {
            posts: orderedPosts,
            numPages,
            currentPage: page,
        },
    }
        
}