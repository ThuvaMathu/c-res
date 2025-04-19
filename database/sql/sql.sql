-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2021 at 03:28 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demoproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_email` varchar(20) NOT NULL,
  `admin_password` varchar(20) NOT NULL,
  `admin_name` varchar(20) NOT NULL,
  `admin_dob` varchar(20) NOT NULL,
  `admin_addr` varchar(50) NOT NULL,
  `admin_qualification` varchar(20) DEFAULT NULL,
  `admin_position` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `content` varchar(3000) NOT NULL,
  `sender` varchar(300) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`id`, `sender_id`, `title`, `content`, `sender`, `date`) VALUES
(1, 1, 'project', 'helping to create a product or service for the Industry Partner. Examples of this might be developing a design\r\nfor a new component of a product, writing software as part of a product or to provide a commercial service,\r\ndeveloping a process or software that improves the internal business operations of an industry partner, or\r\nundertaking business analysis that is of competitive value.\r\n', 'From: manager  Email: manager@gmail.com', ''),
(2, 1, 'project', 'submit', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(3, 1, 'project', 'submit 2', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(4, 1, 'project', '123', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(5, 1, 'thuvamathu618@gmail.com', 'asddf', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(6, 1, 'sample-dash@gmail.com', 'sdsd', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(7, 1, 'candi1', 'asd', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(8, 1, 'sample-dash@gmail.com', 'asd', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(9, 1, 'sample@gmail.com', 'asd', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(10, 1, 'sample@gmail.com', 'asdrgtttttt', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(11, 1, 'sdasdfasd', 'asfsdfasdf', 'From: manager  Email: manager@gmail.com', '2021-05-16'),
(12, 1, 'Hi everyone', 'You Want to Welcome Your New Employee\nThese sample employee announcements allow you to welcome your new employee graciously and publicly. The employee announcements tell coworkers what the new employee will do and his or her job title. The employee announcements let other employees know who will mentor the new employee.', 'From: manager  Email: manager@gmail.com', '2021-05-27'),
(13, 1, 'Good morning', 'The employee announcement may tell coworkers something about the new employee, but it can be as simple as announcing that the new employee is starting and the date. You may also mention where the employee will work and suggest that coworkers stop by to greet the new employee.', 'From: manager  Email: manager@gmail.com', '2021-05-27'),
(14, 1, 'good evening', 'A positive way to introduce a new employee is to share a paragraph the new employee has written that expresses three-four interesting tidbits about the new employee that will also draw in coworkers.', 'From: manager  Email: manager@gmail.com', '2021-05-27');

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `id` int(11) NOT NULL,
  `candidate_name` varchar(255) NOT NULL,
  `candidate_lname` varchar(255) NOT NULL,
  `candidate_dob` varchar(100) NOT NULL,
  `candidate_addr` varchar(255) NOT NULL,
  `candidate_email` varchar(255) NOT NULL,
  `candidate_phone` varchar(255) NOT NULL,
  `candidate_image` blob NOT NULL,
  `candidate_gender` varchar(255) NOT NULL,
  `candidate_qualification` varchar(255) NOT NULL,
  `candidate_resume` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`id`, `candidate_name`, `candidate_lname`, `candidate_dob`, `candidate_addr`, `candidate_email`, `candidate_phone`, `candidate_image`, `candidate_gender`, `candidate_qualification`, `candidate_resume`) VALUES
(1, 'Thuvarakan', 'Selvasothy', '01-01-2022', '21 Elkhorn Street, Bellbird park', 'thuvamathu618@gmail.com', '1234567890', '', 'Male', 'MIT', 0x433a5c66616b65706174685c63796265722e4a5047);

-- --------------------------------------------------------

--
-- Table structure for table `candidate_account`
--

CREATE TABLE `candidate_account` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `stage` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `candidate_account`
--

INSERT INTO `candidate_account` (`id`, `email`, `password`, `stage`) VALUES
(1, 'thuvamathu618@gmail.com', '$2b$10$rJReI8wXrLfq3H4EArNimuYSYfrV3tAjHUm13lLas1.Q4RzLuDxwm', '2');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(20) NOT NULL,
  `company_location` varchar(20) NOT NULL,
  `company_phone` varchar(20) NOT NULL,
  `company_email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `copyright` varchar(255) DEFAULT 'https://loizenai.com',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstname`, `lastname`, `address`, `age`, `copyright`, `createdAt`, `updatedAt`) VALUES
(1, 'Jack', 'Smith', '374 William S Canning Blvd', 23, 'https://loizenai.com', '2021-05-11 09:17:07', '2021-05-11 09:17:07'),
(2, 'Adam', 'Johnson', 'Fall River MA 2721. 121 Worcester Rd', 31, 'https://loizenai.com', '2021-05-11 09:17:07', '2021-05-11 09:17:07'),
(3, 'Dana', 'Bay', 'Framingham MA 1701. 677 Timpany Blvd', 46, 'https://loizenai.com', '2021-05-11 09:17:07', '2021-05-11 09:17:07');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `Candidate_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `st_salary` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `em_role` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `hours` varchar(50) NOT NULL,
  `l_count` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `Candidate_id`, `name`, `lname`, `gender`, `email`, `address`, `phone`, `qualification`, `st_salary`, `department`, `em_role`, `description`, `hours`, `l_count`) VALUES
