import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Calendar from './Calendar/Calendar.js';

class Holidaydetails extends Component{
	renderItem() {
	  const list = [
		{
		  name: 'Employee-ID',
		  text: '***',
		},
		{
		  name: 'Name',
		  text: '***',
		}
	  ]

	  return (
		<div>
		  {list.map((val, key) => 
			<Row key={key} >
			  <Col md={6} sm={6} xs={6}>{val.name}</Col>
			  <Col md={6} sm={6} xs={6}>{val.text}</Col>
			</Row>
		  )}
		</div>
	  );
	}
	test(){
		console.log("Holidays will come here");
	}
	render() {
		return (
			<Row>
				<Col md={12} sm={12}>
					<Row>
						<Col md={12} sm={12}>
							<h2>Holiday Information</h2>
						</Col>
						<Col md={6} sm={6}>
							<div>{this.renderItem()}</div>
						</Col>
						<Col md={6} sm={6}>
							<Calendar />
						</Col>
						<Col md={12} sm={12}>&nbsp;</Col>
						<Col md={10} sm={10}></Col>
						<Col md={2} sm={2}>					
							<Button as="input" type="Button" value="Update" onChange={this.test} />					
						</Col>
					</Row>

				</Col>
			</Row>
		);
	}
}
 
export default Holidaydetails;