import Navbar from '../components/Navbar';

const users = [
  {
    id: 1,
    name: 'Brian Ngo',
    username: '@brianngo',
    avatar: 'https://i.pravatar.cc/150?img=1',
    nilai: 9821,
  },
  {
    id: 2,
    name: 'Jolie Joie',
    username: '@joliejoie',
    avatar: 'https://i.pravatar.cc/150?img=2',
    nilai: 9770,
  },
  {
    id: 3,
    name: 'David Do',
    username: '@daviddo',
    avatar: 'https://i.pravatar.cc/150?img=3',
    nilai: 9721,
  },
  {
    id: 4,
    name: 'Henrietta O’Connell',
    username: '@henrietta',
    avatar: 'https://i.pravatar.cc/150?img=4',
    nilai: 9011,
  },
  {
    id: 5,
    name: 'Darrel Bins',
    username: '@darrel',
    avatar: 'https://i.pravatar.cc/150?img=5',
    nilai: 8990,
  },
  {
    id: 6,
    name: 'Alex Brein',
    username: '@alexbrr',
    avatar: 'https://i.pravatar.cc/150?img=6',
    nilai: 8981,
  },
];

const Leaderboard = () => {
  // Urutkan dari nilai terbesar ke terkecil
  const sortedUsers = [...users].sort((a, b) => b.nilai - a.nilai);

  // Ambil top 3 untuk podium
  const topUsers = sortedUsers.slice(0, 3).map((u, i) => ({
    ...u,
    rank: i + 1,
  }));

  // Sisanya untuk tabel
  const leaderboard = sortedUsers.slice(3).map((u, i) => ({
    ...u,
    rank: i + 4, // karena rank mulai dari 4
  }));

  return (
    <>
      <Navbar />

      <div className='bg-gradient-to-b from-primary to-secondary min-h-screen text-white p-6'>
        {/* Tabs */}
        <div className='flex justify-center mb-16 mt-32'>
          <button className='px-6 py-2 bg-gray-800 rounded-l-full'>
            Top Akun
          </button>
          <button className='px-6 py-2 bg-gray-700 rounded-r-full'>
            Top Konten
          </button>
        </div>

        {/* Top 3 podium */}
        <div className='flex items-end justify-center gap-6 mb-12'>
          {/* Ambil user rank 2 */}
          {topUsers.find((u) => u.rank === 2) && (
            <div className='flex flex-col items-center'>
              <div className='text-center mb-6'>
                <img
                  src={topUsers.find((u) => u.rank === 2).avatar}
                  alt={topUsers.find((u) => u.rank === 2).name}
                  className='w-20 h-20 rounded-full mb-2'
                />
                <p className='font-semibold'>
                  {topUsers.find((u) => u.rank === 2).name}
                </p>
                <p className='font-semibold text-neutral-400 text-sm'>
                  {topUsers.find((u) => u.rank === 2).username}
                </p>
                <p className='text-white text-xl mt-4'>
                  {topUsers.find((u) => u.rank === 2).nilai}
                </p>
              </div>
              <div className='flex flex-col items-center justify-start px-4 pt-8 rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-700 w-40 h-40'>
                <h3 className='text-6xl font-bold'>2</h3>
              </div>
            </div>
          )}

          {/* Ambil user rank 1 */}
          {topUsers.find((u) => u.rank === 1) && (
            <div className='flex flex-col items-center'>
              <div className='text-center mb-6'>
                <img
                  src={topUsers.find((u) => u.rank === 1).avatar}
                  alt={topUsers.find((u) => u.rank === 1).name}
                  className='w-20 h-20 rounded-full mb-2'
                />
                <p className='font-semibold'>
                  {topUsers.find((u) => u.rank === 1).name}
                </p>
                <p className='font-semibold text-neutral-400 text-sm'>
                  {topUsers.find((u) => u.rank === 1).username}
                </p>
                <p className='text-white text-xl mt-4'>
                  {topUsers.find((u) => u.rank === 1).nilai}
                </p>
              </div>
              <div className='flex flex-col items-center justify-start px-4 pt-8 rounded-lg bg-gradient-to-b from-yellow-200 to-yellow-900 w-40 h-60'>
                <h3 className='text-6xl font-bold'>1</h3>
              </div>
            </div>
          )}

          {/* Ambil user rank 3 */}
          {topUsers.find((u) => u.rank === 3) && (
            <div className='flex flex-col items-center'>
              <div className='text-center mb-6'>
                <img
                  src={topUsers.find((u) => u.rank === 3).avatar}
                  alt={topUsers.find((u) => u.rank === 3).name}
                  className='w-20 h-20 rounded-full mb-2'
                />
                <p className='font-semibold'>
                  {topUsers.find((u) => u.rank === 3).name}
                </p>
                <p className='font-semibold text-neutral-400 text-sm'>
                  {topUsers.find((u) => u.rank === 3).username}
                </p>
                <p className='text-white text-xl mt-4'>
                  {topUsers.find((u) => u.rank === 3).nilai}
                </p>
              </div>
              <div className='flex flex-col items-center justify-start px-4 pt-8 rounded-lg bg-gradient-to-b from-amber-100 to-amber-800 w-40 h-32'>
                <h3 className='text-6xl font-bold'>3</h3>
              </div>
            </div>
          )}
        </div>

        {/* Leaderboard table */}
        <div className='max-w-3xl mx-auto'>
          {/* Header */}
          <div className='grid grid-cols-4 bg-gray-800 text-gray-300 text-sm px-4 py-3 rounded-t-xl font-semibold'>
            <p className='text-center'>Rank</p>
            <p className='col-span-2'>User</p>
            <p className='text-center'>Nilai</p>
          </div>

          {/* Rows */}
          {leaderboard.map((user) => (
            <div
              key={user.id}
              className='grid grid-cols-4 items-center px-4 py-3 bg-gray-900/60 border-b border-gray-700 last:rounded-b-xl'
            >
              {/* Rank */}
              <p className='text-center font-semibold'>{user.rank}</p>

              {/* User */}
              <div className='flex items-center gap-3 col-span-2'>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className='w-9 h-9 rounded-full'
                />
                <div>
                  <p className='text-white font-medium'>{user.name}</p>
                  {user.username && (
                    <p className='text-gray-400 text-xs'>{user.username}</p>
                  )}
                </div>
              </div>

              {/* Nilai */}
              <p className='text-center'>{user.nilai.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
