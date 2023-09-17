import { useRouteError, Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../assets/not-found.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  min-height: 80vh;
  img {
    max-width: var(--fixed-width);
    margin-bottom: 5rem;
  }
  p {
    color: var(--color-text);
    font-style: italic;
  }
`;

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  if (error.response.status === 403) {
    return (
      <Wrapper>
        <img src={img} alt='not found' />
        <h4>Opps ,error 403</h4>
        <p>
          It seems we have reached our max number of fetches for the day. Please
          come back later if you want to check out this site.
        </p>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>Error {error?.response?.status}</h4>
      <p>{error.message}</p>
      <Link to={'/'} className='btn'>
        back home
      </Link>
    </Wrapper>
  );
};

export default SinglePageError;
