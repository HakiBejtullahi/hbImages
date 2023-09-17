import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Gallery from '../components/Gallery';
import SearchForm from '../components/SearchForm';
import Pagination from '../components/Pagination';
import { setFromLocalStorage } from '../utils/localStorage';
import { useEffect } from 'react';
import { useGlobalContext } from '../context';

const searchImagesQuery = (searchTerm, page) => {
  return {
    queryKey: ['search', searchTerm || 'cat'],
    queryFn: async () => {
      const resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }&page=${page}&per_page=12&query=${searchTerm}`
      );

      return {
        images: resp.data.results,
        totalPages: resp.data.total_pages,
      };
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get('search') || 'cat';
    console.log(searchTerm);
    setFromLocalStorage('currPage', 1);
    await queryClient.ensureQueryData(searchImagesQuery(searchTerm, 1));
    return { searchTerm };
  };

const BrowseImages = () => {
  const { searchTerm } = useLoaderData();
  const { state } = useGlobalContext();

  const { data, refetch } = useQuery(
    searchImagesQuery(searchTerm, state.currentPage)
  );

  useEffect(() => {
    refetch();
  }, [state.currentPage]);

  return (
    <>
      <SearchForm />
      <Pagination totalPages={data.totalPages} />
      <Gallery images={data.images} />
    </>
  );
};

export default BrowseImages;
