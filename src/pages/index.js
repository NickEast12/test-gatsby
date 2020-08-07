import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

import Image from "../components/lazy-images/image";
import LogoSVG from "../assets/logo.svg";

const HomePageWrapper = styled.div`
  padding: 4.5rem 0 2rem 0;
`;
const HeaderTitle = styled.section`
  height: 88vh;
  background: linear-gradient(to left, #06beb6, #48b1bf);
  div {
    width: 85%;
    margin: 0 auto;
    text-align: center;
    padding: 6rem 0;
    font-family: ${(props) => props.theme.titleFont};
    h1 {
      font-size: 2.5rem;
      color: #fff;
      font-weight: 100;
      text-align: left;
    }
  }
`;

const MidSection = styled.section`
  div {
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    span {
      svg {
        width: 35px;
      }
    }
    h2 {
      line-height: 1.25;
      padding: 1rem 0;
    }
  }
`;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageWrapper>
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
