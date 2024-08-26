// import React from "react"
// import { Link } from "gatsby"
// import { graphql, useStaticQuery } from "gatsby"

// import starIcon from "../../images/star-icon.png"

// const query = graphql`
//   {
//     strapiPricing {
//       subTitle
//       title
//       shortDescription
//       tableTitle
//       basicPlanTitle
//       basicPlanPrice
//       basicPlanDuration
//       basicPlanBtnText
//       basicPlanBtnLink
//       advancedPlanTitle
//       advancedPlanPrice
//       advancedPlanDuration
//       advancedPlanBtnText
//       advancedPlanBtnLink
//       expertPlanTitle
//       expertPlanPrice
//       expertPlanDuration
//       expertPlanBtnText
//       expertPlanBtnLink
//       customPlanTitle
//       customPlanPrice
//       customPlanBtnText
//       customPlanBtnLink
//       featuresList {
//         id
//         title
//         iconOne
//         iconTwo
//         iconThree
//         iconFour
//       }
//     }
//   }
// `

// const Pricing = () => {
//   const data = useStaticQuery(query)
//   // console.log(data)
//   const {
//     strapiPricing: {
//       subTitle,
//       title,
//       shortDescription,
//       tableTitle,
//       basicPlanTitle,
//       basicPlanPrice,
//       basicPlanDuration,
//       basicPlanBtnText,
//       basicPlanBtnLink,
//       advancedPlanTitle,
//       advancedPlanPrice,
//       advancedPlanDuration,
//       advancedPlanBtnText,
//       advancedPlanBtnLink,
//       expertPlanTitle,
//       expertPlanPrice,
//       expertPlanDuration,
//       expertPlanBtnText,
//       expertPlanBtnLink,
//       customPlanTitle,
//       customPlanPrice,
//       customPlanBtnText,
//       customPlanBtnLink,
//       featuresList,
//     },
//   } = data

//   return (
//     <>
//       <div className="membership-levels-area ptb-100">
//         <div className="container">
//           <div className="section-title">
//             <span className="sub-title">
//               <img src={starIcon} alt="starIcon" />
//               {subTitle}
//             </span>
//             <h2>{title}</h2>
//             {/* <p>{shortDescription}</p> */}
//           </div>

