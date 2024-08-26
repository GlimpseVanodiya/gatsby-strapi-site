import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import Productpricing from "../components/Index/product-pricing"
// import ProductSidebar from "../components/ProductDetails/ProductSidebar"
// import RealtedProducts from "../components/ProductDetails/RelatedProducts"

const ProductDetailsPage = ({ data }) => {
  // const { title, detailsContent } = data.product
  const { title, firstImg, text1, text2, secondImg, slug} = data.product;

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={title}
        homePageText="Home"
        homePageUrl="/"
        activePageText={title}
      />

      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
              <div className="products-details-desc">
                <div className="grid-item image-container">
                  <img src={firstImg.url} alt={firstImg.alternativeText} />
                </div>
                <div className="grid-item">
                <ReactMarkdown>{text1.data.text1}</ReactMarkdown>
                </div>
                <div className="grid-item">
                  <ReactMarkdown>{text2.data.text2}</ReactMarkdown>
                </div>
                <div className="grid-item image-container">
                  <img src={secondImg.url} alt={secondImg.alternativeText} />
                </div>
                  {/* <ReactMarkdown>
                    {detailsContent.data.detailsContent}
                  </ReactMarkdown> */}
              </div>
              
              {/* <div className="products-detailsContent">
                  <ReactMarkdown>
                    {detailsContent.data.detailsContent}
                  </ReactMarkdown>
              </div> */}
            {/* <div className="col-lg-4 col-md-12">
              <ProductSidebar />
            </div> */}

            {slug === "search-analytics" && (
              <div className="pricing-component">
                <Productpricing />
              </div>
            )}    
          </div>
        </div>
      </section>

      {/* <RealtedProducts /> */}

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: strapiProduct(slug: { eq: $slug }) {
      title
      slug
      text1 {
        data {
          text1
        }
      }
      text2 {
        data {
          text2
        }
      }
      firstImg {
        url
        alternativeText
      }
      secondImg {
        url
        alternativeText
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Product Details" />

export default ProductDetailsPage
