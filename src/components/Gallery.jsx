import styled from 'styled-components';
import SingleImageCart from './SingleImageCart';
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding-bottom: 2rem;
  h4 {
    span {
      text-transform: uppercase;
      font-size: 0.8em;
      font-weight: bolder;
      color: rgba(0, 0, 0, 0.5);
      animation: lightEffect 2.4s ease-in-out infinite;
      cursor: pointer;
    }
  }
  @keyframes lightEffect {
    0% {
      color: var(--green-dark);
    }
    50% {
      color: var(--green-light);
    }
    70% {
      color: var(--green-light);
    }
    100% {
      color: var(--green-dark);
    }
  }
`;

const Gallery = ({ images }) => {
  if (images.length < 1) {
    return (
      <Wrapper>
        <h4 style={{ textAlign: 'center' }}>
          No images matched your{' '}
          <span onClick={() => document.getElementById('search').focus()}>
            Search Term
          </span>
          . Please use another{' '}
          <span onClick={() => document.getElementById('search').focus()}>
            Search Term
          </span>
          .
        </h4>
      </Wrapper>
    );
  }

  const formatedImages = images.map((item) => {
    // console.log(item);
    const {
      id,
      urls: { regular },
      user: { name },
      likes,
    } = item;
    return { id, img: regular, userName: name, likes };
  });

  return (
    <Wrapper>
      {formatedImages.map((data) => {
        return <SingleImageCart key={data.id} {...data} />;
      })}
    </Wrapper>
  );
};

export default Gallery;
