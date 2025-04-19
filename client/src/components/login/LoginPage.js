//import React from 'react';
import '../Stylesheet/LoginPage.css';
import '../Stylesheet/styles.css'
import React from "react";

import { EmployeeLogin, ManagerLogin, Header} from './index';

export class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      
    };
  }

  
  componentDidMount() {
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => 
      ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    
    const {isLogginActive } = this.state;
    const current = isLogginActive ? "Manager" : "Employee";
    const currentActive = isLogginActive ? "EmployeeLogin" : "ManagerLogin"

    return ( 
      
        <div>
          <div><Header/></div>
            <div className="outside-box">
                <div className="main-box">
                <div className="container" ref={ref => (this.container = ref)}>
                    {isLogginActive && (
                    <EmployeeLogin containerRef={ref => this.current = ref} />
                    )}
                    {!isLogginActive && (
                    <ManagerLogin containerRef={(ref) => this.current = ref}/>
                    )}
                </div>
                <RightSide 
                current={current} 
                currentActive={currentActive}
                containerRef={ref => (this.rightSide = ref)} 
                onClick={this.changeState.bind(this)}
                />
                </div>
                
            </div>
            
            
            
      </div>
      
    )
  }
}

const RightSide = props => {
  return (
  <div 
    className="right-side" 
    ref={props.containerRef} 
    onClick={props.onClick}
  >
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>
  </div>
  );
};


export default LoginPage;