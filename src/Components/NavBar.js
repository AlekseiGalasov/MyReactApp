import React from 'react';
import styled from 'styled-components'
import logoImg from "../images/logo.svg";

const NavBarStyled = styled.header`
    display: fixed;
    top: 0;
    z-index: 100;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: rgb(17, 157, 164);
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`
const H1 = styled.h1`
    margin-left: 20px;
    font-size: 30px;
    letter-spacing: 0.5px;
`

const ImgLogo = styled.img`
    width: 100%;
    height: auto;
`

const Login = styled.button`
    margin-right: 50px;
    padding: 15px 40px;
    background-color: rgb(48,102,190);
    border: none;
    color: black;
    font-weight: 500;
    font-family: 'Roboto',sans-serif;
    cursor: pointer;
    letter-spacing: 2.5px;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    :hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(109, 157, 197, 0.4);
        color: #fff;
        transform: translateY(-4px);
    }
    :focus {
        outline: none;
    }
`

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
        <ImgLogo src={logoImg} alt='Logo'></ImgLogo>
        <H1>MrDonald's</H1>
        </Logo>
        <Login>Войти</Login>
    </NavBarStyled>
)