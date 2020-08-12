import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./functional/Header";
import Footer from "./functional/Footer";

const theme = {
  bkg: "#fff",
  reset: "#000",
  altBkg: "#1C1C1C",
  altBksg: "#142338",
  mainColour: "#19BABA",
  secondaryColour: "#6a6a6a",
  titleFont: "Karla",
  pFont: "Source Sans Pro",
};

const GlobalStyle = createGlobalStyle`

    *, *:before, *:after {
      box-sizing: inherit;
      margin: 0px;
      padding: 0px;
      -webkit-font-smoothing: antialiased;

    }
    p {
      font-family: ${(props) => props.theme.pFont}
    }
    a:-webkit-any-link {
      text-decoration: none;
      color: inherit;
    }
    body {
      margin: 0;
      padding: 0;
      font-size: 1.25rem;
      font-family: "Karla";
      line-height: 1.5;
      background: ${theme.bkg};
      color: ${theme.reset}
    }
    margin-block-start: 1em;
    margin-block-end: 1em;
    @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/ProximaNova-Regular.otf');
    font-weight: normal;
    font-style: normal
  };
    @font-face {
    font-family: 'Cabin';
    src: url('/fonts/Cabin-Bold.ttf');
    font-weight: bold;
    font-style: normal
  };
    @font-face {
    font-family: 'Rubik-Regular';
    src: url('/fonts/Rubik-Regular.ttf');
    font-weight: bold;
    font-style: normal
  };
    @font-face {
    font-family: 'Rubik-Light';
    src: url('/fonts/Rubik-Light.ttf');
    font-weight: bold;
    font-style: normal
  };
  a, a:visted {
    color: inherit;
    text-decoration: none;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
