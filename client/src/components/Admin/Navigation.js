import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import './Navbar.css';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Employee',
    path: '/employeedb',
    icon: <AiIcons.AiOutlinePayCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Leaves',
    path: '/leaves',
    icon: <BsIcons.BsPeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Payroll',
    path: '/payroll',
    icon: <AiIcons.AiOutlineLineChart />,
    cName: 'nav-text'
  },
  {
    title: 'Holidays',
    path: '/holiday',
    icon: <FcIcons.FcLeave />,
    cName: 'nav-text'
  },
  {
    title: 'Peformance',
    path: '/peformance',
    icon: <FaIcons.FaCalendarTimes />,
    cName: 'nav-text'
  },
  {
    title: 'Managers',
    path: '/managers',
    icon: <FaIcons.FaCalendarTimes />,
    cName: 'nav-text'
  },
];

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
/*import React from 'react'; 
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as vscIcons from 'react-icons/vsc';


const Navigation = () => {
    return (
		<div className="leftmenu">
			<ul style={{ listStyleType: "none", padding: 0 }}>
				<li>
					<FaIcons.FaHome className="icon-color" />
					<NavLink to="/home" activeClassName="activelink">Home</NavLink> 	
				</li>
				<li>
					<FaIcons.FaDatabase className="icon-color" />
					<NavLink to="/employeedb" activeClassName="activelink">Employee</NavLink>
				</li>
				<li>
					 <vscIcons.VscCircleOutline className="icon-color" />
					 <NavLink to="/leaves" activeClassName="activelink">Leaves</NavLink> 
				</li>
				<li>
					 <FaIcons.FaApplePay className="icon-color" />
					 <NavLink to="/payroll" activeClassName="activelink">Payroll</NavLink> 
				</li>
				<li>
					 <FaIcons.FaBiking className="icon-color" />
					 <NavLink to="/holiday" activeClassName="activelink">Holiday</NavLink> 
				</li>
				<li>
					 <FaIcons.FaSortAmountUpAlt className="icon-color" />
					 <NavLink to="/peformance" activeClassName="activelink">Performance</NavLink> 
				</li>
				<li>
					 <FaIcons.FaUserTie className="icon-color" />
					 <NavLink to="/managers" activeClassName="activelink">Managers</NavLink> 
				</li>
				
			</ul>
       </div>
    );
}
 
export default Navigation;*/