import * as React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  h-[50px]  shadow-md">
      <a href="/" className="pl-3">
        App name
      </a>
      <ul className="flex">
        <li>
          <a href="/users" className="px-3">
            Users
          </a>
        </li>
        <li>
          <a href="/login" className="py-5 px-3">
            Login
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
