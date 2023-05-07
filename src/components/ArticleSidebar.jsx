import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const MovingImg = ({ title, link }) => {
  return (
    <Link href={link}>
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
    </Link>
  );
};

const AnArticle = ({ title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
          justify-between bg-light text-dark first:mt-0 border border-solid border-dark
          border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
          sm:flex-col
          "
    >
      <MovingImg title={title} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const ArticleSidebar = ({ writer, article }) => {
  return (
    <div className="bg-gray-100 text-dark dark:text-light dark:bg-[#0F2F2E] rounded-2xl mx-auto right-0 mt-2">
      <div className="rounded shadow-lg">
        <div className="flex-col justify-center text-center p-6">
          <div>
            <p className="pt-2 text-2xl font-semibold">Autor</p>
            <Image
              src={writer.attributes.avatar.data.attributes.url}
              width={240}
              height={240}
              alt="Texto alternativo de la imagen"
              className="rounded-full mx-auto"
            ></Image>
            <p className="pt-2 text-lg font-semibold">
              {writer.attributes.name}
            </p>
            <p className="text-sm">
              {writer.attributes.tech_skill.data.attributes.name}
            </p>
          </div>
          <div>
            <p className="pt-2 text-2xl font-semibold my-8">
              Articulos recomendados
            </p>
            {article[0].attributes.recommendedArticles.data.map((art) => (
              <AnArticle
                key={art.id}
                title={art.attributes.title}
                date="January 27, 2023"
                link={`/articles/${art.attributes.url}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
