import Navbar from '../components/Navbar';
import 'primeflex/primeflex.css';

const users = [
  {
    id: 1,
    name: 'Brian Ngo',
    username: '@brianngo',
    avatar: 'https://i.pravatar.cc/150?img=1',
    nilai: 9821,
    like: 1200,
    comment: 300,
    view: 15000,
  },
  {
    id: 2,
    name: 'Jolie Joie',
    username: '@joliejoie',
    avatar: 'https://i.pravatar.cc/150?img=2',
    nilai: 9770,
    like: 1100,
    comment: 250,
    view: 14200,
  },
  {
    id: 3,
    name: 'David Do',
    username: '@daviddo',
    avatar: 'https://i.pravatar.cc/150?img=3',
    nilai: 9721,
    like: 980,
    comment: 210,
    view: 13800,
  },
  {
    id: 4,
    name: 'Henrietta O’Connell',
    username: '@henrietta',
    avatar: 'https://i.pravatar.cc/150?img=4',
    nilai: 9011,
    like: 860,
    comment: 180,
    view: 12000,
  },
  {
    id: 5,
    name: 'Darrel Bins',
    username: '@darrel',
    avatar: 'https://i.pravatar.cc/150?img=5',
    nilai: 8990,
    like: 810,
    comment: 150,
    view: 11800,
  },
  {
    id: 6,
    name: 'Alex Brein',
    username: '@alexbrr',
    avatar: 'https://i.pravatar.cc/150?img=6',
    nilai: 8981,
    like: 780,
    comment: 140,
    view: 11700,
  },
];

const Leaderboard = () => {
  const sortedUsers = [...users].sort((a, b) => b.nilai - a.nilai);
  const topUsers = sortedUsers
    .slice(0, 3)
    .map((u, i) => ({ ...u, rank: i + 1 }));

  return (
    <>
      <Navbar />

      <div className='bg-gradient-to-b from-primary to-secondary min-h-screen text-white p-3 md:p-6 font-jakarta'>
        {/* Tabs */}
        <div className='flex justify-center rank-btn'>
          <button className='btn-top-rank'>
            Top Akun
          </button>
          <button className='btn-top-rank'>
            Top Konten
          </button>
        </div>

        {/* 2 Kolom: Leaderboard & Table Detail */}
        <div className='grid grid-nogutter lg:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto'>
          {/* Leaderboard */}
          <div className='col'>
            {/* Top 3 Podium */}
            <div className='flex align-items-end justify-content-center gap-3 md:gap-6 mb-6 md:mb-12'>
              {/* Rank 2 */}
              {topUsers.find((u) => u.rank === 2) && (
                <div className='flex flex-column align-items-center'>
                  <div className='text-center mb-4 md:mb-6'>
                    <img
                      src={topUsers.find((u) => u.rank === 2).avatar}
                      alt={topUsers.find((u) => u.rank === 2).name}
                      className='w-6 h-6 md:w-20 md:h-20 border-circle mb-2'
                    />
                    <p className='font-semibold text-sm md:text-base'>
                      {topUsers.find((u) => u.rank === 2).name}
                    </p>
                    <p className='font-semibold text-neutral-400 text-xs md:text-sm'>
                      {topUsers.find((u) => u.rank === 2).username}
                    </p>
                    <p className='text-white text-lg md:text-xl mt-2 md:mt-4'>
                      {topUsers.find((u) => u.rank === 2).nilai}
                    </p>
                  </div>
                  <div className='flex flex-column align-items-center justify-content-start px-3 md:px-4 pt-6 md:pt-8 border-round bg-gradient-to-b from-neutral-200 to-neutral-700 bar-two'>
                    <h3 className='text-4xl font-bold m-0'>2</h3>
                  </div>
                </div>
              )}

              {/* Rank 1 */}
              {topUsers.find((u) => u.rank === 1) && (
                <div className='flex flex-column align-items-center'>
                  <div className='text-center mb-4 md:mb-6'>
                    <img
                      src={topUsers.find((u) => u.rank === 1).avatar}
                      alt={topUsers.find((u) => u.rank === 1).name}
                      className='w-6 h-6 md:w-20 md:h-20 border-circle mb-2'
                    />
                    <p className='font-semibold text-sm md:text-base'>
                      {topUsers.find((u) => u.rank === 1).name}
                    </p>
                    <p className='font-semibold text-neutral-400 text-xs md:text-sm'>
                      {topUsers.find((u) => u.rank === 1).username}
                    </p>
                    <p className='text-white text-lg md:text-xl mt-2 md:mt-4'>
                      {topUsers.find((u) => u.rank === 1).nilai}
                    </p>
                  </div>
                  <div className='flex flex-column align-items-center justify-content-start px-3 md:px-4 pt-8 md:pt-10 border-round bg-gradient-to-b from-yellow-200 to-yellow-900 bar-one'>
                    <h3 className='text-4xl font-bold m-0'>1</h3>
                  </div>
                </div>
              )}

              {/* Rank 3 */}
              {topUsers.find((u) => u.rank === 3) && (
                <div className='flex flex-column align-items-center'>
                  <div className='text-center mb-4 md:mb-6'>
                    <img
                      src={topUsers.find((u) => u.rank === 3).avatar}
                      alt={topUsers.find((u) => u.rank === 3).name}
                      className='w-6 h-6 md:w-20 md:h-20 border-circle mb-2'
                    />
                    <p className='font-semibold text-sm md:text-base'>
                      {topUsers.find((u) => u.rank === 3).name}
                    </p>
                    <p className='font-semibold text-neutral-400 text-xs md:text-sm'>
                      {topUsers.find((u) => u.rank === 3).username}
                    </p>
                    <p className='text-white text-lg md:text-xl mt-2 md:mt-4'>
                      {topUsers.find((u) => u.rank === 3).nilai}
                    </p>
                  </div>
                  <div className='flex flex-column align-items-center justify-content-start px-3 md:px-4 pt-6 md:pt-8 border-round bg-gradient-to-b from-amber-100 to-amber-800 bar-three'>
                    <h3 className='text-4xl font-bold m-0'>3</h3>
                  </div>
                </div>
              )}
            </div>

            </div>

          {/* Tabel Detail Keterangan */}
          <div className='col bg-gray-900/70 border-round-xl overflow-hidden'>
            {/* Header */}
            <div className='grid grid-nogutter bg-gray-800 text-gray-300 text-sm px-3 md:px-4 py-2 md:py-3 font-semibold'>
              <div className='col-2'>Nama</div>
              <div className='col-2'>Username</div>
              <div className='col text-center'>Like</div>
              <div className='col text-center'>Comment</div>
              <div className='col text-center'>View</div>
              <div className='col text-center'>Nilai</div>
            </div>

            {/* Rows */}
            {sortedUsers.map((user) => (
              <div
                key={user.id}
                className='grid grid-nogutter align-items-center px-3 md:px-4 py-2 md:py-3 bg-gray-900 border-bottom-1 border-gray-700 last:border-none'
              >
                <div className='col-2 text-sm md:text-base'>{user.name}</div>
                <div className='col-2 text-gray-400 text-sm'>
                  {user.username}
                </div>
                <div className='col text-center'>{user.like}</div>
                <div className='col text-center'>{user.comment}</div>
                <div className='col text-center'>
                  {user.view.toLocaleString()}
                </div>
                <div className='col text-center font-semibold'>
                  {user.nilai}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
