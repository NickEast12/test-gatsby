import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

import Image from "../components/lazy-images/image";
import LogoSVG from "../assets/logo.svg";
import Background from "../videos/background.mp4";

const HomePageWrapper = styled.div`
  padding: 4.5rem 0 2rem 0;
`;
const HeaderTitle = styled.section`
  border: solid red 1px;
  height: 85vh;
  div {
    width: 85%;
    margin: 0 auto;
    text-align: center;
    padding: 6rem 0;
    font-family: ${(props) => props.theme.titleFont};
    h1 {
      font-size: 2.5rem;
      color: #fff;
    }
  }
`;
const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -5;
  position: absolute;
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.2;
    content: "";
    z-index: 1;
  }
  video {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;
const MidSection = styled.section`
  div {
    width: 85%;
    margin: 0 auto;
    padding: 1.5rem 0;
    text-align: center;
    span {
      svg {
        width: 35px;
      }
    }
  }
`;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageWrapper>
      <VideoWrapper>
        <video src={Background} type="video/mp4" loop muted autoPlay></video>
      </VideoWrapper>
      <HeaderTitle>
        <div>
          <h1>Some great words to grab attention</h1>
        </div>
      </HeaderTitle>
      <MidSection>
        <div>
          <span>
            <LogoSVG />
          </span>
          <h2>South London Digital Agency</h2>
          <p>
            We’re a London web design and web development agency, providing
            fresh, creative digital services to businesses who want to grow
            online. Focusing on results, we use our technical skill and industry
            insight to help you meet your digital goals. Whether that’s lowering
            your bounce rate with interactive web design or bringing brand new
            traffic and income streams to your website. Talk to us about your
            project to get started.
          </p>
        </div>
      </MidSection>
    </HomePageWrapper>
  </Layout>
);

export default IndexPage;
