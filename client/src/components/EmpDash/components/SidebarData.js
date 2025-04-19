import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BrowserRouter as  useRouteMatch} from "react-router-dom";
import * as FcIcons from 'react-icons/fc';

//let{ path, url } = useRouteMatch();
export const SidebarData = [
  {
    title: 'Home',
    path: '/emp/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
 
  {
    title: 'Payroll',
    path: '/emp/payroll',
    icon: <AiIcons.AiOutlinePayCircle />,
    cName: 'nav-text'
  },
  
  {
    title: 'Leaves',
    path: '/emp/leaves',
    icon: <FcIcons.FcLeave />,
    cName: 'nav-text'
  },
  {
    title: 'Timesheet',
    path: '/emp/timesheet/',
    icon: <FaIcons.FaCalendarTimes /> ,
    cName: 'nav-text'
  },
 
  
];