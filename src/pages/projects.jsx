import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CarekoreImage from "../../public/images/projects/Carekore.jpg";
import PrixtipsImage from "../../public/images/projects/Prixtips.jpg";
import Veo365Image from "../../public/images/projects/Veo365.jpg";
import Fit2FlyImage from "../../public/images/projects/Travelkore.jpg";
import DynamicFormImage from "../../public/images/projects/DynamicForm.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primary xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-black
            sm:px-4 sm:text-base
            "
          >
            Visitar
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, linkApp, linkLanding, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-primary md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={linkLanding || linkApp}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primary lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={linkLanding || linkApp}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={linkApp}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          {linkLanding && (
            <Link
              href={linkLanding}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Landing Page
            </Link>
          )}
          {/* <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Websites I've Contributed to"
            className="!text-6xl !text-center xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-12 lg:gap-x-6 md:gap-y-16 sm:gap-x-0 my-16">
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Carekore"
                img={CarekoreImage}
                linkApp="https://carekore.app/login/"
                linkLanding="https://carekore.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Prixtips"
                img={PrixtipsImage}
                linkApp="https://prix.tips/"
                linkLanding=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Veo365"
                img={Veo365Image}
                linkApp="https://sodimac.vim365.com/account/login"
                linkLanding="https://veo365.com/home"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Travelkore"
                img={Fit2FlyImage}
                linkApp="https://travelkore.carekore.app/booking_steps/booking_lab"
                linkLanding=""
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
          </div>
          <AnimatedText
            text="My Personal Projects"
            className="!text-6xl !text-center xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-12 lg:gap-x-6 md:gap-y-16 sm:gap-x-0 my-16">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project!"
                title="d-dynamic-form-builder-react"
                summary="D-Dynamic Form Builder React is a React package that makes it easy to create dynamic forms. It handles all the logic involved in creating and managing dynamic forms, so you can focus on your application's logic."
                img={DynamicFormImage}
                link="https://www.npmjs.com/package/d-dynamic-form-builder-react"
                github="https://github.com/David171901/dynamic-form-builder-react"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
