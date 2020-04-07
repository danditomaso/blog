import React from "react"
import Layout from "../components/Layout"
import FeaturedPost from "../components/featuredPost"
import AboutMe from "../components/aboutMe"
import Backlog from "../components/backlog"
import SignUpForm from "../components/signUpForm"
import Contact from "../components/contact"

import "./index.css"

export default () => (
  <Layout>
    <FeaturedPost />
    <div className="index__wrapper">
      <div className="index__leftColumn">
        <AboutMe />
        <SignUpForm />
      </div>
      <Backlog />
    </div>
    <Contact />
  </Layout>
)
