import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className='text-center px-10 mt-40'>
      <h2 className='text-4xl md:text-6xl font-semibold mb-6'>
        Waktunya Kamu Jadi <br />
        Content Creator Hits Telkomsel!
      </h2>
      <p className='text-neutral-500 max-w-3xl mx-auto mb-12'>
        Buat konten keren, kumpulin pengalaman, dan tunjukkan kreativitasmu ke
        seluruh Indonesia. Ini kesempatan emas buat anak SMA yang mau unjuk gigi
        di dunia digital.
      </p>
      <button className='px-8 py-3 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-medium flex items-center gap-2 mx-auto shadow-lg hover:scale-105  hover:from-secondary hover:to-primary transition'>
        Mulai Sekarang <ArrowRight size={20} />
      </button>
    </section>
  );
};

export default Hero;
