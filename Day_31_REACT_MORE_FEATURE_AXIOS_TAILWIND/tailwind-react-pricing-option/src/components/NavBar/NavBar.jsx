import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About",
        path: "/about",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Projects",
        path: "/projects",
        id: 4
    },
    {
        name: "Blog",
        path: "/blog",
        id: 5
    },
    {
        name: "Contact",
        path: "/contact",
        id: 6
    }
];

console.log(navigationData)
const NavBar = () => {

    const links =  navigationData.map(route => <Link key={route.id} route={route}></Link>)

    const [open,setOpen] = useState(false);
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={()=>setOpen(!open)}>
                {
                    open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>

                }
                <ul className='md:hidden'>
                    {links}
                </ul>
                <h3 className='ml-4'>My NAVBAR</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                   links
                }
            
            </ul>
           {/* <ul className='flex'>

             {
                navigationData.map(route => <li className='mr-10'> 
                    <a href={route.path}>{route.name}</a>
                </li> )
            }
           </ul> */}

           <button>Sign In</button>
        </nav>
    );
};

export default NavBar;