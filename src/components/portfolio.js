import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import PortfolioItems from "./portfolioItems"

const Header = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  padding-bottom: 8px;
  max-width: 300px;
  display: flex;
  align-items: center;

  &:after {
    display: block;
    content: "";
    border-top: 1px solid black;
    flex-grow: 1;
    margin-top: 0.2em;
    margin-left: 15px;
  }
`

const AboutTagline = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.25;
  margin: 40px 0 80px;
  max-width: 750px;

  > bold {
    font-weight: 500;
  }
`

const AboutBody = styled.div`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 1.25;
  max-width: 750px;
  margin: 40px 0;

  > br {
    padding: 10px inherit;
  }

  > div:not(:last-child) {
    margin-bottom: 1em;
  }
`

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allWorkYaml {
        edges {
          node {
            name
            type
            description
            github
            web
            extras
            image {
              childImageSharp {
                fluid(maxWidth: 326, maxHeight: 326) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allExperienceYaml {
        edges {
          node {
            name
            type
            subtitle
            description
            web
            linkedin
            extras
            image {
              childImageSharp {
                fluid(maxWidth: 326, maxHeight: 326) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      aboutYaml {
        tagline
        bodyParagraphs
      }
    }
  `)

  const work = data.allWorkYaml.edges.map(e => e.node)
  const experience = data.allExperienceYaml.edges.map(e => e.node)
  const about = data.aboutYaml

  return (
    <>
      {about.tagline && (
        <AboutTagline dangerouslySetInnerHTML={{ __html: about.tagline }} />
      )}
      <Header>work</Header>
      <PortfolioItems data={work} />
      <Header>experience</Header>
      <PortfolioItems data={experience} />
      <Header>about</Header>
      {about.bodyParagraphs && (
        <AboutBody>
          {about.bodyParagraphs.map(paragraph => {
            return <div key={paragraph.slice(0, 10)}>{paragraph}</div>
          })}
        </AboutBody>
      )}
    </>
  )
}

export default Portfolio