(1, 1, 'Thuvarakan', 'Selvasothy', 'Male', 'thuvamathu618@gmail.com', '21 Elkhorn Street, Bellbird park', '1234567890', 'MIT', '4500', 'science', 'teacher', 'teach science', '80', 45);

-- --------------------------------------------------------

--
-- Table structure for table `employee_credential`
--

CREATE TABLE `employee_credential` (
  `id` int(11) NOT NULL,
  `candidate_id` int(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'employee',
  `stage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee_credential`
--

INSERT INTO `employee_credential` (`id`, `candidate_id`, `email`, `password`, `role`, `stage`) VALUES
(1, 1, 'thuvamathu618@gmail.com', '$2b$10$/xGw6/5Z1Vf.jRZIW6ceseD1NldQTcN10HDJc29dWiswPJtHlKQMm', 'employee', '2');

-- --------------------------------------------------------

--
-- Table structure for table `employee_department`
--

CREATE TABLE `employee_department` (
  `department_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `employee_role` varchar(20) NOT NULL,
  `department_name` varchar(20) NOT NULL,
  `department_des` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `leave_form`
--

CREATE TABLE `leave_form` (
  `form_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `manager_id` int(11) NOT NULL,
  `leave_type` varchar(255) NOT NULL,
  `reason` varchar(5000) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `form_status` varchar(255) NOT NULL,
  `comments` varchar(5000) NOT NULL,
  `b_leave` int(20) NOT NULL,
  `l_from` varchar(255) NOT NULL,
  `l_until` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `manager_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `manager_email` varchar(20) NOT NULL,
  `manager_password` varchar(20) NOT NULL,
  `manager_name` varchar(20) NOT NULL,
  `manager_dob` varchar(20) NOT NULL,
  `manager_addr` varchar(50) NOT NULL,
  `manager_qualification` varchar(20) DEFAULT NULL,
  `manager_position` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `manager_credential`
--

CREATE TABLE `manager_credential` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `manager_credential`
--

INSERT INTO `manager_credential` (`id`, `email`, `password`, `role`) VALUES
(1, 'manager@gmail.com', '$2b$10$N0RVBAmYTqnkJm9fb2i4j.QQAVvAiwpoUBuUG7F3uEZHTe/tzixdy', 'manager'),
(2, 'admin@gmail.com', '$2b$10$F5.WVUvEmecBmReGRJeyXOSHZJJufoWPIrpH7lKrmdnlyQ1GBC6Ue', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `manager_department`
--

CREATE TABLE `manager_department` (
  `manager_department_id` int(11) NOT NULL,
  `manager_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `manager_role` varchar(20) NOT NULL,
  `manager_department_name` varchar(20) NOT NULL,
  `manager_department_des` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `payroll`
--

CREATE TABLE `payroll` (
  `id` int(11) NOT NULL,
  `emp_id` int(50) NOT NULL,
  `st_salary` varchar(255) NOT NULL,
  `deduction` varchar(255) NOT NULL,
  `benefit` varchar(255) NOT NULL,
  `total` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payroll`
--

INSERT INTO `payroll` (`id`, `emp_id`, `st_salary`, `deduction`, `benefit`, `total`, `date`) VALUES
(12, 8, '400000', '1000', '0', '399000', '2021-05-16'),
(13, 8, '400000', '200000', '2000', '202000', '2021-05-16');

-- --------------------------------------------------------

--
-- Table structure for table `selected_candidates`
--

CREATE TABLE `selected_candidates` (
  `id` int(11) NOT NULL,
  `candidate_id` int(11) NOT NULL,
  `candidate_name` varchar(255) NOT NULL,
  `candidate_lname` varchar(255) NOT NULL,
  `candidate_dob` varchar(100) NOT NULL,
  `candidate_addr` varchar(255) NOT NULL,
  `candidate_email` varchar(255) NOT NULL,
  `candidate_phone` varchar(255) NOT NULL,
  `candidate_image` blob NOT NULL,
  `candidate_gender` varchar(255) NOT NULL,
  `candidate_qualification` varchar(255) NOT NULL,
  `candidate_resume` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `selected_candidates`
--

INSERT INTO `selected_candidates` (`id`, `candidate_id`, `candidate_name`, `candidate_lname`, `candidate_dob`, `candidate_addr`, `candidate_email`, `candidate_phone`, `candidate_image`, `candidate_gender`, `candidate_qualification`, `candidate_resume`) VALUES
(1, 1, 'Thuvarakan', 'Selvasothy', '01-01-2022', '21 Elkhorn Street, Bellbird park', 'thuvamathu618@gmail.com', '1234567890', '', 'Male', 'MIT', 0x433a5c66616b65706174685c63796265722e4a5047);

-- --------------------------------------------------------

--
-- Table structure for table `shedule`
--

CREATE TABLE `shedule` (
  `id` int(11) NOT NULL,
  `emp_id` int(50) NOT NULL,
  `mon_from` varchar(255) NOT NULL,
  `mon_to` varchar(255) NOT NULL,
  `tue_from` varchar(255) NOT NULL,
  `tue_to` varchar(255) NOT NULL,
  `wed_from` varchar(255) NOT NULL,
  `wed_to` varchar(255) NOT NULL,
  `thu_from` varchar(255) NOT NULL,
  `thu_to` varchar(255) NOT NULL,
  `fri_from` varchar(255) NOT NULL,
  `fri_to` varchar(255) NOT NULL,
  `sat_from` varchar(255) NOT NULL,
  `sat_to` varchar(255) NOT NULL,
  `sun_from` varchar(255) NOT NULL,
  `sun_to` varchar(255) NOT NULL,
  `other` varchar(1000) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shedule`
--

INSERT INTO `shedule` (`id`, `emp_id`, `mon_from`, `mon_to`, `tue_from`, `tue_to`, `wed_from`, `wed_to`, `thu_from`, `thu_to`, `fri_from`, `fri_to`, `sat_from`, `sat_to`, `sun_from`, `sun_to`, `other`, `date`) VALUES
(1, 21, '17:59', '16:58', '17:59', '17:59', '17:59', '18:00', '19:01', '19:01', '19:01', '19:01', '17:59', '19:01', '17:59', '17:59', 'this is your shedule', '0000-00-00'),
(2, 21, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00'),
(3, 1, '00:00', '00:00', '', '', '', '', '', '', '', '', '', '', '', '', '', '0000-00-00'),
(4, 8, '20:12', '21:14', '23:16', '20:13', '21:14', '22:15', '22:14', '20:13', '21:13', '00:15', '22:15', '00:12', '00:00', '00:00', '', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `timesheet`
--

CREATE TABLE `timesheet` (
  `employee_id` int(11) NOT NULL,
  `work_date` date NOT NULL,
  `start_at` time NOT NULL,
  `end_at` time NOT NULL,
  `overflow` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `candidate_account`
--
ALTER TABLE `candidate_account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_credential`
--
ALTER TABLE `employee_credential`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_department`
--
ALTER TABLE `employee_department`
  ADD PRIMARY KEY (`department_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `leave_form`
--
ALTER TABLE `leave_form`
  ADD PRIMARY KEY (`form_id`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`manager_id`);

--
-- Indexes for table `manager_credential`
--
ALTER TABLE `manager_credential`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manager_department`
--
ALTER TABLE `manager_department`
  ADD PRIMARY KEY (`manager_department_id`),
  ADD KEY `manager_id` (`manager_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selected_candidates`
--
ALTER TABLE `selected_candidates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shedule`
--
ALTER TABLE `shedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timesheet`
--
ALTER TABLE `timesheet`
  ADD PRIMARY KEY (`employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `candidate_account`
--
ALTER TABLE `candidate_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employee_credential`
--
ALTER TABLE `employee_credential`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employee_department`
--
ALTER TABLE `employee_department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leave_form`
--
ALTER TABLE `leave_form`
  MODIFY `form_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `manager_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `manager_credential`
--
ALTER TABLE `manager_credential`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `manager_department`
--
ALTER TABLE `manager_department`
  MODIFY `manager_department_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payroll`
--
ALTER TABLE `payroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `selected_candidates`
--
ALTER TABLE `selected_candidates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shedule`
--
ALTER TABLE `shedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `timesheet`
--
ALTER TABLE `timesheet`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee_department`
--
ALTER TABLE `employee_department`
  ADD CONSTRAINT `employee_department_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `manager_department`
--
ALTER TABLE `manager_department`
  ADD CONSTRAINT `manager_department_ibfk_1` FOREIGN KEY (`manager_id`) REFERENCES `manager` (`manager_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `manager_department_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `timesheet`
--
ALTER TABLE `timesheet`
  ADD CONSTRAINT `timesheet_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
