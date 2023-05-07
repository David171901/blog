import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import MarkdownIt from "markdown-it";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { EyeOpenIcon, ShareIcon } from "@/components/Icons";
import ArticleSidebar from "@/components/ArticleSidebar";

const Article = ({ article, writer }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const md = new MarkdownIt({
    html: true,
  });
  const htmlContent = md.render(article[0].attributes.content);

  const sharePage = () => {
    const shareUrl = window.location.href;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => console.log("Enlace copiado al portapapeles"))
      .catch((error) =>
        console.error("Error al copiar el enlace al portapapeles", error)
      );
  };

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
        <Layout className="pt-16 relative">
          <motion.div className="progress-bar" style={{ scaleX }} />
          <section>
            <AnimatedText
              text={article[0].attributes.title}
              className="!text-6xl !text-center xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
            />
            <div className="flex md:flex-col justify-center md:items-center text-lg space-x-16 md:space-x-0 my-8">
              <div
                className="flex items-center cursor-pointer"
                onClick={sharePage}
              >
                <ShareIcon />
                <span className="ml-2 ">Compartir</span>
              </div>
              <div>
                <span>{article[0].attributes.time} minutos de lectura</span>
              </div>
              <div className="flex items-center">
                <EyeOpenIcon />
                <span className="ml-2 ">1713 views</span>
              </div>
            </div>
          </section>
          <section className="my-16">
            <Image
              src={article[0].attributes.images.data[0].attributes.url}
              width={1280}
              height={720}
              alt="Texto alternativo de la imagen"
              className="w-full flex items-center justify-center rounded-3xl border border-solid border-transparent border-dark dark:border-light dark:bg-dark"
            />
          </section>
          <section className="grid grid-cols-3 gap-16">
            <div className="col-span-2 md:col-span-3">
              <section
                className="text-2xl"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></section>
            </div>
            <div className="md:col-span-3">
              <ArticleSidebar
                writer={writer}
                article={article}
              />
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const res1 = await fetch(
    `http://localhost:1337/api/articles?filters[url][$eq]=${url}&populate=*`
  );
  const { data: article } = await res1.json();
  const res2 = await fetch(
    `http://localhost:1337/api/writers/${article[0].attributes.writer.data.id}?populate=*`
  );
  const { data: writer } = await res2.json();
  return {
    props: {
      article,
      writer,
    },
  };
}

export default Article;
