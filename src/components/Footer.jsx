import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='footer-gradient font-jakarta'>
      <div className='grid footer-shell align-items-stretch'>
        {/* Kiri */}
        <div className='col-12 md:col-6 flex flex-column justify-content-between'>
          <p className='footer-desc-left'>
            Dari genggamanmu ke seluruh peluang, Telkomsel selalu hadir membuka
            jalan untuk masa depanmu.
          </p>

          <h5 className='text-9xl font-semibold text-white m-0'>Telkomsel</h5>
        </div>

        {/* Kanan */}
        <div className='col-12 md:col-6 flex flex-column justify-content-between align-items-end'>
          <div className='text-white text-right address'>
            Jl. A. P. Pettarani No.3, Mannuruki, Kec. Tamalate, Kota Makassar,
            Sulawesi Selatan 90221
          </div>

          <div className='flex gap-3 text-white'>
            <a
              href='https://www.facebook.com/tselsulawesi/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-link'
            >
              Facebook <ArrowUpRight size={24} />
            </a>
            <a
              href='https://www.instagram.com/tselsulawesi/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-link'
            >
              Instagram <ArrowUpRight size={24} />
            </a>
            <a className='footer-link' href='mailto:info@telkomsel.com'>
              Email <ArrowUpRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
