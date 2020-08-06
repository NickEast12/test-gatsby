import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"

import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Nick is the best" />

    <div>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
