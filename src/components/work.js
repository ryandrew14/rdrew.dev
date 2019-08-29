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
    margin-right: 30px;
  }
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 650px;
`

const CardInfo = styled.div`
  font-weight: 300;
  font-size: 1.3em;
`

const CardTitle = styled.h1`

`

const CardImagePlaceholder = styled.div`
  background-color: #fdfdfd;
  min-width: 326px;
  height: 326px;
`

const WorkCard = ({ item }) => {
  return (
    <CardWrapper>
      <CardImagePlaceholder />
      <CardInfo>
        <CardTitle>
          {item.title}
        </CardTitle>
        {item.description}
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
