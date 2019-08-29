import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Header = styled.div`
  font-size: 1.5em;
  font-weight: 300;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  max-width: 200px;
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
  font-size: 1.3em;

  >:not(:last-child) {
    margin-bottom: 1em;
  }
`

const CardType = styled.h2`
  font-weight: 600;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const CardName = styled.h1`
  font-size: 1.5rem;
`

const CardDescription = styled.div`
  line-height: 1.2;
`

const CardImagePlaceholder = styled.div`
  background-color: #5063f4;
  min-width: 326px;
  height: 326px;
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
        <div>

        </div>
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
