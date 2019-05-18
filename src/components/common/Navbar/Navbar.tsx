import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Svg from "react-inlinesvg"
import Scrollspy from "react-scrollspy"
import Menu from "../../../img/menu.svg"
import { Container } from "../../global"
import Brand from "../Brand"
import {
  Mobile,
  MobileMenu,
  Nav,
  NavItem,
  NavListWrapper,
  StyledContainer
} from "./style"

const NAV_ITEMS = ["About"]

interface IProps {
  showMenu?: boolean
}

export default ({ showMenu }: IProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getNavAnchorLink = (item: any) => (
    <AnchorLink
      href={`#${item.toLowerCase()}`}
      onClick={() => setMenuOpen(false)}
    >
      {item}
    </AnchorLink>
  )

  const getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  return (
    <Nav>
      <StyledContainer>
        <Brand size="lg" />
        {showMenu && (
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
        {showMenu && <Mobile hide>{getNavList({})}</Mobile>}
      </StyledContainer>
      <Mobile>
        {menuOpen && (
          <MobileMenu>
            <Container>{getNavList({ mobile: true })}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  )
}
