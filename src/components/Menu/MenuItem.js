import React from 'react'
import { randomRgbaColor } from '../../utils'
import { Link } from 'react-scroll'


const MenuItem = ({name , Icon , to}) => {
  return (
    <Link
    className='subMenu'
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="active"
    >
      <Icon className='icon'  style={{color : randomRgbaColor(1)}}/>
      <span>{name}</span>
  </Link>
  )
}

export default MenuItem