import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Main Page</h1>

      <Link href="/about">Go to about page</Link>
    </div>
  )
}

export default page
