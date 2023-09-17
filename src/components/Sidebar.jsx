import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';
import navlinks from '../utils/navbarLinks.json';

const Wrapper = styled.aside`
  position: fixed;
  inset: 0;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  transform: translateY(-100%);
  z-index: 10;
  background-color: var(--bcgColor);
  transition: all 0.5s ease-in-out;
  padding-top: 2rem;
  padding-left: 1rem;
  border: 5px inset var(--bcgColor);
  &.show {
    transform: translate(0);
    z-index: 10;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 30rem;
    .nav-item {
    }
    .nav-link {
      font-size: 2rem;
      font-weight: bolder;
      text-transform: uppercase;
      transition: var(--transition);
      &.active {
        color: var(--primary-800);
        text-decoration: underline;
      }
      &:hover {
        margin-left: 2rem;
        color: var(--primary-300);
      }
    }
  }
`;

const Sidebar = () => {
  const { state, toggleSidebar } = useGlobalContext();
  return (
    <Wrapper className={state.isSidebarOpen && 'show'}>
      <ul className='nav-links'>
        {navlinks.map((link) => {
          return (
            <li className='nav-item' key={link.id}>
              <NavLink
                to={link.address}
                className={({ isActive }) =>
                  isActive ? 'active nav-link' : 'nav-link'
                }
                onClick={toggleSidebar}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Sidebar;
