import React from "react"
import styled from "styled-components"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Anchor from "styles/anchor"
import FontAwesomeIcon from "styles/fontAwesomeIconNormalized"

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
  > :not(:last-child) {
    margin-right: 10px;
  }
  @media (min-width: 500px) {
    > :not(:last-child) {
      margin-right: 30px;
    }
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Name>{siteTitle}</Name>
    <Links>
      <Anchor href="resume.pdf" newTab>
        resume
      </Anchor>
      <Anchor href="mailto:drew.r@husky.neu.edu">mail</Anchor>
      <Anchor href="https://github.com/ryandrew14">
        <FontAwesomeIcon icon={faGithub} />
      </Anchor>
      <Anchor href="https://linkedin.com/in/ryandrew14">
        <FontAwesomeIcon icon={faLinkedin} />
      </Anchor>
    </Links>
  </Nav>
)

export default Header
