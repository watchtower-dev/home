import React from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

export default () => (
  <Layout title={"API Monitoring, Testing, and Uptime"}>
    <Navbar links={[{ href: "docs/get-started", text: "Get Started" }]} />
    <Header />
    <GetStarted />
    <About />
    <GetStarted inverse />
    <Footer />
  </Layout>
)
