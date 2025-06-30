"use client";
import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink, Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import CheckScreenWidth from "../../components/CheckScreenWidth";
import CheckMobile from "../../components/CheckMobile";
import useScrollDirectionRef from "../../hooks/useScrollDirectionRef";
import BrandMarket from "../../components/BrandMarket";
import TabsService from "../../components/TabsService";

// Import Swiper React components
export default function ServicesSections({ acf_data, brandData }) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const scrollDirectionRef = useScrollDirectionRef();
  const scrollDirection = scrollDirectionRef.current;
  console.log(scrollDirection);
  // const scrollDirection = false;
  // const scrollOffset = scrollDirection === "down" ? -60 : -80;
  const scrollOffset = -150;
  // const scrollOffset = 0;

  // Function to scroll the active link into view
  const handleSetActive = (to) => {
    const activeLink = document.querySelector(`[data-link="${to}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        inline: "center", // Ensures the link is horizontally centered
        block: "nearest", // No vertical scrolling (sticky nav stays in place)
      });
    }
  };
  // const sliderRef = useRef(null);
  return (
    <div>
      <section
        className={`section-sticky ${
          scrollDirection === "down" ? "hide" : "show"
        }`}
      >
        <nav className="sticky-nav">
          <ul>
            <li>
              <ScrollLink
                to="section1"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section1"
              >
                {acf_data.tab_one_heading}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section2"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section2"
              >
                {acf_data.tab_two_heading}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section3"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section3"
              >
                {acf_data.tab_three_heading}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section4"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section4"
              >
                {acf_data.tab_four_heading}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section5"
                smooth={true}
                duration={500}
                // offset={-60}
                offset={scrollOffset}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                data-link="section5"
              >
                {acf_data.tab_five_heading}
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </section>
      <Element name="section1">
        <section className="pad_cmn_blk section-revenue">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.tab_section_one_title,
                    }}
                  ></h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: acf_data.tab_section_one_description,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <CheckScreenWidth setWidth={575}>
              {Array.isArray(acf_data.tab_section_one_repeater) &&
                acf_data.tab_section_one_repeater.length > 0 && (
                  <div className="row revenue-card-row gy-4 justify-content-center">
                    {acf_data.tab_section_one_repeater.map((tb_row, k) => (
                      <div className="col-lg-3 col-md-4 col-sm-6" key={k}>
                        <div className="revenue-card">
                          <div className="logo">
                            <img
                              src={
                                tb_row?.tab_one_rptr_icon ||
                                "/images/placeholder.png"
                              }
                              alt=""
                            />
                          </div>
                          <h3>{tb_row.tab_one_rptr_title}</h3>
                          <p>{tb_row.tab_one_rptr_description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </CheckScreenWidth>

            <CheckMobile setWidth={576}>
              {Array.isArray(acf_data.tab_section_one_repeater) &&
                acf_data.tab_section_one_repeater.length > 0 && (
                  <div className="row revenue-card-row">
                    <Swiper slidesPerView={"auto"} spaceBetween={20}>
                      {acf_data.tab_section_one_repeater.map((tb_row, k) => (
                        <SwiperSlide style={{ width: "auto" }} key={k}>
                          <div className="col">
                            <div className="revenue-card">
                              <div className="logo">
                                <img
                                  src={
                                    tb_row?.tab_one_rptr_icon ||
                                    "/images/placeholder.png"
                                  }
                                  alt=""
                                />
                              </div>
                              <h3>{tb_row.tab_one_rptr_title}</h3>
                              <p>{tb_row.tab_one_rptr_description}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
            </CheckMobile>
          </div>
        </section>
        {/* </Element> */}
        {/* <Element name="section2"> */}
        <BrandMarket
          title={brandData.brand_section_title}
          description={brandData.brand_section_desc}
          brandLogo={brandData.brand_logo_list}
        />
      </Element>
      <Element name="section2">
        <section className="market_tab_blk pad_cmn_blk">
          <div className="container-fluid">
            <div className="row">
              <CheckScreenWidth setWidth={991}>
                <div className="col-lg-6">
                  <div className="video-container">
                    <video
                      src={acf_data.tab_section_two_video}
                      autoPlay={true}
                      loop={true}
                      muted={true}
                    ></video>
                  </div>
                </div>
              </CheckScreenWidth>

              <div className="col-lg-6">
                <div className="title_blk">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.tab_section_two_title,
                    }}
                  ></h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: acf_data.tab_section_two_description,
                    }}
                  ></div>
                </div>
                <TabsService tabsData={acf_data.tab_section_two_repeater} />
                {/* Note to Backend */}
                {/* In the above Tabs component we need to pass the data to be able to render the tabs and respective small cards */}
                {/* From the home page I got this <Tabs tabsData={pageData.marketing_tab_repeater} /> */}
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="section3">
        <section className="section-impact pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>{acf_data.tab_section_three_title}</h2>
                  <h3>{acf_data.tab_section_three_short_desc}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: acf_data.tab_section_three_description,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {Array.isArray(acf_data.tab_section_three_repeater) &&
              acf_data.tab_section_three_repeater.length > 0 && (
                <div className="row">
                  <div className="col">
                    <ul>
                      {acf_data.tab_section_three_repeater.map((tr, i) => (
                        <li key={i}>
                          <h4>{tr.tab_three_rptr_title}</h4>
                          <p>{tr.tab_three_rptr_description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
          </div>
        </section>

        {Array.isArray(acf_data.tab_section_repeater_two) &&
          acf_data.tab_section_repeater_two.length > 0 && (
            <section className="section-impact-slider">
              <div className="container-fluid">
                <div className="row">
                  <div className="col"></div>
                </div>
                <div className="row">
                  <div className="col position-relative">
                    {/* <ImpactSlider sliderRef={sliderRef} /> */}
                    <div className="controls">
                      <div className="impact-slider-prev">
                        <i className="fa-regular fa-arrow-left"></i>
                      </div>
                      <div className="impact-slider-next">
                        <i className="fa-regular fa-arrow-right"></i>
                      </div>
                    </div>
                    <Swiper
                      slidesPerView={"auto"}
                      // pagination={{
                      //   clickable: true,
                      // }}
                      navigation={{
                        prevEl: ".impact-slider-prev", // Use custom class for prev button
                        nextEl: ".impact-slider-next", // Use custom class for next button
                        clickable: true,
                      }}
                      modules={[Navigation]}
                    >
                      {acf_data.tab_section_repeater_two.map((res, j) => (
                        <SwiperSlide style={{ width: "auto" }} key={j}>
                          <div className="impact-slider">
                            <Image
                              src={
                                res?.tab_three_rptr_two_bg_image ||
                                "/images/placeholder.png"
                              }
                              alt=""
                              width={1612}
                              height={547}
                            />
                            <div className="content">
                              <div className="title">
                                <div className="icon">
                                  <Image
                                    src={
                                      res?.tab_three_rptr_two_icon ||
                                      "/images/placeholder.png"
                                    }
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                </div>
                                <h2>{res.tab_three_rptr_two_title}</h2>
                              </div>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: res.tab_three_rptr_two_description,
                                }}
                              ></div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          )}
      </Element>
      <Element name="section4">
        <section className="section-experts pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: acf_data.tab_section_four_title,
                    }}
                  ></h2>
                  <h3>{acf_data.tab_section_four_short_desc}</h3>
                </div>
              </div>
            </div>
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="row row-cols-md-2 row-cols-2 expert-box-row gy-4">
                  <div className="col">
                    <div className="expert-box yellow">
                      <div className="icon">
                        <Image
                          src={
                            acf_data?.tab_four_record_one_icon ||
                            "/images/placeholder.png"
                          }
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">
                        {acf_data.tab_four_record_one_title}
                      </h4>
                      <p>{acf_data.tab_four_record_one_desc}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="expert-box purple">
                      <div className="icon">
                        <Image
                          src={
                            acf_data?.tab_four_record_two_icon ||
                            "/images/placeholder.png"
                          }
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">
                        {acf_data.tab_four_record_two_title}
                      </h4>
                      <p>{acf_data.tab_four_record_two_desc}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="expert-box green">
                      <div className="icon">
                        <Image
                          src={
                            acf_data?.tab_four_record_three_icon ||
                            "/images/placeholder.png"
                          }
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">
                        {acf_data.tab_four_record_three_title}
                      </h4>
                      <p>{acf_data.tab_four_record_three_desc}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="expert-box blue">
                      <div className="icon">
                        <Image
                          src={
                            acf_data?.tab_four_record_four_icon ||
                            "/images/placeholder.png"
                          }
                          alt=""
                          width={64}
                          height={64}
                        />
                      </div>
                      <h4 className="title">
                        {acf_data.tab_four_record_four_title}
                      </h4>
                      <p>{acf_data.tab_four_record_four_desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {Array.isArray(acf_data.tab_section_four_repeater) &&
                acf_data.tab_section_four_repeater.length > 0 && (
                  <div className="col-lg-6">
                    <div className="technology-used">
                      <h4>Technology Uses</h4>
                      <div className="techs">
                        <ul>
                          {acf_data.tab_section_four_repeater.map((row, l) => (
                            <li key={l}>
                              <Image
                                src={
                                  row?.tab_four_rptr_logo ||
                                  "/images/placeholder.png"
                                }
                                alt={row?.tab_four_rptr_title || "placeholder"}
                                width={205}
                                height={70}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </section>
      </Element>
      <div className="line-full-width"></div>
      <Element name="section5">
        <section className="client-satisfaction pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>{acf_data.tab_section_five_title}</h2>
                  <h3>{acf_data.tab_section_five_description}</h3>
                </div>
              </div>
            </div>

            {Array.isArray(acf_data.tab_section_five_repeater) &&
              acf_data.tab_section_five_repeater.length > 0 && (
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <Swiper
                      modules={[Navigation, Pagination, Controller]}
                      slidesPerView={"auto"}
                      spaceBetween={20}
                      navigation={{
                        prevEl: ".custom-prev-button", // Use custom class for prev button
                        nextEl: ".custom-next-button", // Use custom class for next button
                        clickable: true,
                      }}
                      // controller={{ control: controlledSwiper }} // Link to the second Swiper
                      controller={{ control: secondSwiper }} // Link to the second Swiper
                      onSwiper={setFirstSwiper} // Set the first Swiper instance
                      // Responsive breakpoints
                      breakpoints={{
                        768: { slidesPerView: 1 },
                        spaceBetween: 0,
                      }}
                    >
                      {acf_data.tab_section_five_repeater.map((row2, m) => (
                        <SwiperSlide key={m}>
                          <div className="client-info">
                            <p>Industry</p>
                            <h3>{row2.industry_name}</h3>
                            <div className="client">
                              <Image
                                src={
                                  row2?.client_logo || "/images/placeholder.png"
                                }
                                alt=""
                                width={93}
                                height={93}
                              />
                              <h3>{row2.client_name}</h3>
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
                  <div className="col-md-8">
                    {/* <div className="client-card-bg"> */}
                    <Swiper
                      modules={[Controller]}
                      slidesPerView={"auto"}
                      spaceBetween={20}
                      // controller={{ control: controlledSwiper }} // Link to the first Swiper
                      // onSwiper={setControlledSwiper} // Set the second Swiper as the controlled one
                      controller={{ control: firstSwiper }} // Link to the first Swiper
                      onSwiper={setSecondSwiper} // Set the second Swiper instance
                      // Responsive breakpoints
                      breakpoints={{
                        768: { slidesPerView: 1 },
                        spaceBetween: 0,
                      }}
                    >
                      {acf_data.tab_section_five_repeater.map((row2, m) => (
                        <SwiperSlide key={m}>
                          <div className="client-card">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: row2.client_content,
                              }}
                            ></div>
                          </div>

                          {/* <div className="client-card" >
                      <h4>Challenge</h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <h4>Solution</h4>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Integer eget nulla feugiat, pharetra quam at, maximus
                          velit.
                        </li>
                        <li>
                          Duis vel orci congue, porta mauris maximus, dignissim
                          dui.
                        </li>
                      </ul>
                      <div className="result has-btn-grp has-btn-single">
                        <div className="result-loader"></div>
                        <div>
                          <h4>Result</h4>
                          <h5>153% Increase In Lead Conversion</h5>
                          <Link href="/">View Details</Link>
                        </div>
                      </div>
                    </div> */}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    {/* </div> */}
                  </div>
                </div>
              )}
          </div>
        </section>
      </Element>
    </div>
  );
}
function ImpactNextArrow({ className, style, onClick }) {
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa-regular fa-arrow-right"></i>
    </button>
  );
}
ImpactNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function ImpactPrevArrow({ className, style, onClick }) {
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa-regular fa-arrow-left"></i>
    </button>
  );
}
ImpactPrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
