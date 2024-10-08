// import React from "react"
// import { graphql } from "gatsby"
// import ReactMarkdown from "react-markdown"
// import Layout from "../components/_App/layout"
// import Seo from "../components/_App/seo"
// import Navbar from "../components/_App/Navbar"
// import PageBanner from "../components/Common/PageBanner"
// import ServiceSidebar from "../components/ServiceDetails/ServiceSidebar"
// import RelatedServices from "../components/ServiceDetails/RelatedServices"
// import Footer from "../components/_App/Footer"

// const ServiceDetailsPage = ({ data }) => {
//   const { title, detailsContent } = data.service

//   return (
//     <Layout>
//       <Navbar />

//       <PageBanner
//         pageTitle={title}
//         homePageText="Home"
//         homePageUrl="/"
//         activePageText={title}
//       />

//       <section className="services-details-area ptb-100">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 col-md-12">
//               <div className="services-details-desc">
//                 <ReactMarkdown>
//                   {detailsContent.data.detailsContent}
//                 </ReactMarkdown>
//               </div>
//             </div>

//             <div className="col-lg-4 col-md-12">
//               <ServiceSidebar />
//             </div>
//           </div>
//         </div>
//       </section>

//       <RelatedServices />

//       <Footer />
//     </Layout>
//   )
// }

// export const query = graphql`
//   query GetSingleService($slug: String) {
//     service: strapiService(slug: { eq: $slug }) {
//       title
//       detailsContent {
//         data {
//           detailsContent
//         }
//       }
//     }
//   }
// `

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Service Details" />

// export default ServiceDetailsPage


import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import RelatedServices from "../components/ServiceDetails/RelatedServices";
import Footer from "../components/_App/Footer";
import ReactMarkdown from "react-markdown";

const ServiceDetailsPage = ({ data }) => {
  const { title, firstImg, text1, text2, secondImg } = data.service;

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={title}
        homePageText="Home"
        homePageUrl="/"
        activePageText={title}
      />

      <section className={`services-details-area ptb-100`}>
        <div className="container">
          <div className="row services-details-desc">
            
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
          </div>
          {/* <div className="funfacts-area pb-70">
              <ReactMarkdown>{detailsContent.data.detailsContent}</ReactMarkdown>
          </div> */}
        </div>
      </section>

      <RelatedServices />

      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query GetSingleService($slug: String) {
    service: strapiService(slug: { eq: $slug }) {
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
`;

export const Head = () => <Seo title="Service Details" />;

export default ServiceDetailsPage;



