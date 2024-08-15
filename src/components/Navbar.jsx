import PropTypes from 'prop-types';
import { GiHamburgerMenu } from "react-icons/gi";

import NavBarList from './NavBarList';

function Navbar({ scrollToPage }) {
  return (
    <div className="w-full flex sm:flex-col gap-4 justify-between p-4">
      <div className="flex items-center justify-center mar">
        <h1 className="p-5 rounded-full sm:text-2xl bebas-neue-regular font">
          SHAHEER HASSAN
        </h1>
      </div>
    <div className="flex items-center justify-center"> 
      <div>
          <NavBarList />
    </div>
      <div>
        <GiHamburgerMenu />
        </div>
        </div>

    </div>
  );
}

Navbar.propTypes = {
  scrollToPage: PropTypes.func.isRequired,
};

export default Navbar;
