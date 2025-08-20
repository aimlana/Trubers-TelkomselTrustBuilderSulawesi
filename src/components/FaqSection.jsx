import { useState } from 'react';

const FaqSection = () => {
  const faqs = [
    {
      question: 'Apa itu Telkomsel Talent Web?',
      answer:
        'Telkomsel Talent Web adalah platform yang memberikan kesempatan bagi para content creator untuk berkembang, berjejaring, dan mendapatkan dukungan langsung dari Telkomsel.',
    },
    {
      question: 'Apa saja benefit yang bisa saya dapatkan?',
      answer:
        'Kamu bisa mendapatkan bantuan kuota internet, merchandise eksklusif, kesempatan bertemu dengan content creator idola, hingga pengalaman jalan-jalan seru bersama Telkomsel.',
    },
    {
      question: 'Siapa saja yang bisa mendaftar?',
      answer:
        'Platform ini terbuka untuk anak SMA dari kelas 1 sampai kelas 2 yang aktif membuat konten digital.',
    },
    {
      question: 'Apakah ada biaya untuk mengikuti program ini?',
      answer:
        'Tidak ada biaya pendaftaran. Program ini sepenuhnya GRATIS karena Telkomsel ingin mendukung ekosistem kreator di Indonesia.',
    },
    {
      question: 'Bagaimana cara mendaftar?',
      answer:
        'Kamu cukup mengunjungi halaman registrasi di website Telkomsel Talent Web, mengisi data diri, dan melengkapi form yang disediakan. Setelah itu, tim kami akan menghubungi kamu lebih lanjut.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id='faq'
      className='mx-16 pt-40 pb-32 flex flex-col md:flex-row justify-between gap-10'
    >
      {/* Left content */}
      <div>
        <h2 className='text-4xl md:text-6xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
          Frequently Asked <br /> Questions
        </h2>
        <p className='text-lg text-gray-500 mt-6 md:mt-12'>
          Temukan jawaban untuk pertanyaan umum yang sering <br />
          ditanyakan tentang Telkomsel Talent.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className='flex flex-col'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='cursor-pointer w-full md:w-[750px] shadow px-8 py-6 md:py-12 rounded-3xl flex flex-col justify-center items-start mb-6 transition hover:shadow-lg'
            onClick={() => toggleFAQ(index)}
          >
            <h4 className='text-lg font-medium'>{faq.question}</h4>
            <p
              className={`text-sm text-neutral-500 mt-4 transition-all duration-300 ${
                openIndex === index ? 'block' : 'hidden'
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
