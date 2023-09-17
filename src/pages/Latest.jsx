import { useQuery } from '@tanstack/react-query';
import { useNavigation } from 'react-router-dom';
import axios from 'axios';
import Gallery from '../components/Gallery';
import Pagination from '../components/Pagination';
import { setFromLocalStorage } from '../utils/localStorage';
import { useEffect } from 'react';
import { useGlobalContext } from '../context';

const getLatestImagesQuery = (page) => {
  return {
    queryKey: ['latest'],
    queryFn: async () => {
      const resp = await axios.get(
        `https://api.unsplash.com/photos?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }&order_by=latest&page=&per_page=12&page=${page}`
      );
      const data = resp.data;

      return data;
    },
  };
};

export const loader = (queryClient) => async () => {
  setFromLocalStorage('currPage', 1);
  await queryClient.ensureQueryData(getLatestImagesQuery(1));
  return null;
};

const BrowseImages = () => {
  const { state, resetCurrPage } = useGlobalContext();
  useEffect(() => {
    resetCurrPage();
  }, []);
  const { data, refetch } = useQuery(getLatestImagesQuery(state.currentPage));
  const data2 = useNavigation();
  console.log(data2.location);
  useEffect(() => {
    refetch(getLatestImagesQuery(state.page));
  }, [state.currentPage]);

  return (
    <>
      <Pagination totalPages={50} />
      <Gallery images={data} />
    </>
  );
};

export default BrowseImages;
