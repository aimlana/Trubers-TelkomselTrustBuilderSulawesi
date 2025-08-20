const Navbar = () => {
  return (
    <>
      <header className='px-10 py-6 fixed z-20 top-0 left-0 right-0 bg-white font-jakarta'>
        <div className='w-full flex justify-between  items-center'>
          <a
            href='/'
            className='text-3xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-poetsen
              hover:from-secondary hover:to-primary transition'
          >
            Trubers
          </a>
          <ul className='flex justify-between items-center gap-8'>
            <li>
              <a
                href='/'
                className='text-lg font-medium transition cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary 
                  hover:bg-clip-text hover:text-transparent'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/#benefit'
                className='text-lg font-medium transition cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary 
                  hover:bg-clip-text hover:text-transparent'
              >
                Benefit
              </a>
            </li>
            <li>
              <a
                href='/#faq'
                className='text-lg font-medium transition cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary 
                  hover:bg-clip-text hover:text-transparent'
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href='/leaderboard'
                className='text-lg font-medium transition cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary 
                  hover:bg-clip-text hover:text-transparent'
              >
                Leaderboard
              </a>
            </li>
          </ul>
          <button
            className='px-9 py-2 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-2
            hover:from-secondary hover:to-primary transition'
          >
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
