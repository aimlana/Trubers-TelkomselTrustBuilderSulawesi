import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className='hero text-center px-5 mt-8'>
      <h2 className='hero-title mb-4'>
        Waktunya Kamu Jadi <br />
        Content Creator Hits Telkomsel!
      </h2>

      <p className='hero-desc'>
        Buat konten keren, kumpulin pengalaman, dan tunjukkan kreativitasmu ke
        seluruh Indonesia. Ini kesempatan emas buat anak SMA yang mau unjuk gigi
        di dunia digital.
      </p>

      <button className='btn-gradient mx-auto'>
        Mulai Sekarang <ArrowRight size={20} />
      </button>
    </section>
  );
};

export default Hero;
