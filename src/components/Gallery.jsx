import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context/Context';
import { fetchImage } from '../api/fetchImage';

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const { data, isPending, error } = useQuery({
    queryKey: ['unsplash', searchValue],
    queryFn: () => fetchImage(searchValue),
  });

  if (isPending) return <div className='loading'></div>;

  if (error)
    return (
      <h4 style={{ marginTop: '2rem' }}>
        there is an error, {error.message}
      </h4>
    );

  if (data.results.length < 1)
    return <h4 style={{ marginTop: '2rem' }}>No results found...</h4>;

  // console.log(data?.results);

  return (
    <section className='image-container'>
      {data.results.map((item) => {
        const { id, urls, alt_description } = item;
        return (
          <img
            key={id}
            className='img'
            src={urls.regular}
            alt={alt_description}
          />
        );
      })}
    </section>
  );
};
export default Gallery;
