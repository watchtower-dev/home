import React from "react"
import About from "../components/About"
import AppBar from "../components/AppBar"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Header from "../components/Header"
import Layout from "../components/Layout"

export default () => (
  <Layout title={"API Monitoring, Testing, and Uptime"}>
    <AppBar />
    <Header />
    <GetStarted />
    <About />
    <GetStarted inverse />
    <Footer />
  </Layout>
)
