import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';

//let{ path, url } = useRouteMatch();
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Employee details',
    path: '/admin/employeedetails',
    icon: <CgIcons.CgDetailsMore />,
    cName: 'nav-text'
  },
  {
    title: 'Employee db',
    path: '/admin/employeedb',
    icon: <FiIcons.FiDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Leaves',
    path: '/manager/leaves',
    icon: <AiIcons.AiOutlineCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Payroll',
    path: '/admin/payroll',
    icon: <AiIcons.AiOutlinePayCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Holiday',
    path: '/admin/holiday',
    icon: <FaIcons.FaRegPaperPlane />,
    cName: 'nav-text'
  },
  {
    title: 'Performance',
    path: '/admin/performance',
    icon: <AiIcons.AiOutlineLineChart />,
    cName: 'nav-text'
  },
  {
    title: 'Manager',
    path: '/admin/manager',
    icon: <BsIcons.BsPeopleCircle /> ,
    cName: 'nav-text'
  },
  
];

          {/* <Route exact path='/admin/' component={Home} />
          <Route  path='/admin/employeedetails' component={Employeedetails} />
          <Route  path='/admin/employeedb' component={Employeedb} />
          <Route  path='/admin/leaves' component={Leavedetails} />
          <Route  path='/admin/payroll' component={Payrolldetails} />
          <Route  path='/admin/holiday' component={Holidaydetails} />
          <Route  path='/admin/performance' component={Performancedetails} />
		  <Route  path='/admin/managers' component={Managerdetails} /> */}