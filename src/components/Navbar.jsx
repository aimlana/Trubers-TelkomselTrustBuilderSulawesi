import icon from '../../public/icon.svg';

const Navbar = () => {
  return (
    <header className='px-5 py-3 fixed top-0 left-0 right-0 z-5 bg-white font-jakarta'>
      <div className='flex align-items-center justify-content-between w-full'>
        {/* Logo */}
        <a href='/' className='text-3xl font-medium font-poetsen gradient-text'>
          <img src={icon} alt='logo' className='h-3rem' />
        </a>

        {/* Menu */}
        <ul className='flex align-items-center gap-5 list-none m-0 p-0'>
          <li>
            <a href='/' className='nav-link'>
              Home
            </a>
          </li>
          <li>
            <a href='/#benefit' className='nav-link'>
              Benefit
            </a>
          </li>
          <li>
            <a href='/#faq' className='nav-link'>
              FAQ
            </a>
          </li>
          <li>
            <a href='/leaderboard' className='nav-link'>
              Leaderboard
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className='login-btn'>Login</button>
      </div>
    </header>
  );
};

export default Navbar;
