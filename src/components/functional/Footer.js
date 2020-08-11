import React from "react";
import styled from "styled-components";

import Email from "../../assets/email.svg";
import Phone from "../../assets/phone.svg";
import Pin from "../../assets/pin.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import LogoSVG from "../../assets/logo.svg";

const MainFooter = styled.footer`
  width: 100%;
  height: 100%;
  padding-top: 2.5rem;
  background: #fafafa;
  color: black;
  box-shadow: 2px -0.5px 3px rgba(0, 18, 44, 0.15);
`;
const TopFooter = styled.div``;
const SocialLinks = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  div {
    margin-top: 0.75rem;
    text-align: center;
    align-content: center;
    align-items: center;
    margin: 1rem 0;
    svg {
      width: 22.5px;
    }

    p {
      font-weight: 200;
      font-size: 1.05rem;
      margin-left: 0.5rem;
      font-family: ${(props) => props.theme.titleFont};
    }
  }
`;
const QuickLink = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 1rem;
  text-align: center;
  ul {
    list-style: none;
    margin-top: 0.75rem;
    li {
      font-size: 1.05rem;
      font-weight: 200;
      line-height: 1.75;
      cursor: pointer;
    }
  }
`;
const FooterLogo = styled.div`
  line-height: 1;
  width: 48%;
  margin: 2.5rem auto;
  h1 {
  }
  p {
    text-align: right;
    font-weight: 100;
  }
`;
const LegalFooter = styled.div`
  background: black;
  padding: 1.5rem 0;
  div {
    width: 90%;
    margin: 0 auto;
    p {
      font-size: 0.85rem;
      text-align: center;
      color: rgba(155, 155, 155, 0.75);
    }
    div {
      display: flex;
      width: 70%;
      padding: 1rem 0;
      justify-content: space-around;
      svg {
        width: 18px;
        fill: white;
      }
    }
  }
`;

const FooterSVG = styled.span`
  display: inline-block;
  svg {
    width: 30px;
  }
`;
const Footer = (props) => (
  <MainFooter>
    <TopFooter>
      <SocialLinks>
        <h3>Get in touch</h3>
        <div>
          <Phone />
          <p> 075 2821 6309</p>
        </div>
        <div>
          <Email />
          <p> hello@easterndigital.com</p>
        </div>
        <div>
          <Pin />
          <p> A nice address somewhere</p>
        </div>
      </SocialLinks>
      <QuickLink>
        <h3>Quick Links</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Blog 1</li>
          <li>Blog 2</li>
          <li>Blog 3</li>
          <li>Blog 4</li>
          <li>Blog 5</li>
        </ul>
      </QuickLink>
      <FooterLogo>
        <h1>
          E
          <FooterSVG>
            <LogoSVG />
          </FooterSVG>
          stern
        </h1>
        <p>Digital</p>
      </FooterLogo>
    </TopFooter>
    <LegalFooter>
      <div>
        <p>
          &copy;{new Date().getFullYear()} Eastern Digital Registered in England
        </p>
        <span>
          <p>Terms & Conditions | Privacy Policy | Cookie Policy</p>
        </span>
        <div>
          <Twitter />
          <Linkedin />
          <Facebook />
          <Instagram />
        </div>
      </div>
      <div></div>
    </LegalFooter>
  </MainFooter>
);

export default Footer;
