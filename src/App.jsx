import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  About,
  Error,
  HomeLayout,
  Landing,
  Latest,
  SingleImage,
  SinglePageError,
  BrowseImages,
  Popular,
} from './pages';

import { loader as browseImagesLoader } from './pages/BrowseImages';
import { loader as singleImageLoader } from './pages/SingleImage';
import { loader as randomImageLoader } from './pages/Landing';
import { loader as latestImagesLoader } from './pages/Latest';
import { loader as popularImagesLoader } from './pages/Popular';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: randomImageLoader(queryClient),
      },
      {
        path: '/singleImage/:id',
        errorElement: <SinglePageError />,
        element: <SingleImage />,
        loader: singleImageLoader(queryClient),
      },
      {
        path: '/latest',
        element: <Latest />,
        errorElement: <SinglePageError />,
        loader: latestImagesLoader(queryClient),
      },
      {
        path: '/popular',
        element: <Popular />,
        errorElement: <SinglePageError />,
        loader: popularImagesLoader(queryClient),
      },
      {
        path: '/search',
        element: <BrowseImages />,
        loader: browseImagesLoader(queryClient),
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
