import styled from 'styled-components';
import img from '../assets/not-found.svg';
import { Link, useRouteError } from 'react-router-dom';
const Wrapper = styled.div`
  text-align: center;
  img {
    max-width: 600px;
    width: 90vw;
    margin: 0 auto;
    display: block;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0.5rem auto 0 auto;
    color: var(--color-text);
    font-style: italic;
  }
  a {
    text-transform: uppercase;
    background-color: var(--primary-500);
    color: var(--bcgColor);
    padding: 0.75rem 1.5rem;
    border-radius: 15px;
    margin: 1rem auto 0 auto;
    display: inline-block;
    transition: all 0.5s linear;
    font-weight: bolder;
    &:hover {
      background-color: var(--primary-300);
      color: var(--color-text);
    }
  }
`;

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper className='section-center'>
        <img src={img} alt='not found' />
        <h3>{error.statusText}</h3>
        <p>
          Sorry, page was not found. Please click the link below to navigate
          back home.
        </p>
        <Link to='/'>back home</Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper className='section-center'>
      <h3>Opps!</h3>
      <p>{error.message}</p>
    </Wrapper>
  );
};

export default Error;
