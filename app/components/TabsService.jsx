// import PropTypes from "prop-types";
"use client";
import { useState } from "react";
import { DownArr } from "./SVG";
import Link from "next/link";

const TabsService = ({ tabsData }) => {
  // State to track the active tab
  const [activeTab, setactiveTab] = useState(0);

  // Event handler to set the active tab when a tab is clicked
  const handleClick = (id) => {
    setactiveTab(id);
  };
  if (tabsData) {
    return (
      <>
        <div className="tabs-container">
          <ul>
            {tabsData.map((tab, i) => (
              // Apply "active" class if it's the active tab
              <li
                key={i}
                className={activeTab === i ? "active" : ""}
                // Call handleClick when the tab is clicked
                onClick={() => handleClick(i)}
              >
                {tab.tab_repeater_title}
                <div className="arr">
                  <DownArr />
                </div>
              </li>
            ))}
          </ul>

          <div className="tabContent">
            {tabsData.map((data, i) => (
              <div
                className={`desc ${activeTab === i ? "active" : ""}`}
                key={i}
              >
                <div className="d-flex flex-wrap">
                  {Array.isArray(data.tab_service_list_repeater) &&
                    data.tab_service_list_repeater.map((nestedData, j) => (
                      <div className="" key={j}>
                        <Link
                          className="inner_DataCard"
                          href={nestedData.tab_section_link}
                        >
                          <div className="DataCard_icn">
                            <img
                              src={
                                nestedData?.tab_service_icon.url ||
                                "/images/placeholder.png"
                              }
                              alt={
                                nestedData?.tab_service_icon.alt ||
                                "placeholder"
                              }
                            />
                          </div>
                          <p>{nestedData.tab_service_title}</p>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default TabsService;
