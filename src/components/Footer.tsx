import { Link } from "gatsby"
import React from "react"
import Svg from "react-inlinesvg"
import styled from "styled-components"
import Github from "../img/github.svg"
import Twitter from "../img/twitter.svg"
import Brand from "./Brand"
import ExternalLink from "./ExternalLink"
import { Container } from "./global"

const social = [
  {
    icon: Github,
    label: "Link to Github Profile",
    link: "https://github.com/watchtower-dev"
  },
  {
    icon: Twitter,
    label: "Link to Twitter Profile",
    link: "https://twitter.com/watchtower_dev"
  }
]

export default () => (
  <React.Fragment>
    <Wrap>
      <HR />
      <StyledContainer>
        <Row>
          <Column>
            <Brand size="sm" />
            {new Date().getFullYear()} All Rights Reserved
          </Column>
          <Column>
            <Link to="legal/privacy">Privacy</Link>
            <Link to="legal/terms">Terms</Link>
          </Column>
        </Row>
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

const Wrap = styled.footer`
  margin-bottom: 40px;
`
const HR = styled.hr`
  border: 0;
  height: 1px;
  background: ${props => props.theme.color.black.regular};
  background-image: linear-gradient(
    to right,
    ${props => props.theme.color.white.dark},
    ${props => props.theme.color.black.regular},
    ${props => props.theme.color.white.dark}
  );
  max-width: 80%;
  margin: 20px auto;
`
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
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5em;
  ${props => props.theme.fontSize.xsmall};
`
const Row = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme.fontSize.xsmall};

  a {
    text-decoration: none;
    color: ${props => props.theme.color.black.regular};
  }
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
