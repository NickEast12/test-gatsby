import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

import Image from "../components/lazy-images/image";
import LogoSVG from "../assets/logo.svg";
import Design from "../assets/design.svg";
import Develop from "../assets/develop.svg";
import Promote from "../assets/promote.svg";
import Support from "../assets/support.svg";

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
    p {
      font-weight: 300;
      font-size: 1.1rem;
      padding: 0.5rem 0;
      a {
        background-image: linear-gradient(
          to right,
          rgba(6, 190, 182, 0.5),
          rgba(72, 177, 191, 0.5)
        );
        background-position: 0 90%;
        background-repeat: repeat-x;
        background-size: 30% 30%;
        border-bottom: 0;
      }
    }
  }
`;

const IconSection = styled.section`
  .icon__wrapper {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    &__boxes {
      padding: 1rem 0;
      h2 {
        font-size: 1rem;
      }
      svg {
        width: 50px;
      }
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
            We’re a London <a>web design </a> and web development agency,
            providing fresh ......
          </p>
        </div>
      </MidSection>
      <IconSection>
        <div className="icon__wrapper">
          <div className="icon__wrapper__boxes">
            <Design />
            <h2>We Design</h2>
          </div>
          <div className="icon__wrapper__boxes">
            <Develop />
            <h2>We Develop</h2>
          </div>
          <div className="icon__wrapper__boxes">
            <Promote />
            <h2>We Promote</h2>
          </div>
          <div className="icon__wrapper__boxes">
            <Support />
            <h2>We Support</h2>
          </div>
        </div>
      </IconSection>
    </HomePageWrapper>
  </Layout>
);

export default IndexPage;
