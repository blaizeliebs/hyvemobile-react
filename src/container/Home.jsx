import React, { Component } from 'react';
import HomeImage from '../components/HomeImage'
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`;

const HomeContent = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #000;
`;

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <AppContainer>
          <HomeContent>
            <HomeImage />
            <p>
              Using create-react-app together with styled-components, airbnb's eslint, a Wrapper HOC, react-router and redux
              this app allows you to fetch reddit post and view them.
              avoided using component libraries
              <br />*N.B The Change Logo above is also just to demonstrate basic use of React Hooks API
            </p>
            <a className="app-link" href="/posts" target="_self" rel="noopener noreferrer">
              Fetch Reddit Posts
            </a>
          </HomeContent>
        </AppContainer>
      </div>
    );
  }
}

export default Home;
