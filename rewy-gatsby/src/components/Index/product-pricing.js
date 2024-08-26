import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

const Productpricing = () => {
  return (
    <>
      <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="starIcon" />
              SaaS Pricing
            </span>
            {/* <h2>Our Affordable Pricing Plans</h2> */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Small</h3>
                  <p>SaaS</p>
                </div>

                <div className="price">
                  <sup>$</sup> 109 <sub>/ Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    2000 Average Search (hits/day)
                  </li>
                  <li>
                    No Production Licenses
                  </li>
                  <li>
                    $14/mo for 500 extra hits/day
                  </li>
                  <li>
                    Upgrade to Major Releases Included
                  </li>
                  <li>
                    1.44 M Maximum Data Available (hits)
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                        Inquire
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Basic</h3>
                  <p>SaaS</p>
                </div>

                <div className="price">
                  <sup>$</sup> 249 <sub>/ Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                  10,000 Average Search (hits/day)
                  </li>
                  <li>
                  No Production Licenses
                  </li>
                  <li>
                  $24/mo for 1,000 extra hits/day
                  </li>
                  <li>
                  Upgrade to Major Releases Included
                  </li>
                  <li>
                  7.20M* Maximum Data Available (hits)
                  </li>
                </ul>
                <p>*Download option available as well. Please inquire.</p>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Inquire
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Business</h3>
                  <p>SaaS</p>
                </div>

                <div className="price">
                  <sup>$</sup> 449 <sub> / Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                  50,000 Average Search (hits/day)
                  </li>
                  <li>
                  No Production Licenses
                  </li>
                  <li>
                  $49/mo for 10,000 extra hits/day
                  </li>
                  <li>
                  Upgrade to Major Releases Included
                  </li>
                  <li>
                  36M* Maximum Data Available (hits)
                  </li>
                </ul>
                <p>*Download option available as well. Please inquire.</p>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                        Inquire
                    <span></span>
                  </Link>
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-md-6 offset-lg-0">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Enterprise</h3>
                  <p>SaaS</p>
                </div>

                <div className="price">
                <sup>$</sup> 949 <sub> / Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                  150,000 Average Search (hits/day)
                  </li>
                  <li>
                  No Production Licenses
                  </li>
                  <li>
                  $99/mo for 50,000 extra hits/day
                  </li>
                  <li>
                  Upgrade to Major Releases Included
                  </li>
                  <li>
                  108M* Maximum Data Available (hits)
                  </li>
                </ul>
                <p>*Download option available as well. Please inquire.</p>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Inquire
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="product-pricing-list">
            <ul>
                <li>For hosted solution, some work is still required on the client search application to interface with our Search Analytics.</li>
                <li>Documentation provided for client installation, or installation by Norconex is available at $175/hour.</li>
                <li>Additional “hits” may be provided in base package for multi-year contracts. Reach out for details.</li>
                <li>Minor release upgrades are always included.</li>
                <li>Additional support available. Please reach out for details.</li>
            </ul>

            <p>*Search Analytics data stored for 2 years. For Longer storage, please reach out for details</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Productpricing