import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

import {
  Home,
  RedditPosts,
  Post,
} from './routers'

import Header from './components/Header';

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
            <Route path="/post/:id" component={ Wrapper(Post) } />
            <Route component={ Wrapper(Home) } />
          </Switch>
        </Content>
        <Footer>
            Copyright © {new Date().getFullYear()}, Blaize Liebenberg
        </Footer>
      </div>
      <GlobalStyles />
    </Fragment>
  );
}

export default App;
