import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';
import NavBtn from './NavBtn';
import links from '../utils/navbarLinks.json';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 12;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0.2em 0;
  background-color: var(--bcgColor2);
  box-shadow: 0px 2px 5px var(--grey-700);
  padding: 0.5em 1.5em;
  .nav-links {
    display: none;

    .nav-link {
      font-size: 1.5rem;
      font-weight: bolder;
      text-transform: capitalize;
      transition: var(--transition);
      &:hover {
        color: var(--color-text);
      }
      &.active {
        color: var(--color-text);
        text-decoration: underline;
      }
    }
  }
  .btn-container {
    display: flex;
    gap: 0.5em;
    .btn-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    .nav-links {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;

const Navbar = () => {
  const { state, toggleDarkTheme, toggleSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <h2 className='logo'>
        hb <span>images</span>
      </h2>
      <ul className='nav-links'>
        {links.map((link) => {
          return (
            <li className='nav-item' key={link.id}>
              <NavLink
                to={link.address}
                className={({ isActive }) =>
                  isActive ? 'active nav-link' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className='btn-container'>
        <button
          type='button'
          className='btn btn-icon'
          onClick={toggleDarkTheme}
        >
          {state.isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
        <NavBtn />
      </div>
    </Wrapper>
  );
};

export default Navbar;
