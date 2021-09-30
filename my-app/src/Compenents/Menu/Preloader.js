import React from "react";
import styled, { keyframes } from 'styled-components';


const PreloaderRotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;
const PreloaderBounce = keyframes`
    0%, 100% {
        transform: scale(0); 
    }
    50% {
        transform: scale(1);
    }
`;

const PreloaderStyled = styled.div`
    position: fixed;
    left: 380px;
    top: 80px;
    right: 0;
    bottom: 0;
    background: #e0e0e062;
    z-index: 1001;
`;

const PreloaderRow = styled.div`
      position: relative;
      top: 50%;
      left: 50%;
      width: 70px;
      height: 70px;
      margin-top: -35px;
      margin-left: -35px;
      text-align: center;
      animation: ${PreloaderRotate} 2s infinite linear;
`;

const PreloaderItem = styled.div`
    position: absolute;
    display: inline-block;
    top: 0;
    background-color: #299B01;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    animation: ${PreloaderBounce} 2s infinite ease-in-out;
    &:last-child {
      top: auto;
      bottom: 0;
      animation-delay: -1s; 
    }
`;

export const Preloader = () => (
    <PreloaderStyled>
        <PreloaderRow>
            <PreloaderItem></PreloaderItem>
            <PreloaderItem></PreloaderItem>
        </PreloaderRow>
    </PreloaderStyled>
);