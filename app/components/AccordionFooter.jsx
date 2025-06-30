// import { useState } from "react";

// const AccordionFooter = () => {
//   const AccordionData = [
//     {
//       id: 1,
//       title: "Services",
//       data: [
//         "Search engine Optimization Services",
//         "Paid & Social Media",
//         "Branding & Content",
//         "Design",
//         "Development",
//         "Software Solutions",
//         "Digital Product Strategy",
//         "Digital Transformation Consulting",
//       ],
//     },

//     {
//       id: 2,
//       title: "Company",
//       address:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit recusandae libero.",

//       data: [
//         "Search engine Optimization Services 2",
//         "Paid & Social Media",
//         "Branding & Content",
//         "Design",
//         "Development",
//         "Software Solutions",
//         "Digital Product Strategy",
//         "Digital Transformation Consulting",
//       ],
//     },

//     {
//       id: 3,
//       title: "Blog",
//       address:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit recusandae libero.",

//       data: [
//         "Search engine Optimization Services 3",
//         "Paid & Social Media",
//         "Branding & Content",
//         "Design",
//         "Development",
//         "Software Solutions",
//         "Digital Product Strategy",
//         "Digital Transformation Consulting",
//       ],
//     },
//   ];

//   const [openAccordion, setOpenAccordion] = useState(null); // Track the open accordion ID

//   const toggleAccordion = (id) => {
//     setOpenAccordion(openAccordion === id ? null : id); // Toggle the accordion
//   };

//   return (
//     <div className="accor_main">
//       {AccordionData.map((fdata) => (
//         <div className="accor_blk" key={fdata.id}>
//           <div className="acc-title" onClick={() => toggleAccordion(fdata.id)}>
//             {fdata.title}
//             <span>
//               <i
//                 className={`fa-solid ${
//                   openAccordion === fdata.id ? "fa-minus" : "fa-plus"
//                 }`}
//               ></i>
//             </span>
//           </div>

//           {openAccordion === fdata.id && (
//             <div className="acc-desc">
//               {fdata.data.map((item, index) => (
//                 <div key={index}>{item}</div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AccordionFooter;
"use client";
import { useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

const AccordionFooter = ({menuData}) => {
  const AccordionData = [
  

    {
      id: 2,
      title: "Company",
      address:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit recusandae libero.",

      data: [
        { name: "About", link: "/about" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "FAQ", link: "/faq" },
      ],
    },

    {
      id: 3,
      title: "Quick Links",
      address:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit recusandae libero.",

      data: [
        {
          name: "Annual Scholarship 2019",
          link: "/annual-scholarship-2019",
        },
        {
          name: "Annual Scholarship 2018",
          link: "/annual-scholarship-2018",
        },
        // {
        //   name: "Client Portal",
        //   link: "https://www.gwebpro.com/client-portal/",
        // },
        {
          name: "Questionnaires",
          link: "/questionnaires",
        },
      ],
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null); // Track the open accordion ID

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id); // Toggle the accordion
  };

  return (
    <div className="accor_main">

        <div className={`accor_blk ${openAccordion === 1? "active" : ""}`} key="1">
          <div className="acc-title" onClick={() => toggleAccordion(1)}>Services<span><i className={`fa-solid ${openAccordion === 1 ? "fa-minus" : "fa-plus"}`}></i></span>
          </div>
          <div className="collapsible">
            <div className="hidden">
              <div className="content">
                
                <ul className="acc-desc">
                  {menuData[0].children.map((m_item, m_key) => (
                    <li key={m_key}>
                      <Link href={`/services/${m_item.slug}`}>{m_item.title}</Link>
                    </li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      {AccordionData.map((fdata) => (
        <div
          className={`accor_blk ${openAccordion === fdata.id ? "active" : ""}`}
          key={fdata.id}
        >
          <div className="acc-title" onClick={() => toggleAccordion(fdata.id)}>
            {fdata.title}
            <span>
              <i
                className={`fa-solid ${
                  openAccordion === fdata.id ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </div>
          <div className="collapsible">
            <div className="hidden">
              <div className="content">
                {/* Always show acc-desc */}
                <ul className="acc-desc">
                  {fdata.data.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionFooter;
