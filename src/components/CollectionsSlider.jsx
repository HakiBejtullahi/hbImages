import styled from 'styled-components';
import arraySplitter from '../utils/arraySplitter';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: auto 1fr auto;
  gap: 0.2em;
  /* width: 25.9em; */
  overflow: hidden;
  button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: var(--color-title);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slider-container {
    display: flex;
    justify-content: space-evenly;
    gap: 0.2em;
    .img-container {
      max-height: 7rem;

      img {
        height: 7rem;
        width: 7rem;
        object-fit: cover;
      }
    }
  }
`;

const CollectionsSlider = ({ props }) => {
  const images = arraySplitter(props, 3);
  const [sliderIndex, setSliderIndex] = useState(0);

  console.log(props);
  const handleClick = (dir) => {
    if (dir === 'next') {
      if (sliderIndex >= images.length - 1) return;
      setSliderIndex((prev) => prev + 1);
    } else if (dir === 'prev') {
      if (sliderIndex < 1) return;
      setSliderIndex((prev) => prev - 1);
    }
  };
  if (props.length < 1) return;

  return (
    <Wrapper>
      <button onClick={() => handleClick('prev')}>
        <FaChevronLeft />
        <FaChevronLeft />
      </button>
      <div className='slider-container'>
        {images[sliderIndex].map((item) => {
          const {
            id,
            urls: { small: img },
          } = item;

          return (
            <Link className='img-container' key={id} to={`/singleImage/${id}`}>
              <img src={img} alt='collections image' />
            </Link>
          );
        })}
      </div>
      <button onClick={() => handleClick('next')}>
        <FaChevronRight />
        <FaChevronRight />
      </button>
    </Wrapper>
  );
};

export default CollectionsSlider;
