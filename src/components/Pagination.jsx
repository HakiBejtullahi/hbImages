import { Form } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Wrapper = styled.div`
  margin-bottom: 3rem;
  form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .form-control {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
        font-size: 1.2rem;
        font-weight: bolder;
        text-align: right;
        span {
          color: var(--color-title);
        }
      }
      input {
        border: none;
        background-color: transparent;
        color: var(--color-title);
      }
    }
    .btn {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      background-color: transparent;
      color: var(--color-title);
      box-shadow: none;
      animation: colorAnimaton 1s ease-in-out;
    }
  }
  @keyframes colorAnimation {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: var(--color-title);
    }
    80% {
      background-color: var(--color-title);
    }
    100% {
      background-color: transparent;
    }
  }
`;

const Pagination = ({ totalPages }) => {
  const { state, handlePageChange, setMaxPage } = useGlobalContext();

  useEffect(() => {
    setMaxPage(totalPages);
  }, [totalPages]);
  return (
    <Wrapper>
      <Form>
        <button
          className='btn'
          type='button'
          onClick={() => handlePageChange('prev', totalPages)}
        >
          <FaChevronLeft />
          <FaChevronLeft />
        </button>
        <div className='form-control'>
          <p>
            <span>{state.currentPage}</span>/{totalPages}
          </p>
        </div>
        <button
          className='btn'
          type='button'
          onClick={() => handlePageChange('next', totalPages)}
        >
          <FaChevronRight />
          <FaChevronRight />
        </button>
      </Form>
    </Wrapper>
  );
};

export default Pagination;
