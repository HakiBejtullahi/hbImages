import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  p {
    width: 100%;
    a {
      font-weight: bolder;
      font-family: var(--font-accent);
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <h2>About this web site.</h2>
      <p>
        This website uses images and other information provided by{' '}
        <a
          href='https://unsplash.com/developers'
          target='_blank'
          rel='noreferrer'
        >
          UNSPLASH API
        </a>{' '}
        . All images as well as download sites are comming from UNSPLASH. This
        project uses some of the new feature from react router dom latest upade
        and react query mixxed to show off the images proived by Unsplash.
      </p>
    </Wrapper>
  );
};

export default About;
