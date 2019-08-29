import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

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

const Anchor = styled.a`
  color: #000;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #b71b03;
  }
`
const WorkCard = ({ item }) => {
  return (
    <CardWrapper>
      <CardImagePlaceholder />
      <CardInfo>
        <CardType>
          {item.type}
        </CardType>
        <CardName>
          {item.name}
        </CardName>
        <Links>
          <Anchor href={item.github}>
            <FontAwesomeIcon icon={faGithub}/>
          </Anchor>
          <Anchor href={item.web}>
            <FontAwesomeIcon icon={faWindowRestore}/>
          </Anchor>
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

const Work = () => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      allWorkYaml {
        edges {
          node {
            name
            type
            description
            github
            web
            extras
          }
        }
      }
    }
  `)

  const work = data.allWorkYaml.edges.map(e => e.node)

  return (
    <>
    <Header>
      work
    </Header>
    <Carousel data={work}>

    </Carousel>
    </>
  )
}

export default Work
