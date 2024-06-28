import { useParams } from 'react-router-dom';
import Title from '../../ui/title';

export default function CategoryPage() {
  const { name } = useParams();
  return (
    <section className='container mx-auto py-4'>
      <Title>{name}</Title>
      <div className='grid grid-cols-4 gap-6'>
        <div>
          <img
            src='https://m.media-amazon.com/images/I/913C+MR3S5L._AC_SY200_.jpg'
            alt='Image'
            className='w-full h-[50%] object-cover'
          />
          <h2 className='text-xl font-medium mt-3'>Product title</h2>
          <small>
            <strong>Price : </strong> $420
          </small>
        </div>
        <div>
          <img
            src='https://m.media-amazon.com/images/I/913C+MR3S5L._AC_SY200_.jpg'
            alt='Image'
            className='w-full h-[50%] object-cover'
          />
          <h2 className='text-xl font-medium mt-3'>Product title</h2>
          <small>
            <strong>Price : </strong> $420
          </small>
        </div>
      </div>
    </section>
  );
}
