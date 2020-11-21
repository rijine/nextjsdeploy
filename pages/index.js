import React from 'react'
import Link from 'next/link'  

export default () => (
  <>
    <h1>Next.js v9 on Google App Engine!</h1> 
    <img 
        src="img_girl.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    <Link href="/about">
      <a>Links work too!</a>
    </Link>
  </>
)
