import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
const WrapperLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <main>
      <Navbar />
      <Sidebar />

      <section className='section-center'>
        {isPageLoading ? (
          <WrapperLoading>
            <div className='loading'></div>
          </WrapperLoading>
        ) : (
          <Outlet />
        )}
      </section>
    </main>
  );
};

export default HomeLayout;
