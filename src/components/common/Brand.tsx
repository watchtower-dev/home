import React from "react"
import styled from "styled-components"
import Logo from "../../../static/favicon.ico"

export default ({ size }: { size: "sm" | "lg" }) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
  `

  const Title = styled.div`
    ${props =>
      size === "sm" ? props.theme.fontSize.small : props.theme.fontSize.large};
  `

  return (
    <Container>
      <img
        src={Logo}
        alt={"Watchtower Logo"}
        height={size === "sm" ? "20px" : "30px"}
        style={{ marginRight: "10px" }}
      />
      <Title>Watchtower</Title>
    </Container>
  )
}
