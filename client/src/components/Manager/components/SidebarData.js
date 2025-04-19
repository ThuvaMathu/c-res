import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BrowserRouter as  useRouteMatch} from "react-router-dom";
import * as FcIcons from 'react-icons/fc';

//let{ path, url } = useRouteMatch();
export const SidebarData = [
  {
    title: 'Home',
    path: '/manager/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
 
 
  {
    title: 'Performance',
    path: '/manager/performance',
    icon: <AiIcons.AiOutlineLineChart />,
    cName: 'nav-text'
  },
  {
    title: 'Leaves',
    path: '/manager/leaves',
    icon: <FcIcons.FcLeave />,
    cName: 'nav-text'
  },
  {
    title: 'Timesheet',
    path: '/manager/timesheet',
    icon: <FaIcons.FaCalendarTimes /> ,
    cName: 'nav-text'
  },
  {
    title: 'Candidate',
    path: '/manager/candidate',
    icon: <FaIcons.FaCalendarTimes /> ,
    cName: 'nav-text'
  },
  {
    title: 'Employee',
    path: '/manager/employee',
    icon: <FaIcons.FaCalendarTimes /> ,
    cName: 'nav-text'
  },
  
];