import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

import VSCover from "../components/lazy-images/vs-cover";
import Portfolio from "../components/lazy-images/portfolio";
import LogoSVG from "../assets/logo.svg";
import Design from "../assets/design.svg";
import Develop from "../assets/develop.svg";
import Promote from "../assets/promote.svg";
import Support from "../assets/support.svg";

import Placeholder from "../images/vs-cover.jpg";

const HomePageWrapper = styled.div`
  padding: 4.5rem 0 2rem 0;
`;
const HeaderTitle = styled.section`
  height: 88vh;
  background: white;
  div {
    width: 85%;
    margin: 0 auto;
    text-align: center;
    padding: 6rem 0;
    font-family: ${(props) => props.theme.titleFont};
    h1 {
      font-size: 2.5rem;
      color: #000;
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

const ProjectSection = styled.section`
  padding: 3rem 0;
  .projects {
    display: grid;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    &__more {
      background: #f0f3f7;
      padding: 4rem 0;
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
        color: inherit;
      }
    }
    &__boxes {
      padding: 5rem 0;
      width: 100%;
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      color: white;
      z-index: 5;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        z-index: -2;
        content: "";
        opacity: 0.35;
      }
      h2 {
        font-weight: 600;
      }
      &__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -5;
        div {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const BlogSection = styled.section`
  margin: 0 auto;
  padding: 0.5rem 0;
  text-align: center;
  h3 {
    padding-bottom: 3rem;
  }
  .blog__home {
    width: 80%;
    margin: 0 auto;
    &__box {
      width: 100%;
      margin-bottom: 1.5rem;
      &__img {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 9rem;
        }
      }
      h4 {
        text-align: left;
        font-weight: 200;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .blog__btn {
    width: 60%;
    margin: 2rem auto 1.5rem auto;
    button {
      width: 100%;
      background: ${(props) => props.theme.mainColour};
      border: solid 1px ${(props) => props.theme.mainColour};
      border-radius: 2.5px;
      padding: 0.65rem 0;
      color: #fff;
      font-weight: 600;
      font-family: "Karla";
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
      <ProjectSection>
        <div className="projects">
          <div className="projects__boxes">
            <div className="projects__boxes__img">
              <VSCover />
            </div>
            <h2>Vine Street</h2>
            <p>Website &amp; Logo Redesign</p>
          </div>
          <div className="projects__boxes">
            <div className="projects__boxes__img">
              <Portfolio />
            </div>
            <h2>Nick East Web Development</h2>
            <p>Website Redesign</p>
          </div>
          <div className="projects__more">
            <Link to="/">See more work!</Link>
          </div>
        </div>
      </ProjectSection>
      <BlogSection>
        <h3>Latest from our blog</h3>
        <div className="blog__home">
          <div className="blog__home__box">
            <div className="blog__home__box__img">
              <img src={Placeholder} alt="Placeholder" />
            </div>
            <h4>A blog title that is relavant to today society.</h4>
          </div>
          <div className="blog__home__box">
            <div className="blog__home__box__img">
              <img src={Placeholder} alt="Placeholder" />
            </div>
            <h4>A blog title that is relavant to today society.</h4>
          </div>
          <div className="blog__home__box">
            <div className="blog__home__box__img">
              <img src={Placeholder} alt="Placeholder" />
            </div>
            <h4>A blog title that is relavant to today society.</h4>
          </div>
        </div>
        <div className="blog__btn">
          <button>Visit Our Blog</button>
        </div>
      </BlogSection>
    </HomePageWrapper>
  </Layout>
);

export default IndexPage;
