import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'btn btn-outline btn-success text-base' : 'btn btn-ghost text-base')} >Home</NavLink>
        <NavLink to='/listed-books' className={({ isActive }) => (isActive ? 'btn btn-outline btn-success text-base' : 'btn btn-ghost text-base')}>Listed Books</NavLink>
        <NavLink to='/pages-read' className={({ isActive }) => (isActive ? 'btn btn-outline btn-success text-base' : 'btn btn-ghost text-base')}>Pages to Read</NavLink>
        <NavLink to='/latest' className={({ isActive }) => (isActive ? 'btn btn-outline btn-success text-base' : 'btn btn-ghost text-base')}>Latest Books</NavLink>
        <NavLink to='/authors' className={({ isActive }) => (isActive ? 'btn btn-outline btn-success text-base' : 'btn btn-ghost text-base')}>Authors</NavLink>
    </>

    return (
        <div className="navbar my-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu flex gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-[32px]  font-bold pl-0">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu flex gap-2 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <button className="btn btn-outline bg-green-500 border-none px-5 text-white text-lg">Sign In</button>
                <button className="btn btn-outline bg-sky-500 border-none px-5 text-white text-lg">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;