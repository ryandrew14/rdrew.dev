import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/work"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Work />
  </Layout>
)

export default IndexPage
