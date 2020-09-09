
import styled from 'styled-components';

export const LogInLogOutBtn = styled.button`
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