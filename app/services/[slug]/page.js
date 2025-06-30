import Link from "next/link";
import CheckScreenWidth from "../../components/CheckScreenWidth";
import NavLink from "../../components/NavLink";
import apiService from "../../apiServices/apiService";
import ServicesSections from "./ServicesSections";
import ServicesLevelTwoSections from "./ServicesLevelTwoSections";
import ServicesLevelThreeSections from "./ServicesLevelThreeSections";

export async function generateMetadata({ params }) {
  const { slug } = params;
  // Fetch data needed for metadata
  const data = await apiService.getPagedata(`wp/v2/pages?slug=${slug}`);

  return {
    title: data[0]?.yoast_head_json?.title || "G Web Pro",
    description:
      data[0]?.yoast_head_json?.description ||
      "G Web Pro offers digital marketing, software development, and consulting services in Toronto. Businesses trust us for tailored SEO, web design, and e-commerce solutions.",
    // You can add more metadata from yoast_head_json if needed
  };
}

export default async function Services({ params }) {
  const { slug } = params;

  //fetch service page data
  const service_data = await apiService.getPagedata(`wp/v2/pages?slug=${slug}`);
  const serviceDetails = service_data;
  const acfData = serviceDetails[0].acf;
  const pageTemplate = serviceDetails[0].template;
  const serviceTitle = serviceDetails[0].title.rendered;

  //fetch brands data
  const brdata = await apiService.getacfData("acf/v1/leader-brands/");
  const brandData = brdata;

  //fetch home data
  const data = await apiService.getPagedata("wp/v2/pages/8");
  const pageData = data.acf;

  if (pageTemplate == "templates/menu_page.php") {
    return (
      <>
        <section className="services-banner inner-page-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                <div className="banner-content">
                  <div className="position-relative title_blk">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: acfData.banner_title_service,
                      }}
                    ></h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: acfData.banner_description_service,
                      }}
                    ></p>
                  </div>
                  <CheckScreenWidth setWidth={991}>
                    <div className="video-container">
                      <video
                        src={acfData.banner_bg_video_service}
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
          <NavLink href={`/services/${slug}`}>
            {serviceDetails[0].title.rendered}
          </NavLink>
        </div>
        <ServicesSections acf_data={acfData} brandData={brandData} />
        <section className="services-cta">
          <div className="container">
            <div className="row">
              <div className="col has-btn-grp">
                <p>{acfData.serv_with_us_first_title}</p>
                <h2>{acfData.serv_with_us_second_title}</h2>
                <Link href={acfData.serv_button_one_link}>
                  {acfData.serv_button_one_title}
                </Link>
                <Link href={acfData.serv_button_two_link}>
                  {acfData.serv_button_two_title}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  if (pageTemplate == "templates/sub_menu_page.php") {
    return (
      <>
        <ServicesLevelTwoSections
          acf_data={acfData}
          slug={slug}
          serviceTitle={serviceTitle}
        />
      </>
    );
  }
  if (pageTemplate == "templates/sub_submenu_page.php") {
    return (
      <>
        <ServicesLevelThreeSections
          pageData={pageData}
          acf_data={acfData}
          serviceTitle={serviceTitle}
          slug={slug}
        />
      </>
    );
  }
}
