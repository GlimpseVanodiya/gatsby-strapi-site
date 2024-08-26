import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
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
  }
`

const ProductsCard = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiProduct: { nodes: products },
  } = data

  return (
    <>
      {products && (
        <section className="solutions-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              {products.map(product => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
                  <div className="single-solutions-box">
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
                      className="view-details-btn"
                      to={`/products/${product.slug}`}
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

export default ProductsCard
