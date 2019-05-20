import React from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import { Container, Section } from "../components/global"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

export default () => (
  <Layout title="Page not found - Watchtower">
    <Navbar links={["Docs"]} />
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
  text-align: center;
`
