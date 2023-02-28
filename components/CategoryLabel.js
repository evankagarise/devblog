import Link from 'next/link'
import React from 'react'

const CategoryLabel = ({children}) => {
    const colorKey = {
        JavaScript: 'yellow',
        CSS: 'blue',
        Python: 'green',
        Software: 'red',
        Language: 'purple',
        PHP: 'orange',
        Ruby: 'slate'
    }
  return (
    <div className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded hover:underline`}>
        <Link href={`/blog/category/${children.toLowerCase()}`}>
            {children}
        </Link>
    </div>
  )
}

export default CategoryLabel