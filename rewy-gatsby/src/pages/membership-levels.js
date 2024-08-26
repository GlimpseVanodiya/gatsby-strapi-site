import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Pricing from "../components/Index/Pricing"
import Footer from "../components/_App/Footer"

const MembershipLevelsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Member Ship Levels"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Member Ship Levels"
      />

      <Pricing />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Membership Levels" />

export default MembershipLevelsPage
