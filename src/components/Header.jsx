import React, { Component } from 'react';
import logo from '../images/Logo.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const Title = styled.div`
  float:  right;
`;

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <Container>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="HyveMobile" />
            </Link>
          </div>
          <Title>
            <h2>Hyve Mobile Reactjs Test</h2>
          </Title>
        </Container>
      </div>
    );
  }
}

export default Header;
