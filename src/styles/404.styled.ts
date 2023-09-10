import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";



const smallMove = keyframes`
  0% { top: 10px; left: 45%; opacity: 1; }
    25% { top: 300px; left: 40%; opacity:0.7; }
    50% { top: 240px; left: 55%; opacity:0.4; }
    75% { top: 100px; left: 40%;  opacity:0.6; }
    100% { top: 10px; left: 45%; opacity: 1; }
`
const medMove = keyframes`
  0% { top: 0px; left: 20%; opacity: 1; }
    25% { top: 300px; left: 80%; opacity:0.7; }
    50% { top: 240px; left: 55%; opacity:0.4; }
    75% { top: 100px; left: 40%;  opacity:0.6; }
    100% { top: 0px; left: 20%; opacity: 1; }
`
const bigMove = keyframes`
    0% { top: 0px; right: 4%; opacity: 0.5; }
    25% { top: 100px; right: 40%; opacity:0.4; }
    50% { top: 240px; right: 45%; opacity:0.8; }
    75% { top: 100px; right: 35%;  opacity:0.6; }
    100% { top: 0px; right: 4%; opacity: 0.5; }
`

export const NotFoundSection = styled.section`
    width: calc(100% + 16px);
    height:100vh;
    background:#48A9E6;
    font-family: 'Raleway', sans-serif;
    font-weight:300;
    margin: -8px;
    padding:0;
`


export const NotFoundLink = styled(Link)`
     display: flex;
     position:relative;
     justify-content: center;
     width: 100%;
     font-size:40px;
     padding-top:40px;
     margin-bottom:-40px;
     color:#fff;
     text-decoration: none;
`

export const NotFoundCirclesContainer = styled.div`
     background:#fff;
    text-align: center;
    position: relative;
    margin-top:-60px;
    box-shadow:inset -1px -4px 4px rgba(0,0,0,0.2);
    
    &:after {
        content:'';
        display:inline-block;
        width:100%;
        height:100px;
        background:#fff;
        position:absolute;
        top:-50px;
        left:0;
        transform:skewY(-4deg);
    }
`

export const NotFoundCirclesText= styled.p`
    font-size: 240px;
    color: #fff;
    padding-top: 60px;
    position: relative;
    z-index: 9;
    line-height: 100%;
`

export const NotFoundCirclesSmallText = styled.small`
    font-size: 40px;
    line-height: 100%;
    vertical-align: top;
`

export const NotFoundCircleSmall = styled.span`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: #48A9E6;
    position: absolute;
    z-index: 1;
    top: 80px;
    left: 50%;
    animation: ${smallMove} 7s  infinite cubic-bezier(1,.22,.71,.98);
    animation-delay: 1.2s;
`

export const NotFoundCircleMedium = styled.span`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #48A9E6;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 10%;
    animation: ${medMove} 7s infinite cubic-bezier(.32,.04,.15,.75);
    animation-delay: 0.4s;
`

export const NotFoundCircleBig = styled.span`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #48A9E6;
    position: absolute;
    z-index: 1;
    top: 200px;
    right: 0;
    animation: ${bigMove} 8s infinite;
    animation-delay: 3s;
`

