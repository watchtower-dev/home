import React from "react"
import styled from "styled-components"
import Layout from "../components/common/Layout"
import Navbar from "../components/common/Navbar"
import { Container, Section } from "../components/global"
import Footer from "../components/sections/Footer"

export default () => (
  <Layout title="Page not found - Watchtower">
    <Navbar />
    <Wrap>
      <Container>
        <Section>
          <h1>Page not found!</h1>
          <p>Sorry, but the page you were looking for could not be found.</p>
        </Section>
      </Container>
    </Wrap>
    <Footer />
  </Layout>
)

const Wrap = styled.div`
  background-color: ${props => props.theme.color.primary};
  text-align: center;
`
