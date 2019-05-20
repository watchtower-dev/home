import { Link } from "gatsby"
import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Svg from "react-inlinesvg"
import Scrollspy from "react-scrollspy"
import styled from "styled-components"
import Menu from "../img/menu.svg"
import Brand from "./Brand"
import { Container } from "./global"

type Props = Partial<{
  links: string[]
}>

export default ({ links = [] }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getNavAnchorLink = (item: string) =>
    item === "Docs" ? (
      <Link to={"docs/get-started"}>{item}</Link>
    ) : (
      <AnchorLink
        href={`#${item.toLowerCase()}`}
        onClick={() => setMenuOpen(false)}
      >
        {item}
      </AnchorLink>
    )

  const getNavList = (mobile = false) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={links.map(l => l.toLowerCase())}
        currentClassName="active"
        offset={-64}
      >
        {links.map(l => (
          <NavItem key={l}>{getNavAnchorLink(l)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  return (
    <Nav>
      <StyledContainer>
        <Brand size="lg" />
        {links.length > 0 && (
          <Mobile>
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "black" }}
            >
              <Svg src={Menu} />
            </button>
          </Mobile>
        )}
        {links.length > 0 && <Mobile hide>{getNavList()}</Mobile>}
      </StyledContainer>
      <Mobile>
        {menuOpen && (
          <MobileMenu>
            <Container>{getNavList(true)}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  )
}

const Nav = styled.nav`
  padding: 6px 0;
  background-color: ${props => props.theme.color.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavListWrapper = styled.div<{ mobile?: boolean }>`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
      flex-direction: column;
      margin-top: 1em;

      > ${NavItem} {
        margin: 0;
        margin-top: 0.75em;
      }
    `};
  }
`
const NavItem = styled.li`
  margin: 0 0.75em;
  ${props => props.theme.fontSize.small};

  a {
    text-decoration: none;
    color: ${props => props.theme.color.black.regular};
  }
`
const MobileMenu = styled.div`
  width: 100%;
  background: ${props => props.theme.color.white.dark};
  padding-bottom: 15px;
`
const Mobile = styled.div<{ hide?: boolean }>`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
  display: block;

  @media (max-width: ${props.theme.screen.md}) {
    display: none;
  }
`}
`
