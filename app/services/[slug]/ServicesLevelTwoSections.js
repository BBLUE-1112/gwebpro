"use client";
import AccordionTypeOne from "../../components/AccordionTypeOne";
import CheckScreenWidth from "../../components/CheckScreenWidth";
import useIsMobile from "../../components/useIsMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css/bundle";
import { useState } from "react";
import AccordionTypeTwo from "../../components/AccordionTypeTwo";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/app/components/NavLink";

export default function ServicesLevelTwoSections({
  acf_data,
  slug,
  serviceTitle,
}) {
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const isMobile = useIsMobile(992);
  if (acf_data) {
    return (
      <>
        <section className="services-banner inner-page-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <div className="banner-content">
                  <div className="position-relative title_blk center">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: acf_data.banner_title,
                      }}
                    ></h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: acf_data.banner_description,
                      }}
                    ></p>
                  </div>
                  <CheckScreenWidth setWidth={991}>
                    <div className="video-container">
                      <video
                        src={acf_data.banner_video}
                        autoPlay
                        muted
                        loop
                      ></video>
                    </div>
                  </CheckScreenWidth>
                  <div className="scroll"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="breadcrumb">
          <NavLink href="/">Home</NavLink>/
          <NavLink href={`/services/${slug}`}>{serviceTitle}</NavLink>
        </div>
        <section className="section-services-how-operate pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center center">
                  <h2>{acf_data.title_how_we_operate}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: acf_data.description_how_we_operate,
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-md-7">
                {/* <div className="accordion accordion_type_one">
                <div className="accordion_item">
                  <div className="accordion_title">
                    <h3>1. Onboarding</h3>
                  </div>
                  <div className="collapsible">
                    <div className="hidden">
                      <div className="accordion_content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don&apos;t look even slightly believable. If you
                          are going to use a passage of Lorem Ipsum, you need to
                          be sure there isn&apos;t anything embarrassing hidden
                          in the middle of text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion_item">
                  <div className="accordion_title">
                    <h3>1. Onboarding</h3>
                  </div>
                  <div className="collapsible">
                    <div className="hidden">
                      <div className="accordion_content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don&apos;t look even slightly believable. If you
                          are going to use a passage of Lorem Ipsum, you need to
                          be sure there isn&apos;t anything embarrassing hidden
                          in the middle of text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                <AccordionTypeOne data={acf_data.how_we_operate_repeater} />
              </div>

              <div className="col-md-5">
                <div className="video-container has-cta">
                  <video
                    src={acf_data.video_how_we_operate}
                    autoPlay
                    muted
                    loop
                  ></video>
                  <Link href={"/contact/"}>
                    {acf_data.video_button_title_how}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="line faq-block"></div>
        <section className="section-what-u-get pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center center">
                  <h2>{acf_data.title_what_you_get}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: acf_data.description_what_you_get,
                    }}
                  ></p>
                </div>
              </div>
            </div>

            <div className="row gy-4">
              {isMobile ? (
                <div className="col slider-card-you_get">
                  <Swiper slidesPerView={"auto"}>
                    {acf_data.repeater_what_you_get.map((row, k) => (
                      <SwiperSlide key={k}>
                        <div className="card-you_get">
                          <div className="icon">
                            <Image
                              src={
                                row?.repeater_icon_what_you_get ||
                                "/images/placeholder.png"
                              }
                              alt=""
                              width={84}
                              height={84}
                            />
                          </div>
                          <p className="title">
                            {row.repeater_title_what_you_get}
                          </p>
                          <p
                            className="text"
                            dangerouslySetInnerHTML={{
                              __html: row.repeater_description_what_you_get,
                            }}
                          ></p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                <>
                  {acf_data.repeater_what_you_get.map((row, k) => (
                    <div className="col-6" key={k}>
                      <div className="card-you_get">
                        <div className="icon">
                          <Image
                            src={
                              row?.repeater_icon_what_you_get ||
                              "/images/placeholder.png"
                            }
                            alt=""
                            width={84}
                            height={84}
                          />
                        </div>
                        <p className="title">
                          {row.repeater_title_what_you_get}
                        </p>
                        <p
                          className="text"
                          dangerouslySetInnerHTML={{
                            __html: row.repeater_description_what_you_get,
                          }}
                        ></p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
        <section className="section-what-u-want pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center center">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.section_title_feat_service,
                    }}
                  ></h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: acf_data.short_description_feat_service,
                    }}
                  ></p>
                </div>
              </div>
            </div>
            {/* <div className="row">
            <div className="col service-slider"> */}

            {/* </div>
          </div> */}
          </div>

          {Array.isArray(acf_data.feat_service_repeater) &&
            acf_data.feat_service_repeater.length > 0 && (
              <div className="service-slider">
                <Swiper slidesPerView={"auto"}>
                  {acf_data.feat_service_repeater.map((res, l) => (
                    <SwiperSlide key={l}>
                      <Link href={res.link_feat_service}>
                        <div className="card_service">
                          <Image
                            src={
                              res?.icon_feat_service ||
                              "/images/placeholder.png"
                            }
                            alt=""
                            width="96"
                            height="96"
                          />
                          <div className="title">{res.title_feat_service}</div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
        </section>
        <section className="cta-dark-bg pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-white has-btn-grp has-btn-single">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.heading_free_consultation,
                    }}
                  ></h2>
                  <Link href="/contact/">
                    {acf_data.button_title_free_consult}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {Array.isArray(acf_data.testimonial_repeater) &&
          acf_data.testimonial_repeater.length > 0 && (
            <section className="client-testimonials pad_cmn_blk">
              <div className="container">
                <div className="row">
                  <div className="offset-md-4 col-md-8">
                    <div className="title_blk">
                      <h2>
                        Client
                        <br />
                        Testimonials
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-4 order-2 order-md-1">
                    <Swiper
                      modules={[Navigation, Pagination, Controller]}
                      slidesPerView={"auto"}
                      navigation={{
                        prevEl: ".custom-prev-button", // Use custom class for prev button
                        nextEl: ".custom-next-button", // Use custom class for next button
                        clickable: true,
                      }}
                      // controller={{ control: controlledSwiper }} // Link to the second Swiper
                      controller={{ control: secondSwiper }} // Link to the second Swiper
                      onSwiper={setFirstSwiper} // Set the first Swiper instance
                      breakpoints={{ 575: { slidesPerView: 1 } }}
                    >
                      {acf_data.testimonial_repeater.map((t_res, t) => (
                        <SwiperSlide key={t}>
                          <div className="client-info">
                            <div className="client">
                              <Image
                                src={
                                  t_res?.client_logo_testimonial ||
                                  "/images/placeholder.png"
                                }
                                alt=""
                                width={93}
                                height={93}
                              />
                              <h3>{t_res.client_name_testimonial}</h3>
                              <p>{t_res.client_company_testimonial}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="controls">
                      <div className="custom-prev-button">
                        <i className="fa-regular fa-arrow-left"></i>
                      </div>
                      <div className="custom-next-button">
                        <i className="fa-regular fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 order-1 order-md-2">
                    {/* client-card-bg */}
                    <div className="">
                      <Swiper
                        modules={[Controller]}
                        slidesPerView={"auto"}
                        // controller={{ control: controlledSwiper }} // Link to the first Swiper
                        // onSwiper={setControlledSwiper} // Set the second Swiper as the controlled one
                        controller={{ control: firstSwiper }} // Link to the first Swiper
                        onSwiper={setSecondSwiper} // Set the second Swiper instance
                        breakpoints={{ 575: { slidesPerView: 1 } }}
                      >
                        {acf_data.testimonial_repeater.map((t_res2, t2) => (
                          <SwiperSlide key={t2}>
                            <div className="client-card">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: t_res2.client_review_testimonial,
                                }}
                              ></p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

        <section className="pad_cmn_blk section-faq">
          <div className="container">
            <div className="row gy-4">
              {/* <CheckScreenWidth setWidth={767}> */}
              <div className="col-md-5">
                <div className="video-container">
                  <video src={acf_data.faq_video} autoPlay muted loop></video>
                </div>
              </div>
              {/* </CheckScreenWidth> */}
              <div className="col-md-6 offset-lg-1">
                <div className="title_blk">
                  <h2>FAQ</h2>
                </div>
                <AccordionTypeTwo data={acf_data.faq_repeater} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
