import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiOurSolutionsSectionTitle {
      subTitle
      title
      shortDescription
    }
    allStrapiService(sort: { strapi_id: DESC }) {
      nodes {
        id
        icon {
          url
          alternativeText
        }
        title
        slug
        shortDescription
        detailsContent {
          data {
            detailsContent
          }
        }
      }
    }
    allStrapiProduct(sort: { strapi_id: ASC }) {
      nodes {
        id
        icon {
          url
          alternativeText
        }
        title
        slug
        shortDescription
        detailsContent {
          data {
            detailsContent
          }
        }
      }
    }
    allStrapiSupport(sort: { strapi_id: DESC }) {
      nodes {
        id
        icon {
          url
          alternativeText
        }
        title
        slug
        shortDescription
        detailsContent {
          data {
            detailsContent
          }
        }
      }
    }
  }
`

const OurSolutions = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiService: { nodes: services },
    allStrapiProduct: { nodes: products },
    allStrapiSupport: { nodes: supports },
    strapiOurSolutionsSectionTitle: { subTitle, title, shortDescription },
  } = data

  const service = services[0]
  const product = products[0]
  const support = supports[0]

  const renderCard = (item, type) => {
    const urlPath = type === 'supports' ? `/supports` : `/${type}/${item.slug}`

    return (
      <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
        <div className="single-solutions-box">
          <div className="icon">
            <img src={item.icon.url} alt={item.icon.alternativeText} />
          </div>
          <h3>
            <Link to={urlPath}>{item.title}</Link>
          </h3>
          <p>{item.shortDescription}</p>
          <Link className="view-details-btn" to={urlPath}>
            View Details
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              {subTitle}
            </span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>
          <div className="row justify-content-center">
            {service && renderCard(service, "services")}
            {product && renderCard(product, "products")}
            {support && renderCard(support, "supports")}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolutions
