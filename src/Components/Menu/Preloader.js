import React from 'react';
import styled from 'styled-components';


const PreloaderDiv = styled.div`
  width: 4em;
  height: 4em;
  margin:  50px auto;
  background-color: #337ab7;
  animation: sk-rotating-plane 1.2s infinite ease-in-out;

  @keyframes sk-rotating-plane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
`;

const Loading = styled.div`
    text-align: center;
    font-family: 'Balsamiq Sans', cursive;
    font-size: 32px;
    letter-spacing: 2.5px;
`;


export const Preloader = () => {
    return (
        <>
        <PreloaderDiv />
        <Loading>Loading</Loading>
        </>
    )
} 