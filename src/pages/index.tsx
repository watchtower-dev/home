import React from "react"
import Layout from "../components/common/Layout"
import Navbar from "../components/common/Navbar"
import About from "../components/sections/About"
import Footer from "../components/sections/Footer"
import Header from "../components/sections/Header"
import JoinBeta from "../components/sections/JoinBeta"

export default () => (
  <Layout>
    <Navbar showMenu />
    <Header />
    <JoinBeta />
    <About />
    <JoinBeta inverse />
    <Footer />
  </Layout>
)
