import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../../static/favicon.ico"

interface IProps {
  size: "sm" | "lg"
}

export default ({ size }: IProps) => {
  const Title = styled.div`
    ${props =>
      size === "sm"
        ? props.theme.fontSize.regular
        : props.theme.fontSize.large};
  `

  return (
    <Wrap>
      <img
        src={Logo}
        alt={"Watchtower Logo"}
        height={size === "sm" ? "25px" : "32px"}
        style={{ marginRight: "10px" }}
      />
      <Title>
        <Link to="/">Watchtower</Link>
      </Title>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${props => props.theme.color.black.regular};
    text-decoration: none;
  }
`
