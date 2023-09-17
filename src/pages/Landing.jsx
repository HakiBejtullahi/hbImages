import Banner from '../components/Banner';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const getRandomImageQuery = () => {
  return {
    queryKey: ['random'],
    queryFn: async () => {
      const resp = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      );

      return resp.data;
    },
  };
};

export const loader = (queryClient) => {
  return async () => {
    await queryClient.ensureQueryData(getRandomImageQuery());
    return null;
  };
};

const Landing = () => {
  useLoaderData();
  const { data, refetch } = useQuery(getRandomImageQuery());

  return (
    <>
      <Banner data={data} refetch={refetch} />
    </>
  );
};

export default Landing;
