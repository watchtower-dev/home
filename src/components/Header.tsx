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
          <H1>Trust your APIs</H1>
          <H2>Spot problems before your customers do with Watchtower.</H2>
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
const H1 = styled.h1`
  justify-self: center;
`
const H2 = styled.h2`
  justify-self: center;
`
