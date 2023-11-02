import React from 'react'

const Nav = () => {
  let navItems = [
    {icons: [
      {name: 'Github', href: 'https://github.com/elysemontano'},
      {name: 'LinkedIn', href: 'https://www.linkedin.com/in/elysemontano/'}
    ]},
    {links: [
      {name: 'ABOUT', href: '#about'},
      {name: 'PROJECTS', href: '#projects'},
      {name: 'CONTACT', href: '#contact'}
    ]}
  ]
  return (
    <div className='nav sticky'>
      <ul className='flex-row'>
        {navItems[0].icons.map(item => {
          return(
            <li className='nav-item'>
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
      <ul className='flex-row'>
        {navItems[1].links.map(item => {
          return(
            <li className='nav-item'>
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default Nav