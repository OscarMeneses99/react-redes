import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4 underline-black'
    return (
        <nav className='flex justify-between items-center bg-neutral-900 fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg italic'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Home
                    </NavLink>
                </li>
                <li className='text-lg italic'>
                    <NavLink
                        to='/rip-1'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        RIP 1
                    </NavLink>
                </li>
                <li className='text-lg italic'>
                    <NavLink
                        to='/rip-2'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        RIP2
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li className='text-white/60'>
                    By Oscar Meneses Solis - 9CM11
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
