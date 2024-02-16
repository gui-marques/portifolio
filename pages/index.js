import Image from "next/image";
import Head from "next/head";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <Head>
        <title>Débora Cristina - Social Media</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="bg-primary/60 h-full">
        <div
          className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-black/10"
        >
          <div
            className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
          >
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              O sucesso da sua <br />empresa <br />{" "}
              <span className="text-accent">Em boas mãos</span>
            </motion.h1>
            {/* Aqui começa o texto de apresentação */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm  xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </motion.p>
            {/* botões */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <div
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
            xl:bg-norepeat w-full h-full absolute  translate-z-0"
          ></div>
          <ParticlesContainer />

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
            lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Home;
