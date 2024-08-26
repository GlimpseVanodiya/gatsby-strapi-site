import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import SupportDetailsContent from "../../components/SupportDetails/SupportDetailsContent"
import Footer from "../../components/_App/Footer"

const SupportDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Support Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Support Details"
      />

      <SupportDetailsContent />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Support Details" />

export default SupportDetailsPage
