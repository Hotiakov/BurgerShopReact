import React from "react";
import styled from 'styled-components';

import logo from '../../../images/logo.svg';
import sign from '../../../images/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: #fff;
`;

const EnterBtnStyled = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: inherit;
    border: none;
    color: #fff;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ImgSign = styled.img`
    width: 32px;
    margin-bottom: 5px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logo} alt="logo" />
            <H1>MrDonald's</H1>
        </Logo>
        <EnterBtnStyled>
            <ImgSign src={sign} alt="sign" />
            Войти
        </EnterBtnStyled>
    </NavBarStyled>
);
