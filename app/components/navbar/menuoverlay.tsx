import React from 'react'
import NavLink from './navlink'

interface LinkItem {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center text-black'>
      {links.map((link, index) => (
        <li key={index}>
            <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay