import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
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

const SupportsCard = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiSupport: { nodes: supports },
  } = data

  return (
    <>
      {supports && (
        <section className="solutions-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              {supports.map(support => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={support.id}>
                  <div className="single-solutions-box">
                    <div className="icon">
                      <img
                        src={support.icon.url}
                        alt={support.icon.alternativeText}
                      />
                    </div>
                    <h3>
                      <Link to={`/supports`}>
                        {support.title}
                      </Link>
                    </h3>
                    <p>{support.shortDescription}</p>

                    <Link
                      className="view-details-btn"
                      to={`/supports`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default SupportsCard
