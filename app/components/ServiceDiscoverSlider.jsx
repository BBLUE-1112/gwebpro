"use client";

import Slider from "react-slick";
import CheckScreenWidth from "./CheckScreenWidth";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDiscoverSlider({ pageData }) {
  const discoverSliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
  };

  return (
 
    <section className="discover_blk pad_cmn_blk d-block d-lg-none">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <div className="title_blk title-big">
              <h2>{pageData.heading_discover}</h2>
              <h4
                dangerouslySetInnerHTML={{
                  __html: pageData.description_discover,
                }}
              ></h4>
            </div>
            <CheckScreenWidth setWidth={991}>
              <div className="video-container">
                <video
                  src={pageData.video_discover}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                ></video>
              </div>
            </CheckScreenWidth>
          </div>

          <div className="col-12">
            <div className="discover-cards">
              <div className="row">
                <div className="col pe-0 ps-0">
                  <Slider {...discoverSliderSettings}>
                    {pageData.discover_repeater.map((mrow, k) => {
                      return (
                        <div className="" key={k}>
                          <Link className="discover-card" href={mrow.link_discvr_rptr}>
                            <div className="img-wrapper">
                              <Image
                                width={96}
                                height={96}
                                src={mrow.icon_discvr_rptr}
                                alt={mrow.title_discvr_rptr}
                              />
                            </div>
                            <h4>{mrow.title_discvr_rptr}</h4>
                            <p>{mrow.description_discvr_rptr}</p>
                          </Link>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
