import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-t from-secondary to-primary px-11 py-12 flex justify-between'>
      <div className='h-full flex flex-col-reverse justify-between items-start'>
        <h5 className='font-kalnia text-9xl text-white font-semibold'>
          Telkomsel
        </h5>

        <div className='mb-20'>
          <p className='text-white text-2xl w-3/5 mb-12'>
            Dari genggamanmu ke seluruh peluang, Telkomsel selalu hadir membuka
            jalan untuk masa depanmu.
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-between items-end'>
        <div className='flex flex-col text-xl gap-6 text-white'>
          <p className='text-end'>
            Jl. A. P. Pettarani No.3, Mannuruki, Kec. Tamalate, Kota Makassar,
            Sulawesi Selatan 90221
          </p>
        </div>

        <div className='flex flex-col text-xl gap-6 items-end text-white'>
          <a
            href='https://www.facebook.com/tselsulawesi/'
            target='_blank'
            className='flex gap-1 items-center cursor-pointer transition-colors'
          >
            Facebook
            <ArrowUpRight size={32} />
          </a>
          <a
            href='https://www.instagram.com/tselsulawesi/'
            target='_blank'
            className='flex gap-1 items-center cursor-pointer transition-colors'
          >
            Instagram
            <ArrowUpRight size={32} />
          </a>
          <a className='flex gap-1 items-center cursor-pointer transition-colors'>
            Email
            <ArrowUpRight size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
