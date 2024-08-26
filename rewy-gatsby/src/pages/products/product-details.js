import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/_App/Footer"
import ProductDetailsContent from "../../components/ProductDetails/ProductDetailsContent"
// import RealtedProducts from "../../components/ProductDetails/RelatedProducts"

const ProductDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Product Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Product Details"
      />

      <ProductDetailsContent />

      {/* <RealtedProducts /> */}

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Product Details" />

export default ProductDetailsPage
