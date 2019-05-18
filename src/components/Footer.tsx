import React from "react"
import Svg from "react-inlinesvg"
import styled from "styled-components"
import Github from "../img/github.svg"
import Brand from "./Brand"
import ExternalLink from "./ExternalLink"
import { Container } from "./global"

const social = [
  {
    icon: Github,
    label: "Link to Github Profile",
    link: "https://github.com/watchtower-dev"
  }
]

export default () => (
  <React.Fragment>
    <Wrap>
      <StyledContainer>
        <Copyright>
          <Brand size="sm" />
          <div>{new Date().getFullYear()} All Rights Reserved</div>
        </Copyright>
        <SocialIcons>
          {social.map(({ icon, label, link }, i) => (
            <ExternalLink key={i} href={link} label={label}>
              <Svg src={icon} />
            </ExternalLink>
          ))}
        </SocialIcons>
      </StyledContainer>
    </Wrap>
  </React.Fragment>
)

const SocialIcons = styled.div`
  display: flex;
  margin: 0 0.75em;

  svg {
    color: ${props => props.theme.color.black.regular};
    margin: 0 8px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`
const Wrap = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`
const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => props.theme.fontSize.xsmall};
`
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`
