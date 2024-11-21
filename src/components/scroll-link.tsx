'use client'

import { Link } from 'react-scroll'

interface Props {
  target: string
  title: string
  offset?: number
}

export function ScrollLink({ target, title, offset = 0 }: Props) {
  return (
    <Link
      to={target}
      spy={true}
      smooth={true}
      duration={700}
      offset={offset}
      activeClass="active-link"
      className="cursor-pointer text-black no-underline duration-500 hover:text-blue-500"
    >
      {title}
    </Link>
  )
}
