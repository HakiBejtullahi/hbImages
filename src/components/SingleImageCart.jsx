import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';

const Wrapper = styled.article`
  a {
    overflow: hidden;
    position: relative;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
    &:hover {
      .info {
        padding: 1em 0.5em;
        height: fit-content;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      display: flex;
      justify-content: space-between;
      transition: var(--transition);
      height: 0;
      overflow: hidden;
      p {
        margin: 0;
        color: var(--primary-100);
        svg {
          color: var(--color-title);
        }
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      height: 300px;
    }
  }
`;

const SingleImageCart = ({ img, id, userName, likes }) => {
  return (
    <Wrapper>
      <Link to={`/singleImage/${id}`}>
        <img src={img} alt='image not found' />
        <div className='info'>
          <p>{userName}</p>
          <p>
            {likes}
            {<BsFillHandThumbsUpFill />}
          </p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default SingleImageCart;
