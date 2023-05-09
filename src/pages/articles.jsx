import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        width={520}
        height={320}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-black first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primary sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-primary
    rounded-br-3xl
    "
      />
      <Link
        href={link}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          width={520}
          height={320}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <span class="inline-block px-2 py-1 font-bold text-white bg-blue-500 rounded">
        Primary
      </span>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primary">
        {time}
      </span>
    </li>
  );
};

const articles = ({ articles }) => {

  console.log("🚀 ~ file: articles.jsx:170 ~ articles ~ articles:", articles)

  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta
          name="description"
          content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          {/* TITULO */}
          <AnimatedText
            text="Desarrolla tus habilidades de programación: artículos, tutoriales  proyectos"
            className="!text-6xl !text-center xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
          />
          {/* ARTICULOS DESTACADOS */}
          <seccion>
            <AnimatedText
              text="Articulos Destacados"
              className="font-bold !text-4xl sm:!text-2xl w-full text-center my-16 mt-16 dark:!text-light"
            />
            <ul className="grid grid-cols-3 gap-12 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              {articles.slice(-3).map((article) => (
                <FeaturedArticle
                  key={article.id}
                  img={article.attributes.images.data[0].attributes.url}
                  title={article.attributes.title}
                  time={`${article.attributes.time} minutos de lectura`}
                  summary={article.attributes.summary}
                  link={`/articles/${article.attributes.url}`}
                />
              ))}
            </ul>
          </seccion>
          {/* TODOS LOS ARTICULOS */}
          <section>
            <AnimatedText
              text="Todos los Articulos"
              className="font-bold !text-4xl sm:!text-2xl w-full text-center my-16 mt-16 dark:!text-light"
            />
            <ul className="flex flex-col items-center relative">
              {articles.map((article) => (
                <Article
                  key={article.id}
                  title={article.attributes.title}
                  img={article.attributes.images.data[0].attributes.url}
                  date="January 27, 2023"
                  link={`/articles/${article.attributes.url}`}
                />
              ))}
            </ul>
          </section>
        </Layout>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:1337/api/articles?populate=*`);
  const { data: articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}

export default articles;
