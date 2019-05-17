import React, { Component } from "react"
// @ts-ignore
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

interface IState {
  mobileMenuOpen: boolean
}

class Navbar extends Component<{}, IState> {
  public state = {
    mobileMenuOpen: false
  }

  public render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand size="lg" />
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: "black" }}>
              <Svg src={Menu} />
            </button>
          </Mobile>
          {/*
          // @ts-ignore */}
          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }

  private toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  private closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) this.setState({ mobileMenuOpen: false })
  }

  private getNavAnchorLink = (item: any) => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  private getNavList = ({ mobile = false }) => (
    // @ts-ignore
    <NavListWrapper mobile={mobile}>
      {/*
      // @ts-ignore */}
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )
}

export default Navbar
