import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

import styled from "styled-components";

import LogoSVG from "../../assets/logo.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";

const TopHeader = styled.header`
  color: black;
  position: fixed;
  z-index: 10000;
  width: 100%;
  background: ${(props) => props.theme.bkg};
  box-shadow: 0 1px 3px rgba(0, 18, 44, 0.15);
`;
const MaxWidthHeader = styled.div`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.div`
  @media only screen and (min-width: 320px) {
    h1 {
      line-height: 1;
      font-size: 1.85rem;
    }
    p {
      line-height: 1;
      text-align: right;
      font-weight: 100;
    }
  }
`;

const TopLogo = styled.span`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  svg {
    width: 22.5px;
    animation: rotate 2s infinite forwards;
  }
`;
const DesktopNav = styled.ul`
  @media only screen and (min-width: 320px) {
    display: none;
  }
`;
const DesktopBtn = styled.div`
  @media only screen and (min-width: 320px) {
    display: none;
  }
`;
const StyledBurger = styled.div`
  @media only screen and (min-width: 320px) {
    width: 15%;
    height: 2rem;
    text-align: right;
    margin-top: -0.65rem;
    display: flex;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    position: relative;
    z-index: 100000;
    position: relative;

    div {
      width: 2rem;
      height: 2px;
      background-color: #fff;
      transform-origin: 7.5px;
      transition: all 0.35s ease;
      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        background: ${({ open }) => (open ? "#000" : "#000")};
      }

      &:nth-child(2) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        background: ${({ open }) => (open ? "#000" : "#000")};
      }
    }
  }
`;
const StyledBorder = styled.div`
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, #06beb6, #48b1bf);
`;

const MobileNav = styled.div`
  @keyframes menuItemIn {
    0% {
      transform: translateY(-20px);
      display: block;
      opacity: 0;
    }
    1% {
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes menuItemOut {
    100% {
      position: static;
      visibility: visible;
      transform: translateY(0);
      opacity: 1;
    }
    1% {
      position: static;
      visibility: visible;
    }
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
  @keyframes otherAnimationIn {
    0% {
      display: none;
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes otherMenuAni {
    0% {
      opacity: 0;
      display: none;
      transform: translateY(20px);
    }
    10% {
      display: block;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media only screen and (min-width: 320px) {
    width: 100%;
    position: relative;
    animation: ${({ open }) => (open ? "animationIn" : "animationOut")} 0.5s
      linear 0s alternate 1 forwards running;
    height: ${({ open }) => (open ? "100vh" : "0")};
    max-height: ${({ open }) => (open ? "100vh" : "0")};
    position: absolute;
    transition: all 0.75s ease;
    color: black;
    background: white;
    top: calc(0% + 5.2rem);
    left: calc(0%);
    content: "";
    z-index: -2;
    .inner__menu {
      width: 88%;
      margin: 1rem auto 0 auto;
      h6 {
        opacity: 0;
        color: rgba(0, 0, 0, 0.35);
        font-size: 1.5rem;
        font-weight: 200;
        margin-bottom: 1.5rem;
        font-family: ${(props) => props.theme.Titlefont};

        transition: all 0.1s ease;
        animation: ${({ open }) => (open ? "otherAnimationIn" : "")} 0.6s linear
          0s alternate 1 forwards running;
      }
      ul {
        list-style: none;
        width: 100%;

        margin: 0 auto;
        text-align: left;
        li {
          line-height: 0.5;
          opacity: 0;
          margin-bottom: 1.25rem;
          p {
            font-family: ${(props) => props.theme.Titlefont};
            font-weight: 100;
          }
          animation: ${({ open }) => (open ? "menuItemOut" : "")} 0.6s linear 2s
            1 forwards;
          position: static;
          visibility: hidden;
          &:nth-child(1) {
            animation-delay: 0.1s;
          }
          &:nth-child(2) {
            animation-delay: 0.25s;
          }
          &:nth-child(3) {
            animation-delay: 0.45s;
          }
          &:nth-child(4) {
            animation-delay: 0.65s;
          }
          &:nth-child(5) {
            animation-delay: 0.85s;
          }
          p {
            line-height: 1.2;
            font-size: 1.75rem;
            font-weight: 100;
            margin-top: 0.5rem;
            cursor: pointer;
            &:hover {
              color: ${(props) => props.theme.mainColour};
            }
          }
        }
      }
    }
    .inner__menu__button {
      width: 100%;
      margin: 0 auto;
      button {
        width: 100%;
        position: relative;
        padding: 0.95rem 0;
        border: solid 1.5px ${(props) => props.theme.mainColour};
        opacity: 0;
        letter-spacing: 1px;
        border-radius: 2.5px;
        margin-top: 1.25rem;
        color: white;
        text-transform: uppercase;
        background: linear-gradient(to left, #06beb6, #48b1bf);
        animation: ${({ open }) => (open ? "otherAnimationIn" : "")} 0.75s
          linear 0s alternate 1 forwards running;
        transition: all 0.75s ease;
        animation-delay: 1s;
        /* border-radius: 4px; */
        box-shadow: 1px 2px 5px 0 rgba(255, 255, 255, 0.1),
          0 1px 2px 0 rgba(255, 255, 255, 0.06);
      }
    }
    .menu__social {
      display: none;
    }
  }
  @media only screen and (min-width: 375px) {
    .menu__social {
      display: block;
      position: absolute;
      bottom: 0;
      background: whitesmoke;
      animation: ${({ open }) => (open ? "otherMenuAni" : "")} 0.75s linear 0s
        alternate 1 forwards running;
      transition: all 0.75s ease;
      animation-delay: 1.5s;
      width: 100%;
      height: 14rem;
      opacity: 0;
      &__inner {
        width: 90%;
        margin: 0 auto;
        margin: 1.5rem auto 0 auto;
        text-align: center;
        padding: 0.75rem 0;
        span {
          font-size: 0.8em;
        }
        &__svg {
          display: flex;
          justify-content: space-between;
          width: 60%;
          margin: 1.5rem auto;
          svg {
            width: 15px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .menu__social {
      height: 15rem;
    }
  }
`;

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <TopHeader>
      <MobileNav open={open}>
        <div className="inner__menu">
          <h6 open={open}>Where to?..</h6>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
          <div className="inner__menu__button" open={open}>
            <button>Start your project now</button>
          </div>
        </div>
        <div className="menu__social">
          <div className="menu__social__inner">
            <div>
              <span>hello@easterndigital.co.uk</span>
            </div>
            <div className="menu__social__inner__svg">
              <Twitter />
              <Linkedin />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </MobileNav>
      <StyledBorder />
      <MaxWidthHeader>
        <Logo>
          <h1>
            E
            <TopLogo>
              <LogoSVG />
            </TopLogo>
            stern
          </h1>
          <p>Digital</p>
        </Logo>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
        </StyledBurger>
        <DesktopNav>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </DesktopNav>
        <DesktopBtn>
          <button>Start your project now</button>
        </DesktopBtn>
      </MaxWidthHeader>
    </TopHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
