import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import StartProject from "../../components/Common/StartProject"
import Footer from "../../components/_App/Footer"
import ProductsCard from "../../components/Products/ProductsCard"

const ProductsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Products"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Products"
      />

      <ProductsCard />

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
export const Head = () => <Seo title="Products" />

export default ProductsPage
