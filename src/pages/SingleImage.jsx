import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import CollectionsSlider from '../components/CollectionsSlider';
import { useQuery } from '@tanstack/react-query';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
  .image-container {
    text-align: center;
    width: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 30rem;
  }
  .btn-container {
    display: flex;
    justify-content: space-evenly;
  }
  .user-info,
  .image-info {
    padding-left: 3rem;
    h4 {
      margin-left: -3rem;
      font-weight: bolder;
    }
    p {
      color: var(--color-text);
      font-weight: bolder;
      text-transform: uppercase;
      span {
        text-transform: capitalize;
        color: var(--color-title);
      }
    }
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`;

const getImageInfoQuery = (id) => {
  return {
    queryKey: ['id', id],
    queryFn: async () => {
      const resp = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      );
      const { data } = resp;
      const {
        alt_description,
        created_at,
        exif,
        likes,
        links,
        description,
        urls,
        user,
      } = data;
      const resp2 = await axios.get(
        `https://api.unsplash.com/users/${user.username}/photos?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      );
      console.log(resp2);
      return {
        imageInfo: {
          altText: alt_description,
          createdAt: created_at,
          cameraInfo: exif,
          likes,
          download: links.download,
          desc: description,
          img: urls.regular,
          user,
        },
        userCollections: {
          data: [...resp2.data],
        },
      };
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(getImageInfoQuery(id));

    return { id };
  };

const SingleImage = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(getImageInfoQuery(id));
  const { altText, createdAt, cameraInfo, likes, download, desc, img, user } =
    data.imageInfo;
  const { data: userCollections } = data.userCollections;
  return (
    <Wrapper>
      <div className='image-container'>
        <img src={img} alt={altText} />
        <h4>more by user</h4>
        <CollectionsSlider props={userCollections}></CollectionsSlider>
      </div>
      <div className='info'>
        <div className='user-info'>
          <h4>user info</h4>
          <p>
            Created by: <span>{user.name}</span>
          </p>
          <p>
            User likes: <span> {user.total_likes}</span>
          </p>
        </div>
        <div className='image-info'>
          <h4>image info</h4>
          <p>
            Created at: <span>{createdAt}</span>
          </p>
          {cameraInfo ? (
            <p>Camera details : {cameraInfo?.name || 'not provided'}</p>
          ) : null}
          {likes ? (
            <p>
              Likes: <span>{likes}</span>
            </p>
          ) : null}
          {desc ? (
            <p>
              Desc: <span>{desc}</span>
            </p>
          ) : null}
        </div>
        <div className='btn-container'>
          <a href={download} target='_blank' rel='noreferrer' className='btn'>
            Download
          </a>
          <Link to={'/search'} className='btn btn-hipster'>
            back home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleImage;
