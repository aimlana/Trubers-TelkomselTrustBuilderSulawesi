import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';

const GridImage = () => {
  return (
    <section className='px-10 mt-20 mb-16 space-y-4'>
      {/* Baris Atas */}
      <div className='grid grid-cols-4 gap-4'>
        <img
          src={img1}
          alt='img1'
          className='w-full h-60 object-cover rounded-2xl'
        />
        <img
          src={img2}
          alt='img2'
          className='w-full h-60 object-cover rounded-2xl'
        />
        <img
          src={img3}
          alt='img3'
          className='w-full h-60 object-cover rounded-2xl'
        />
        <img
          src={img4}
          alt='img4'
          className='w-full h-60 object-cover rounded-2xl'
        />
      </div>

      {/* Baris Bawah */}
      <div className='grid grid-cols-3 gap-4'>
        <img
          src={img5}
          alt='img5'
          className='w-full h-60 object-cover rounded-2xl'
        />
        <img
          src={img6}
          alt='img6'
          className='w-full h-60 object-cover rounded-2xl'
        />
        <img
          src={img7}
          alt='img7'
          className='w-full h-60 object-cover rounded-2xl'
        />
      </div>
    </section>
  );
};

export default GridImage;
