import styled from 'styled-components';
import { useGlobalContext } from '../context';

const BUTTON = styled.button`
  background-color: var(--color-title);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 50%;
  padding: 0.5em;
  border: none;
  position: relative;
  transition: var(--transition);
  &.close {
    .span-1 {
      transform: rotate(45deg) translate(-50%);
      position: absolute;
      top: 65%;
      left: 43%;
    }
    .span-2 {
      transform: rotate(-45deg) translate(-50%);
      position: absolute;
      top: 9%;
      left: 41%;
    }
    .span-3 {
      background-color: transparent;
    }
  }
  /* &:hover {
    background-color: var(--bcgColor);
    .span {
      background-color: var(--color-title);
    }
  } */

  .span {
    width: 40px;
    display: block;
    height: 5px;
    border-radius: 12px;
    margin: 0.2em 0;
    background-color: var(--primary-50);
    transition: var(--transition);
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const NavBtn = () => {
  const { state, toggleSidebar } = useGlobalContext();

  return (
    <BUTTON
      onClick={toggleSidebar}
      className={state.isSidebarOpen ? 'btn close' : 'btn'}
    >
      <span className='span span-1'></span>
      <span className='span span-2'></span>
      <span className='span span-3'></span>
    </BUTTON>
  );
};

export default NavBtn;
