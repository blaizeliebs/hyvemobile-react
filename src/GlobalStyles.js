import { css } from 'styled-components';

export const GlobalStyles = css`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-container { 
  margin-right:auto;
  margin-left:auto;
  padding-left:15px;
  padding-right:15px;
}
@media (min-width:768px) {
  .main-container { width:750px }
}
@media (min-width:992px) {
  .main-container { width:970px }
}
@media (min-width:1200px) {
  .main-container {  width:1200px }
}

.app-logo-react {
  height: 40vmin;
  pointer-events: none;
}

.app-logo-hyve {
  height: 20vmin;
  margin-top: -30px;
  pointer-events: none;
  margin-bottom: 50px;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.app-link {
  color: #fc471e;
  font-size: 1.125rem;
  font-weight: bold;
  border: 2px dashed #fc471e;
  text-decoration: none;
  padding: 5px 10px;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
