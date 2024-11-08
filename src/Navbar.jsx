/** @format */
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='bg-sky-600 shadow-md w-full z-50 shadow-sky-950 flex justify-center items-center sm:gap-4 lg:w-fit fixed bottom-0 lg:absolute right-0 lg:top-0 lg:bottom-auto p-4 text-white font-black sm:text-xl lg:rounded-es-3xl'>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-lime-400" : "hover:text-lime-400"
        }
      >
        About |
      </NavLink>
      <NavLink
        to='/certificates'
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-lime-400" : "hover:text-lime-400"
        }
      >
        Certificates |
      </NavLink>
      <NavLink
        to='/projects'
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-lime-400" : "hover:text-lime-400"
        }
      >
        Projects |
      </NavLink>
      <NavLink
        to='/more'
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-lime-400" : "hover:text-lime-400"
        }
      >
        More |
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-lime-400" : "hover:text-lime-400"
        }
      >
        Contact |
      </NavLink>
    </nav>
  );
}
export default Navbar;
