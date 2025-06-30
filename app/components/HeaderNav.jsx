"use client";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Link, useLocation } from "react-router-dom";
import { Logo, Menu, MenuClose } from "./SVG";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import useScrollDirection from "../hooks/useScrollDirectionRef";
import useIsScrolled from "../hooks/useIsScrolled";
import LoaderLinks from "./LoaderLinks";
import Link from "next/link";

const HeaderNav = ({ headerData, menuData }) => {
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const scrollDirection = useScrollDirection(100, isHoveringSubmenu);
  const isScrolled = useIsScrolled();

  const pathname = usePathname();

  useEffect(
    function () {
      setIsMobileMenuOpen(false);
    },
    [pathname]
  );
  function handleToggle(index) {
    if (activeIndex === index) setActiveIndex(null);
    else {
      setActiveIndex(index);
    }
  }
  function handleMegaMenuToggle(e) {
    e.preventDefault();
    setShowMegaMenu((is) => !is);
  }
  function CloseMobileMenu(e) {
    e.stopPropagation();
    setActiveIndex(null);
    setIsMobileMenuOpen(false);
  }
  return (
    <div
      className={`menu-fixed-wrapper ${
        scrollDirection === "down" ? "hide" : "show"
      } ${isScrolled ? "scrolled" : ""}`}
      onMouseEnter={() => setIsHoveringSubmenu(true)}
      onMouseLeave={() => setIsHoveringSubmenu(isMobileMenuOpen)}
    >
      <div className="d-none d-lg-block">
        <nav>
          <div className="container-fluid header_nav d-flex align-items-center justify-content-between">
            <div className="logo">
              <LoaderLinks href="/">
                <Logo />
              </LoaderLinks>
            </div>

            <div className="navmenu_mid">
              <ul>
                {menuData.map((m, j) =>
                  j === 0 ? (
                    <li key={j}>
                      <span>{m.title}</span>

                      <div className={`sub-menu`}>
                        <div className="container-fluid sub-menu-container scrollable-div">
                          <Tab.Container defaultActiveKey={0}>
                            <div className="row">
                              <div className="col-md-4 col-tabs">
                                <div className="">
                                  <div className="sub-menu-title">
                                    <p>{m.title}</p>
                                  </div>
                                  <Nav variant="pills" className="flex-column">
                                    {m.children.map((child, k) => (
                                      <Nav.Item key={k}>
                                        <Nav.Link eventKey={k} as={"button"}>
                                          {child.title}
                                          <span></span>
                                        </Nav.Link>
                                      </Nav.Item>
                                    ))}
                                  </Nav>
                                </div>
                                <div className="reviewed-on">
                                  <p>We are Reviewed on</p>
                                  <div className="platforms">
                                    {headerData.header_review_sites.map(
                                      (row, k) => (
                                        <a
                                          href={row.review_site_link_header}
                                          target="_blank"
                                          key={k}
                                        >
                                          <img
                                            src={row.review_site_logo_header}
                                            alt={row.review_site_name_header}
                                          />
                                        </a>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-8 col-tabs-data">
                                <Tab.Content>
                                  {m.children.map((child2, k2) => (
                                    <Tab.Pane eventKey={k2} key={k2}>
                                      <div className="row">
                                        <div className="col">
                                          <div className="sub-menu-title">
                                            <p>{child2.title}</p>
                                            <LoaderLinks
                                              href={`/services/${child2.slug}`}
                                            >
                                              Explore More <span></span>
                                            </LoaderLinks>
                                          </div>
                                        </div>
                                      </div>

                                      {Array.isArray(child2.children) &&
                                        child2.children.length > 0 && (
                                          <div className="row row-cols-2 row-cols-lg-3">
                                            {child2.children.map(
                                              (subchild, l) => (
                                                <div className="col" key={l}>
                                                  <div className="title">
                                                    <LoaderLinks
                                                      href={`/services/${subchild.slug}`}
                                                    >
                                                      <span
                                                        dangerouslySetInnerHTML={{
                                                          __html:
                                                            subchild.title,
                                                        }}
                                                      ></span>
                                                    </LoaderLinks>
                                                  </div>

                                                  {Array.isArray(
                                                    subchild.children
                                                  ) &&
                                                    subchild.children.length >
                                                      0 && (
                                                      <ul className="sub-links">
                                                        {subchild.children.map(
                                                          (sub_subchild, x) => (
                                                            <li key={x}>
                                                              <LoaderLinks
                                                                href={`/services/${sub_subchild.slug}`}
                                                              >
                                                                <span
                                                                  dangerouslySetInnerHTML={{
                                                                    __html:
                                                                      sub_subchild.title,
                                                                  }}
                                                                ></span>
                                                              </LoaderLinks>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    )}
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )}
                                    </Tab.Pane>
                                  ))}
                                </Tab.Content>
                              </div>
                            </div>
                          </Tab.Container>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li key={j}>
                      <LoaderLinks href={`/${m.slug}`}>{m.title}</LoaderLinks>

                      {/* Render sub-menu only if children exist */}
                      {Array.isArray(m.children) && m.children.length > 0 && (
                        <div className="sub-menu sm">
                          <ul>
                            {m.children.map((child, k) => (
                              <li key={k}>
                                <LoaderLinks href={`/${child.slug}`}>
                                  {child.title}
                                </LoaderLinks>
                              </li>
                            ))}
                            {/* <li><LoaderLinks href="/seo-detail">SEO Detail</LoaderLinks></li>
            <li><LoaderLinks href="/web-detail">Web Detail</LoaderLinks></li> */}
                          </ul>
                        </div>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="navmenu_end">
              <ul>
                {/* <li>
                  <LoaderLinks href="/contact">Get a Quote</LoaderLinks>
                </li> */}
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfyIGXnukYa9Cybk3NeHk4gC4F44U5o66GUMi9umkkaFi2V2w/viewform"
                    target="_blank"
                    rel="nofollow"
                  >
                    Request For Proposal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`d-block d-lg-none ${isMobileMenuOpen ? "isOpen" : ""} ${
          scrollDirection === "down" ? "hide" : "show"
        } ${isScrolled ? "scrolled" : ""}`}
        onMouseEnter={() => setIsHoveringSubmenu(true)}
        onMouseLeave={() => setIsHoveringSubmenu(isMobileMenuOpen)}
      >
        <nav>
          <div className="container-fluid header_nav d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link href="/" onClick={CloseMobileMenu}>
                <Logo />
              </Link>
            </div>
            <div
              className={`toggle d-lg-none ${isMobileMenuOpen ? "isOpen" : ""}`}
              onClick={() => setIsMobileMenuOpen((is) => !is)}
            >
              <button>{isMobileMenuOpen ? <MenuClose /> : <Menu />}</button>
            </div>
            <div
              className={`mobile-menu  ${
                isMobileMenuOpen ? "d-block" : "d-none"
              }`}
            >
              <div className="mobile-menu-block scrollable-div">
                <div className="accordion accordion_type_header_menu">
                  {menuData.map((m, j) =>
                    j === 0 ? (
                      <div
                        className={`accordion_item ${
                          activeIndex === j ? "active" : ""
                        }`}
                        key={j}
                      >
                        <div
                          className="accordion_title"
                          onClick={() => handleToggle(0)}
                          style={{ cursor: "pointer" }}
                        >
                          <div>{m.title}</div>
                          <span></span>
                        </div>
                        <div className={`collapsible`}>
                          <div className="hidden">
                            <div className="accordion_content">
                              <div className="accordion">
                                {m.children.map((child2, k2) => (
                                  <div
                                    className="accordion_item active"
                                    key={k2}
                                  >
                                    <div className="accordion_title">
                                      <Link
                                        href={`/services/${child2.slug}`}
                                        onClick={CloseMobileMenu}
                                      >
                                        {child2.title}
                                      </Link>
                                    </div>
                                    <div className="collapsible">
                                      <div className="hidden">
                                        <div className="accordion_content">
                                          {/* row-cols-md-2 */}
                                          <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 gy-3">
                                            {child2.children.map(
                                              (subchild, l) => (
                                                <div className="col" key={l}>
                                                  <div className="title">
                                                    <Link
                                                      href={`/services/${subchild.slug}`}
                                                      onClick={CloseMobileMenu}
                                                    >
                                                      <span
                                                        dangerouslySetInnerHTML={{
                                                          __html:
                                                            subchild.title,
                                                        }}
                                                      ></span>
                                                    </Link>
                                                  </div>
                                                  {Array.isArray(
                                                    subchild.children
                                                  ) &&
                                                    subchild.children.length >
                                                      0 && (
                                                      <ul className="sub-links">
                                                        {subchild.children.map(
                                                          (sub_subchild, x) => (
                                                            <li key={x}>
                                                              <Link
                                                                href={`/services/${sub_subchild.slug}`}
                                                                onClick={
                                                                  CloseMobileMenu
                                                                }
                                                              >
                                                                <span
                                                                  dangerouslySetInnerHTML={{
                                                                    __html:
                                                                      sub_subchild.title,
                                                                  }}
                                                                ></span>
                                                              </Link>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    )}
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : m.children.length > 0 ? (
                      <div
                        className={`accordion_item ${
                          activeIndex === j ? "active" : ""
                        }`}
                        key={j}
                      >
                        <div
                          className="accordion_title"
                          onClick={() => handleToggle(j)}
                          style={{ cursor: "pointer" }}
                        >
                          <div>
                            <Link href={`/${m.slug}`} onClick={CloseMobileMenu}>
                              {m.title}
                            </Link>
                          </div>
                          <span></span>
                        </div>
                        {Array.isArray(m.children) && m.children.length > 0 && (
                          <div className={`collapsible`}>
                            <div className="hidden">
                              <div className="accordion_content">
                                <ul>
                                  {m.children.map((child, k) => (
                                    <li key={k}>
                                      <Link
                                        href={`/${child.slug}`}
                                        onClick={CloseMobileMenu}
                                      >
                                        {child.title}
                                      </Link>
                                    </li>
                                  ))}
                                  {/* <li>
                                    <Link
                                      href="/seo-detail"
                                      onClick={CloseMobileMenu}
                                    >
                                      SEO Detail
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/web-detail"
                                      onClick={CloseMobileMenu}
                                    >
                                      Web Detail
                                    </Link>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        className={`accordion_item ${
                          activeIndex === j ? "active" : ""
                        }`}
                        key={j}
                      >
                        <div
                          className="accordion_title"
                          onClick={() => handleToggle(j)}
                          style={{ cursor: "pointer" }}
                        >
                          <div>
                            <Link href="/contact" onClick={CloseMobileMenu}>
                              Contact
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  )}

                  {/* <div className={`accordion_item ${
                      activeIndex === 2 ? "active" : ""
                    }`}>
                    <div
                      className="accordion_title"
                      onClick={() => handleToggle(2)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <Link href="/contact" onClick={CloseMobileMenu}>
                          Contact
                        </Link>
                      </div>
                    </div>
                    
                  </div> */}
                </div>
                <div className="navmenu_end">
                  <ul>
                    {/* <li>
                      <LoaderLinks href="/contact">Get a Quote</LoaderLinks>
                    </li> */}
                    <li>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfyIGXnukYa9Cybk3NeHk4gC4F44U5o66GUMi9umkkaFi2V2w/viewform"
                        target="_blank"
                        rel="nofollow"
                        onClick={CloseMobileMenu}
                      >
                        Request For Proposal
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
