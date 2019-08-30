import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

import Anchor from "styles/anchor"

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
    margin-top: .2em;
    margin-left: 15px;
  }
`

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 30px auto 50px;
  justify-content: space-between;
  @media (min-width: 430px) {
    flex-direction: row;
    overflow: wrap;
    >:nth-child(odd) {
      margin-right: 20px;
    }
  }

`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  min-width: 250px;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-basis: calc(50% - 40px);
    min-width: 600px;
    >:not(:last-child) {
      margin-right: 32px;
    }
  }
`

const CardInfo = styled.div`
  font-weight: 200;
  font-size: 1.125rem;

  >:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const CardType = styled.h2`
  font-weight: 600;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const CardName = styled.h1`
  font-size: 1.5rem;
`

const CardSubtitle = styled.h3`
  font-size: 1rem;
  font-style: italic;
`

const Links = styled.div`
  >:not(:last-child) {
    margin-right: 10px;
  }
`

const Extra = styled.li`
  font-size: .86rem;
`

const CardDescription = styled.div`
  line-height: 1.2;
  padding-bottom: 30px;
  @media (min-width: 700px) {
    padding-bottom: 0;
  }
`

const CardImagePlaceholder = styled.div`
  background-color: #5063f4;
  min-width: 326px;
  height: 326px;
`

const StyledImg = styled(Img)`
  max-width: 100%;
  min-width: 0;
  max-height: 326px;
  @media (min-width: 430px) {
    min-width: 326px;
  }
  border-radius: 5px;
`

const WorkCard = ({ item }) => {
  return (
    <CardWrapper>
      {item.image && <StyledImg fluid={item.image.childImageSharp.fluid} />}
      {!item.image && <CardImagePlaceholder/>}
      <CardInfo>
        <CardType>{item.type}</CardType>
        <CardName>{item.name}</CardName>
        {item.subtitle && <CardSubtitle>{item.subtitle}</CardSubtitle>}
        <Links>
          {item.github && (
            <Anchor href={item.github} newTab>
              <FontAwesomeIcon icon={faGithub}/>
            </Anchor>
          )}
          {item.web && (
            <Anchor href={item.web} newTab>
              <FontAwesomeIcon icon={faWindowRestore}/>
            </Anchor>
          )}
          {item.linkedin && (
            <Anchor href={item.linkedin} newTab>
              <FontAwesomeIcon icon={faLinkedin}/>
            </Anchor>
          )}
        </Links>
        {item.extras && (
          <ul>
            {item.extras.map(extra => <Extra key={extra}>{extra}</Extra>)}
          </ul>
        )}
        <CardDescription>{item.description}</CardDescription>
      </CardInfo>
    </CardWrapper>
  )
}

const Carousel = ({ data }) => {
  return (
    <CarouselWrapper>
      {
        data.map(item => <WorkCard item={item} key={item.name}/>)
      }
    </CarouselWrapper>
  )
}

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
    }
  `)

  const work = data.allWorkYaml.edges.map(e => e.node)
  const experience = data.allExperienceYaml.edges.map(e => e.node)

  return (
    <>
      <Header>
        work
      </Header>
      <Carousel data={work} />
      <Header>
        experience
      </Header>
      <Carousel data={experience} />
    </>
  )
}

export default Portfolio
