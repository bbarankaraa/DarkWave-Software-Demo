import { useState } from 'react'
import Navlinks from './Navlinks'
import Logo from '../../assets/darkwavefavico.png'
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
        <nav className='bg-gray-100'>
        <div className="flex flex-col md:flex-row items-center font-medium justify-around md:h-[140px] h-[100px]">
            <div className='flex justify-between items-center gap-[40vw]'>
              <img src={Logo} alt="logo" className='md:cursor-pointer h-[100px]'/>
                <div className='text-3xl z-50 md:hidden px-5' onClick={() =>setOpen(!open)}>
                <ion-icon name={`${ open ? 'close' : 'menu' }`}></ion-icon>
                </div>
            </div>
            <ul className='hidden md:flex uppercase items-center gap-8'>
                <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-sm font-bold'>Ana Sayfa</a>
                </li>
                <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-sm font-bold'>Hakkımızda</a>
                </li>
                <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-sm font-bold'>Referanslarımız</a>
                </li>
                <Navlinks/>
                <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-sm font-bold'>İletişim</a>
                </li>
                <li>
                </li>
            </ul>
            {/* Mobile Nav */}
            <ul className={`md:hidden bg-gray-100 absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
            <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-3xl font-bold'>Ana Sayfa</a>
                </li>
                <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-3xl font-bold'>Hakkımızda</a>
                </li>
                <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-3xl font-bold'>Referanslarımız</a>
                </li>
                <Navlinks/>
                <li>
                <a href="" className='py-1 px-4 rounded-3xl inline-block hover:text-sky-500 hover:bg-white text-gray-500 text-3xl font-bold'>İletişim</a>
                </li>
                <li>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar