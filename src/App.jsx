import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

import {
    Home,
} from './routers'

import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`${GlobalStyles}`;

function App() {
  return (
      <Fragment>
          <div className="SiteContainer">
              <Header />
              <div className="Content">
                  <Switch>
                      <Route exact path='/' component={ Wrapper(Home) } />
                      {/*<Route path='/our-approach' component={ Wrapper(Approach) } />*/}
                      {/*<Route path="/news/:slug" component={ Wrapper(Post) } />*/}
                      <Route component={ Wrapper(Home) } />
                  </Switch>
              </div>
              <Footer />
          </div>
          <GlobalStyle />
      </Fragment>
  );
}

export default App;
