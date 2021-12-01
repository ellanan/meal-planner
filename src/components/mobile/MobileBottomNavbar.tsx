import { NavLink } from 'react-router-dom';
import { MdCreate } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { BiListUl } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';

export const MobileBottomNavbar = () => {
  return (
    <div className='flex items-center justify-evenly bg-24 py-3 px-4 font-Raleway'>
      <NavLink
        className='flex flex-col items-center active:text-25 w-2/12 text-14 text-[10px] mx-2 px-2 font-medium uppercase'
        activeStyle={{ color: '#fa7532' }}
        to='/mealplanner'
        exact
      >
        <AiOutlineHome className='mr-1 mb-1' size={20} />
        Home
      </NavLink>

      <NavLink
        className='flex flex-col items-center w-2/12 text-14 text-[10px] mx-2 px-2 font-medium uppercase'
        activeStyle={{ color: '#fa7532' }}
        to='/recipes'
        exact
      >
        <GoSearch className='mr-1 mb-1' size={19} />
        Search
      </NavLink>

      <NavLink
        className='flex flex-col items-center w-2/12 text-14 text-[10px] mx-2 px-2 font-medium uppercase'
        activeStyle={{ color: '#fa7532' }}
        exact
        to='/createrecipe'
      >
        <MdCreate className='mr-1 mb-1' size={20} />
        Create
      </NavLink>

      <NavLink
        className='flex flex-col items-center w-2/12 text-14 text-[10px] mx-2 px-2 font-medium uppercase'
        activeStyle={{ color: '#fa7532' }}
        exact
        to='/grocerylist'
      >
        <BiListUl className='mr-1 mb-1' size={22} />
        Groceries
      </NavLink>
    </div>
  );
};
