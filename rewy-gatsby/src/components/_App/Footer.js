import React from "react"
import { Link } from "gatsby"

import footerMap from "../../images/footer-map.png"

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiSiteLogo {
      image {
        url
        alternativeText
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const {
    strapiSiteLogo: { image },
  } = data

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img src={image.url} alt={image.alternativeText} />
              </Link>
              <p>
                Align your business goals with our enterprise search strategy. Explore our full-featured, flexible, and extensible solutions. Reach out to learn more.
              </p>

              <ul className="social-link">
                <li>
                  <a
                    href="https://www.facebook.com/norconex/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/norconex/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Norconex/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/norconex/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCHl398a4k9R2FRrMKTuvVLQ/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link to="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>Services</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/team">Enterprise Search Consulting</Link>
                </li>
                <li>
                  <Link to="/services">Web & Filesystem Crawling</Link>
                </li>
                <li>
                  <Link to="/testimonials">Search Technology Selection</Link>
                </li>
                <li>
                  <Link to="/services">Relevance Tuning & Optimization</Link>
                </li>
                <li>
                  <Link to="/case-studies">AL/ML Integration</Link>
                </li>
                <li>
                  <Link to="/case-studies">Custom Search Solutions</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  815 de la Carrière, Suite 201
                  Gatineau, <br/> Quebec J8Y 6T4, <br/>Canada
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:18886159538">+1-888-615-9538</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:info@norconex.com">info@norconex.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>Norconex</strong>. All rights
                reserved.
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div>
    </footer>
  )
}

export default Footer
