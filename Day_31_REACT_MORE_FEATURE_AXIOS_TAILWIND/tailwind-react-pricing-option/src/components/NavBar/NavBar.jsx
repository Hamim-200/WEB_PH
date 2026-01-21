import React from 'react';

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


const NavBar = () => {
    return (
        <nav>
           <ul className='flex'>

             {
                navigationData.map(route => <li className='mr-10'> 
                    <a href={route.path}>{route.name}</a>
                </li> )
            }
           </ul>
        </nav>
    );
};

export default NavBar;