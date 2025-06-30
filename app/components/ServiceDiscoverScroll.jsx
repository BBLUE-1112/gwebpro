"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDiscoverScroll({ pageData }) {
  const sectionRef = useRef(null);
  const pinColumnRef = useRef(null);
  const scrollColumnRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinColumn = pinColumnRef.current;
    const scrollColumn = scrollColumnRef.current;

    if (section && pinColumn && scrollColumn) {
      gsap.to(scrollColumn, {
        y: () => window.innerHeight - scrollColumn.clientHeight,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: "margin",
          start: "top top",
          endTrigger: scrollColumn,
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pageData?.discover_repeater]);

  if (!pageData?.discover_repeater) return null;

  return (
    <section
      className="discover_blk pad_cmn_blk d-none d-lg-block"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 pin-column" ref={pinColumnRef}>
            <div className="title_blk title-big">
              <h2>{pageData.heading_discover}</h2>
              <h4
                dangerouslySetInnerHTML={{
                  __html: pageData.description_discover,
                }}
              />
            </div>
            <div className="video-container">
              <video src={pageData.video_discover} autoPlay loop muted />
            </div>
          </div>

          <div className="col-md-7 col-lg-7 ps-lg-5" ref={scrollColumnRef}>
            <div className="discover-cards">
              <div className="row">
                {pageData.discover_repeater.map((row, i) => (
                  <div className="col-md-6" key={i}>
                    <Link className="discover-card" href={row.link_discvr_rptr}>
                      <div className="img-wrapper">
                        <Image
                          width={96}
                          height={96}
                          src={row.icon_discvr_rptr}
                          alt={row.title_discvr_rptr}
                        />
                      </div>
                      <h4>{row.title_discvr_rptr}</h4>
                      <p>{row.description_discvr_rptr}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
