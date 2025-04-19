import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory, Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';


function Home() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [sender, setSender] = useState("");
  const [id, setId] = useState();
  const [announ, setAnnoun] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/managerlogin").then((response) => {
      if (response.data.loggedIn === true) {
        setEmail(response.data.user[0].email);
        setRole(response.data.user[0].role)
        setId(response.data.user[0].id)
        setSender("From: " + response.data.user[0].role + " " + " Email: " + response.data.user[0].email)
      }
    });
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/noun").then((response) => {
      setAnnoun(response.data)
      console.log(announ);
    });
  }, []);
  const admin = () => {
    if (role === "admin") {
      return (
        <div>
          <div className="button-con">
            <Button className="btn4" type="button">Add manager</Button>{' '}
          </div>
          <div className="button-con">
            <Button className="btn4" type="button">Add employee</Button>{' '}
          </div>
        </div>
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:3001/noun`, {
      id: id,
      sender: sender,
      title: title,
      content: content,

    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message)
        setTitle("")
        setContent("")

      }
      else {
        alert("Somthing went wrong")
      }
      window.location.reload();
    })
  };
  return (
    <div>
      <div class="mhome-outer">
        <Row>
          <Col xs="10">
            <div className=" inner-col">
              <h3 class="gpd-header">Announcement</h3>
              {
                announ.map((datas) => (
                  <div className="content-pading">
                    <p><span className="span_content">Date: </span>{datas.date}</p>
                    <p><span className="span_content">Sender: </span> {datas.sender}</p>
                    <p><span className="span_content">Title: </span> {datas.title}</p>
                    <p><span className="span_content">Content: </span></p>
                    <p><div class="mhome-outer2">{datas.content}</div></p>
                    <hr></hr>
                  </div>

                )
                )
              }
            </div>
          </Col>
          <Col xs="2">
            <div className=" inner-button">
              <div>
              </div>
              <div className="button-col">
                <div className="button-con">
                  <Button className="btn4" tag={Link} to={"/manager/account"} type="submit">Account</Button>
                </div>

                {admin()}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div class="mhome-outer">
        <Row>
          <Col xs="8">
            <div className=" inner-create">
              <h3 class="gpd-header">Create An Announcement</h3>

              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Title</label>
                  <input className="form-input" type="text" name="email" value={title} placeholder="Title"
                    onChange={(e) => { setTitle(e.target.value); }} required />
                  <label htmlFor="email">Content</label>
                  <textarea className="form-input3" type="text" name="content" value={content} placeholder="Announcment Content"
                    onChange={(e) => { setContent(e.target.value); }} required />
                </div>
                <div className="footer">
                  <Button className="btn4" type="submit">Save</Button>{' '}
                </div>
              </Form>

            </div>
          </Col>

        </Row>
      </div>

    </div>
  );
}

export default Home;
//onClick = {logout}