import React from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import JoinBeta from "../components/JoinBeta"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

export default () => (
  <Layout title={"API Monitoring, Testing, and Uptime"}>
    <Navbar links={["About"]} />
    <Header />
    <JoinBeta />
    <About />
    <JoinBeta inverse />
    <Footer />
  </Layout>
)
