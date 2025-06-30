"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import CheckScreenWidth from "../../components/CheckScreenWidth";
import FixedScrolling from "../../components/FixedScrolling";
import Link from "next/link";
import NavLink from "../../components/NavLink";
import { PricingListItemCheck } from "../../components/SVG";
import Image from "next/image";
import ServiceDiscoverScroll from "../../components/ServiceDiscoverScroll";
import ServiceDiscoverSlider from "../../components/ServiceDiscoverSlider";
import CheckMobile from "../../components/CheckMobile";

export default function ServicesLevelThreeSections({
  pageData,
  acf_data,
  serviceTitle,
  slug,
}) {
  if (acf_data) {
    return (
      <>
        <section className="service-level-3-banner">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col">
                <div className="title_blk has-btn-grp has-btn-single">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: acf_data.banner_title,
                    }}
                  ></h1>
                  <p>{acf_data.banner_description}</p>
                  <Link href="/contact">Get a Consultation</Link>
                </div>
              </div>
              {/* <CheckScreenWidth setWidth={991}> */}
              <div className="col-md-6">
                <div className="video-container has-img">
                  <Image
                    src="/images/services-level-three-gwebpro-banner.png"
                    alt=""
                    width={346}
                    height={343}
                  />
                  <video
                    src={acf_data.banner_video}
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              </div>
              {/* </CheckScreenWidth> */}
            </div>
          </div>
        </section>
        <div className="breadcrumb">
          <NavLink href="/">Home</NavLink>/
          <NavLink href={`/services/${slug}`}>{serviceTitle}</NavLink>
        </div>
        {Array.isArray(acf_data.records_repeater) &&
          acf_data.records_repeater.length > 0 && (
            <section className="business-stats">
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <div className="stats-wrapper">
                      {acf_data.records_repeater.map((row, k) => (
                        <div className="stats" key={k}>
                          <div className="icon">
                            <Image
                              src={row.record_icon}
                              alt=""
                              width="64"
                              height="64"
                            />
                            <div className="number">{row.record_title}</div>
                          </div>
                          <div className="field">{row.record_value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        <section className="seo-strategy pad_cmn_blk">
          <div className="container">
            <div className="row">
              <CheckScreenWidth>
                <div className="col-md-6">
                  <div className="video-container">
                    <video
                      src={acf_data.video_seo_strategy}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </div>
              </CheckScreenWidth>
              <div className="col-md-6">
                <div className="title_blk">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.heading_seo_strategy,
                    }}
                  ></h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: acf_data.content_seo_strategy,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <FixedScrolling /> */}
        <CheckScreenWidth setWidth={991}>
          <ServiceDiscoverScroll pageData={acf_data} />
        </CheckScreenWidth>
        <CheckMobile setWidth={992}>
          <ServiceDiscoverSlider pageData={acf_data} />
        </CheckMobile>
        <section className="cta-dark-bg services-level-three pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-white has-btn-grp has-btn-single">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.bottom_banner_heading,
                    }}
                  ></h2>
                  <Link href="/contact/">
                    {acf_data.bottom_banner_btn_text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pad_cmn_blk pricing-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk center text-center">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.heading_pricing,
                    }}
                  ></h2>
                  <p>{acf_data.description_pricing}</p>
                </div>
              </div>
            </div>

            {Array.isArray(acf_data.pricing_repeater) &&
              acf_data.pricing_repeater.length > 0 && (
                <div className="row">
                  <div className="col">
                    <Swiper
                      slidesPerView={"auto"}
                      // centeredSlides={true} // Enables center mode
                      className="pricing-slider"
                      pagination={{ clickable: true }}
                      modules={[Pagination]}
                      breakpoints={{ 992: { slidesPerView: 3 } }}
                    >
                      {acf_data.pricing_repeater.map((p_res, p) => (
                        <SwiperSlide key={p}>
                          <div className="pricing-card">
                            <div className="price-row">
                              <div className="plan">
                                <p>
                                  {p_res.title_pricing_rptr} <br />
                                  <span> {p_res.subtitle_pricing_rptr}</span>
                                </p>
                              </div>
                              <div className="price">
                                <p>$ {p_res.amount_pricing_rptr}</p>
                              </div>
                            </div>
                            <hr />
                            <div
                              className="features"
                              dangerouslySetInnerHTML={{
                                __html: p_res.description_pricing_rptr,
                              }}
                            ></div>

                            <Link href="/contact/">Purchase Plan</Link>
                          </div>
                        </SwiperSlide>
                      ))}

                      {/* <SwiperSlide>
                  <div className="pricing-card">
                    <div className="price-row">
                      <div className="plan">
                        <p>
                          Silver <br />
                          <span>Per Month</span>
                        </p>
                      </div>
                      <div className="price">
                        <p>$50</p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor consectetur.
                      </li>
                    </ul>
                    <ul className="not-included">
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit.
                      </li>
                      <li>
                        <PricingListItemCheck /> Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Link href="/">Purchase Plan</Link>
                  </div>
                </SwiperSlide> */}
                    </Swiper>
                  </div>
                </div>
              )}
          </div>
        </section>
        <section className="section-greater-marketing pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.heading_marketing,
                    }}
                  ></h2>
                </div>
              </div>
            </div>

            {Array.isArray(acf_data.marketing_repeater) &&
              acf_data.marketing_repeater.length > 0 && (
                <div className="row">
                  <div className="col">
                    <Swiper
                      slidesPerView={"auto"}
                      spaceBetween={20}
                      breakpoints={{
                        992: { slidesPerView: 3, spaceBetween: 30 },
                      }}
                    >
                      {acf_data.marketing_repeater?.map((m, k) => {
                        const isGreaterMarketing = m.photo_marketing;

                        return (
                          <SwiperSlide key={k}>
                            <div className="greater-marketing-card">
                              <div className="upper">
                                {isGreaterMarketing ? (
                                  <>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: m.title_marketing,
                                      }}
                                    ></span>
                                    <Image
                                      src={m.photo_marketing}
                                      alt="G Web Pro Logo"
                                      width={149}
                                      height={42}
                                    />
                                  </>
                                ) : (
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: m.title_marketing,
                                    }}
                                  ></p>
                                )}
                              </div>
                              <div
                                className="lower"
                                dangerouslySetInnerHTML={{
                                  __html: m.description_marketing,
                                }}
                              ></div>
                            </div>
                          </SwiperSlide>
                        );
                      })}

                      {/* <SwiperSlide>
                  <div className="greater-marketing-card">
                    <div className="upper">
                      <p>
                        In-house
                        <br />
                        SEO
                      </p>
                    </div>
                    <div className="lower">
                      <ul>
                        <li>
                          Suspendisse vitae lacus nec libero congue tincidunt
                          vitae id urna.
                        </li>
                        <li>
                          Donec a neque in sem efficitur volutpat elementum ac
                          nisl.
                        </li>
                        <li>Proin vehicula odio et bibendum facilisis.</li>
                        <li>Phasellus lobortis mauris id sagittis semper.</li>
                        <li>
                          Nam scelerisque nisi ac lacus fermentum, eget
                          consectetur nibh varius.
                        </li>
                        <li>Maecenas quis felis ac tortor viverra viverra.</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide> */}
                    </Swiper>
                  </div>
                </div>
              )}
          </div>
        </section>
        <section className="services-cta">
          <div className="container">
            <div className="row">
              <div className="col has-btn-grp has-btn-single">
                <p>Service With Us</p>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: acf_data.heading_service_with_us,
                  }}
                ></h2>
                <Link href="/">{acf_data.button_title_service_with_us}</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
