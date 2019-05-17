import React from "react"
import styled from "styled-components"
// @ts-ignore
import Logo from "../../../static/favicon.ico"
import { StyledContainer } from "./Navbar/style"

export default ({ size }: { size: "sm" | "lg" }) => {
  const BrandWrap = styled(StyledContainer)`
    justify-content: flex-start;
  `

  const Brand = styled.div`
    font-family: ${props => props.theme.font.primary};
    ${props =>
      size === "sm" ? props.theme.fontSize.small : props.theme.fontSize.large};
  `
  return (
    <BrandWrap>
      <img
        src={Logo}
        alt={"Watchtower Logo"}
        height={size === "sm" ? "20px" : "30px"}
        style={{ marginRight: "10px" }}
      />
      <Brand>Watchtower</Brand>
    </BrandWrap>
  )
}
