import React, { useEffect, useState } from "react";
import Axios from "axios";
import '../../Stylesheet/emohome.css'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';

function Home(props) {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [loginStatus, setLoginStatus] = useState("");
  const [id, setId] = useState("");
  const[bleave, setBleave] = useState("");
  let [announ, setAnnoun] = useState([]);
  //let announ=[];
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
        setId(response.data.user[0].id)
      }
    });
  }, []);
  function createData(sender,title,content,date) {
    return { sender,title,content,date };
}
  useEffect(() => {
    Axios.get("http://localhost:3001/noun").then((response) => {
      setAnnoun(response.data)
      console.log(announ);
    });
  }, []);

  const getemployee = () => {
    Axios.post(`http://localhost:3001/getemployee`, {
      id: props.empid,
     
    }).then((response) => {
      if(response){
        setBleave(response.data[0].l_count);
  
      }
    })
    };

    getemployee();

console.log(announ);
console.log(announ.length);
  return (
    <div>
      
      <Row class=" gpd-grid">
        <Col xs="9">
          <h3 className="h3style">Announcement</h3>
          <div class="cell gpd-clm" id="iidc">
            <div class="gpd-box" id="il6i">
              {
                  announ.map((datas)=>(
                    <div className="content-pading">
                   <p><span className="span_content">Date: </span>{datas.date}</p>
                   <p><span className="span_content">Sender: </span> {datas.sender}</p>
                   <p><span className="span_content">Title: </span> {datas.title}</p>
                   <p><span className="span_content">Content: </span></p>
                   <p><span>{datas.content}</span></p>
                   <hr></hr>
                   </div>
                    
                  )
                  )
                }
              </div>
          </div>
        </Col>
        <Col xs="3">
        <h3 className="h3style">Balance Leave</h3>
          <div id="i77k"  class="cell gpd-clm">
            <div id="izxk">
              <div className="h4pay">
              <h4> Sick leave: {bleave}/50</h4>
               <hr/>
              </div>
              <div className="h4pay">
              <h4> casual leave: {bleave}/50</h4>
               <hr/>
              </div>
              <div className="h4pay">
              <h4> Annual leave: {bleave}/50</h4>
               <hr/>
              </div>
               
            </div>
          </div>
        </Col>
      
      </Row>
      <h3 className="h3style">Upcoming projects</h3>
      <div class="gpd-box" id="i8zi">
        <div class="gpd-box" id="isng">
         <h4>Upcoming projects</h4>
        </div>
      </div>
      </div>
     
      
      

  );
}

export default Home;
