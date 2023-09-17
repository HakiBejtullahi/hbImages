import { useRouteError, Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  min-height: 80vh;
  p {
    color: var(--color-text);
    font-style: italic;
  }
`;

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
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
