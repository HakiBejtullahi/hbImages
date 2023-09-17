import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: -6rem;
  align-items: center;
  min-height: calc(100vh - 66.78px - 3rem);
  .banner-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;

    p {
      margin-top: 2rem;
      color: var(--color-text);
      font-style: italic;
      a {
        color: var(--color-title);
        text-transform: uppercase;
        font-weight: bolder;
      }
    }
    .btn-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 1rem;
      flex-grow: 0;
      flex-shrink: 0;
      width: 100%;
      margin-top: 4rem;
      margin-bottom: 4rem;
      .btn {
        text-transform: uppercase;
        font-weight: bolder;
        padding: 0.5em 1em;
      }
    }
    .btn-special {
      background-color: var(--color-text);
      font-size: 2.2rem;
      font-weight: bolder;
      box-shadow: -0.2px 0.2px 10px var(--color-text);
      /* font-family: var(--font-accent); */
      text-transform: uppercase;
      letter-spacing: 10px;
      padding: 0.5em 1.5em;
      &:hover {
        box-shadow: -2.5px 2.5px 25px var(--color-text);
        background-color: var(--color-title);
      }
    }
  }
  .bannerImg-container {
    /* display: none; */
    position: relative;
    background-color: var(--color-title);
    height: 30rem;
    margin-top: 3rem;
    border-radius: 1rem;
    box-shadow: var(--shadow-4);
    a {
      border-radius: 1rem;
      position: absolute;
      left: 1rem;
      top: -1rem;
      background-color: var(--color-title);
      width: 100%;
      height: 30rem;
      transition: var(--transition);
      img {
        transition: var(--transition);
        border-radius: 1rem;
        width: 100%;
        object-fit: cover;
        transition: var(--transition);
        height: 30rem;
        box-shadow: var(--shadow-4);
      }
      &:hover {
        background-color: var(--color-title);
        z-index: 5;
        left: 0;
        top: 0;
        img {
          opacity: 0.7;
          transition: var(--transition);
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 75%,
            75% 75%,
            75% 100%,
            50% 75%,
            0% 75%
          );
        }
      }
    }
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    .bannerImg-container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      p {
        color: white;
        position: relative;
        z-index: -1;
      }
      img {
      }
    }
  }
`;

const Banner = ({ data, refetch }) => {
  return (
    <Wrapper className='banner'>
      <figure className='bannerImg-container'>
        <Link to={`/singleImage/${data.id}`}>
          <img src={data?.urls?.regular} alt='banner image' />
        </Link>
      </figure>
      <div className='banner-info'>
        <h2 className='logo'>
          hb <span>images</span>
        </h2>
        <p>
          This web application uses the Unsplash API. You can search through
          their images, check their details, download and some other features.
          If you want to check their official website{' '}
          <a href='https://unsplash.com/' target='_blank' rel='noreferrer'>
            Unsplash
          </a>{' '}
          or for developer please check{' '}
          <a
            href='https://unsplash.com/developers'
            target='_blank'
            rel='noreferrer'
          >
            Unsplash API
          </a>
        </p>

        <div className='btn-container'>
          <Link className='btn' to={'/search'}>
            Search Images
          </Link>
          <Link className='btn' to={'/latest'}>
            Latest Images
          </Link>
        </div>
        <button className='btn btn-special' onClick={() => refetch()}>
          Change Image
        </button>
      </div>
    </Wrapper>
  );
};

export default Banner;
