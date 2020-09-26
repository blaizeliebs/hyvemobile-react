import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Spinner = styled.div`
    width: 100px;
    height: 20%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
`;

const motion = keyframes`
  0% { transform: translateX(0) scale(1) };
  25% { transform: translateX(-50px) scale(0.3) };
  50% { transform: translateX(0) scale(1) };
  75% { transform: translateX(50px) scale(0.3) };
  100% { transform: translateX(0) scale(1) };
`;

const animation  = css`
    ${motion} 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`;

const Ball = styled.div`
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    display: inline-block;
    animation: ${animation};
`;

const Text = styled.p`
    color: #000;
    margin-top: 5px;
    font-family: sans-serif;
    letter-spacing: 3px;
    font-size: 10px;
`;

class Loading extends Component {
    render() {
        return (
            <Spinner>
                <Ball />
                <Text>LOADING</Text>
            </Spinner>
        );
    }
}

export default Loading;
