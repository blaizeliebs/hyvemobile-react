import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

import {
    Home,
    RedditPosts,
} from './routers'

import Header from './components/Header';

const GlobalStyle = createGlobalStyle`${GlobalStyles}`;

const Content = styled.div`
  min-height: 60vh;
`;

const Footer = styled.footer`
  padding: 10px 0;
  text-align: center;
  border-top: 1px solid #ccc;
  font-size: 0.6rem;
`

function App() {
  return (
    <Fragment>
      <div className="SiteContainer">
        <Header />
        <Content>
          <Switch>
            <Route exact path='/' component={ Wrapper(Home) } />
            <Route path='/posts' component={ Wrapper(RedditPosts) } />
            {/*<Route path="/news/:slug" component={ Wrapper(Post) } />*/}
            <Route component={ Wrapper(Home) } />
          </Switch>
        </Content>
        <Footer>
            Copyright © {new Date().getFullYear()}, Blaize Liebenberg
        </Footer>
      </div>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
