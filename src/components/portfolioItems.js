import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

import Anchor from "styles/anchor"
import { FadeInSlideUp } from "styles/animations"
import FontAwesomeIcon from 'styles/fontAwesomeIconNormalized'

const PortfolioItemsWrapper = styled.div`
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
  animation: ${props => FadeInSlideUp(props.percent, "20px", true)} .7s;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-basis: fill;
    max-width: none;
    min-width: 600px;
    >:not(:last-child) {
      margin-right: 32px;
    }
  }

  @media (min-width: 1340px) {
    flex-basis: min-content;
    ${props => props.showOne && `
      flex-basis: max-content;
      max-width: 75%;
    `}
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

const Card = ({ item, percent }) => {
  return (
    <CardWrapper percent={percent} showOne={!!item.subtitle}>
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

const PortfolioItems = ({ data }) => {
  return (
    <PortfolioItemsWrapper>
      {
        data.map((item, i) => <Card item={item} percent={i / data.length} key={item.name}/>)
      }
    </PortfolioItemsWrapper>
  )
}

export default PortfolioItems;