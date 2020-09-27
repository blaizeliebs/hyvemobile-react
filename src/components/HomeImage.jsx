import React, { useState } from 'react';
import styled from 'styled-components';
import HyveLogo from '../images/Logo.png';
import ReactLogo from '../images/logo.svg';

const ChangeLogo = styled.div`
  text-decoration: underline;
  cursor: pointer;
  color: #999;
`;

const HomeImage = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <>
      {
        isToggled ?
          <img src={HyveLogo} className="app-logo app-logo-hyve" alt="Hyve Mobile Logo" /> :
          <img src={ReactLogo} className="app-logo app-logo-react" alt="Reactjs Logo" />
      }
      <ChangeLogo onClick={toggleTrueFalse}>
        Change Logo *
      </ChangeLogo>
    </>
  );
}

export default HomeImage;
