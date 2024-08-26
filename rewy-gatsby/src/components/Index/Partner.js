import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const query = graphql`
  {
    strapiPartner {
      partnersList {
        id
        image {
          url
          alternativeText
        }
        aosDelay
      }
    }
  }
`;

const Partner = () => {
  const data = useStaticQuery(query);
  const {
    strapiPartner: { partnersList },
  } = data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {partnersList && (
        <div className="partner-area pt-100 pb-70 bg-f1f8fb">
          <div className="container">
            <Slider {...settings}>
              {partnersList.map(partner => (
                <div key={partner.id}>
                  <div
                    className="single-partner-item"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={partner.aosDelay}
                  >
                    <img
                      src={partner.image.url}
                      alt={partner.image.alternativeText}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="divider"></div>
        </div>
      )}
    </>
  );
};

export default Partner;
