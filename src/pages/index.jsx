import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
      <title>Awesome Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-black w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
           <div className=" flex-col items-center justify-center w-full">
              <AnimatedText
                text="HEY, I'M DAVID"
                className="!text-6xl !text-center xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
                className="!font-light !text-3xl sm:!text-xl w-full text-center my-8 dark:!text-light"
              />
              <motion.div
                initial={{ y: 200 }}
                whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
                viewport={{ once: true }}
              >
                <Avatar className="!w-48 !h-48 mx-auto"/>
              </motion.div>
              <motion.div 
                initial={{ y: 200 }}
                whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
                viewport={{ once: true }}
                className='mx-auto my-16 text-center'
              >
                <Link href="mailto:david.pino1@outlook.com" target={"_blank"}>
                  <Button text="Contact me"></Button>
                </Link>
              </motion.div>
           </div>
        </Layout>

      </main>
    </>
  )
}
