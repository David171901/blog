import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/hi.png";
import FrontEndIcon from "../../public/images/svgs/FrontEndIcon.svg";
import BackEndIcon from "../../public/images/svgs/BackEndIcon.svg";
import DatabaseIcon from "../../public/images/svgs/DatabaseIcon.svg";
import Experience from "@/components/Experience";

const SkillCard = ({ img, title, skills, progress }) => {
  return (
    <li className="md:mb-0 mb-6 flex flex-col items-center justify-center">
      <div className="relative col-span-1 w-full h-[615px] md:h-auto p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-primary rounded-br-3xl" />
        <div className="rounded  p-4  flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-5 p-2 bg-light border border-black dark:bor dark:bg-light"><Image src={img} width={16} height={16} className="w-full h-full text-white fill-white"></Image></div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="capitalize font-bold my-2 mt-4 text-xl xs:text-lg">
              {title}
            </h2>
            <div className="flex flex-col items-center justify-center">
              {skills.map((skill) => (
                <p key={skill} className="mb-2">
                  {skill}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center my-6">
              <p className="font-semibold mb-2">In Progress</p>
              <p className="italic font-extralight">{progress}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

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
      <main className="flex items-center text-black w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          {/* My, Myself & I */}
          <section className="grid w-full grid-cols-3 md:grid-cols-1 gap-12 lg:gap-8 sm:gap-0">
            <div className="col-span-2 md:col-span-1 md:order-2 flex flex-col justify-center pr-40 lg:pr-28 md:p md:pr-0">
              <AnimatedText
                text="My, Myself & I"
                className="text-left !text-6xl xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="my-8">
                <p className="font-medium">
                  Hello there! I am a frontend/fullstack developer with two years of professional experience building web applications. As a self-taught developer, I am passionate about technology and staying up-to-date with the latest web development trends. With a degree in engineering, I have worked on challenging projects that have allowed me to enhance my skills in handling multiple technologies. I am always on the lookout for new challenges that can help me improve my skills and knowledge.
                </p>

                <p className="my-4 font-medium">
                  If you are looking for a committed, passionate, and experienced web developer, feel free to contact me. I would love to be a part of your team on exciting and challenging web projects. I am ready to put my skills and experience to work for you!
                </p>
              </div>
            </div>

            <div className="col-span-1 relative h-max rounded-2xl bg-light dark:bg-dark dark:border-light md:order-1"
            >
              <Image
                src={profilePic}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl md:hidden"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </section>
          {/* SKILLS */}
          <section>
            <AnimatedText
              text="Skills"
              className="font-bold !text-4xl sm:!text-2xl w-full text-center my-16 mt-16 dark:!text-light"
            />
            <ul className="grid grid-cols-3 gap-12 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              <SkillCard
                title={"FrontEnd"}
                img={FrontEndIcon}
                skills={[
                  "HTML",
                  "CSS",
                  "TailwindCSS",
                  "Bootstrap",
                  "Responsive web design",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "jQuery",
                ]}
                progress="Angular, Jest"
              />
              <SkillCard
                title={"BackEnd"}
                img={BackEndIcon}
                skills={["Python", "Node.js", "Express"]}
                progress="Express"
              />
              <SkillCard
                title={"Others"}
                img={DatabaseIcon}
                skills={[
                  "GIT",
                  "Linux",
                  "Postgres",
                  "MongoDB",
                  "Figma",
                ]}
                progress="AWS, Docker"
              />
            </ul>
          </section>
          {/* EXPERIENCE */}
          <section>
            <Experience></Experience>
          </section>
        </Layout>
      </main>
    </>
  );
}
