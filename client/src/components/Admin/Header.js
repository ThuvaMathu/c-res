import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

function Logout() {
	localStorage.setItem("loggedin", false);
	window.location.reload();
}


const Header = () => {
	
    return (	
		<Row>
			<Col md={2} sm={2} xs={2}>
				<NavLink to="/home">
					<img alt="" className="header-img" src="./logo512.png" />
				</NavLink>
			</Col>
			<Col md={8} sm={8} xs={8}>
				<Row>
					<Col md={10} sm={10} xs={10}>					
						<label>Name: </label>
					</Col>
				</Row>
				<Row>
					<Col md={10} sm={10} xs={10}>
						<label>Employee-ID :</label>
					</Col>
				</Row>
				<Row>
					<Col md={10} sm={10} xs={10}>
						<label>Departmnet: </label>
					</Col>
				</Row>
				<Row>
					<Col md={10} sm={10} xs={10}>
						<label>Position: </label>
					</Col>
				</Row>
			</Col>
			<Col md={2} sm={2} xs={2}>
				<Row>
					<Col md={10} sm={10} xs={10}>
						<button  className="btn" onClick={Logout}><FiIcons.FiLogOut /> </button>
					</Col>
				</Row>
			</Col>
		</Row>
	);	
}
 
export default Header;