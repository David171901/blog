import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import home from "../../public/images/profile/home.png";

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
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-1/2 md:w-full'>
                <Image src={home} alt="CodeBucks" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      50vw"
                 />
               </div>
               <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Bienvenido a mi blog de programación." className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Aquí encontrarás consejos útiles, tutoriales detallados y proyectos interesantes que te ayudarán a mejorar tus habilidades de programación.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/articles" 
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-black
                  border-2 border-solid border-transparent hover:border-dark
                  transition-all duration-200 ease-linear
                  dark:bg-light dark:text-black hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  >Leer
                  
                  </Link>
                  {/* <Link href="mailto:abcd@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-black underline dark:text-light md:text-base"
                  >Contact</Link> */}
                </div>
               </div>
           </div>
        </Layout>

      </main>
    </>
  )
}
