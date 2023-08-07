import Menu from '../../assets/menu.svg';
import Search from '../../assets/search.svg';
import Mail from '../../assets/mail.svg';
import User from '../../assets/user.svg';
import { Outlet } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <div className='w-full bg-tertiary-color'>
                <div className='w-screen max-w-[1440px] mx-auto p-4 md:px-5 flex justify-between items-center gap-3 md:gap-5'>
                    <p className='font-light text-[28px]'>book<span className='font-semibold'>nook</span></p>
                    <button className='hidden md:block'>Home</button>
                    <button className='hidden md:block'>My Books</button>
                    <button className='hidden md:block'>Browse</button>
                <div className='flex justify-between items-center grow bg-white rounded p-2 gap-2'>
                    <input type='text' placeholder='Search books or podcasts' className='grow'/>
                    <img src={Search} className='w-[20px] h-[20px]' alt='search-icon' />
                </div>
                <div className='rounded-full w-[32px] h-[32px] bg-secondary-color md:flex justify-center items-center hidden'>
                    <img src={Mail} alt='mail-icon' className='w-[16px] h-[16px]' />
                </div>
                <div className='rounded-full w-[32px] h-[32px] bg-secondary-color md:flex justify-center items-center hidden'>
                    <img src={User} alt='user-icon' className='w-[16px] h-[16px]' />
                </div>
                <img src={Menu} className='w-[28px] h-[28px] md:hidden block' alt='menu-icon'/>
                </div>
            </div>
            <Outlet />
        </>
    )
}