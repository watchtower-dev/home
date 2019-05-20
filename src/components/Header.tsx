import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { Container } from "./global"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/icon-512x512.png/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Wrap>
      <Container>
        <Grid>
          <Title>Trust your APIs</Title>
          <Tagline>
            Spot problems before your customers do with Watchtower.
          </Tagline>
          <Art>
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={"Watchtower Logo"}
            />
          </Art>
        </Grid>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;
`
const Art = styled.div`
  justify-self: center;
`
const Grid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  align-items: center;
  text-align: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 40px;

    > ${Art} {
      order: 2;
    }
  }
`
const Title = styled.h1`
  ${props => props.theme.fontSize.xlarge};
  justify-self: center;
  margin: 0;
`
const Tagline = styled.h2`
  ${props => props.theme.fontSize.larger};
  justify-self: center;
  margin: 0;
`
