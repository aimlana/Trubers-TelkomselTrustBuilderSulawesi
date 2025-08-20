import Navbar from '../components/Navbar';

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
  const leaderboard = sortedUsers
    .slice(3)
    .map((u, i) => ({ ...u, rank: i + 4 }));

  return (
    <>
      <Navbar />

      <div
        className='min-h-screen text-white p-6'
        style={{ background: 'linear-gradient(to bottom, #7149C6, #FF0025)' }}
      >
        {/* Tabs */}
        <div className='flex justify-content-center mb-6 mt-6'>
          <button className='px-4 py-2 bg-gray-800 border-round-left'>
            Top Akun
          </button>
          <button className='px-4 py-2 bg-gray-700 border-round-right'>
            Top Konten
          </button>
        </div>

        {/* 2 Kolom */}
        <div className='grid justify-content-center gap-4'>
          {/* Leaderboard */}
          <div className='col-12 lg:col-6'>
            {/* Top 3 Podium */}
            <div className='flex align-items-end justify-content-center gap-4 mb-6'>
              {/* Rank 2 */}
              {topUsers.find((u) => u.rank === 2) && (
                <div className='flex flex-column align-items-center'>
                  <div className='text-center mb-3'>
                    <img
                      src={topUsers.find((u) => u.rank === 2).avatar}
                      alt=''
                      className='border-circle w-5rem h-5rem mb-2'
                    />
                    <p className='font-bold'>
                      {topUsers.find((u) => u.rank === 2).name}
                    </p>
                    <p className='text-500 text-sm'>
                      {topUsers.find((u) => u.rank === 2).username}
                    </p>
                    <p className='text-xl mt-2'>
                      {topUsers.find((u) => u.rank === 2).nilai}
                    </p>
                  </div>
                  <div
                    className='flex flex-column align-items-center justify-content-start px-3 pt-4 border-round'
                    style={{
                      background:
                        'linear-gradient(to bottom, #e5e7eb, #374151)',
                      width: '8rem',
                      height: '8rem',
                    }}
                  >
                    <h3 className='text-4xl font-bold'>2</h3>
                  </div>
                </div>
              )}

              {/* Rank 1 */}
              {topUsers.find((u) => u.rank === 1) && (
                <div className='flex flex-column align-items-center'>
                  <div className='text-center mb-3'>
                    <img
                      src={topUsers.find((u) => u.rank === 1).avatar}
                      alt=''
                      className='border-circle w-6rem h-6rem mb-2'
                    />
                    <p className='font-bold'>
                      {topUsers.find((u) => u.rank === 1).name}
                    </p>
                    <p className='text-500 text-sm'>
                      {topUsers.find((u) => u.rank === 1).username}
                    </p>
                    <p className='text-xl mt-2'>
                      {topUsers.find((u) => u.rank === 1).nilai}
                    </p>
                  </div>
                  <div
                    className='flex flex-column align-items-center justify-content-start px-3 pt-4 border-round'
                    style={{
                      background:
                        'linear-gradient(to bottom, #fef08a, #78350f)',
                      width: '8rem',
                      height: '12rem',
                    }}
                  >
                    <h3 className='text-4xl font-bold'>1</h3>
                  </div>
                </div>
              )}

              {/* Rank 3 */}
              {topUsers.find((u) => u.rank === 3) && (
                <div className='flex flex-column align-items-center'>
                  <div className='text-center mb-3'>
                    <img
                      src={topUsers.find((u) => u.rank === 3).avatar}
                      alt=''
                      className='border-circle w-5rem h-5rem mb-2'
                    />
                    <p className='font-bold'>
                      {topUsers.find((u) => u.rank === 3).name}
                    </p>
                    <p className='text-500 text-sm'>
                      {topUsers.find((u) => u.rank === 3).username}
                    </p>
                    <p className='text-xl mt-2'>
                      {topUsers.find((u) => u.rank === 3).nilai}
                    </p>
                  </div>
                  <div
                    className='flex flex-column align-items-center justify-content-start px-3 pt-4 border-round'
                    style={{
                      background:
                        'linear-gradient(to bottom, #fef3c7, #92400e)',
                      width: '8rem',
                      height: '6rem',
                    }}
                  >
                    <h3 className='text-4xl font-bold'>3</h3>
                  </div>
                </div>
              )}
            </div>

            {/* Leaderboard Table */}
            <div className='mx-auto w-full'>
              <div className='grid grid-nogutter surface-800 text-300 text-sm px-3 py-2 border-round-top font-bold'>
                <p className='col-2 text-center'>Rank</p>
                <p className='col-7'>User</p>
                <p className='col-3 text-center'>Nilai</p>
              </div>

              {leaderboard.map((user) => (
                <div
                  key={user.id}
                  className='grid grid-nogutter align-items-center px-3 py-2 surface-900 border-bottom-1 border-700'
                >
                  <p className='col-2 text-center font-bold'>{user.rank}</p>
                  <div className='col-7 flex align-items-center gap-2'>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className='w-2rem h-2rem border-circle'
                    />
                    <div>
                      <p className='font-medium'>{user.name}</p>
                      <p className='text-400 text-xs'>{user.username}</p>
                    </div>
                  </div>
                  <p className='col-3 text-center'>
                    {user.nilai.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Table */}
          <div className='col-12 lg:col-6 surface-900 border-round overflow-hidden'>
            <div className='grid grid-nogutter surface-800 text-300 text-sm px-3 py-2 font-bold'>
              <p className='col'>Nama</p>
              <p className='col'>Username</p>
              <p className='col text-center'>Like</p>
              <p className='col text-center'>Comment</p>
              <p className='col text-center'>View</p>
              <p className='col text-center'>Nilai</p>
            </div>
            {sortedUsers.map((user) => (
              <div
                key={user.id}
                className='grid grid-nogutter align-items-center px-3 py-2 surface-900 border-bottom-1 border-700'
              >
                <p className='col'>{user.name}</p>
                <p className='col text-400'>{user.username}</p>
                <p className='col text-center'>{user.like}</p>
                <p className='col text-center'>{user.comment}</p>
                <p className='col text-center'>{user.view.toLocaleString()}</p>
                <p className='col text-center font-bold'>{user.nilai}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
