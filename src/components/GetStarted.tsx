import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "./global"

export default ({ inverse }: { inverse?: boolean }) => (
  <Container
    style={{
      alignItems: `center`,
      display: `flex`,
      justifyContent: `center`,
      marginBottom: inverse ? `80px` : `0`,
      marginTop: inverse ? `0` : `80px`
    }}
  >
    <Button to="docs/get-started">Get Started</Button>
  </Container>
)

const Button = styled(Link)`
  background: ${props => props.theme.color.secondary};
  border: 1px solid ${props => props.theme.color.black.lighter};
  border-radius: 5px;
  color: ${props => props.theme.color.white.regular};
  text-align: center;
  ${props => props.theme.fontSize.small};
  padding: 20px 40px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${props => props.theme.color.white.regular};
    color: ${props => props.theme.color.secondary};
  }
`
