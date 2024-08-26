import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiOurSupportItem {
        shortDescription
        supportItemsList  {
            id
            image {
                url
                alternativeText
            }
            aosDelay
        }

        supportCardList {
            id
            title
            shortDescription
        }
    }
  }
`

const OurSupportItem = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiOurSupportItem: { shortDescription, supportItemsList, supportCardList },
  } = data

  return (
    <>
      {supportItemsList && (
        <div className="partner-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
              <div className="section-title">
                <p style={{ fontSize: 'x-large'}}>{shortDescription}</p>
              </div>
            </div>
          <div className="container">
          
            <div className="row align-items-center">  
              {supportItemsList.map(supportItem => (
                <div
                  className="col-lg-2 col-6 col-sm-4 col-md-4"
                  key={supportItem.id}
                >
                  <div
                    className="single-partner-item"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={supportItem.aosDelay}
                  >
                    <img
                      src={supportItem.image.url}
                      alt={supportItem.image.alternativeText}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        <div className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                {supportCardList && (
                    <div className="row justify-content-center">
                    {supportCardList.map(supportCard => (
                        <div className="col-lg-4 col-sm-6" key={supportCard.id}>
                            <div className="single-services-item-box">
                                <h3>{supportCard.title}</h3>
                                <p>{supportCard.shortDescription}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                )}
            </div>
        </div>      
          

          <div className="divider"></div>
        </div>
      )}
    </>
  )
}

export default OurSupportItem
