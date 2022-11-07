import { GiMagnifyingGlass } from 'react-icons/gi';

export const Nav = () => {
  return (
    <nav className='flex items-center justify-between bg-teal-200 p-2 shadow-md'>
      <div>
        <h1 className='text-2xl font-bold'>My index</h1>
      </div>
      <div className='flex'>
        <input type='text' placeholder='search...' className='mx-2 w-24' />
        <button>
          <GiMagnifyingGlass className='h-7 w-7'></GiMagnifyingGlass>
        </button>
      </div>
    </nav>
  );
};
