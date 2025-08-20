import img8 from '../assets/images/8.jpg'

const Subscribe = () => {
  return (
    <section id='subscribe' className='p-7'>
      <div className='relative w-full h-[600px] overflow-hidden rounded-3xl'>
        {/* Background Image */}
        <img src={img8} alt='padar' className='w-full h-full object-cover' />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-40'></div>

        {/* Content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6'>
          <h2 className='text-white text-4xl md:text-5xl font-medium'>
            Tunjukkan bakatmu bersama Telkomsel Talent dan raih pengalaman seru
            menuju masa depan!
          </h2>
          <button 
            className='mt-16 px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-medium flex 
                items-center gap-2 mx-auto shadow-lg hover:scale-105  hover:from-secondary hover:to-primary transition'>
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
