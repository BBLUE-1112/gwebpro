import CheckScreenWidth from "@/app/components/CheckScreenWidth";
import NavLink from "@/app/components/NavLink";
import Link from "next/link";
import ScholarshipForm from "../components/ScholarshipForm";

export async function generateMetadata() {
  // Fetch data needed for metadata
  // const data = await apiService.getPagedata("wp/v2/pages/259");

  return {
    title: "Scholarship Application Form",
    description:
      "Scholarship Application Form",
    // You can add more metadata from yoast_head_json if needed
  };
}

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Application Form</h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="/images/services-banner.mp4"
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
        <Link href="/">Home</Link>/
        <NavLink href="/application-form">Application Form</NavLink>
      </div>
      <section className="section-contact-form pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="gwebpro-prose">
                <h2>
                  G Web Pro Annual Scholarship Program Application Form
                  Submission
                </h2>
                <p>
                  Our annual scholarship program grants $1,500 CAD, or $1,500
                  USD (depending where the university or college is located) to
                  a student who showcases ability to understand a topic and its
                  impact to current and future technologies.
                </p>
                <p>
                  To apply for this scholarship, you must be a U.S or Canadian
                  full-time student and permanent resident and send us a short
                  essay on:
                </p>
                <p>
                  <strong>
                    How the digital age and new media has acted as a platform
                    for innovative new technologies that have impacted multiple
                    industries?
                  </strong>
                </p>
                <p>
                  Submit your 600+ word essay using the following form before
                  August 15th, 2018.
                </p>
                <p>
                  <a href="/annual-scholarship-2019">
                    Learn more about our selection criteria and process
                  </a>
                </p>
                <h2>Apply to this scholarship</h2>
              </div>
            </div>
          </div>

        <ScholarshipForm/>


          <div className="row mt-5">
            <div className="col">
              <div className="gwebpro-prose">
                <p>
                  We will be contacting all winners by email. We will also be
                  sharing updates and winners of the scholarship on social media
                  pages. Don’t forget to follow us to stay informed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
