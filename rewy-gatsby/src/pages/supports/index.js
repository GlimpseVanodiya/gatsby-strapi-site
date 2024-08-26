import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import StartProject from "../../components/Common/StartProject"
import Footer from "../../components/_App/Footer"
// import SupportsCard from "../../components/Supports/SupportCard"
import Pricing from "../../components/Index/Pricing"
import OurSupportItem from "../../components/Index/OurSupportItem"

const SupportsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Supports"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Supports"
      />

      <Pricing />
      <OurSupportItem />

      {/* <SupportsCard /> */}

      <StartProject />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Supports" />

export default SupportsPage
