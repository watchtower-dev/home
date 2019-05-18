import React from "react"
import Svg from "react-inlinesvg"
import styled from "styled-components"
import Confirmation from "../../img/confirmation.svg"
import Downtime from "../../img/downtime.svg"
import Global from "../../img/global.svg"
import { Container, Section } from "../global"

export default () => (
  <Section id="about">
    <Container>
      <Grid>
        <div>
          <h2>Reduce downtime</h2>
          <p>
            Downtime is expensive. Catch bugs in test environments and reduce
            debugging times if they reach production.
          </p>
        </div>
        <Art>
          <Svg src={Downtime} />
        </Art>
      </Grid>
      <Grid inverse>
        <Art>
          <Svg src={Confirmation} />
        </Art>
        <div>
          <h2>Prevent regressions</h2>
          <p>
            Trust your APIs by verifying responses are returning expected data.
          </p>
        </div>
      </Grid>
      <Grid>
        <div>
          <h2>Monitor globally</h2>
          <p>
            Test your app worldwide on any schedule to catch problems before
            your customers, wherever they may be.
          </p>
        </div>
        <Art>
          <Svg src={Global} />
        </Art>
      </Grid>
    </Container>
  </Section>
)

const Grid = styled.div<{ inverse?: boolean }>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`
