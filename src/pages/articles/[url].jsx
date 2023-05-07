import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import MarkdownIt from "markdown-it";
import { motion, useScroll, useSpring } from "framer-motion"

const Article = ({article}) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    const md = new MarkdownIt({
        html: true
    });
    const htmlContent = md.render(article[0].attributes.content);

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
        <motion.div className="progress-bar"  style={{ scaleX }} /> 
        <AnimatedText
          text={article[0].attributes.title}
          className="!text-6xl !text-center xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
        />
            <section className="text-2xl" dangerouslySetInnerHTML={{__html: htmlContent}}></section>
      </Layout>
    </main>
  </>
  )
}

export async function getServerSideProps ({query: {url}}) {
    const response = await fetch(`http://localhost:1337/api/articles?filters[url][$eq]=${url}&populate=*`);
    const { data: article } = await response.json();
    return {
      props: {
        article,
      }
    }
}

export default Article