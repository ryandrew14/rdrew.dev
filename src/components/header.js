import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  margin: 42px 124px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.span`
  text-transform: uppercase;
  font-size: 1.75em;
  font-weight: 600;
`

const Links = styled.div`
  display: flex;

  >:not(:last-child) {
    margin-right: 25px;
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Name>{siteTitle}</Name>
    <Links>
      <span>about</span>
      <span>resume</span>
      <span>contact</span>
    </Links>
  </Nav>
);

export default Header
