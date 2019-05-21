import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../../static/favicon.ico"

interface IProps {
  size: "sm" | "lg"
}

export default ({ size }: IProps) => {
  const StyledLink = styled(Link)`
    color: ${props => props.theme.color.black.regular};
    text-decoration: none;
    ${props =>
      size === "sm"
        ? props.theme.fontSize.regular
        : props.theme.fontSize.large};
  `

  return (
    <StyledLink to="/">
      <Wrap>
        <img
          src={Logo}
          alt={"Watchtower Logo"}
          height={size === "sm" ? "25px" : "32px"}
          style={{ marginRight: "10px" }}
        />
        Watchtower
      </Wrap>
    </StyledLink>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
`
