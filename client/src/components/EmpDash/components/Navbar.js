import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../../Stylesheet/Navbar.css';
import { IconContext } from 'react-icons';
import Axios from "axios";
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

function Navbar() {
  let [ids, setId] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);
  let logout = () => {
    Axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.loggedIn === false) {
        //window.location.reload();
      }
    }); history.push('/');
  }
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setId(response.data.user[0].id);

      }
    });
  }, []);

  return (
    <>
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
            <li key={1} className = "nav-text">
            <Link to ={"/emp/account/"+ids}> <span>Account</span></Link>
            </li>
            <li className="nav-text">

              <button type="submit" className="btn2" onClick={logout} > <FaIcons.FaSignOutAlt />   LogOut </button>
            </li>

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;