/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import GlobalStyle, { CSSReset } from "./globalStyle"

const Footer = styled.footer`
  text-align: center;
  color: #adadad;
  font-size: 14px;
`

const Margin = styled.div`
  @media (min-width: 910px) {
    margin: 42px 124px;
  }
  @media (min-width: 400px) {
    margin: 42px 80px;
  }
  margin: 42px 40px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Margin>
      <CSSReset />
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()} | Designed and Built by Ryan Drew
      </Footer>
    </Margin>
  )
}

export default Layout
