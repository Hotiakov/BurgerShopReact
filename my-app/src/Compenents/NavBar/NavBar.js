import React, {useContext} from "react";
import styled from 'styled-components';

import { Context } from "../Functions/context";
import logo from '../../images/logo.svg';
import sign from '../../images/sign.svg';

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
    justify-content: center;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ImgSign = styled.img`
    width: 32px;
    margin-bottom: 5px;
`;

const LogOut = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`
const LogOutSmall = styled.p`
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`

export const NavBar = () =>{
    const {auth: {authentication, logIn, logOut}} = useContext(Context);
    return(<NavBarStyled>
            <Logo>
                <ImgLogo src={logo} alt="logo" />
                <H1>MrDonald's</H1>
            </Logo>
            {!authentication ? <EnterBtnStyled onClick={logIn}>
                <ImgSign src={sign} alt="sign" />
                <LogOutSmall>Войти</LogOutSmall>
            </EnterBtnStyled> : 
                <EnterBtnStyled>
                    <LogOut>{authentication.displayName}</LogOut>
                    <LogOutSmall onClick={logOut}>Выйти</LogOutSmall>
                </EnterBtnStyled>
            }
        </NavBarStyled>
    )
};
