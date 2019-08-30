import React from "react"
import styled from "styled-components"

import Anchor from "styles/anchor"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  @media (min-width: 400px) {
    margin-bottom: 80px;
  }
`

const Name = styled.span`
  text-transform: uppercase;
  font-size: 1.75em;
  font-weight: 600;
`

const Links = styled.div`
  display: flex;

  >:not(:last-child) {
    margin-right: 30px;
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Name>{siteTitle}</Name>
    <Links>
      <Anchor href="resume.pdf" newTab>resume</Anchor>
      <Anchor href="mailto:drew.r@husky.neu.edu">contact</Anchor>
    </Links>
  </Nav>
);

export default Header
