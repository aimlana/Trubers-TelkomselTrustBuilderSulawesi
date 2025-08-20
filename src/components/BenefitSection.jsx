import {Wifi, Shirt, Star, Plane} from 'lucide-react'

const BenefitSection = () => {
  const benefits = [
    {
      icon: <Wifi className='w-10 h-10 text-pink-500' />,
      title: 'Bantuan Kuota Akses Internet',
      desc: 'Bikin konten tanpa khawatir kehabisan kuota. Telkomsel siap support kamu biar selalu online!',
    },
    {
      icon: <Shirt className='w-10 h-10 text-pink-500' />,
      title: 'Merchandise Keren',
      desc: 'Dapatkan merchandise eksklusif Telkomsel yang bikin kamu makin standout sebagai content creator.',
    },
    {
      icon: <Star className='w-10 h-10 text-pink-500' />,
      title: 'Ketemu Content Creator Idola',
      desc: 'Rasakan pengalaman seru bertemu langsung dengan content creator favoritmu. Belajar, sharing, dan dapat inspirasi baru!',
    },
    {
      icon: <Plane className='w-10 h-10 text-pink-500' />,
      title: 'Kesempatan Jalan-Jalan Bareng',
      desc: 'Nggak cuma bikin konten, kamu juga bisa dapat pengalaman liburan seru bareng Telkomsel.',
    },
  ];

  return (
    <section id='benefit' className='pt-40 mb-20 px-10 font-jakarta'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-semibold mb-6'>
          Benefit Seru Buat Kamu yang Gabung!
        </h1>
        <p className='text-neutral-500 max-w-2xl text-center'>
          Nikmati berbagai keuntungan eksklusif dari Telkomsel untuk mendukung
          kreativitasmu sebagai content creator muda.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto mt-12'>
        {benefits.map((item, i) => (
          <div
            key={i}
            className='flex flex-col items-center gap-4 px-6 py-20 bg-white rounded-2xl shadow hover:shadow-lg transition border-neutral-300'
          >
            <div className='mb-4'>{item.icon}</div>
            <div  className='text-center'>
              <h3 className='text-lg font-semibold mb-4'>{item.title}</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitSection