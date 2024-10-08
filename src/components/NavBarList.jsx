import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBarList() {
  return (
     <div className="flex items-center justify-center">
        <ul className="flex items-center gap-36 padding-6 text-3xl text">
          <li>
            <NavLink
              to="/"
              onClick={() => scrollToPage(1)}
              className="cursor-pointer select-none hover:text-red-700 transition-all duration-300"
            >
              projects.
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => scrollToPage(2)}
              className="cursor-pointer select-none hover:text-red-700 transition-all duration-300"
            >
              about.
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => scrollToPage(2)}
              className="cursor-pointer select-none hover:text-red-700 transition-all duration-300"
            >
              credentials.
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => scrollToPage(3)}
              className="cursor-pointer select-none hover:text-red-700 transition-all duration-300"
            >
              contact.
            </NavLink>
          </li>
        </ul>
      </div>
  )
}

export default NavBarList