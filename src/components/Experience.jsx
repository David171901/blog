import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

const Details = ({ position, company, companyLink, time, works }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <div className="w-full md:text-sm">
          <ul class="list-disc ml-4">
            {works.map(work => (
              <li>{work}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-16">
      <AnimatedText
        text="Experience"
        className="font-bold !text-4xl sm:!text-2xl w-full text-center my-16 mt-16 dark:!text-light"
      />

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="FrontEnd Assistant"
            company="Personnel Advantage SAC"
            companyLink="https://www.linkedin.com/company/personnelgroup/"
            time="October 2022 to January 2023"
            works={["Management and administration of the Wong and Metro web pages using the VTEX CMS.","Content management and web design within the VTEX CMS, including content creation, editing and publishing.","Use of the legacy CMS Portal and the VTEX Headless CMS.",
            "Ability to work as a team with other developers and web designers, as well as with the marketing and content management team of CENCOSUD RETAIL PERU S.A."]}
          />

          <Details
            position="FrontEnd Developer"
            company="Aputek"
            companyLink="https://www.linkedin.com/company/aputek/"
            time="August 2021 to present"
            works={["Development of web applications in general oriented mainly to the health sector.","Development of responsive and adaptive web applications for different devices.", "Development of web applications that consume RESTful APIs using technologies such as Axios, Fetch API or jQuery (Ajax).", "Development of Web Components using technologies such as HTML, CSS, JavaScript.", "Integration of payment systems such as Stripe in web applications.", "Integration of authentication and authorization services using JWT.", "Design and development of user interfaces for web applications using tools such as Figma.", "Migration of vanilla JavaScript projects to React.", "WebSockets implementation for real-time applications.", "Use of libraries such as Leaflet for the integration of interactive maps, graphic libraries such as amChartJS for the creation of dynamic graphics in web applications."]}
          />

          <Details
            position="PI Programmer"
            company="Communications and Systems Development"
            companyLink="https://www.linkedin.com/company/commperu/"
            time="September 2022 to May 2023"
            works={["Experience in engineering projects for the mining sector, with knowledge in equipment maintenance and control systems.","Ability to create and design interactive and custom dashboards using the PIVISION / PISYSTEM platform.", "Experience in the creation of Mockups using graphic design tools such as Figma, for the presentation of project proposals."]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
