import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BrowserRouter as  useRouteMatch} from "react-router-dom";
import * as FcIcons from 'react-icons/fc';

//let{ path, url } = useRouteMatch();
export const SidebarData = [
  {
    title: 'Home',
    path: '/admin/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
 
  {
    title: 'Payroll',
    path: '/admin/payroll',
    icon: <AiIcons.AiOutlinePayCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Performance',
    path: '/admin/performance',
    icon: <AiIcons.AiOutlineLineChart />,
    cName: 'nav-text'
  },
  {
    title: 'Leaves',
    path: '/admin/leaves',
    icon: <FcIcons.FcLeave />,
    cName: 'nav-text'
  },
  {
    title: 'Timesheet',
    path: '/admin/timesheet',
    icon: <FaIcons.FaCalendarTimes /> ,
    cName: 'nav-text'
  },
  {
    title: 'Candidate',
    path: '/admin/candidate',
    icon: <FaIcons.FaCalendarTimes /> ,
    cName: 'nav-text'
  },
  
];