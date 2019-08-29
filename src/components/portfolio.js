import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

import Anchor from "styles/anchor"

const Header = styled.div`
  font-size: 1.5rem;
  font-weight: 200;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  max-width: 135px;
`

const CarouselWrapper = styled.div`
  display: flex;
  overflow: scroll;
  margin: 30px 0;

  >:not(:last-child) {
    margin-right: 80px;
  }
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 650px;

  >:not(:last-child) {
    margin-right: 32px;
  }
`

const CardInfo = styled.div`
  font-weight: 200;
  font-size: 1.125rem;

  >:not(:last-child) {
    margin-bottom: 1em;
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
`

const CardImagePlaceholder = styled.div`
  background-color: #5063f4;
  min-width: 326px;
  height: 326px;
`

const StyledImg = styled(Img)`
  min-width: 326px;
  border-radius: 5px;
`

const WorkCard = ({ item }) => {
  return (
    <CardWrapper>
      {item.image && <StyledImg fixed={item.image.childImageSharp.fixed} />}
      {!item.image && <CardImagePlaceholder/>}
      <CardInfo>
        <CardType>
          {item.type}
        </CardType>
        <CardName>
          {item.name}
        </CardName>
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
        </Links>
        {item.extras && (
          <ul>
            {item.extras.map(extra => <Extra key={extra}>{extra}</Extra>)}
          </ul>
        )}
        <CardDescription>
          {item.description}
        </CardDescription>
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
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 326, height: 326) {
                  ...GatsbyImageSharpFixed
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
            description
            web
            extras
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
