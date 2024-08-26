import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allStrapiSupport(sort: { strapi_id: DESC }) {
      nodes {
        id
        title
        slug
      }
    }

    strapiServiceSidebarContactInfo {
      heading
      contactInfoList {
        id
        iconName
        content {
          data {
            content
          }
        }
      }
    }
  }
`

const SupportSidebar = () => {
  const data = useStaticQuery(query)
  // console.log(data)

  const {
    allStrapiSupport: { nodes: supports },
    strapiServiceSidebarContactInfo: { heading, contactInfoList },
  } = data

  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          {supports.slice(0, 5).map(support => (
            <li key={support.id}>
              <Link to={`/supports/${support.slug}`}>{support.title}</Link>
            </li>
          ))}
        </ul>

        <div className="services-contact-info">
          <h3>{heading}</h3>

          <ul>
            {contactInfoList.map(contactInfo => (
              <li key={contactInfo.id}>
                <div className="icon">
                  <i className={contactInfo.iconName}></i>
                </div>
                <ReactMarkdown>
                  {contactInfo.content.data.content}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SupportSidebar
