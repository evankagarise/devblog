import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'
export default function Post({post}) {
    return (
        <div className='w-full px-10 py-6 rounded-lg shadow-md mt-6'>
            <Image src={post.frontmatter.cover_image} alt="alt" height={420} width={600} className="mb-4 rounded" />
            <div className='flex justify-between items-center'>
                <span className='font-light text-gray-300'>
                    {post.frontmatter.date}
                </span>
                <CategoryLabel>
                    {post.frontmatter.category  }
                </CategoryLabel>
            </div>

            <div className='mt-2'>
                <Link href={`/blog/${post.slug}`}>
                    <span className='text-2xl text-white font-bold hover:underline'>
                        {post.frontmatter.title}
                    </span>
                </Link>
                <p className='mt-2 text-gray-400'>
                    {post.frontmatter.excerpt}
                </p>
            </div>

            <div className='flex justify-between items-center mt-6 bottom-0'>
                <Link href={`/blog/${post.slug}`}>
                    <span className='hover:text-blue-400 font-semibold bottom-0'>
                        Read More
                    </span>
                </Link>
                <div className='flex items-center'>
                    <h3 className='text-gray-400 font-bold'>{post.frontmatter.author}</h3>
                </div>
            </div>
        </div>
    )
}