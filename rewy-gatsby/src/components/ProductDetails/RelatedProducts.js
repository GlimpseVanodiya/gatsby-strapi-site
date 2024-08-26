import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiProduct(sort: { strapi_id: DESC }) {
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

const RealtedProducts = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiProduct: { nodes: products },
  } = data

  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <h2>More Services You Might Like</h2>
          </div>

          <div className="row">
            {products.slice(0, 3).map(product => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
                <div className="single-services-box ">
                  <div className="icon">
                    <img
                      src={product.icon.url}
                      alt={product.icon.alternativeText}
                    />
                  </div>
                  <h3>
                    <Link to={`/products/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <p>{product.shortDescription}</p>

                  <Link
                    to={`/products/${product.slug}`}
                    className="read-more-btn"
                  >
                    Read More <i className="flaticon-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default RealtedProducts
