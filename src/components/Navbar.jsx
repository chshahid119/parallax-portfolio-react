import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navbar({ scrollToPage }) {
  return (
    <div className="w-full flex sm:flex-col gap-4 justify-between p-4">
      <div className="flex items-center justify-center mar">
        <h1 className="p-5 rounded-full sm:text-2xl bebas-neue-regular font">
          SHAHEER HASSAN
        </h1>
      </div>
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
    </div>
  );
}

Navbar.propTypes = {
  scrollToPage: PropTypes.func.isRequired,
};

export default Navbar;
