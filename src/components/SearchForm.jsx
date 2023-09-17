import { Form } from 'react-router-dom';
import styled from 'styled-components';
import { setFromLocalStorage } from '../utils/localStorage';
import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  form {
    text-align: center;
    label {
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      color: var(--color-text);
    }
    .form-control {
      margin-top: 1.5rem;
      input {
        font-size: 1.2rem;
        padding: 0.3em 0.5em;
        border: 1px solid;
        border-right: none;
        border-color: var(--title-color);
        background-color: var(--bcgColor);
        color: var(--color-text);
        text-transform: lowercase;

        &:focus {
          outline: none;
        }
      }
      .btn {
        font-size: 1.2rem;
        padding: 0.35em 0.5em;
        border: 1px solid var(--title-color);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`;

const SearchForm = () => {
  const handleSubmit = (e) => {
    const input = e.target.previousElementSibling;
    setFromLocalStorage('searchTerm', input.value || 'cat');
  };
  return (
    <Wrapper>
      <Form>
        <label htmlFor='search'>Search your favorite images now.</label>
        <div className='form-control'>
          <input
            type='search'
            id='search'
            placeholder='search...'
            name='search'
          />
          <button
            className='btn'
            type='submit'
            onClick={(e) => handleSubmit(e)}
          >
            search
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
