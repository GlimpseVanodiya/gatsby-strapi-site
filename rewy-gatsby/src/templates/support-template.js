import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import SupportSidebar from "../components/SupportDetails/SupportSidebar"

const SupportDetailsPage = ({ data }) => {
  const { title, detailsContent } = data.support

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
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <ReactMarkdown>
                  {detailsContent.data.detailsContent}
                </ReactMarkdown>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <SupportSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleSupport($slug: String) {
    support: strapiSupport(slug: { eq: $slug }) {
      title
      detailsContent {
        data {
          detailsContent
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Support Details" />

export default SupportDetailsPage