//           <div className="membership-levels-table table-responsive">
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>
//                     <span className="title">{tableTitle}</span>
//                   </th>
//                   <th>
//                     <span className="price">{basicPlanPrice}</span>
//                     <span className="title">{basicPlanTitle}</span>
//                     <span className="desc">{basicPlanDuration}</span>
//                   </th>
//                   <th>
//                     <span className="price">{advancedPlanPrice}</span>
//                     <span className="title">{advancedPlanTitle}</span>
//                     <span className="desc">{advancedPlanDuration}</span>
//                   </th>
//                   <th>
//                     <span className="price">{expertPlanPrice}</span>
//                     <span className="title">{expertPlanTitle}</span>
//                     <span className="desc">{expertPlanDuration}</span>
//                   </th>
//                   <th>
//                     <span className="price">{customPlanPrice}</span>
//                     <span className="title">{customPlanTitle}</span>
//                     {/* <span className="desc">{customPlanDuration}</span> */}
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {featuresList.map(feature => (
//                   <tr key={feature.id}>
//                     <td>{feature.title}</td>
//                     <td className="item-check">
//                         {feature.iconOne.startsWith('bx') ? (
//                           <i className={feature.iconOne}></i>
//                         ) : (
//                           feature.iconOne
//                         )}
//                     </td>
//                     <td className="item-check">
//                         {feature.iconTwo.startsWith('bx ') ? (
//                           <i className={feature.iconTwo}></i>
//                         ) : (
//                           feature.iconTwo
//                         )}
//                     </td>
//                     <td className="item-check">
//                       {feature.iconThree.startsWith('bx ') ? (
//                           <i className={feature.iconThree}></i>
//                         ) : (
//                           feature.iconThree
//                         )}
//                     </td>
//                     <td className="item-check">
//                       {feature.iconFour.startsWith('bx ') ? (
//                           <i className={feature.iconFour}></i>
//                         ) : (
//                           feature.iconFour
//                         )}
//                     </td>
//                   </tr>
//                 ))}

//                 <tr>
//                   <td></td>
//                   <td>
//                     <Link to={basicPlanBtnLink} className="select-btn">
//                       {basicPlanBtnText}
//                     </Link>
//                   </td>
//                   <td>
//                     <Link to={advancedPlanBtnLink} className="select-btn">
//                       {advancedPlanBtnText}
//                     </Link>
//                   </td>
//                   <td>
//                     <Link to={expertPlanBtnLink} className="select-btn">
//                       {expertPlanBtnText}
//                     </Link>
//                   </td>
//                   <td>
//                     <Link to={customPlanBtnLink} className="select-btn">
//                       {customPlanBtnText}
//                     </Link>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <div className="container">
//               <div className="section-title">
//                 <p style={{ color: '#ff5d22', fontSize: 'larger'}}>{shortDescription}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Pricing


// import React from "react"
// import { Link } from "gatsby"
// import starIcon from "../../images/star-icon.png"

// const Pricing = () => {
//   return (
//     <>
//       <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
//         <div className="container">
//           <div className="section-title">
//             <span className="sub-title">
//               <img src={starIcon} alt="starIcon" />
//               Pricing
//             </span>
//             <h2>Our Affordable Pricing Plans</h2>
//           </div>

//           <div className="row">
//             <div className="col-lg-3 col-md-3">
//               <div className="single-pricing-box">
//                 <div className="pricing-header">
//                   <h3>Ask The Experts</h3>
//                 </div>

//                 <div className="price">
//                   <sup>$</sup> 499 <sub>/ Per month</sub>
//                 </div>

//                 <ul className="pricing-features">
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 16 business hour response time
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 3 incidents per month
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Ticketing System
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Enterprise Search Engine Product
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Norconex Crawler Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Dedicated Support Line
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Hands-on assistance
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Supports Bug Fixes and Releases Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Additional Services: Features, Reports, Hosting
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Product Discount
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> 24/7 Emergency Service
//                   </li>
//                 </ul>

//                 <div className="btn-box">
//                   <Link to="#" className="default-btn">
//                     <i className="flaticon-tick"></i>
//                     Select the Plan
//                     <span></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-3">
//               <div className="single-pricing-box">
//                 <div className="pricing-header">
//                   <h3>We Back You Up</h3>
//                 </div>

//                 <div className="price">
//                   <sup>$</sup> 999 <sub>/ Per month</sub>
//                 </div>

//                 <ul className="pricing-features">
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 8 business hour response time
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 6 incidents per month
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Ticketing System
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Enterprise Search Engine Product
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Norconex Crawler Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Dedicated Support Line
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Hands-on assistance/month
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Supports Bug Fixes and Releases Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Additional Services: Features, Reports, Hosting
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 10% Product Discount
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> 24/7 Emergency Service
//                   </li>
//                 </ul>

//                 <div className="btn-box">
//                   <Link to="#" className="default-btn">
//                     <i className="flaticon-tick"></i>
//                     Select the Plan
//                     <span></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-3">
//               <div className="single-pricing-box">
//                 <div className="pricing-header">
//                   <h3>Occasional Hands-on</h3>
//                 </div>

//                 <div className="price">
//                   <sup>$</sup> 1750 <sub> / Per month</sub>
//                 </div>

//                 <ul className="pricing-features">
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 8 business hour response time
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Unlimited incidents/month
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Ticketing System
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Enterprise Search Engine Product
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Norconex Crawler Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Dedicated Support Line
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 10 hours Hands-on assistance/month
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Bug Fixes and Releases Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> Additional Services: Features, Reports, Hosting
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 25% Product Discount
//                   </li>
//                   <li>
//                     <i className="bx bxs-x-circle red"></i> 24/7 Emergency Service
//                   </li>
//                 </ul>

//                 <div className="btn-box">
//                   <Link to="#" className="default-btn">
//                     <i className="flaticon-tick"></i>
//                     Select the Plan
//                     <span></span>
//                   </Link>
//                 </div>

//               </div>
//             </div>

//             <div className="col-lg-3 col-md-3">
//               <div className="single-pricing-box">
//                 <div className="pricing-header">
//                   <h3>Enterprise</h3>
//                 </div>

//                 <div className="price">
//                 <sup>$</sup> Custom 
//                 </div>

//                 <ul className="pricing-features">
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 1-4 business hour response time
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Unlimited incidents/month
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Ticketing System
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Enterprise Search Engine Product
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Norconex Crawler Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Dedicated Support Line
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 20 hours Hands-on assistance/month
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Supports Bug Fixes and Releases Products
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> Additional Services: Features, Reports, Hosting
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 25% Product Discount
//                   </li>
//                   <li>
//                     <i className="bx bxs-badge-check"></i> 24/7 Emergency Service
//                   </li>
//                 </ul>

//                 <div className="btn-box">
//                   <Link to="#" className="default-btn">
//                     <i className="flaticon-tick"></i>
//                     Select the Plan
//                     <span></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="section-title">
//             <p style={{ color: '#ff5d22', fontSize: 'larger'}}>Sign up for one year and receive one month free!</p>
//         </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Pricing


import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

const Pricing = () => {
  return (
    <>
      <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="starIcon" />
              Pricing
            </span>
            <h2>Our Affordable Pricing Plans</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Ask The Experts</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 499 <sub>/ Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    16 business hour response time
                  </li>
                  <li>
                    3 incidents per month
                  </li>
                  <li>
                    Ticketing System
                  </li>
                  <li>
                    Supports Enterprise Search Engine Product
                  </li>
                  <li>
                    Supports Norconex Crawler Products
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>We Back You Up</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 999 <sub>/ Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    8 business hour response time
                  </li>
                  <li>
                    6 incidents per month
                  </li>
                  <li>
                    Ticketing System
                  </li>
                  <li>
                    Supports Enterprise Search Engine Product
                  </li>
                  <li>
                    Supports Norconex Crawler Products
                  </li>
                  <li>
                    10% Product Discount
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Occasional Hands-on</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 1750 <sub> / Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    8 business hour response time
                  </li>
                  <li>
                    Unlimited incidents/month
                  </li>
                  <li>
                    Ticketing System
                  </li>
                  <li>
                    Supports Enterprise Search Engine Product
                  </li>
                  <li>
                    Supports Norconex Crawler Products
                  </li>
                  <li>
                    Dedicated Support Line
                  </li>
                  <li>
                    10 hours Hands-on assistance/month
                  </li>
                  <li>
                    Supports Bug Fixes and Releases Products
                  </li>
                  <li>
                    25% Product Discount
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
                    <span></span>
                  </Link>
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-md-6 offset-lg-0">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Enterprise</h3>
                </div>

                <div className="price">
                <sup>$</sup> Custom 
                </div>

                <ul className="pricing-features">
                  <li>
                    1-4 business hour response time
                  </li>
                  <li>
                    Unlimited incidents/month
                  </li>
                  <li>
                    Ticketing System
                  </li>
                  <li>
                    Supports Enterprise Search Engine Product
                  </li>
                  <li>
                    Supports Norconex Crawler Products
                  </li>
                  <li>
                    Dedicated Support Line
                  </li>
                  <li>
                    20 hours Hands-on assistance/month
                  </li>
                  <li>
                     Supports Bug Fixes and Releases Products
                  </li>
                  <li>
                    Additional Services: Features, Reports, Hosting
                  </li>
                  <li>
                    25% Product Discount
                  </li>
                  <li>
                    24/7 Emergency Service
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section-title">
            <p style={{ color: '#ff5d22', fontSize: 'larger'}}>Sign up for one year and receive one month free!</p>
        </div>
        </div>
      </section>
    </>
  )
}

export default Pricing